from flask import jsonify
from Domain_Layer.vehicle import vehicled
from Infrastructure_Layer.vehicle import VehicleDao

class VehicleHandler:

    def getAllVehiclesFromDealer(self, did):
        dao = VehicleDao()
        allVehicles = dao.getAllVehiclesFromDealer(did)
        reservedVehicles = dao.getReservedVehicles(did)
        a = []
        r = []
        mapped_result = []
        for vehicles in allVehicles:
            newVehicle = vehicled(vehicles)
            a.append(newVehicle.vehiclesToJSON())

        for reserved in reservedVehicles:
            newVehicle = vehicled(reserved)
            r.append(newVehicle.vehiclesToJSON())

        for vehicle in a:
            isAvailable = True
            for reserved in r:
                if vehicle["vid"] == reserved["vid"]:
                    isAvailable = False
                    break
            if isAvailable:
                mapped_result.append(vehicle)

        return jsonify(mapped_result)

    def getReservedVehicles(self,did):
        dao = VehicleDao()
        allVehicles = dao.getAllVehiclesFromDealer(did)
        reservedVehicles = dao.getReservedVehicles(did)
        a = []
        r = []
        mapped_result = []
        for vehicles in allVehicles:
            newVehicle = vehicled(vehicles)
            a.append(newVehicle.vehiclesToJSON())

        for reserved in reservedVehicles:
            newVehicle = vehicled(reserved)
            r.append(newVehicle.vehiclesToJSON())

        for vehicle in a:
            for reserved in r:
                if vehicle["vid"] == reserved["vid"]:
                    mapped_result.append(vehicle)
                    break

        return jsonify(mapped_result)

    def getVehicleByID(self, vid):
        dao = VehicleDao()
        result = dao.getVehiclesById(vid)
        newVehicle = vehicled(result)
        return jsonify(newVehicle.vehiclesToJSON())
