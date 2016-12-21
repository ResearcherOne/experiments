var should 			= require('should');
var requireHelper	= require('../requireHelper.js');
var robotFactory 	= requireHelper('robotFactory.js');

/*
motherBoard = {
	RAM: 64MB
	FLASH: 16MB
};
partStock = {
	mechanicalPartSet: 0,
	electronicPartSet: 0
};
robot = {
	type:			"defenseBot",
	isActive: 		false,
	healthStatus: 	100,
	armor:			5,
	attack:			10,
};
resetFactory: function(){
		
	},
loadPartSets: function(partBatch){	
	},
createCollectorBot: function(){
	return {};
},
createDefenseBot: function(){
	return {};
},
getPartStockStatus: function(){
	return {};
},
recycleBot: function(bot){
},
repairBot: function(bot){
	return {};
}
*/
describe('robotFactory.js', function () {
	before(function(){
		console.log('see.. this function is run ONCE only');
	});
	var runCounter = 0;
	beforeEach(function(){
		console.log("This function is run each time. Counter: "+runCounter);
		runCounter++;
		robotFactory.resetFactory();
	});
	
	describe('resetFactory()', function(){
		
	});
	
	describe('loadPartSets(partBatch)', function(){
		
	});
	
	describe('createCollectorBot()', function(){
		
	});
	
	describe('createDefenseBot()', function(){
		
	});
	
	describe('getPartStockStatus()', function(){
		
	});
	
	describe('recycleBot(bot)', function(){
		
	});
	
	describe('repairBot(bot)', function(){
		
	});
});