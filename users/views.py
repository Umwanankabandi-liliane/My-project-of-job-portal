from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views import View
import bcrypt

User = get_user_model()

class SignupView(View):
    def post(self, request):
        # Extract user data from the request
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        role = request.POST.get('role', 'candidate')

        # Basic validation
        if not all([username, email, password, confirm_password]):
            return JsonResponse({"error": "All fields are required."}, status=400)

        if password != confirm_password:
            return JsonResponse({"error": "Passwords do not match."}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already exists."}, status=400)

        # Hash the password
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Create the user
        user = User.objects.create(username=username, email=email, password=hashed_password, role=role)

        return JsonResponse({"message": "User created successfully!", "user_id": user.id}, status=201)
