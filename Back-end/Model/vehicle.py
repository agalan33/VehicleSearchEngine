from Database_Configuration.db_config import pg_config
import psycopg2
from flask import jsonify

class VehicleDao:

    def vehiclesToJSON(self, row):
        result = {}
        result['vid'] = row[0]
        result['vbrand'] = row[1]
        result['vmodel'] = row[2]
        result['vyear'] = row[3]
        result['vprice'] = row[4]
        result['date_added'] = row[5]
        result['vcolor'] = row[6]
        result['did'] = row[7]
        result['horse_power'] =row[8]
        result['edition'] = row[9]
        result['cylinders'] = row[10]
        result['miles_per_gallon'] = row[11]
        return result

    def reservationToJSON(self, row):
        result = {}
        result['vid'] = row[0]
        result['eid'] = row[1]
        result['did'] = row[2]
        result['rname'] = row[3]
        result['rdate'] = row[4]
        return result

    def __init__(self):
        connection_url = "dbname={} user={} host={} password={}".format(
            pg_config['dbname'],
            pg_config['user'],
            pg_config['host'],
            pg_config['password']
        )
        self.conn = psycopg2.connect(connection_url)

    def createVehicle(self, vbrand, vmodel, vyear, vprice, vcolor, did, horse_power, edition, cylinders, miles_per_gallon):
        cursor = self.conn.cursor()
        query = "INSERT INTO vehicle (vbrand, vmodel, vyear, vprice, data_added, vcolor, did) VALUES (%s, %s, %s, %s, %s, %s, %s) returning vid;"
        cursor.execute(query, (vbrand, vmodel, vyear, vprice, "04/16/2019", vcolor, did,))
        sid = cursor.fetchone()[0]
        self.conn.commit()
        query2 = "INSERT INTO speficication (sid, horse_power, edition, cylinders, miles_per_gallon) values (%s, %s, %s, %s, %s);"
        cursor.execute(query2, (sid, horse_power, edition, cylinders, miles_per_gallon,))
        self.conn.commit()
        return jsonify(Ok="Successful")


    def getAllVehicles(self):
        cursor = self.conn.cursor()
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle join speficication on vehicle.vid = speficication.sid;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(self.vehiclesToJSON(row))
        return jsonify(result)

    def getAllVehiclesFromDealer(self,did):
        cursor = self.conn.cursor()
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle join speficication on vehicle.vid = speficication.sid where did = %s;"
        cursor.execute(query, (did,))
        reserved = self.getReservedVehicles(did)
        result = []
        for row in cursor:
            result.append(self.vehiclesToJSON(row))

        available = []
        for v in result:
            av = True
            for r in reserved:
                if v['vid'] == r['vid']:
                    av = False
                    break
            if av:
                available.append(v)

        return jsonify(available)

    def getVehicleByID(self,vid):
        cursor = self.conn.cursor()
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle join speficication on vehicle.vid = speficication.sid where vid = %s;"
        cursor.execute(query, (vid,))
        result = cursor.fetchone()
        mapped_result = self.vehiclesToJSON(result)
        return jsonify(mapped_result)

    def getReservedVehicles(self, did):
        cursor = self.conn.cursor()
        query = "select distinct vid, vbrand, vmodel, vyear, vprice, data_added, vcolor, did, horse_power, edition, cylinders, miles_per_gallon from vehicle inner join speficication on vid = sid natural inner join reservation natural  inner join dealer where did = %s;"
        cursor.execute(query, (did,))
        result = []
        for row in cursor:
            result.append(self.vehiclesToJSON(row))
        return result

    def getVehicleReservation(self, vid,did):
        cursor = self.conn.cursor()
        query = "select vid, eid, did, rname, rdate from vehicle natural inner join reservation where vid = %s and did = %s;"
        cursor.execute(query, (vid,did,))
        result = cursor.fetchone()
        if result:
            mapped_result = self.reservationToJSON(result)
            return jsonify(mapped_result)
        return jsonify(Error="NoVehicle")

    def removeReservationFromVehicle(self, vid, did, eid):
        cursor = self.conn.cursor()
        query = "DELETE FROM reservation WHERE vid = %s AND eid = %s AND did = %s;"
        cursor.execute(query, (vid, eid, did,))
        self.conn.commit()
        return jsonify(Ok="Successful")

    def createReservation(self, vid, did, eid, rname):
        cursor = self.conn.cursor()
        query = "INSERT INTO reservation (vid, eid, did, rdate, rname) VALUES (%s, %s, %s, %s, %s);"
        cursor.execute(query, (vid, eid, did, '04/16/2019', rname,))
        self.conn.commit()
        return jsonify(Ok="Successful")
