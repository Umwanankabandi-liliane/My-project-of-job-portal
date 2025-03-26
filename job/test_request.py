import requests
import json

# Define the URL of your Django backend
url = "http://127.0.0.1:8000/user/signup/"

# Define the payload with user data
data = {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123",
    "confirm_password": "password123",
    "role": "candidate"
}

# Send the POST request
response = requests.post(url, json=data)

# Print the response
print("Status Code:", response.status_code)
print("Response Body:", response.json())
