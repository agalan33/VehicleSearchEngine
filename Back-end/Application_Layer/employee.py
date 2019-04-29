from flask import jsonify
from Domain_Layer.employee import employee
from Infrastructure_Layer.employee import EmployeeDao

class EmployeeHandler:

    def getEmployeeByID(self, eid):
        dao = EmployeeDao()
        selectedEmployee = employee(dao.getEmployeeByID(eid))
        return jsonify(selectedEmployee.employeeToJSON())
