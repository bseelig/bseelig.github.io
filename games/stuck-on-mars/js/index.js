var screen = document.getElementById("story");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

function play() {
  screen.innerHTML = "Ok you have 10 Mins to look around";
  btn2.classList.remove("hidden");
  btn1.innerHTML = "Leave Now";
  btn2.innerHTML = "Wait";
  btn1.onclick = function() {Leave()};
  btn2.onclick = function() {minstoleave()};
}
function minstoleave() {
  screen.innerHTML = "Ok you have 5 Mins to look around";
  btn1.innerHTML = "Leave Now";
  btn2.innerHTML = "Wait";
  btn2.onclick = function() {minstoleavesecond()};
  btn1.onclick = function() {Leave()}; 
}

function minstoleavesecond() {
  screen.innerHTML = "You must leave now";
  btn1.innerHTML = "Leave Now";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {Leave()};
  btn1.onclick = function() {Leave()}; 
}


function Leave() {
  screen.innerHTML = "There is a Problem. Your rocket is out of fuel or the engine is broken. Pick a Solution";
  btn1.innerHTML = "Find a way to Repair";
  btn2.innerHTML = "Call for Help";
  btn2.onclick = function() {help()};
  btn2.classList.remove("hidden");
  btn1.onclick = function() {repair()};
  
}

function repair() {
  screen.innerHTML = "Looking for damaged parts...";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {norepair()};
  btn1.onclick = function() {norepair()};
  
}

function norepair() {
  screen.innerHTML = "Every thing works but the fuel is empty.";
  btn1.innerHTML = "Call for Help";
  btn2.innerHTML = "Try Again";
  btn2.classList.remove("hidden");
  btn2.onclick = function() {repair()};
  btn1.onclick = function() {help()};
  
}

function help() {
  screen.innerHTML = "The battery is 6% Remaining Calculating Time...";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {battery()};
  btn1.onclick = function() {battery()};
  
}

function battery() {
  screen.innerHTML = "2 mins to type your message";
  btn1.innerHTML = "Say: I am stuck in mars please help.";
  btn2.innerHTML = "Say: I am stuck in mars because the fuel is empty.";
  btn2.classList.remove("hidden");
  btn2.onclick = function() {Send()};
  btn1.onclick = function() {Send()};
  
}

function Send() {
  screen.innerHTML = "Sending Please Wait...";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {dead()};
  btn1.onclick = function() {dead()};
  
}



function dead() {
  screen.innerHTML = "Failed to send. Saved message. Battery is dead. To recharge use the sunlight.";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {recharge()};
  btn1.onclick = function() {recharge()};
  
}

function recharge() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 0";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.classList.remove("hidden");
  btn2.onclick = function() {nocharge()};
  btn1.onclick = function() {chargetwo()};
  
}



function nocharge() {
  screen.innerHTML = "No light to charge the battery. Go Back";
  btn1.innerHTML = "Back";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {recharge()};
  btn1.onclick = function() {recharge()};
  
}

function powerful() {
  screen.innerHTML = "Thats to high amount of solor energy. Go Back";
  btn1.innerHTML = "Back";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {recharge()};
  btn1.onclick = function() {recharge()};
  
}

function recharge() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 0";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.classList.remove("hidden");
  btn2.onclick = function() {nocharge()};
  btn1.onclick = function() {chargetwo()};
  
}


function nocharge() {
  screen.innerHTML = "No light to charge the battery. Go Back";
  btn1.innerHTML = "Back";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {recharge()};
  btn1.onclick = function() {recharge()};
  
}

function chargetwo() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 0";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.classList.remove("hidden");
  btn2.onclick = function() {nocharge()};
  btn1.onclick = function() {chargethree()};
  
}

function chargethree() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 1";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {nocharge()};
  btn1.onclick = function() {chargefour()};
  
}

function chargefour() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 1";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {nocharge()};
  btn1.onclick = function() {chargefive()};
  
}

function chargefive() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 2";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {lowcharge()};
  btn1.onclick = function() {chargesix()};
  
}

function chargesix() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 2";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {lowcharge()};
  btn1.onclick = function() {chargeseven()};
  
}

function chargeseven() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 3";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {goodcharge()};
  btn1.onclick = function() {chargeeight()};
  
}

