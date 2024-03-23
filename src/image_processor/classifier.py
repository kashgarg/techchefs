
from clarifai import clarifai


class classifier:

	def __init__(self):
		self.__model = clarifai()
		self.__result = {} # dict of food names with its confidence score

	# given a list of images, update __result field
	def classify(self, imgs):
		result = {}
		for img in imgs:
			pred = self.__model.inference(img)
			if result == {}:
				result = pred
			else:
				for name, value in pred.items():
					if name in result: # object with same name exists
						currval = result[name]
						# update value if the same object has higher score
						if value > currval:
							result[name] = value
					else: # object with same name DNE
						result[name] = value
		
		self.__result = result

	# given a score, return __result only with values higher than the score
	def get_result_by_score(self, score):
		result = {}
		for name, value in self.__result.items():
			if value > score:
				result[name] = value
		return result
			
			

		






