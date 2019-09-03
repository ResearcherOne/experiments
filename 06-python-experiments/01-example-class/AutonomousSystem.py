#In the main, import as follows: "from AutonomousSystem import *"
class AutonomousSystem:
	def __init__(self, asID, asPrefixes={}):
		self._nodeDegree = 0
		self._asID = asID
		self._customerList = []
		self._customerCount = 0
		self._peers = {}
		self._peerCount = 0
		self._prefixes = asPrefixes
		self._numberOfIP = len(asPrefixes.keys())
		self._providerAsList=[]

	def getAsID(self):
		return self._asID

	def getNodeDegree(self):
		return self._nodeDegree

	def addCustomer(self, newCustomer):
		self._customerCount = self._customerCount + 1
		self._nodeDegree = self._nodeDegree + 1
		self._customerList.append(newCustomer)

	def isPeerExists(self, peerAs):
		if(peerAs.getAsID() in self._peers):
			return True
		else:
			return False

	def addPeer(self, newPeerAS):
		self._peerCount = self._peerCount + 1
		self._nodeDegree = self._nodeDegree + 1
		self._peers[newPeerAS.getAsID()] = newPeerAS

	def _getPeerIDs(self):
		return list(self._peers.keys())

	def _getCustomerIDs(self):
		customerIdList = []
		for customer in self._customerList:
			customerIdList.append(customer.getCustomerID())
		return customerIdList

	def getNumberOfIP(self):
		return self._numberOfIP

	def toString(self):
		selfString = "AS ID:" + self._asID + "\n"
		selfString = selfString + "Node Degree:" + str(self._nodeDegree) + "\n"
		selfString = selfString + "Customer List: " +  (', '.join(self._getCustomerIDs())) + "\n"
		selfString = selfString + "Peers: " + (', '.join(self._getPeerIDs())) + "\n"
		selfString = selfString + "Prefixes: " + str(self._prefixes) + "\n"
		return selfString

	def getPeerCount(self):
		return self._peerCount

	def getCustomerCount(self):
		return self._customerCount

	def addAs(self, newAs):
		self._nodeDegree = self._nodeDegree + 1
		self._providerAsList.append(newAs)