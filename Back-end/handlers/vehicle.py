from flask import jsonify
from domain.vehicle import vehicle
from dao.vehicle import VehicleDao

class VehicleHandler:

    def getAllVehiclesFromDealer(self, did):
        dao = VehicleDao()
        result = dao.getAllVehiclesFromDealer(did)
        mapped_result = []
        for r in result:
            newDealer = vehicle(r)
            mapped_result.append(newDealer.classToJSON())
        return jsonify(mapped_result)