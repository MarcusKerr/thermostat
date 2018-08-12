$( document ).ready(function(){
  thermostat = new Thermostat()

  var displayTemp = function(){
    $('#temperature').text(thermostat.getTemperature());
  }

  var displayEnergyUsage = function(){
    $('#energy-usage').text(thermostat.energyUsage());
  }

  setInterval(displayTemp,0);
  setInterval(displayEnergyUsage,0);

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