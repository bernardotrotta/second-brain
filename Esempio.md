## Esempio

```python
from pymongo import MongoClient

# Classe da istanziare

client = MongoClient("localhost")

db = clinet["ecommerce"]

# Suppongo di voler lavorare con due collection

prodcuts = db["products"] 
customers = db["customers"]

products.delete_many({})
customers.delete_many({})

products.insert_many([
					  
])

# query definiamo la pipeline come una lista di istruzioni

pipeline = [
	{
		"$group": {"_id": "$category", "average_price": {"$avg": "$price"}}
	}
			
]

result = list(products.aggregate(pipeline))
for r in result:
	print(r)
```