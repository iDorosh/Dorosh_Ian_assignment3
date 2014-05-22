// Ian Dorosh
// SDI 1405
// Assinment 3


//Global Variables
var launchYear = 2030;
var fuelCost = "4.2 million";
var fuelCost2 = "6.2 million";
var launchTime = true;
var windCondition;
var wind;
var blastOff;
var liftOff;
var altitude;
var finalaltitude;
var orbit;

//Functions

//Procedure

var windCondition = function() {
	
 if (wind == "yes" ||wind == "YES" ||wind == "Yes"){
	console.log ("Since it is windy fuel cost will increase to " + fuelCost2 + " from " + fuelCost + " to compinsate for the wind.");
	
	} 	else {
		console.log ("Since it isn't windy fuel cost will remain at " + fuelCost + ".");
		};
};



//Bolean Function

var blastOff = function(liftOff) {
	var countdown;
	if (launchTime === !true){		
	countDown = 10
	
	}	else { 
		countDown = 5
		};

		while (countDown > 0) {
			console.log (countDown--);
	
		};	liftOff;
			return liftOff;
};



// Number Function
var altitude = function(startAltitude){
	
	var startAltitude
	
	for (var startAltitude; startAltitude < 40000; startAltitude+=10000){
	
		console.log (startAltitude)
		
};  	var finalaltitude = startAltitude;
		return finalaltitude;
};



// String Function
var space = function(escapeVelocity,orbit){
	var escapeVelocity;
	var orbit;
	
		if (orbit == "To achieve orbit" && escapeVelocity == "17500"){
			orbitAchieved = (orbit + " the rocket reached an escape velocity of " + escapeVelocity + " mph, and is now in orbit." );
			return orbitAchieved;
		} 		else {console.log ("The rocket didn't reach "+ escapeVelocity +" mph."+ " So it crashed back to earth")
			
				}
	
}; 


//Main Code
console.log ("The launch of the Aries 3 rocket is today. The year is "+ launchYear);

console.log ("To estimate fuel cost we need to know if its windy outside");

wind = prompt("Is it windy outside", "Yes or No");

windCondition()

console.log ("Fuel has been adjusted to match current wind conditions launch will proceed.");

var launchTime = confirm("Default count down is 5 seconds. Ok to Confirm Cancel to extend time to 10 seconds. ");

var liftOff = blastOff(true);
	if (liftOff === true) {
		console.log ("Blast off!!");
	} else { console.log ("Launch Canceled");
		
	   };

console.log ("The altitude starts rising");

console.log ("As soon as the rocket reaches 40000 feet the booster rockets will fall off."); 

var finalaltitude = altitude(10000);
console.log ("The current altitude is " + finalaltitude);

console.log ("Booster rocket seperation complete.");

var orbitAchieved = space("17500","To achieve orbit");
console.log (orbitAchieved);







