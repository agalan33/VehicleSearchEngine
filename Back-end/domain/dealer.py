class dealer:

    did: int
    dname: str
    dcity: str

    def __init__(self,row):
        self.did = row[0]
        self.dname = row[1]
        self.dcity = row[2]

    def classToJSON(self):
        result = {}
        result['did'] = self.did
        result['dname'] = self.dname
        result['dcity'] = self.dcity
        return result