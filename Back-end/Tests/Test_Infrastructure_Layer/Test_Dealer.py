import unittest
from Infrastructure_Layer.dealer import DealerDao

class TestDealer(unittest.TestCase):

    def Test_GetAllDealers(self):
        all_Dealers = DealerDao().getAllDealers()
        first_Dealer = all_Dealers[0]
        self.assertEquals(first_Dealer[0], 2, "DealerID")
        self.assertEquals(first_Dealer[1], "xVehicle Este", "Name")

    def Test_GetDealerByID(self):
        dealer1 = DealerDao().getDealerByID(1)
        self.assertEquals(dealer1[0], 1,"DealerID")


if __name__ == '__main__':
    unittest.main()