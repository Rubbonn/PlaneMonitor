from threading import Thread, Lock
from queue import SimpleQueue

class AbstractDataProvider(Thread):
	def __init__(self):
		Thread.__init__(self)
		self._input = SimpleQueue()
		self._output = SimpleQueue()
		self._readLock = Lock()
	
	def run(self):
		pass

	def get(self, type: None | str = None) -> dict:
		if type is None:
			raise Exception('Manca il parametro type')
		with self._readLock:
			self._input.put(f'get_{type}')
			return self._output.get()
	
	def stop(self) -> None:
		self._input.put(None)
		self.join()