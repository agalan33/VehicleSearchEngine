from flask import jsonify
from domain.vehicle import vehicle
from dao.vehicle import VehicleDao

class VehicleHandler:

    def getAllVehiclesFromDealer(self, did):
        dao = VehicleDao()
        result = dao.getAllVehiclesFromDealer(did)
        mapped_result = []
        for r in result:
            newVehicle = vehicle(r)
            mapped_result.append(newVehicle.vehiclesToJSON())
        return jsonify(mapped_result)

    def getVehicleByID(self, vid):
        dao = VehicleDao()
        result = dao.getVehiclesById(vid)
        newVehicle = vehicle(result, "specs")
        return jsonify(newVehicle.vehicles_with_specs_to_JSON())
