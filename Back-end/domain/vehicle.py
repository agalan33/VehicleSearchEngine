class vehicle:

    vid: int
    vbrand: str
    vmodel: str
    vyear: str
    vprice: int
    date_added: str
    did: int

    def __init__(self, row):
        self.vid = row[0]
        self.vbrand = row[1]
        self.vmodel = row[2]
        self.vyear = row[3]
        self.vprice = row[4]
        self.date_added = row[5]
        self.did = row[6]

    def classToJSON(self):
        result = {}
        result['vid'] = self.vid
        result['vbrand'] = self.vbrand
        result['vmodel'] = self.vmodel
        result['vyear'] = self.vyear
        result['vprice'] = self.vprice
        result['date_added'] = self.date_added
        result['did'] = self.did
        return result






