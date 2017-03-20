var bod=document.querySelector("body");
var msg=document.querySelector(".msg");
var hrs=document.getElementById('hrs');
var mins=document.getElementById('mins');
var amPM=document.getElementById('amPM');
var secs=document.getElementById('secs');

setInterval(function(){
  // var zero="0"; //For formatting minutes and seconds to 2 digits.
  var clock=new Date();
  var testHrs=clock.getHours();
  hrs.innerHTML=testHrs;
  //  If hours are over 11 then it's PM
    if (testHrs>=12){
      amPM.innerHTML="PM";
      if (testHrs>17){
        bod.style.backgroundImage="url('./images/night.jpg')";
        msg.innerHTML="Hope you're enjoying your evening";
      }else{
        bod.style.backgroundImage="url('./images/noon.jpg')";
        msg.innerHTML="Good Afternoon!";
      }
    }else {
      amPM.innerHTML="AM";
      bod.style.backgroundImage="url('./images/morning.jpg')";
      msg.innerHTML="Good Morning Sunshine!";
    }
  var testMins= clock.getMinutes();
  //  If minutes are single digit add preceding '0'
    if(testMins<10){
      mins.innerHTML="0"+testMins;
    }
    else{
      mins.innerHTML=testMins;
    }
  var testSecs= clock.getSeconds();
  //  If seconds are single digit add preceding '0'
    if(testSecs<10){
      secs.innerHTML="0"+testSecs;
    }
    else{
      secs.innerHTML=testSecs;
    }
}, 1000)
