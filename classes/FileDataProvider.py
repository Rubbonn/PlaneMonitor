from .AbstractDataProvider import AbstractDataProvider
from os.path import isfile, exists
from csv import DictReader
from math import degrees

class FileDataProvider(AbstractDataProvider):
	def __init__(self, file: str | None = None):
		AbstractDataProvider.__init__(self)
		if file is None:
			raise Exception('Manca il parametro file')
		if not exists(file) or not isfile(file):
			raise Exception('Il file non esiste o non hai i permessi per leggerlo')
		self._file = file
	
	def run(self):
		with open(self._file, 'r') as file:
			file: DictReader = DictReader(file, delimiter='\t', quotechar='"')
			while self._input.get() is not None:
				riga: dict = next(file)
				riga = {chiave: float(valore) for chiave, valore in riga.items()}
				riga['LAT'] = degrees(riga['LAT'])
				riga['LON'] = degrees(riga['LON'])
				riga['HDG'] = degrees(riga['HDG'])
				riga['VS'] *= 60
				self._output.put(riga)