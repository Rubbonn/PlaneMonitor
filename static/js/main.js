/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://planemonitor/./src/scss/index.scss?");

/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*$":
/*!********************************!*\
  !*** ./src/img/ sync ^\.\/.*$ ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./airplane-icon.svg\": \"./src/img/airplane-icon.svg\",\n\t\"./airspeed_needle.svg\": \"./src/img/airspeed_needle.svg\",\n\t\"./altimeter_needle_hundreds.svg\": \"./src/img/altimeter_needle_hundreds.svg\",\n\t\"./altimeter_needle_tenthousand.svg\": \"./src/img/altimeter_needle_tenthousand.svg\",\n\t\"./altimeter_needle_thousands.svg\": \"./src/img/altimeter_needle_thousands.svg\",\n\t\"./arpt.svg\": \"./src/img/arpt.svg\",\n\t\"./compass_figure.svg\": \"./src/img/compass_figure.svg\",\n\t\"./dme.svg\": \"./src/img/dme.svg\",\n\t\"./logo.jpeg\": \"./src/img/logo.jpeg\",\n\t\"./ndb.svg\": \"./src/img/ndb.svg\",\n\t\"./vario_needle.svg\": \"./src/img/vario_needle.svg\",\n\t\"./vor.svg\": \"./src/img/vor.svg\",\n\t\"./vordme.svg\": \"./src/img/vordme.svg\",\n\t\"./wpt.svg\": \"./src/img/wpt.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://planemonitor/./src/img/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ \"./node_modules/leaflet/dist/images/marker-shadow.png\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_toml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.toml */ \"./config.toml\");\n/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/dist/offcanvas */ \"./node_modules/bootstrap/js/dist/offcanvas.js\");\n/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n__webpack_require__(\"./src/img sync recursive ^\\\\.\\\\/.*$\");\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tconst layerPolitico = leaflet__WEBPACK_IMPORTED_MODULE_3___default().tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n\t\t\tmaxZoom: 19,\r\n\t\t\tattribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a>'\r\n\t\t});\r\n\tconst layerVfr = leaflet__WEBPACK_IMPORTED_MODULE_3___default().layerGroup()\r\n\t\t.addLayer(\r\n\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().tileLayer('https://nwy-tiles-api.prod.newaydata.com/tiles/{z}/{x}/{y}.jpg?path=latest/base/latest', {\r\n\t\t\t\tattribution: [\"(c) open flightmaps association\", \"(c) openstreetmap contributors\", \"NASA elevation data\"].join(', '),\r\n\t\t\t\tcrossOrigin: '.jpg',\r\n\t\t\t\tminNativeZoom: 7,\r\n\t\t\t\tmaxNativeZoom: 12,\r\n\t\t\t})\r\n\t\t)\r\n\t\t.addLayer(\r\n\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().tileLayer('https://nwy-tiles-api.prod.newaydata.com/tiles/{z}/{x}/{y}.png?path=latest/aero/latest', {\r\n\t\t\t\tattribution: [\"(c) open flightmaps association\", \"(c) openstreetmap contributors\", \"NASA elevation data\"].join(', '),\r\n\t\t\t\tcrossOrigin: '.png',\r\n\t\t\t\tminNativeZoom: 7,\r\n\t\t\t\tmaxNativeZoom: 12,\r\n\t\t\t})\r\n\t\t);\r\n\tconst layerWeather = leaflet__WEBPACK_IMPORTED_MODULE_3___default().tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid='+_config_toml__WEBPACK_IMPORTED_MODULE_4__.OWM_API_KEY);\r\n\tconst layerVORs = leaflet__WEBPACK_IMPORTED_MODULE_3___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-vor')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tfunction decodeFlag(flags) {\r\n\t\t\t\t\treturn {\r\n\t\t\t\t\t\t'hasNavSignal': (Boolean)(flags & 1),\r\n\t\t\t\t\t\t'hasLocalizer': (Boolean)(flags & 2),\r\n\t\t\t\t\t\t'hasGlideSlope': (Boolean)(flags & 4),\r\n\t\t\t\t\t\t'hasDme': (Boolean)(flags & 8),\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\t\t\t\tconst vorIcon = leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/vor.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tconst dmeIcon = leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/dme.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tconst vorDmeIcon = leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/vordme.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const vor of response) {\r\n\t\t\t\t\tconst flags = decodeFlag(vor.Flags);\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([vor.Latitude, vor.Longitude], {\r\n\t\t\t\t\t\ticon: flags.hasDme ? (!flags.hasNavSignal && !flags.hasLocalizer && !flags.hasGlideSlope ? dmeIcon : vorDmeIcon) : vorIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: (flags.hasLocalizer ? 'LOC' : (flags.hasNavSignal ? 'VOR' : '') + (flags.hasDme ? 'DME' : '')) + '\\n' + vor.Ident + ' ' + vor.fFrequency,\r\n\t\t\t\t\t}).addTo(layerVORs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerVORs.clearLayers();\r\n\t});\r\n\tconst layerNDBs = leaflet__WEBPACK_IMPORTED_MODULE_3___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-ndb')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tconst ndbIcon = leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/ndb.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const ndb of response) {\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([ndb.Latitude, ndb.Longitude], {\r\n\t\t\t\t\t\ticon: ndbIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: 'NDB\\n' + ndb.Ident + ' ' + ndb.fFrequency,\r\n\t\t\t\t\t}).addTo(layerNDBs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerNDBs.clearLayers();\r\n\t});\r\n\tconst layerARPTs = leaflet__WEBPACK_IMPORTED_MODULE_3___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-arpt')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tconst arptIcon = leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/arpt.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const arpt of response) {\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([arpt.Latitude, arpt.Longitude], {\r\n\t\t\t\t\t\ticon: arptIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: 'ARPT\\n' + arpt.Ident,\r\n\t\t\t\t\t}).addTo(layerARPTs);\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([arpt.Latitude, arpt.Longitude], {\r\n\t\t\t\t\t\ticon: leaflet__WEBPACK_IMPORTED_MODULE_3___default().divIcon({\r\n\t\t\t\t\t\t\thtml: arpt.Ident,\r\n\t\t\t\t\t\t\tclassName: 'marker-subtitle',\r\n\t\t\t\t\t\t}),\r\n\t\t\t\t\t}).addTo(layerARPTs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerARPTs.clearLayers();\r\n\t});\r\n\tconst layerWPTs = leaflet__WEBPACK_IMPORTED_MODULE_3___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-wpt')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tconst wptIcon = leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/wpt.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const wpt of response) {\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([wpt.Latitude, wpt.Longitude], {\r\n\t\t\t\t\t\ticon: wptIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: 'WPT\\n' + wpt.Ident,\r\n\t\t\t\t\t}).addTo(layerWPTs);\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([wpt.Latitude, wpt.Longitude], {\r\n\t\t\t\t\t\ticon: leaflet__WEBPACK_IMPORTED_MODULE_3___default().divIcon({\r\n\t\t\t\t\t\t\thtml: wpt.Ident,\r\n\t\t\t\t\t\t\tclassName: 'marker-subtitle',\r\n\t\t\t\t\t\t}),\r\n\t\t\t\t\t}).addTo(layerWPTs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerWPTs.clearLayers();\r\n\t});\r\n\tconst map = leaflet__WEBPACK_IMPORTED_MODULE_3___default().map(document.querySelector('.map')).setView([45.598966, 8.950105], 9).addLayer(layerPolitico).addControl(\r\n\t\tleaflet__WEBPACK_IMPORTED_MODULE_3___default().control.layers({'Mappa politica': layerPolitico, 'Mappa VFR': layerVfr}, {'Meteo': layerWeather, 'VOR': layerVORs, 'NDB': layerNDBs, 'ARPT': layerARPTs, 'WPT': layerWPTs})\r\n\t);\r\n\tconst aeroplano = leaflet__WEBPACK_IMPORTED_MODULE_3___default().marker([0, 0], {\r\n\t\ticon: leaflet__WEBPACK_IMPORTED_MODULE_3___default().icon({\r\n\t\t\ticonUrl: 'static/img/airplane-icon.svg',\r\n\t\t\ticonSize: [25, 25],\r\n\t\t\tclassName: 'icona-aeroplano',\r\n\t\t}),\r\n\t\tkeyboard: false,\r\n\t}).addTo(map);\r\n\r\n\tlet mapFollow = 'free'\r\n\tfor (const radio of document.querySelectorAll('input[name=mapFollow]')) {\r\n\t\tradio.addEventListener('change', () => {\r\n\t\t\tmapFollow = document.querySelector('input[name=mapFollow]:checked').value;\r\n\t\t});\r\n\t}\r\n\r\n\tconst iconaAeroplano = document.querySelector('img.icona-aeroplano').style;\r\n\tconst speedometer = document.querySelector('.speedometer.scale').style;\r\n\tconst speedometerInput = document.querySelector('.speedometer.scale input');\r\n\tconst altimeter = document.querySelector('.altimeter.scale').style;\r\n\tconst altimeterInput = document.querySelector('.altimeter.scale input');\r\n\tconst variometer = document.querySelector('.variometer.scale').style;\r\n\tconst variometerInput = document.querySelector('.variometer.scale input');\r\n\tconst compass = document.querySelector('.compass.scale').style;\r\n\tconst compassInput = document.querySelector('.compass.scale input');\r\n\r\n\tlet wait = false;\r\n\tsetInterval(() => {\r\n\t\tif(wait) return;\r\n\t\twait = true;\r\n\t\tfetch('http://localhost/ajax/dati-volo')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((dati) => {\r\n\t\t\t\taeroplano.setLatLng([dati.LAT, dati.LON]);\r\n\t\t\t\ticonaAeroplano.transform += ' rotate('+dati.HDG+'deg)';\r\n\t\t\t\tif(mapFollow == 'lock') map.panTo(aeroplano.getLatLng());\r\n\t\t\t\telse if(mapFollow == 'sync') map.panInside(aeroplano.getLatLng());\r\n\t\t\t\tspeedometerInput.value = Math.trunc(dati.IAS)+'KN', speedometer.setProperty('--speed', dati.IAS);\r\n\t\t\t\taltimeterInput.value = Math.trunc(dati.ALT)+'FT', altimeter.setProperty('--rotation-altitude', dati.ALT);\r\n\t\t\t\tvariometerInput.value = Math.trunc(dati.VS)+'FPM', variometer.setProperty('--vertical-speed', dati.VS);\r\n\t\t\t\tcompassInput.value = Math.trunc(dati.HDG), compass.setProperty('--heading', dati.HDG);\r\n\t\t\t\twait = false;\r\n\t\t\t});\r\n\t}, 1000);\r\n});\n\n//# sourceURL=webpack://planemonitor/./src/js/index.js?");

