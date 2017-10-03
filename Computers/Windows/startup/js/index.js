var answer;

function bs() {
  alert('Remember: OK = Yes and Cancel = No. Click on the Cancel button a few times to exit.');
  var answer = confirm("First turn on your computer and hold the F2 key. This only works on computers that are or used to run Windows 7 or below. Did it enter into the Bios settings?");
if( answer == true ){
   alert("Go to the Advanced section then look for Stata Configuration. Then change the Stata Mode to a differnt setting. If you cannot find it, look all around the bios settings. Then exit saving changes and try booting up again.");
}
else {
  var answer = confirm("Hold the power button until the computer powers off. Now press the power button and then hold the delete key (Not the backspace key.) Did it go into the Bios settings?")
if( answer == true ){
   alert("Go to the Advanced section then look for Stata Configuration. Then change the Stata Mode to a differnt setting. If you cannot find it, look all around the bios settings. Then exit saving changes and try booting up again.");
}
  else{
    alert("Hold the power button until the computer powers off. Then press the power button to turn it on. When you see the screen popup, look around for a text ('menu' or 'setup') and then press and hold on that key to go to the setup. If the screen disappers to fast, use a video camra or phone camra to replay. Pause at the screen right when it turns on. (To start this, restart to step one on this text).  If its a menu, press on the 'F (number)' key (On the top of the keybord) on the text 'BIOS Settings' or 'BIOS Setup'");
    alert("Go to the Advanced section then look for Stata Configuration. Then change the Stata Mode to a differnt setting. If you cannot find it, look all around the bios settings. Then exit saving changes and try booting up again.");
  }
}
}

function em() {
  var answer = confirm("You will need a Windows Installer CD and a flash drive inorder to fix your problem. (This is for Windows 7) If not, you will lose all data and cannot continue the steps.");
  
  if( answer == true ){
   alert("Turn on your computer. Then boot into the CD. Select you language and then click Repair your computer. If its not booting into CD, Hold the power button until the computer powers off and then turn it back on. Hold the F12 key for the bootup menu use the keybord to move highlighted text and press enter to select.");
    alert("Now click the next step and you will see repairing options. Click on the System Image Recovery. Error message will come up. Click Cancel then  Next then Advanced then Install a driver then OK. Dobble Click on the computer. Then Plug in your flash drive.");
    alert("Now click on the Local Disk and then click users and coppy all your data into the flash drive. Big files must be coppyed separately in one coppy. To enter into your flash drive, Click computer then your flash drive. You must right click to coppy and paste.");
  alert("When you are done, Reinstall Windows.");
  }
  
}

function ns() {
  var answer = confirm("1. Is it slow on booting up? 2. Is it keep restarting after it looks like its Starting Windows? Cancel = 1 and OK = 2");
  if( answer == true ){
   alert("When your computer restarts keep pressing the F8 button rapidly until you see a menu.");
    alert("Use the keybord arrows to move the highlighted text. Move it to 'Disable automatic restart on system failure' then press enter");
     var answer = confirm("Now dose it show a blue screen? OK = Yes and Cancel = No");
    if( answer == true ){
   alert("Click on the 'Blue Screen' button to Continue.");
}
    else {
      alert("Click on 'Error message' to continue.")
    }
}
else {
  alert("Click on the 'Verry slow or stuck' button to Continue");
}
  
}

function ss() {
  alert("Hold the power button until the computer turns off. Then turn it back on. Keep pressing the F8 button rapidly until you see a menu. Use the keybord arrows to move the highlighted text. Move the highlight text to the 'Last Known Good Configuration (advanced).' Then press enter");
  alert("If it dose not work restart to step one but instead of doing 'Last Known Good Configuration (advanced)' Just press enter on 'Repair Your Computer.' Then Click on startup repair and if it asks for system restore click restore.");
}