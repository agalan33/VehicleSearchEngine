from db.db_config import pg_config
import psycopg2
from psycopg2 import ProgrammingError

class DealerDao:

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
            result.append(row)
        return result

