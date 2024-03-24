import cohere
co = cohere.Client("kQjGp84jsCuuxZEARoHVhnPzHNmKU17uPoWRCdJH")

def ingredients_to_recipe(foods: str): 
    message = "Give me a recipe using nothing but: " + foods
    response = co.chat(
		message=message, 
		model="command-r", 
		temperature=0.8 )
    
    return response

print(ingredients_to_recipe("cheddar, bread, butter"))