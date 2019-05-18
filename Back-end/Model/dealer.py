from Database_Configuration.db_config import pg_config
import psycopg2
from flask import jsonify

class DealerDao:

    def dealerToJSON(self, row):
        result = {}
        result['did'] = row[0]
        result['dname'] = row[1]
        result['dcity'] = row[2]
        result['daddress'] = row[3]
        return result

    def __init__(self):
        connection_url = "dbname={} user={} host={} password={}".format(
            pg_config['dbname'],
            pg_config['user'],
            pg_config['host'],
            pg_config['password']
        )
        self.conn = psycopg2.connect(connection_url)

    def getAllDealers(self):
        cursor = self.conn.cursor()
        query = "select * from dealer;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(self.dealerToJSON(row))
        return jsonify(result)

    def getDealerByID(self, did):
        cursor = self.conn.cursor()
        query = "select * from dealer where did = %s;"
        cursor.execute(query,(did,))
        result = cursor.fetchone()
        mapped_result = self.dealerToJSON(result)
        return jsonify(mapped_result)

