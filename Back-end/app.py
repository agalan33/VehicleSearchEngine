from flask import Flask, request, jsonify
from Model.employee import EmployeeDao
from Model.vehicle import VehicleDao
from Model.dealer import DealerDao


app = Flask(__name__)

#Routes of the Controller Layer

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/VehicleSearchEngine', methods=['GET'])
def initialPage():
    return "supposed to initial page"

@app.route('/VehicleSearchEngine/Dealers', methods=['GET'])
def manage_dealers():
    if request.method == 'GET':
        return DealerDao().getAllDealers()

@app.route('/VehicleSearchEngine/Dealers/<int:did>/vehicles', methods=['GET'])
def manage_vehicles(did):
    if request.method == 'GET':
        return VehicleDao().getAllVehiclesFromDealer(did)

@app.route('/VehicleSearchEngine/Dealers/<int:did>/reserved', methods=['GET'])
def manage_reserved(did):
    if request.method == 'GET':
        return jsonify(VehicleDao().getReservedVehicles(did))

@app.route('/VehicleSearchEngine/Dealers/<int:did>/reserved/<int:vid>', methods=['GET','DELETE', 'POST'])
def reserve_detail(did, vid):
    if request.method == 'GET':
        return VehicleDao().getVehicleReservation(vid, did)
    elif request.method == 'DELETE':
        return VehicleDao().removeReservationFromVehicle(vid, did, request.json['vid'])
    elif request.method == 'POST':
        return VehicleDao().createReservation(vid, did, request.json['eid'], request.json['rname'])



@app.route('/VehicleSearchEngine/Dealers/<int:did>', methods=['GET'])
def dealer_by_id(did):
    if request.method == 'GET':
        return DealerDao().getDealerByID(did)

@app.route('/VehicleSearchEngine/Dealers/<int:did>/vehicles', methods=['GET'])
def vehicles_from_dealer(did):
    if request.method == 'GET':
        return VehicleDao().getAllVehiclesFromDealer(did)

@app.route('/VehicleSearchEngine/vehicles', methods=['GET'])
def vehicles():
    if request.method == 'GET':
        return VehicleDao().getAllVehicles()

@app.route('/VehicleSearchEngine/Vehicles/<int:vid>', methods=['GET'])
def vehicle_by_id(vid):
    if request.method == 'GET':
        return VehicleDao().getVehicleByID(vid)

@app.route('/VehicleSearchEngine/Vehicles', methods=['POST'])
def create_vehicle():
    if request.method == 'POST':
        return VehicleDao().createVehicle(request.json['vbrand'], request.json['vmodel'], request.json['vyear'], request.json['vprice'], request.json['vcolor'], request.json['did'], request.json['horse_power'], request.json['edition'], request.json['cylinders'], request.json['miles_per_gallon'])


@app.route('/VehicleSearchEngine/Employees/<int:eid>', methods=['GET'])
def employee_by_id(eid):
    if request.method == 'GET':
        return EmployeeDao().getEmployeeByID(eid)

if __name__ == '__main__':
    app.run()
