from flask import Flask, request
from handlers.dealer import DealerHandler
from handlers.vehicle import VehicleHandler


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/VehicleSearchEngine', methods=['GET'])
def initialPage():
    return "supposed to initial page"

@app.route('/VehicleSearchEngine/Dealer', methods=['GET'])
def manage_dealers():
    if request.method == 'GET':
        return DealerHandler().getAllDealers()

@app.route('/VehicleSearchEngine/Dealer/<int:did>/vehicles', methods=['GET'])
def manage_vehicles(did):
    if request.method == 'GET':
        return VehicleHandler().getAllVehiclesFromDealer(did)

if __name__ == '__main__':
    app.run()
