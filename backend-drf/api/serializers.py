from rest_framework import serializers



class StockPredictionSerialzer(serializers.Serializer):
    ticker = serializers.CharField(max_length = 20)
    
    