/***/ }),

/***/ "./src/img/airplane-icon.svg":
/*!***********************************!*\
  !*** ./src/img/airplane-icon.svg ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/airplane-icon.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/airplane-icon.svg?");

/***/ }),

/***/ "./src/img/airspeed_needle.svg":
/*!*************************************!*\
  !*** ./src/img/airspeed_needle.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/airspeed_needle.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/airspeed_needle.svg?");

/***/ }),

/***/ "./src/img/altimeter_needle_hundreds.svg":
/*!***********************************************!*\
  !*** ./src/img/altimeter_needle_hundreds.svg ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/altimeter_needle_hundreds.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/altimeter_needle_hundreds.svg?");

/***/ }),

/***/ "./src/img/altimeter_needle_tenthousand.svg":
/*!**************************************************!*\
  !*** ./src/img/altimeter_needle_tenthousand.svg ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/altimeter_needle_tenthousand.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/altimeter_needle_tenthousand.svg?");

/***/ }),

/***/ "./src/img/altimeter_needle_thousands.svg":
/*!************************************************!*\
  !*** ./src/img/altimeter_needle_thousands.svg ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/altimeter_needle_thousands.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/altimeter_needle_thousands.svg?");

/***/ }),

/***/ "./src/img/arpt.svg":
/*!**************************!*\
  !*** ./src/img/arpt.svg ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/arpt.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/arpt.svg?");

/***/ }),

