from db.db_config import pg_config
import psycopg2
from psycopg2 import ProgrammingError

class VehicleDao:

    def __init__(self):
        connection_url = "dbname={} user={} host={} password={}".format(
            pg_config['dbname'],
            pg_config['user'],
            pg_config['host'],
            pg_config['password']
        )
        self.conn = psycopg2.connect(connection_url)

    def getAllVehiclesFromDealer(self,did):
        cursor = self.conn.cursor()
        query = "select * from vehicle where did = %s;"
        cursor.execute(query, (did,))
        result = []
        for row in cursor:
            result.append(row)
        return result