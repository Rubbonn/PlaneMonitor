import '../scss/index.scss';
import 'leaflet/dist/leaflet.css';
import '../img/logo.jpeg';
import '../img/airspeed_needle.svg';
import '../img/altimeter_needle_tenthousand.svg';
import '../img/altimeter_needle_thousands.svg';
import '../img/altimeter_needle_hundreds.svg';
import '../img/vario_needle.svg';
import '../img/compass_figure.svg';
import '../img/airplane-icon.svg';
import 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import config from '../../config.toml';

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
		// TODO Implementare riempimento layer
	});
	const layerNDBs = L.layerGroup().on('add', () => {
		// TODO Implementare riempimento layer
	});
	const layerARPTs = L.layerGroup().on('add', () => {
		// TODO Implementare riempimento layer
	});
	const layerWPTs = L.layerGroup().on('add', () => {
		// TODO Implementare riempimento layer
	});
	const map = L.map(document.querySelector('.map')).setView([45.598966, 8.950105], 9).addLayer(layerPolitico).addControl(
		L.control.layers({'Mappa politica': layerPolitico, 'Mappa VFR': layerVfr}, {'Meteo': layerWeather, 'VOR': layerVORs, 'NDB': layerNDBs, 'ARPT': layerARPTs, 'WPT': layerWPTs})
	);
	const aeroplano = L.marker([0, 0], {
		icon: L.icon({
			iconUrl: 'static/img/airplane-icon.svg',
			iconSize: [30, 30],
			className: 'icona-aeroplano',
		}),
		keyboard: false,
	}).addTo(map);

	const iconaAeroplano = document.querySelector('img.icona-aeroplano').style;
	const speedometer = document.querySelector('.speedometer.scale').style;
	const speedometerInput = document.querySelector('.speedometer.scale input');
	const altimeter = document.querySelector('.altimeter.scale').style;
	const altimeterInput = document.querySelector('.altimeter.scale input');
	const variometer = document.querySelector('.variometer.scale').style;
	const variometerInput = document.querySelector('.variometer.scale input');
	const compass = document.querySelector('.compass.scale').style;
	const compassInput = document.querySelector('.compass.scale input');

	let wait = false;
	setInterval(() => {
		if(wait) return;
		wait = true;
		fetch('http://localhost/ajax/dati-volo')
			.then((response) => response.json())
			.then((dati) => {
				aeroplano.setLatLng([dati.LAT, dati.LON]);
				iconaAeroplano.transform += ' rotate('+dati.HDG+'deg)';
				map.panTo(aeroplano.getLatLng());
				speedometerInput.value = Math.trunc(dati.IAS)+'KN', speedometer.setProperty('--speed', dati.IAS);
				altimeterInput.value = Math.trunc(dati.ALT)+'FT', altimeter.setProperty('--rotation-altitude', dati.ALT);
				variometerInput.value = Math.trunc(dati.VS)+'FPM', variometer.setProperty('--vertical-speed', dati.VS);
				compassInput.value = Math.trunc(dati.HDG), compass.setProperty('--heading', dati.HDG);
				wait = false;
			});
	}, 500);
});