from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    # one should not be able to retrieve the password using GET request
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        
    
    
    def create(self, validated_data):
        # user = User.objects.create_user(**validated_data)
        
        # Explicitly calling the fields instead of using **validated_data
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user
        













