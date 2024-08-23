from flask import Flask, render_template, request
from classes.FileDataProvider import FileDataProvider
import os.path
import tomllib

app: Flask = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 86400

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

@app.route('/ajax/dati')
def datiVolo():
	datiRichiesti = request.args.get('dati', '').split(',')
	risposta = {}
	for dato in datiRichiesti:
		if dato not in ['volo', 'vor', 'ndb', 'arpt', 'wpt']: continue
		risposta[dato] = fileDataProvider.get((dato, int(request.args.get(f'{dato}Offset', 0))))
	return risposta

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, debug=True)
	fileDataProvider.stop()