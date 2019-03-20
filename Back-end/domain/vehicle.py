from numpy import long

class vehicle:

    vid: int
    vprice: int
    vbrand: str
    vmodel: str
    vyear: int
    date_added: long
    isSold: bool
    isReserved: bool
    spid: int
    did: int

    def init(self, vid,vprice,vbrand,vmodel,vyear,date_added,isSold, isReserved,spid,did):
        self.vid = vid
        self.vprice = vprice
        self.vbrand = vbrand
        self.vmodel = vmodel
        self.vyear = vyear
        self.date_added = date_added
        self.isSold = isReserved
        self.isReserved = isReserved
        self.spid = spid
        self.did = did






