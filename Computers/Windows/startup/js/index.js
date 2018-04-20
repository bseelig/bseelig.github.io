var answer;

function bs() {
  var answer = confirm("First identify what your computer manufacturer is. Here are examples: HP, Dell, and Acer. On certain computers, there is a specific key that you need to press to open the BIOS or UEFI settings. This setting lets you adjust your computer to work a certain way. On most computers such as Dell and Acer, you press the F2 key or Delete (Not Backspace) key. On HP computers, you press the F10 key. To start, you need to restart or start your computer by pressing one of those keys depending on what manufacturer your computer is. Remember that these keys are on the very top of the keyboard. If this does not work, click the Cancel for other solutions. If it does work, click the OK button.");
if( answer == true ){
   alert("On a BIOS or UEFI computer, use the keyboard arrows to navigate and press enter to select. If you see a cursor, use the mouse to navigate and click to select. Open the Advanced tab where you see the text Advanced then look for SATA Configuration. Change the SATA Mode from its current setting to a different setting. If you cannot find it, look all around the bios settings using all the tabs or sections. To exit, use the escape key on the top left. Make sure that you save changes before exiting. You are now finished, click OK to exit.");
}
else {
  var answer = confirm("If you do not know how to open the BIOS or UEFI settings, look around the screen right when you turn it on. There is a key that you need to press that should show you how to open a setting. If there isn't, press the f keys from f1-f12 including the delete key. If this does not work, click the Cancel button for other solutions. If it does work, click the OK button.")
if( answer == true ){
   alert("On a BIOS or UEFI computer, use the keyboard arrows to navigate and press enter to select. If you see a cursor, use the mouse to navigate and click to select. Open the Advanced tab where you see the text Advanced then look for SATA Configuration. Change the SATA Mode from its current setting to a different setting. If you cannot find it, look all around the bios settings using all the tabs or sections. To exit, use the escape key on the top left. Make sure that you save changes before exiting. You are now finished, click OK to exit.");
}
  else{
    alert("On Windows 8 and 10 you need to enter the troubleshooting menu. When you first turn on the computer, the Windows logo shows up. Press and hold the power button until the computer turns off. Repeat this step one more time after you turn it back on. When finished, you will enter in a troubleshooting menu. Use the mouse to click on the /Troubleshoot/Advanced options/UEFI Firmware Settings. Your computer should automatically restart into the setting. Click Ok to continue");
    alert("On a BIOS or UEFI computer, use the keyboard arrows to navigate and press enter to select. If you see a cursor, use the mouse to navigate and click to select. Open the Advanced tab where you see the text Advanced then look for SATA Configuration. Change the SATA Mode from its current setting to a different setting. If you cannot find it, look all around the bios settings using all the tabs or sections. To exit, use the escape key on the top left. Make sure that you save changes before exiting. You are now finished, click OK to exit.");
  }
}
}

function em() {
  var answer = confirm("You will need a Windows Installer CD and a flash drive inorder to fix your problem. If not, you will lose all data and cannot continue the steps.");
  
  if( answer == true ){
   alert("Turn on your computer. Then boot into the CD. Select you language and then click Repair your computer. If its not booting into CD, Hold the power button until the computer powers off and then turn it back on. Hold the F12 key for the bootup menu use the keybord to move highlighted text and press enter to select. Click Ok to continue.");
    alert("Now click the next step and you will see repairing options. Click on the System Image Recovery. Error message will come up. Click Cancel then  Next then Advanced then Install a driver then OK. Dobble Click on the computer. Then Plug in your flash drive. Click Ok to continue");
    alert("Now click on the Local Disk and then click users and coppy all your data into the flash drive. Big files must be coppyed separately in one coppy. To enter into your flash drive, Click computer then your flash drive. You must right click to coppy and paste. Click Ok to continue");
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
  alert("Hold the power button until the computer turns off. Then turn it back on. Keep pressing the F8 button rapidly until you see a menu. Use the keybord arrows to move the highlighted text. Move the highlight text to the 'Last Known Good Configuration (advanced).' Then press enter. Wait for at least 5 mins before turning it off. Click Ok to continue.");
  alert("If it dose not work restart to step one but instead of doing 'Last Known Good Configuration (advanced)' Just press enter on 'Repair Your Computer.' Then Click on startup repair and if it asks for system restore click restore.");
}