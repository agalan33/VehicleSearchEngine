class employee:
    
    eid: int
    first_name: str
    last_name: str
    age: str
    email: str
    password: str
    did: int

    def __init__(self, eid, first_name, last_name, age, email, password,did):
        self.eid = eid
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.email = email
        self.password = password
        self.did = did
