from Database_Configuration.db_config import pg_config
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
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle join speficication on vehicle.vid = speficication.sid where did = %s;"
        cursor.execute(query, (did,))
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getVehiclesById(self,vid):
        cursor = self.conn.cursor()
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle join speficication on vehicle.vid = speficication.sid where vid = %s;"
        cursor.execute(query, (vid,))
        result = cursor.fetchone()
        return result

    def getReservedVehicles(self, did):
        cursor = self.conn.cursor()
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle inner join speficication on vid = sid natural inner join reservation natural  inner join dealer where did = %s;"
        cursor.execute(query, (did,))
        result = []
        for row in cursor:
            result.append(row)
        return result
