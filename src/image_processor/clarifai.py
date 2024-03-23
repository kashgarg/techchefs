from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

class clarifai:

	def __init__(self):
		self.PAT = 'b652f45a011c4ec1b23ed86b944b00a9'
		self.USER_ID = 'clarifai'
		self.APP_ID = 'main'
		self.MODEL_ID = 'food-item-recognition'
		self.MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044'
															

	def inference(self, image_url):

		channel = ClarifaiChannel.get_grpc_channel()
		stub = service_pb2_grpc.V2Stub(channel)
		input = resources_pb2.Input(data=resources_pb2.Data(image=resources_pb2.Image(url=image_url)))
		metadata = (('authorization', 'Key ' + self.PAT),)
		userDataObject = resources_pb2.UserAppIDSet(user_id=self.USER_ID, app_id=self.APP_ID)

		post_model_outputs_response = stub.PostModelOutputs(
				service_pb2.PostModelOutputsRequest(
						user_app_id=userDataObject, 
						model_id=self.MODEL_ID,
						version_id=self.MODEL_VERSION_ID, 
						inputs=[input]
				),
				metadata=metadata
		)

		status = post_model_outputs_response.status
		if status.code == status_code_pb2.SUCCESS:
				output = post_model_outputs_response.outputs[0]
				result = self.__process_output(output)
				return result
		else:
				print(status)
				raise Exception("Post model outputs failed, status: " + status.description)


	def __process_output(self, output):
		result = {}
		concepts = output.data.concepts
		for concept in concepts:
			result[concept.name] = concept.value
		return result
