class dealer:

    did: int
    dname: str
    dcity: str
    daddress: str

    def __init__(self,row):
        self.did = row[0]
        self.dname = row[1]
        self.dcity = row[2]
        self.daddress = row[3]

    def dealerToJSON(self):
        result = {}
        result['did'] = self.did
        result['dname'] = self.dname
        result['dcity'] = self.dcity
        result['daddress'] = self.daddress
        return result