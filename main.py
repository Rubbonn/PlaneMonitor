from flask import Flask, render_template
from classes.FileDataProvider import FileDataProvider
import tomllib

app: Flask = Flask(__name__)
app.config.from_file('config.toml', load=tomllib.load, text=False)
fileDataProvider: FileDataProvider = FileDataProvider('dati.csv')
fileDataProvider.start()

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/ajax/dati-volo')
def datiVolo():
	return fileDataProvider.get('')

@app.route('/ajax/dati-vor')
def datiVor():
	return [{'ICAO': 'TOP', 'Frequency': '114.50', 'lat': 44.925400, 'lon': 7.861660}]

@app.route('/ajax/dati-ndb')
def datiNdb():
	return [{'ICAO': 'TOP', 'Frequency': '114.50', 'lat': 44.925400, 'lon': 7.861660}]

@app.route('/ajax/dati-arpt')
def datiArpt():
	return [{'ICAO': 'TOP', 'Frequency': '114.50', 'lat': 44.925400, 'lon': 7.861660}]

@app.route('/ajax/dati-wpt')
def datiWpt():
	return [{'ICAO': 'TOP', 'Frequency': '114.50', 'lat': 44.925400, 'lon': 7.861660}]

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, debug=True)
	fileDataProvider.stop()