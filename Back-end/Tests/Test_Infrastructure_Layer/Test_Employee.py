import unittest
from Infrastructure_Layer.employee import EmployeeDao

class TestDealer(unittest.TestCase):

    def Test_GetEmployeeByID(self):
        employee1 = EmployeeDao().getEmployeeByID(1)
        self.assertEquals(employee1[0], 1, "EID")




if __name__ == '__main__':
    unittest.main()