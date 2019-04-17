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

@app.route('/VehicleSearchEngine/Dealers', methods=['GET'])
def manage_dealers():
    if request.method == 'GET':
        return DealerHandler().getAllDealers()

@app.route('/VehicleSearchEngine/Dealers/<int:did>/vehicles', methods=['GET'])
def manage_vehicles(did):
    if request.method == 'GET':
        return VehicleHandler().getAllVehiclesFromDealer(did)

@app.route('/VehicleSearchEngine/Dealers/<int:did>', methods=['GET'])
def dealer_by_id(did):
    if request.method == 'GET':
        return DealerHandler().getDealerByID(did)

@app.route('/VehicleSearchEngine/Dealers/<int:did>/vehicles', methods=['GET'])
def vehicles_from_dealer(did):
    if request.method == 'GET':
        return VehicleHandler().getAllVehiclesFromDealer(did)

@app.route('/VehicleSearchEngine/Vehicles/<int:vid>', methods=['GET'])
def vehicle_by_id(vid):
    if request.method == 'GET':
        return VehicleHandler().getVehicleByID(vid)

if __name__ == '__main__':
    app.run()
