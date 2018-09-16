$( document ).ready(function(){
  thermostat = new Thermostat()

  var displayTemp = function(){
    $('#temperature').text(thermostat.getTemperature());
  }

  var displayEnergyUsage = function(){
    $('#energy-usage').text(thermostat.energyUsage());
  }

  var update = function(){
    displayTemp();
    displayEnergyUsage();
  }

  update();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=d4f49d3de92785f363a03abcddaf23da&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

  $('#up-button').click(function(){
    thermostat.up();
    update();
  });

  $('#down-button').click(function(){
    thermostat.down();
    update();
  });

  $('#psm-on').click(function(){
    thermostat.switchPSMOn();
    update();
  });

  $('#psm-off').click(function(){
    thermostat.switchPSMOff();
  });

  $('#reset-button').click(function(){
    thermostat.resetTemp();
    update();
  });
});
