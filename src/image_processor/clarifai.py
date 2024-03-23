from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

class clarifai:
    
	# model configuration
	# personal access token
	PAT = 'b652f45a011c4ec1b23ed86b944b00a9'
	# clarifai's pre-trained food recognition api
	USER_ID = 'clarifai'
	APP_ID = 'main'
	MODEL_ID = 'food-item-recognition'
	MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044'

	def __init__(self, image_url):
		self.IMAGE_URL = image_url
															

	def inference(self):
		channel = ClarifaiChannel.get_grpc_channel()
		stub = service_pb2_grpc.V2Stub(channel)

		metadata = (('authorization', 'Key ' + self.PAT),)

		userDataObject = resources_pb2.UserAppIDSet(user_id=self.USER_ID, app_id=self.APP_ID)

		post_model_outputs_response = stub.PostModelOutputs(
				service_pb2.PostModelOutputsRequest(
						user_app_id=userDataObject, 
						model_id=self.MODEL_ID,
						version_id=self.MODEL_VERSION_ID, 
						inputs=[
								resources_pb2.Input(
										data=resources_pb2.Data(
												image=resources_pb2.Image(
														url=self.IMAGE_URL
												)
										)
								)
						]
				),
				metadata=metadata
		)
		if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
				print(post_model_outputs_response.status)
				raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)

		# Since we have one input, one output will exist here
		output = post_model_outputs_response.outputs[0]

		print("Predicted concepts:")
		for concept in output.data.concepts:
				print("%s %.2f" % (concept.name, concept.value))

		# Uncomment this line to print the full Response JSON
		# print(output)
