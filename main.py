from flask import Flask, render_template
from classes.FileDataProvider import FileDataProvider
import os.path
import tomllib

app: Flask = Flask(__name__)

defaultConfig: dict = {'OWM_API_KEY':''}
if os.path.exists('config.toml') and os.path.isfile('config.toml'):
	app.config.from_file('config.toml', load=tomllib.load, text=False)
else:
	print('File di configurazione non trovato, verranno usati i valori di default')
	app.config.from_mapping(defaultConfig)
fileDataProvider: FileDataProvider = FileDataProvider('dati.csv')
fileDataProvider.start()

@app.route('/')
def index():
	return render_template('index.html', appConfig={key:value for key,value in app.config.items() if key in defaultConfig.keys()})

@app.route('/ajax/dati-volo')
def datiVolo():
	return fileDataProvider.get('flight')

@app.route('/ajax/dati-vor')
def datiVor():
	return fileDataProvider.get('vor')

@app.route('/ajax/dati-ndb')
def datiNdb():
	return fileDataProvider.get('ndb')

@app.route('/ajax/dati-arpt')
def datiArpt():
	return fileDataProvider.get('arpt')

@app.route('/ajax/dati-wpt')
def datiWpt():
	return fileDataProvider.get('wpt')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, debug=True)
	fileDataProvider.stop()