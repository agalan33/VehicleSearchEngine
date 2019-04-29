from Database_Configuration.db_config import pg_config
import psycopg2
from psycopg2 import ProgrammingError

class EmployeeDao:

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
        return result
