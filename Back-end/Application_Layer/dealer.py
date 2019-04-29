from flask import jsonify
from Domain_Layer.dealer import dealer
from Infrastructure_Layer.dealer import DealerDao

class DealerHandler:

    def getAllDealers(self):
        dao = DealerDao()
        result = dao.getAllDealers()
        mapped_result = []
        for r in result:
            newDealer = dealer(r)
            mapped_result.append(newDealer.dealerToJSON())
        return jsonify(mapped_result)

    def getDealerByID(self, did):
        dao = DealerDao()
        selectedDealer = dealer(dao.getDealerByID(did))
        return jsonify(selectedDealer.dealerToJSON())
