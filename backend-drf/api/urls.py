from django.urls import path, include
from accounts import views as UserViews
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from .views import StockPredictionAPIView

urlpatterns = [
    path("register/", UserViews.RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Test protected view
    path('protected-view', UserViews.ProtectedView.as_view()),
    
    
    # Prediction API
    path('predict/', StockPredictionAPIView.as_view(), name='stock_prediction')
    
    
]