/***/ "./src/img/compass_figure.svg":
/*!************************************!*\
  !*** ./src/img/compass_figure.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/compass_figure.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/compass_figure.svg?");

/***/ }),

/***/ "./src/img/dme.svg":
/*!*************************!*\
  !*** ./src/img/dme.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/dme.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/dme.svg?");

/***/ }),

/***/ "./src/img/logo.jpeg":
/*!***************************!*\
  !*** ./src/img/logo.jpeg ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/logo.jpeg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/logo.jpeg?");

/***/ }),

/***/ "./src/img/ndb.svg":
/*!*************************!*\
  !*** ./src/img/ndb.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/ndb.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/ndb.svg?");

/***/ }),

/***/ "./src/img/vario_needle.svg":
/*!**********************************!*\
  !*** ./src/img/vario_needle.svg ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/vario_needle.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/vario_needle.svg?");

/***/ }),

/***/ "./src/img/vor.svg":
/*!*************************!*\
  !*** ./src/img/vor.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/vor.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/vor.svg?");

/***/ }),

/***/ "./src/img/vordme.svg":
/*!****************************!*\
  !*** ./src/img/vordme.svg ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/vordme.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/vordme.svg?");

/***/ }),

/***/ "./src/img/wpt.svg":
/*!*************************!*\
  !*** ./src/img/wpt.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/wpt.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/wpt.svg?");

/***/ }),

/***/ "./config.toml":
/*!*********************!*\
  !*** ./config.toml ***!
  \*********************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"OWM_API_KEY\":\"f94db772f3615450383abecbb9be39f9\"}');\n\n//# sourceURL=webpack://planemonitor/./config.toml?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplanemonitor"] = self["webpackChunkplanemonitor"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-bootstrap","vendor-leaflet"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;