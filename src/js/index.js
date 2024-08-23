import 'bootstrap/scss/bootstrap.scss';
import '../scss/index.scss';
import 'leaflet/dist/leaflet.css';
require.context('../img/', true);
import 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import 'bootstrap/js/dist/offcanvas';

function formatVorData(dati) {
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

	const flags = decodeFlag(dati.Flags);
	dati.Icon = flags.hasDme ? (!flags.hasNavSignal && !flags.hasLocalizer && !flags.hasGlideSlope ? dmeIcon : vorDmeIcon) : vorIcon;
	dati.Title = (flags.hasLocalizer ? 'LOC' : (flags.hasNavSignal ? 'VOR' : '') + (flags.hasDme ? 'DME' : '')) + '\n' + dati.Ident + ' ' + dati.fFrequency;
	return dati;
}

function formatNdbData(dati) {
	const ndbIcon = L.icon({
		iconUrl: 'static/img/ndb.svg',
		iconSize: [15, 15],
	});

	dati.Icon = ndbIcon;
	dati.Title = 'NDB\n' + dati.Ident + ' ' + dati.fFrequency;
	return dati;
}

function formatArptData(dati, layer) {
	const arptIcon = L.icon({
		iconUrl: 'static/img/arpt.svg',
		iconSize: [15, 15],
	});

	dati.Icon = L.divIcon({
		html: dati.Ident,
		className: 'marker-subtitle',
	})
	addMarker(dati, layer);

	dati.Icon = arptIcon;
	dati.Title = 'ARPT\n' + dati.Ident;
	return dati;
}

function formatWptData(dati, layer) {
	const wptIcon = L.icon({
		iconUrl: 'static/img/wpt.svg',
		iconSize: [10, 10],
	});

	dati.Icon = L.divIcon({
		html: dati.Ident,
		className: 'marker-subtitle',
	});
	addMarker(dati, layer);

	dati.Icon = wptIcon;
	dati.Title = 'WPT\n' + dati.Ident;
	return dati;
}

function addMarker(dati, layer, formatCallback) {
	if(typeof formatCallback === 'function')
		dati = formatCallback(dati, layer);
	new L.marker([dati.Latitude, dati.Longitude], {
		icon: dati.Icon,
		keyboard: false,
		title: dati.Title,
	}).addTo(layer);
}

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

	let requestVor = false;
	let vorOffset = 0;
	const layerVORs = L.layerGroup().on('add', () => {
		requestVor = true;
	}).on('remove', () => {
		requestVor = false;
	});

	let requestNdb = false;
	let ndbOffset = 0;
	const layerNDBs = L.layerGroup().on('add', () => {
		requestNdb = true;
	}).on('remove', () => {
		requestNdb = false;
	});

	let requestArpt = false;
	let arptOffset = 0;
	const layerARPTs = L.layerGroup().on('add', () => {
		requestArpt = true;
	}).on('remove', () => {
		requestArpt = false;
	});

	let requestWpt = false;
	let wptOffset = 0;
	const layerWPTs = L.layerGroup().on('add', () => {
		requestWpt = true;
	}).on('remove', () => {
		requestWpt = false;
	});

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
	const tracciato = L.polyline([], {
		interactive: false,
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
				})
				.catch(() => {
					document.getElementById(e.target.id+'-metar').textContent = 'Network Error';
				});
		};
		updateMetar();
		updateMetarInterval = setInterval(updateMetar, 1800000);
	});

	let wait = false;
	setInterval(() => {
		if(wait) return;
		wait = true;
		const parametri = new URLSearchParams();
		let dati = ['volo'];
		if(requestVor) {
			dati.push('vor');
			parametri.append('vorOffset', vorOffset);
		}
		if(requestNdb) {
			dati.push('ndb');
			parametri.append('ndbOffset', ndbOffset);
		}
		if(requestArpt) {
			dati.push('arpt');
			parametri.append('arptOffset', arptOffset);
		}
		if(requestWpt) {
			dati.push('wpt');
			parametri.append('wptOffset', wptOffset);
		}
		parametri.append('dati', dati);
		fetch('http://localhost/ajax/dati?'+parametri)
			.then((response) => response.json())
			.then((dati) => {
				aeroplano.setLatLng([dati.volo.LAT, dati.volo.LON]);
				tracciato.addLatLng([dati.volo.LAT, dati.volo.LON]);
				iconaAeroplano.transform += ' rotate('+dati.volo.HDG+'deg)';
				if(mapFollow == 'lock') map.panTo(aeroplano.getLatLng());
				else if(mapFollow == 'sync') map.panInside(aeroplano.getLatLng(), {padding:[100, 100],});
				speedometerWidgetInput.value = Math.round(dati.volo.IAS)+'KN', speedometerWidget.setProperty('--speed', dati.volo.IAS);
				altimeterWidgetInput.value = Math.round(dati.volo.ALT)+'FT', altimeterWidget.setProperty('--rotation-altitude', dati.volo.ALT);
				variometerWidgetInput.value = Math.round(dati.volo.VS)+'FPM', variometerWidget.setProperty('--vertical-speed', dati.volo.VS);
				compassWidgetInput.value = Math.round(dati.volo.HDG), compassWidget.setProperty('--heading', dati.volo.HDG);
				windWidgetInput.value = Math.round(dati.volo['Wind Velocity'])+'KN', windWidget.setProperty('--wind-direction', dati.volo['Wind Direction']);
				tasOutput.textContent = Math.round(dati.volo.TAS);
				gsOutput.textContent = Math.round(dati.volo.GS);
				oatOutput.textContent = Math.round(dati.volo.Temp);
				if(depOutput.textContent != dati.volo.DEP) depOutput.textContent = dati.volo.DEP, depOutput.dispatchEvent(new Event('change'));
				if(dstOutput.textContent != dati.volo.DST) dstOutput.textContent = dati.volo.DST, dstOutput.dispatchEvent(new Event('change'));
				if(typeof dati.vor !== 'undefined' && dati.vor.length > 0) {
					for(const vor of dati.vor)
						addMarker(vor, layerVORs, formatVorData);
					vorOffset += dati.vor.length;
				}
				if(typeof dati.ndb !== 'undefined' && dati.ndb.length > 0) {
					for(const ndb of dati.ndb)
						addMarker(ndb, layerNDBs, formatNdbData);
					ndbOffset += dati.ndb.length;
				}
				if(typeof dati.arpt !== 'undefined' && dati.arpt.length > 0) {
					for(const arpt of dati.arpt)
						addMarker(arpt, layerARPTs, formatArptData);
					arptOffset += dati.arpt.length;
				}
				if(typeof dati.wpt !== 'undefined' && dati.wpt.length > 0) {
					for(const wpt of dati.wpt)
						addMarker(wpt, layerWPTs, formatWptData);
					wptOffset += dati.wpt.length;
				}
				wait = false;
			});
	}, 1000);
});