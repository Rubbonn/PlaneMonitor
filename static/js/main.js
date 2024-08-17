/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkplanemonitor"] = self["webpackChunkplanemonitor"] || []).push([["main"],{

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

eval("var map = {\n\t\"./airplane-icon.svg\": \"./src/img/airplane-icon.svg\",\n\t\"./airspeed_needle.svg\": \"./src/img/airspeed_needle.svg\",\n\t\"./altimeter_needle_hundreds.svg\": \"./src/img/altimeter_needle_hundreds.svg\",\n\t\"./altimeter_needle_tenthousand.svg\": \"./src/img/altimeter_needle_tenthousand.svg\",\n\t\"./altimeter_needle_thousands.svg\": \"./src/img/altimeter_needle_thousands.svg\",\n\t\"./arpt.svg\": \"./src/img/arpt.svg\",\n\t\"./arrow-down.svg\": \"./src/img/arrow-down.svg\",\n\t\"./compass_figure.svg\": \"./src/img/compass_figure.svg\",\n\t\"./dme.svg\": \"./src/img/dme.svg\",\n\t\"./logo.jpeg\": \"./src/img/logo.jpeg\",\n\t\"./ndb.svg\": \"./src/img/ndb.svg\",\n\t\"./vario_needle.svg\": \"./src/img/vario_needle.svg\",\n\t\"./vor.svg\": \"./src/img/vor.svg\",\n\t\"./vordme.svg\": \"./src/img/vordme.svg\",\n\t\"./wind_needle.svg\": \"./src/img/wind_needle.svg\",\n\t\"./wpt.svg\": \"./src/img/wpt.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://planemonitor/./src/img/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ \"./node_modules/leaflet/dist/images/marker-shadow.png\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/dist/offcanvas */ \"./node_modules/bootstrap/js/dist/offcanvas.js\");\n/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n__webpack_require__(\"./src/img sync recursive ^\\\\.\\\\/.*$\");\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tconst layerPolitico = leaflet__WEBPACK_IMPORTED_MODULE_4___default().tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n\t\t\tmaxZoom: 19,\r\n\t\t\tattribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a>'\r\n\t\t});\r\n\tconst layerVfr = leaflet__WEBPACK_IMPORTED_MODULE_4___default().layerGroup()\r\n\t\t.addLayer(\r\n\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().tileLayer('https://nwy-tiles-api.prod.newaydata.com/tiles/{z}/{x}/{y}.jpg?path=latest/base/latest', {\r\n\t\t\t\tattribution: [\"(c) open flightmaps association\", \"(c) openstreetmap contributors\", \"NASA elevation data\"].join(', '),\r\n\t\t\t\tcrossOrigin: '.jpg',\r\n\t\t\t\tminNativeZoom: 7,\r\n\t\t\t\tmaxNativeZoom: 12,\r\n\t\t\t})\r\n\t\t)\r\n\t\t.addLayer(\r\n\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().tileLayer('https://nwy-tiles-api.prod.newaydata.com/tiles/{z}/{x}/{y}.png?path=latest/aero/latest', {\r\n\t\t\t\tattribution: [\"(c) open flightmaps association\", \"(c) openstreetmap contributors\", \"NASA elevation data\"].join(', '),\r\n\t\t\t\tcrossOrigin: '.png',\r\n\t\t\t\tminNativeZoom: 7,\r\n\t\t\t\tmaxNativeZoom: 12,\r\n\t\t\t})\r\n\t\t);\r\n\tconst layerWeather = leaflet__WEBPACK_IMPORTED_MODULE_4___default().tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid='+config.OWM_API_KEY);\r\n\tconst layerVORs = leaflet__WEBPACK_IMPORTED_MODULE_4___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-vor')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tfunction decodeFlag(flags) {\r\n\t\t\t\t\treturn {\r\n\t\t\t\t\t\t'hasNavSignal': (Boolean)(flags & 1),\r\n\t\t\t\t\t\t'hasLocalizer': (Boolean)(flags & 2),\r\n\t\t\t\t\t\t'hasGlideSlope': (Boolean)(flags & 4),\r\n\t\t\t\t\t\t'hasDme': (Boolean)(flags & 8),\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\t\t\t\tconst vorIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/vor.svg',\r\n\t\t\t\t\ticonSize: [15, 15],\r\n\t\t\t\t});\r\n\t\t\t\tconst dmeIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/dme.svg',\r\n\t\t\t\t\ticonSize: [15, 15],\r\n\t\t\t\t});\r\n\t\t\t\tconst vorDmeIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/vordme.svg',\r\n\t\t\t\t\ticonSize: [15, 15],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const vor of response) {\r\n\t\t\t\t\tconst flags = decodeFlag(vor.Flags);\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([vor.Latitude, vor.Longitude], {\r\n\t\t\t\t\t\ticon: flags.hasDme ? (!flags.hasNavSignal && !flags.hasLocalizer && !flags.hasGlideSlope ? dmeIcon : vorDmeIcon) : vorIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: (flags.hasLocalizer ? 'LOC' : (flags.hasNavSignal ? 'VOR' : '') + (flags.hasDme ? 'DME' : '')) + '\\n' + vor.Ident + ' ' + vor.fFrequency,\r\n\t\t\t\t\t}).addTo(layerVORs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerVORs.clearLayers();\r\n\t});\r\n\tconst layerNDBs = leaflet__WEBPACK_IMPORTED_MODULE_4___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-ndb')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tconst ndbIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/ndb.svg',\r\n\t\t\t\t\ticonSize: [15, 15],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const ndb of response) {\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([ndb.Latitude, ndb.Longitude], {\r\n\t\t\t\t\t\ticon: ndbIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: 'NDB\\n' + ndb.Ident + ' ' + ndb.fFrequency,\r\n\t\t\t\t\t}).addTo(layerNDBs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerNDBs.clearLayers();\r\n\t});\r\n\tconst layerARPTs = leaflet__WEBPACK_IMPORTED_MODULE_4___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-arpt')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tconst arptIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/arpt.svg',\r\n\t\t\t\t\ticonSize: [15, 15],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const arpt of response) {\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([arpt.Latitude, arpt.Longitude], {\r\n\t\t\t\t\t\ticon: arptIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: 'ARPT\\n' + arpt.Ident,\r\n\t\t\t\t\t}).addTo(layerARPTs);\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([arpt.Latitude, arpt.Longitude], {\r\n\t\t\t\t\t\ticon: leaflet__WEBPACK_IMPORTED_MODULE_4___default().divIcon({\r\n\t\t\t\t\t\t\thtml: arpt.Ident,\r\n\t\t\t\t\t\t\tclassName: 'marker-subtitle',\r\n\t\t\t\t\t\t}),\r\n\t\t\t\t\t}).addTo(layerARPTs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerARPTs.clearLayers();\r\n\t});\r\n\tconst layerWPTs = leaflet__WEBPACK_IMPORTED_MODULE_4___default().layerGroup().on('add', () => {\r\n\t\tfetch('http://localhost/ajax/dati-wpt')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((response) => {\r\n\t\t\t\tconst wptIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\t\t\ticonUrl: 'static/img/wpt.svg',\r\n\t\t\t\t\ticonSize: [10, 10],\r\n\t\t\t\t});\r\n\t\t\t\tfor (const wpt of response) {\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([wpt.Latitude, wpt.Longitude], {\r\n\t\t\t\t\t\ticon: wptIcon,\r\n\t\t\t\t\t\tkeyboard: false,\r\n\t\t\t\t\t\ttitle: 'WPT\\n' + wpt.Ident,\r\n\t\t\t\t\t}).addTo(layerWPTs);\r\n\t\t\t\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([wpt.Latitude, wpt.Longitude], {\r\n\t\t\t\t\t\ticon: leaflet__WEBPACK_IMPORTED_MODULE_4___default().divIcon({\r\n\t\t\t\t\t\t\thtml: wpt.Ident,\r\n\t\t\t\t\t\t\tclassName: 'marker-subtitle',\r\n\t\t\t\t\t\t}),\r\n\t\t\t\t\t}).addTo(layerWPTs);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t}).on('remove', () => {\r\n\t\tlayerWPTs.clearLayers();\r\n\t});\r\n\t// TODO Sistema per aggiornare periodicamente i marker dei vari layer man mano che entrano in range\r\n\tconst map = leaflet__WEBPACK_IMPORTED_MODULE_4___default().map(document.querySelector('.map'), {preferCanvas:true,center:[45.598966, 8.950105],zoom:9,layers:[layerPolitico],}).addControl(\r\n\t\tleaflet__WEBPACK_IMPORTED_MODULE_4___default().control.layers({'Mappa politica': layerPolitico, 'Mappa VFR': layerVfr}, {'Meteo': layerWeather, 'VOR': layerVORs, 'NDB': layerNDBs, 'ARPT': layerARPTs, 'WPT': layerWPTs})\r\n\t);\r\n\tconst aeroplano = leaflet__WEBPACK_IMPORTED_MODULE_4___default().marker([0, 0], {\r\n\t\ticon: leaflet__WEBPACK_IMPORTED_MODULE_4___default().icon({\r\n\t\t\ticonUrl: 'static/img/airplane-icon.svg',\r\n\t\t\ticonSize: [25, 25],\r\n\t\t\tclassName: 'icona-aeroplano',\r\n\t\t}),\r\n\t\tkeyboard: false,\r\n\t}).addTo(map);\r\n\r\n\tlet mapFollow = 'sync'\r\n\tfor (const radio of document.querySelectorAll('input[name=mapFollow]')) {\r\n\t\tradio.addEventListener('change', () => {\r\n\t\t\tmapFollow = document.querySelector('input[name=mapFollow]:checked').value;\r\n\t\t});\r\n\t}\r\n\r\n\tconst iconaAeroplano = document.querySelector('img.icona-aeroplano').style;\r\n\tconst speedometerWidget = document.querySelector('.speedometer.scale').style;\r\n\tconst speedometerWidgetInput = document.querySelector('.speedometer.scale input');\r\n\tconst altimeterWidget = document.querySelector('.altimeter.scale').style;\r\n\tconst altimeterWidgetInput = document.querySelector('.altimeter.scale input');\r\n\tconst variometerWidget = document.querySelector('.variometer.scale').style;\r\n\tconst variometerWidgetInput = document.querySelector('.variometer.scale input');\r\n\tconst compassWidget = document.querySelector('.compass.scale').style;\r\n\tconst compassWidgetInput = document.querySelector('.compass.scale input');\r\n\tconst windWidget = document.querySelector('.wind.scale').style;\r\n\tconst windWidgetInput = document.querySelector('.wind.scale input');\r\n\tconst tasOutput = document.getElementById('tas-output');\r\n\tconst gsOutput = document.getElementById('gs-output');\r\n\tconst oatOutput = document.getElementById('oat-output');\r\n\tconst depOutput = document.getElementById('arpt-dep');\r\n\tconst dstOutput = document.getElementById('arpt-dst');\r\n\tfor (const output of [depOutput, dstOutput]) output.addEventListener('change', (e) => {\r\n\t\tlet updateMetarInterval;\r\n\t\tclearInterval(updateMetarInterval);\r\n\t\tfunction updateMetar() {\r\n\t\t\tfetch('https://metar.vatsim.net/'+e.target.textContent+'?format=json')\r\n\t\t\t\t.then((response) => response.json())\r\n\t\t\t\t.then((response) => {\r\n\t\t\t\t\tif(response.length == 0) return;\r\n\t\t\t\t\tdocument.getElementById(e.target.id+'-metar').textContent = response[0].metar;\r\n\t\t\t\t});\r\n\t\t};\r\n\t\tupdateMetar();\r\n\t\tupdateMetarInterval = setInterval(updateMetar, 1800000);\r\n\t});\r\n\r\n\tlet wait = false;\r\n\tsetInterval(() => {\r\n\t\tif(wait) return;\r\n\t\twait = true;\r\n\t\tfetch('http://localhost/ajax/dati-volo')\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((dati) => {\r\n\t\t\t\taeroplano.setLatLng([dati.LAT, dati.LON]);\r\n\t\t\t\ticonaAeroplano.transform += ' rotate('+dati.HDG+'deg)';\r\n\t\t\t\tif(mapFollow == 'lock') map.panTo(aeroplano.getLatLng());\r\n\t\t\t\telse if(mapFollow == 'sync') map.panInside(aeroplano.getLatLng(), {padding:[100, 100],});\r\n\t\t\t\tspeedometerWidgetInput.value = Math.round(dati.IAS)+'KN', speedometerWidget.setProperty('--speed', dati.IAS);\r\n\t\t\t\taltimeterWidgetInput.value = Math.round(dati.ALT)+'FT', altimeterWidget.setProperty('--rotation-altitude', dati.ALT);\r\n\t\t\t\tvariometerWidgetInput.value = Math.round(dati.VS)+'FPM', variometerWidget.setProperty('--vertical-speed', dati.VS);\r\n\t\t\t\tcompassWidgetInput.value = Math.round(dati.HDG), compassWidget.setProperty('--heading', dati.HDG);\r\n\t\t\t\twindWidgetInput.value = Math.round(dati['Wind Velocity'])+'KN', windWidget.setProperty('--wind-direction', dati['Wind Direction']);\r\n\t\t\t\ttasOutput.textContent = Math.round(dati.TAS);\r\n\t\t\t\tgsOutput.textContent = Math.round(dati.GS);\r\n\t\t\t\toatOutput.textContent = Math.round(dati.Temp);\r\n\t\t\t\tif(depOutput.textContent != dati.DEP) depOutput.textContent = dati.DEP, depOutput.dispatchEvent(new Event('change'));\r\n\t\t\t\tif(dstOutput.textContent != dati.DST) dstOutput.textContent = dati.DST, dstOutput.dispatchEvent(new Event('change'));\r\n\t\t\t\twait = false;\r\n\t\t\t});\r\n\t}, 500);\r\n});\n\n//# sourceURL=webpack://planemonitor/./src/js/index.js?");

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

/***/ "./src/img/arrow-down.svg":
/*!********************************!*\
  !*** ./src/img/arrow-down.svg ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/arrow-down.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/arrow-down.svg?");

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

/***/ "./src/img/wind_needle.svg":
/*!*********************************!*\
  !*** ./src/img/wind_needle.svg ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/wind_needle.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/wind_needle.svg?");

/***/ }),

/***/ "./src/img/wpt.svg":
/*!*************************!*\
  !*** ./src/img/wpt.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"img/wpt.svg\";\n\n//# sourceURL=webpack://planemonitor/./src/img/wpt.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor-bootstrap","vendor-leaflet"], () => (__webpack_exec__("./src/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);