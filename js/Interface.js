$( document ).ready(function(){
  thermostat = new Thermostat()

  var displayTemp = function(){
    $('#temperature').text(thermostat.getTemperature());
  }

  var displayEnergyUsage = function(){
    $('#energy-usage').text(thermostat.energyUsage());
  }

  var display = function(){
    displayTemp();
    displayEnergyUsage();
  }

  setInterval(display,0);

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

  $('#up-button').click(function(){
    thermostat.up();
  });

  $('#down-button').click(function(){
    thermostat.down();
  });

  $('#psm-on').click(function(){
    thermostat.switchPSMOn();
  });

  $('#psm-off').click(function(){
    thermostat.switchPSMOff();
  });

  $('#reset-button').click(function(){
    thermostat.resetTemp();
  });


});