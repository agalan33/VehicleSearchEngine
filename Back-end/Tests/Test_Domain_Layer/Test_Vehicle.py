import unittest
from Domain_Layer.vehicle import vehicled

class TestVehicle(unittest.TestCase):

    def test_Vehicle_Constructor(self):
        vehicle_Attributes = [1, "Chevrolet", "Camaro", "2010", 6000, "01/01/2019", "red", 1, 500, "SS", 8, 20]
        newVehicle = vehicled(vehicle_Attributes)
        self.assertEquals(newVehicle.vid, 1, "VID")
        self.assertEquals(newVehicle.vbrand, "Chevrolet", "Brand")
        self.assertEquals(newVehicle.vmodel, "Camaro", "Model")
        self.assertEquals(newVehicle.vyear, "2010", "Year")
        self.assertEquals(newVehicle.vprice, 6000, "Price")
        self.assertEquals(newVehicle.date_added, "01/01/2019", "Date")
        self.assertEquals(newVehicle.vcolor, "red", "Color")
        self.assertEquals(newVehicle.did, 1, "DealerID")
        self.assertEquals(newVehicle.horse_power, 500, "Horse_Power")
        self.assertEquals(newVehicle.edition, "SS", "Edition")
        self.assertEquals(newVehicle.cylinders, 8, "Cylinders")
        self.assertEquals(newVehicle.miles_per_gallon, 20, "MPG")

    def test_Vehicle_To_JSON(self):
        vehicle_Attributes = [1, "Chevrolet", "Camaro", "2010", 6000, "01/01/2019", "red", 1, 500, "SS", 8, 20]
        newVehicle = vehicled(vehicle_Attributes)
        json_object = newVehicle.vehiclesToJSON()

        self.assertEquals(json_object["vid"], 1, "VID")
        self.assertEquals(json_object["vbrand"], "Chevrolet", "Brand")
        self.assertEquals(json_object["vmodel"], "Camaro", "Model")
        self.assertEquals(json_object["vyear"], "2010", "Year")
        self.assertEquals(json_object["vprice"], 6000, "Price")
        self.assertEquals(json_object["date_added"], "01/01/2019", "Date")
        self.assertEquals(json_object["vcolor"], "red", "Color")
        self.assertEquals(json_object["did"], 1, "DealerID")
        self.assertEquals(json_object["horse_power"], 500, "Horse_Power")
        self.assertEquals(json_object["edition"], "SS", "Edition")
        self.assertEquals(json_object["cylinders"], 8, "Cylinders")
        self.assertEquals(json_object["miles_per_gallon"], 20, "MPG")



if __name__ == '__main__':
    unittest.main()
