import 'bootstrap/scss/bootstrap.scss';
import '../scss/index.scss';
import 'leaflet/dist/leaflet.css';
require.context('../img/', true);
import 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import 'bootstrap/js/dist/offcanvas';

document.addEventListener('DOMContentLoaded', () => {
	const layerPolitico = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
		});
	const layerVfr = L.layerGroup()
		.addLayer(
			L.tileLayer('https://nwy-tiles-api.prod.newaydata.com/tiles/{z}/{x}/{y}.jpg?path=latest/base/latest', {
				attribution: ["(c) open flightmaps association", "(c) openstreetmap contributors", "NASA elevation data"].join(', '),
				crossOrigin: '.jpg',
				minNativeZoom: 7,
				maxNativeZoom: 12,
			})
		)
		.addLayer(
			L.tileLayer('https://nwy-tiles-api.prod.newaydata.com/tiles/{z}/{x}/{y}.png?path=latest/aero/latest', {
				attribution: ["(c) open flightmaps association", "(c) openstreetmap contributors", "NASA elevation data"].join(', '),
				crossOrigin: '.png',
				minNativeZoom: 7,
				maxNativeZoom: 12,
			})
		);
	const layerWeather = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid='+config.OWM_API_KEY);
	const layerVORs = L.layerGroup().on('add', () => {
		fetch('http://localhost/ajax/dati-vor')
			.then((response) => response.json())
			.then((response) => {
				function decodeFlag(flags) {
					return {
						'hasNavSignal': (Boolean)(flags & 1),
						'hasLocalizer': (Boolean)(flags & 2),
						'hasGlideSlope': (Boolean)(flags & 4),
						'hasDme': (Boolean)(flags & 8),
					};
				}
				const vorIcon = L.icon({
					iconUrl: 'static/img/vor.svg',
					iconSize: [15, 15],
				});
				const dmeIcon = L.icon({
					iconUrl: 'static/img/dme.svg',
					iconSize: [15, 15],
				});
				const vorDmeIcon = L.icon({
					iconUrl: 'static/img/vordme.svg',
					iconSize: [15, 15],
				});
				for (const vor of response) {
					const flags = decodeFlag(vor.Flags);
					L.marker([vor.Latitude, vor.Longitude], {
						icon: flags.hasDme ? (!flags.hasNavSignal && !flags.hasLocalizer && !flags.hasGlideSlope ? dmeIcon : vorDmeIcon) : vorIcon,
						keyboard: false,
						title: (flags.hasLocalizer ? 'LOC' : (flags.hasNavSignal ? 'VOR' : '') + (flags.hasDme ? 'DME' : '')) + '\n' + vor.Ident + ' ' + vor.fFrequency,
					}).addTo(layerVORs);
				}
			});
	}).on('remove', () => {
		layerVORs.clearLayers();
	});
	const layerNDBs = L.layerGroup().on('add', () => {
		fetch('http://localhost/ajax/dati-ndb')
			.then((response) => response.json())
			.then((response) => {
				const ndbIcon = L.icon({
					iconUrl: 'static/img/ndb.svg',
					iconSize: [15, 15],
				});
				for (const ndb of response) {
					L.marker([ndb.Latitude, ndb.Longitude], {
						icon: ndbIcon,
						keyboard: false,
						title: 'NDB\n' + ndb.Ident + ' ' + ndb.fFrequency,
					}).addTo(layerNDBs);
				}
			});
	}).on('remove', () => {
		layerNDBs.clearLayers();
	});
	const layerARPTs = L.layerGroup().on('add', () => {
		fetch('http://localhost/ajax/dati-arpt')
			.then((response) => response.json())
			.then((response) => {
				const arptIcon = L.icon({
					iconUrl: 'static/img/arpt.svg',
					iconSize: [15, 15],
				});
				for (const arpt of response) {
					L.marker([arpt.Latitude, arpt.Longitude], {
						icon: arptIcon,
						keyboard: false,
						title: 'ARPT\n' + arpt.Ident,
					}).addTo(layerARPTs);
					L.marker([arpt.Latitude, arpt.Longitude], {
						icon: L.divIcon({
							html: arpt.Ident,
							className: 'marker-subtitle',
						}),
					}).addTo(layerARPTs);
				}
			});
	}).on('remove', () => {
		layerARPTs.clearLayers();
	});
	const layerWPTs = L.layerGroup().on('add', () => {
		fetch('http://localhost/ajax/dati-wpt')
			.then((response) => response.json())
			.then((response) => {
				const wptIcon = L.icon({
					iconUrl: 'static/img/wpt.svg',
					iconSize: [10, 10],
				});
				for (const wpt of response) {
					L.marker([wpt.Latitude, wpt.Longitude], {
						icon: wptIcon,
						keyboard: false,
						title: 'WPT\n' + wpt.Ident,
					}).addTo(layerWPTs);
					L.marker([wpt.Latitude, wpt.Longitude], {
						icon: L.divIcon({
							html: wpt.Ident,
							className: 'marker-subtitle',
						}),
					}).addTo(layerWPTs);
				}
			});
	}).on('remove', () => {
		layerWPTs.clearLayers();
	});
	// TODO Sistema per aggiornare periodicamente i marker dei vari layer man mano che entrano in range
	const map = L.map(document.querySelector('.map'), {preferCanvas:true,center:[45.598966, 8.950105],zoom:9,layers:[layerPolitico],}).addControl(
		L.control.layers({'Mappa politica': layerPolitico, 'Mappa VFR': layerVfr}, {'Meteo': layerWeather, 'VOR': layerVORs, 'NDB': layerNDBs, 'ARPT': layerARPTs, 'WPT': layerWPTs})
	);
	const aeroplano = L.marker([0, 0], {
		icon: L.icon({
			iconUrl: 'static/img/airplane-icon.svg',
			iconSize: [25, 25],
			className: 'icona-aeroplano',
		}),
		keyboard: false,
	}).addTo(map);

	let mapFollow = 'sync'
	for (const radio of document.querySelectorAll('input[name=mapFollow]')) {
		radio.addEventListener('change', () => {
			mapFollow = document.querySelector('input[name=mapFollow]:checked').value;
		});
	}

	const iconaAeroplano = document.querySelector('img.icona-aeroplano').style;
	const speedometerWidget = document.querySelector('.speedometer.scale').style;
	const speedometerWidgetInput = document.querySelector('.speedometer.scale input');
	const altimeterWidget = document.querySelector('.altimeter.scale').style;
	const altimeterWidgetInput = document.querySelector('.altimeter.scale input');
	const variometerWidget = document.querySelector('.variometer.scale').style;
	const variometerWidgetInput = document.querySelector('.variometer.scale input');
	const compassWidget = document.querySelector('.compass.scale').style;
	const compassWidgetInput = document.querySelector('.compass.scale input');
	const windWidget = document.querySelector('.wind.scale').style;
	const windWidgetInput = document.querySelector('.wind.scale input');
	const tasOutput = document.getElementById('tas-output');
	const gsOutput = document.getElementById('gs-output');
	const oatOutput = document.getElementById('oat-output');
	const depOutput = document.getElementById('arpt-dep');
	const dstOutput = document.getElementById('arpt-dst');
	for (const output of [depOutput, dstOutput]) output.addEventListener('change', (e) => {
		let updateMetarInterval;
		clearInterval(updateMetarInterval);
		function updateMetar() {
			fetch('https://metar.vatsim.net/'+e.target.textContent+'?format=json')
				.then((response) => response.json())
				.then((response) => {
					if(response.length == 0) return;
					document.getElementById(e.target.id+'-metar').textContent = response[0].metar;
				});
		};
		updateMetar();
		updateMetarInterval = setInterval(updateMetar, 1800000);
	});

	let wait = false;
	setInterval(() => {
		if(wait) return;
		wait = true;
		fetch('http://localhost/ajax/dati-volo')
			.then((response) => response.json())
			.then((dati) => {
				aeroplano.setLatLng([dati.LAT, dati.LON]);
				iconaAeroplano.transform += ' rotate('+dati.HDG+'deg)';
				if(mapFollow == 'lock') map.panTo(aeroplano.getLatLng());
				else if(mapFollow == 'sync') map.panInside(aeroplano.getLatLng(), {padding:[100, 100],});
				speedometerWidgetInput.value = Math.round(dati.IAS)+'KN', speedometerWidget.setProperty('--speed', dati.IAS);
				altimeterWidgetInput.value = Math.round(dati.ALT)+'FT', altimeterWidget.setProperty('--rotation-altitude', dati.ALT);
				variometerWidgetInput.value = Math.round(dati.VS)+'FPM', variometerWidget.setProperty('--vertical-speed', dati.VS);
				compassWidgetInput.value = Math.round(dati.HDG), compassWidget.setProperty('--heading', dati.HDG);
				windWidgetInput.value = Math.round(dati['Wind Velocity'])+'KN', windWidget.setProperty('--wind-direction', dati['Wind Direction']);
				tasOutput.textContent = Math.round(dati.TAS);
				gsOutput.textContent = Math.round(dati.GS);
				oatOutput.textContent = Math.round(dati.Temp);
				if(depOutput.textContent != dati.DEP) depOutput.textContent = dati.DEP, depOutput.dispatchEvent(new Event('change'));
				if(dstOutput.textContent != dati.DST) dstOutput.textContent = dati.DST, dstOutput.dispatchEvent(new Event('change'));
				wait = false;
			});
	}, 500);
});