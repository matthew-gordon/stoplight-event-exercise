/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stop = document.getElementById('stopButton');
var slow = document.getElementById('slowButton');
var go = document.getElementById('goButton');
var stopBulb = document.querySelector('div#stopLight.bulb');
var slowBulb = document.querySelector('div#slowLight.bulb');
var goBulb = document.querySelector('div#goLight.bulb');

  function turnOnOff(e) {
    if ( e.target !== e.currentTarget ) {
      var clickedItem = e.target;
      if ( e.target === stop) {
          e.target.classList.add('on');
          slow.classList.remove('on');
          go.classList.remove('on');
          stopBulb.style.backgroundColor= 'red';
          slowBulb.style.backgroundColor= '#111';
          goBulb.style.backgroundColor= '#111';
      } else if ( e.target === slow ) {
          e.target.classList.add('on');
          stop.classList.remove('on');
          go.classList.remove('on');
          stopBulb.style.backgroundColor= '#111';
          slowBulb.style.backgroundColor= 'yellow';
          goBulb.style.backgroundColor= '#111';
      } else if ( e.target === go ) {
          e.target.classList.add('on');
          stop.classList.remove('on');
          slow.classList.remove('on');
          stopBulb.style.backgroundColor= '#111';
          slowBulb.style.backgroundColor= '#111';
          goBulb.style.backgroundColor= 'green';
      }
    }
    e.stopPropagation();
  }
document.getElementById('controls').addEventListener('click', turnOnOff, true);
