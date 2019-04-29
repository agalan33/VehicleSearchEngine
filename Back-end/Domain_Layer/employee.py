class employee:
    
    eid: int
    first_name: str
    last_name: str
    age: str
    email: str
    password: str
    did: int

    def __init__(self, row):
        self.eid = row[0]
        self.first_name = row[1]
        self.last_name = row[2]
        self.age = row[3]
        self.email = row[4]
        self.password = row[5]
        self.did = row[6]

    def employeeToJSON(self):
        result = {}
        result["eid"] = self.eid
        result["first_name"] = self.first_name
        result["last_name"] = self.last_name
        result["age"] = self.age
        result["email"] = self.email
        result["password"] = self.password
        result["did"] = self.did
        return result
