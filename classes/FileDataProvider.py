from .AbstractDataProvider import AbstractDataProvider
from os.path import isfile, exists
from csv import DictReader
from math import degrees
from json import load

class FileDataProvider(AbstractDataProvider):
	def __init__(self, file: str | None = None):
		AbstractDataProvider.__init__(self)
		if file is None:
			raise Exception('Manca il parametro file')
		if not exists(file) or not isfile(file):
			raise Exception('Il file non esiste o non hai i permessi per leggerlo')
		self._file = file
		self._rows = []
	
	def run(self):
		with open('ARPT.txt', 'r') as file:
			self._arpt = load(file)
		with open('NDB.txt', 'r') as file:
			self._ndb = load(file)
		with open('VOR.txt', 'r') as file:
			self._vor = load(file)
		with open('WPT.txt', 'r') as file:
			self._wpt = load(file)
		with open(self._file, 'r') as file:
			file: DictReader = DictReader(file, delimiter='\t', quotechar='"')
			for riga in file:
				riga = {chiave: float(valore) for chiave, valore in riga.items()}
				riga['LAT'] = degrees(riga['LAT'])
				riga['LON'] = degrees(riga['LON'])
				riga['HDG'] = degrees(riga['HDG'])
				riga['VS'] *= 60
				riga['DEP'] = 'LIMC'
				riga['DST'] = 'LIML'
				self._rows.append(riga)
		datiVolo = iter(self._rows)
		while True:
			comando, offset = self._input.get()
			if comando is None:
				break
			match comando:
				case 'vor':
					self._output.put(self._vor[offset:])
					continue
				case 'ndb':
					self._output.put(self._ndb[offset:])
					continue
				case 'arpt':
					self._output.put(self._arpt[offset:])
					continue
				case 'wpt':
					self._output.put(self._wpt[offset:])
					continue
			self._output.put(next(datiVolo))