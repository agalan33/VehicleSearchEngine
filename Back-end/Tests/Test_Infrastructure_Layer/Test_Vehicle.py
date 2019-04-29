import unittest
from Infrastructure_Layer.vehicle import VehicleDao

class TestDealer(unittest.TestCase):

    def Test_GetAllVehiclesFromDealer(self):
        all_Vehicles = VehicleDao().getAllVehiclesFromDealer(1)
        first_Vehicle = all_Vehicles[0]
        self.assertEquals(first_Vehicle[1], "BMW", "Brand")

    def Test_GetVehiclesByID(self):
        vehicle1 = VehicleDao().getVehiclesById(1)
        self.assertEquals(vehicle1[0], 1, "VID")

    def Test_GetReservedVehiclesFromDealer(self):
        reserved_Vehicles = VehicleDao().getAllVehiclesFromDealer(1)
        first_Vehicle = reserved_Vehicles[0]
        self.assertEquals(first_Vehicle[1], "BMW", "Brand")



if __name__ == '__main__':
    unittest.main()