class vehicled:

    vid: int
    vbrand: str
    vmodel: str
    vyear: str
    vprice: int
    date_added: str
    vcolor: str
    did: int

    #Specifications
    horse_power: int
    edition: str
    cylinders: int
    miles_per_gallon: int

    def __init__(self, row):
        self.vid = row[0]
        self.vbrand = row[1]
        self.vmodel = row[2]
        self.vyear = row[3]
        self.vprice = row[4]
        self.date_added = row[5]
        self.vcolor = row[6]
        self.did = row[7]
        self.horse_power = row[8]
        self.edition = row[9]
        self.cylinders = row[10]
        self.miles_per_gallon = row[11]

    def vehiclesToJSON(self):
        result = {}
        result['vid'] = self.vid
        result['vbrand'] = self.vbrand
        result['vmodel'] = self.vmodel
        result['vyear'] = self.vyear
        result['vprice'] = self.vprice
        result['date_added'] = self.date_added
        result['vcolor'] = self.vcolor
        result['did'] = self.did
        result['horse_power'] = self.horse_power
        result['edition'] = self.edition
        result['cylinders'] = self.cylinders
        result['miles_per_gallon'] = self.miles_per_gallon
        return result








