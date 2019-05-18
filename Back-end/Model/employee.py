from Database_Configuration.db_config import pg_config
import psycopg2
from flask import jsonify

class EmployeeDao:

    def employeeToJSON(self, row):
        result = {}
        result["eid"] = row[0]
        result["first_name"] = row[1]
        result["last_name"] = row[2]
        result["age"] = row[3]
        result["email"] = row[4]
        result["password"] = row[5]
        result["did"] = row[6]
        return result

    def __init__(self):
        connection_url = "dbname={} user={} host={} password={}".format(
            pg_config['dbname'],
            pg_config['user'],
            pg_config['host'],
            pg_config['password']
        )
        self.conn = psycopg2.connect(connection_url)

    def getEmployeeByID(self, eid):
        cursor = self.conn.cursor()
        query = "select * from employee where eid = %s;"
        cursor.execute(query, (eid,))
        result = cursor.fetchone()
        mapped_result = self.employeeToJSON(result)
        return jsonify(mapped_result)