function lowcharge() {
  screen.innerHTML = "Thats not enough power to send a message. Go Back";
  btn1.innerHTML = "Back";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {recharge()};
  btn1.onclick = function() {recharge()};
  
}

function chargeeight() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 3";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.classList.remove("hidden");
  btn2.onclick = function() {goodcharge()};
  btn1.onclick = function() {chargenine()};
  
}

function chargenine() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 4";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {powerful()};
  btn1.onclick = function() {chargeten()};
  
}
function chargeten() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 4";
  btn1.innerHTML = "Position";
  btn2.innerHTML = "Done";
  btn2.onclick = function() {powerful()};
  btn1.onclick = function() {chargeeleven()};
  
}

function chargeeleven() {
  screen.innerHTML = "Click on the position button to shine the sunlight on Mars. Energy light level: 5";
  btn1.innerHTML = "Done";
  btn2.innerHTML = "Done";
  btn2.classList.add("hidden");
  btn2.onclick = function() {powerful()};
  btn1.onclick = function() {powerful()};
  
}

function goodcharge() {
  screen.innerHTML = "Battey is charging. Please Wait...";
  btn1.innerHTML = "Send Now";
  btn2.innerHTML = "Wait";
  btn2.classList.remove("hidden");
  btn1.onclick = function() {notready()};
  btn2.onclick = function() {batteryone()};
  
}
function notready() {
  screen.innerHTML = "Not Ready. Please Wait...";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {none()};
  btn1.onclick = function() {batteryone()};
  
}
function batteryone() {
  screen.innerHTML = "Battey is charging. 5% Please Wait...";
  btn1.innerHTML = "Send Now";
  btn2.innerHTML = "Wait";
  btn2.classList.remove("hidden");
  btn1.onclick = function() {notready()};
  btn2.onclick = function() {batterytwo()};
  
}

function batterytwo() {
  screen.innerHTML = "Battey is charging. 10% Please Wait...";
  btn1.innerHTML = "Send Now";
  btn2.innerHTML = "Wait";
  btn1.onclick = function() {notready()};
  btn2.onclick = function() {batterythree()};
  
}

function batterythree() {
  screen.innerHTML = "Battey is charging. 20% Please Wait...";
  btn1.innerHTML = "Send Now";
  btn2.innerHTML = "Wait";
  btn1.onclick = function() {notready()};
  btn2.onclick = function() {batteryfour()};
  
}

function batteryfour() {
  screen.innerHTML = "Battey is charging. 30% You can send now.";
  btn1.innerHTML = "Send Now";
  btn2.innerHTML = "Wait";
  btn1.onclick = function() {sendingmessage()};
  btn2.onclick = function() {batteryfive()};
  
}

function batteryfive() {
  screen.innerHTML = "Battey is charging. 40% You can send now.";
  btn1.innerHTML = "Send Now";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn1.onclick = function() {sendingmessage()};
  btn2.onclick = function() {sendingmessage()};
  
}

function sendingmessage() {
  screen.innerHTML = "Sent successfully! Help will come.";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {helpnow()};
  btn1.onclick = function() {helpnow()};
  
}

function helpnow() {
  screen.innerHTML = "10 mins left";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {helptwo()};
  btn1.onclick = function() {helptwo()};
  
}

function helptwo() {
  screen.innerHTML = "8 mins left";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {helpthree()};
  btn1.onclick = function() {helpthree()};
  
}

function helpthree() {
  screen.innerHTML = "5 mins left";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {helpfour()};
  btn1.onclick = function() {helpfour()};
  
}

function helpfour() {
  screen.innerHTML = "2 mins left";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {helpfive()};
  btn1.onclick = function() {helpfive()};
  
}

function helpfive() {
  screen.innerHTML = "You are now going back to earth";
  btn1.innerHTML = "OK";
  btn2.innerHTML = "";
  btn2.classList.add("hidden");
  btn2.onclick = function() {helpcompleated()};
  btn1.onclick = function() {helpcompleated()};
  
}

function helpcompleated() {
  screen.innerHTML = "You are home now. Good for you! Would you like to play again?";
  btn1.innerHTML = "Play again";
  btn2.innerHTML = "Go back to Energy level";
  btn2.onclick = function() {recharge()};
  btn1.onclick = function() {play()};
  
}