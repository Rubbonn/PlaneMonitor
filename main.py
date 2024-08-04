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