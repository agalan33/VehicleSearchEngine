import unittest
from Domain_Layer.dealer import dealer

class TestDealer(unittest.TestCase):

    def test_Vehicle_Constructor(self):
        dealer_Attributes = [1, "xOeste", "Mayagüez", "Carr. 2 Ave Eugenio Maria de Hostos #301, Mayagues, 00680"]
        newDealer = dealer(dealer_Attributes)
        self.assertEquals(newDealer.did, 1, "DID")
        self.assertEquals(newDealer.dname, "xOeste", "Name")
        self.assertEquals(newDealer.dcity, "Mayagüez", "City")
        self.assertEquals(newDealer.daddress, "Carr. 2 Ave Eugenio Maria de Hostos #301, Mayagues, 00680", "Address")

    def test_Vehicle_To_JSON(self):
        dealer_Attributes = [1, "xOeste", "Mayagüez", "Carr. 2 Ave Eugenio Maria de Hostos #301, Mayagues, 00680"]
        newDealer = dealer(dealer_Attributes)
        json_object = newDealer.dealerToJSON()
        self.assertEquals(json_object["did"], 1, "DID")
        self.assertEquals(json_object["dname"], "xOeste", "Name")
        self.assertEquals(json_object["dcity"], "Mayagüez", "City")
        self.assertEquals(json_object["daddress"], "Carr. 2 Ave Eugenio Maria de Hostos #301, Mayagues, 00680", "Address")


if __name__ == '__main__':
    unittest.main()
