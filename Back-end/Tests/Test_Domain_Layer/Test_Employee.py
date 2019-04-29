import unittest
from Domain_Layer.employee import employee

class TestEmployee(unittest.TestCase):

    def test_Vehicle_Constructor(self):
        employee_Attributes = [1, "Adahid", "Galan", "22", "adahid.galan@upr.edu", "colegio", 1]
        newEmployee = employee(employee_Attributes)
        self.assertEquals(newEmployee.eid, 1, "EID")
        self.assertEquals(newEmployee.first_name, "Adahid", "Name")
        self.assertEquals(newEmployee.last_name, "Galan", "Last Name")
        self.assertEquals(newEmployee.age, "22", "Age")
        self.assertEquals(newEmployee.email, "adahid.galan@upr.edu", "Email")
        self.assertEquals(newEmployee.password, "colegio", "Password")
        self.assertEquals(newEmployee.did, 1, "DID")

    def test_Vehicle_To_JSON(self):
        employee_Attributes = [1, "Adahid", "Galan", "22", "adahid.galan@upr.edu", "colegio", 1]
        newEmployee = employee(employee_Attributes)
        json_object = newEmployee.employeeToJSON()
        self.assertEquals(json_object["eid"], 1, "EID")
        self.assertEquals(json_object["first_name"], "Adahid", "Name")
        self.assertEquals(json_object["last_name"], "Galan", "Last Name")
        self.assertEquals(json_object["age"], "22", "Age")
        self.assertEquals(json_object["email"], "adahid.galan@upr.edu", "Email")
        self.assertEquals(json_object["password"], "colegio", "Password")
        self.assertEquals(json_object["did"], 1, "DID")

if __name__ == '__main__':
    unittest.main()
