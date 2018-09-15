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

  display();

  $('#up-button').click(function(){
    thermostat.up();
    display();
  });

  $('#down-button').click(function(){
    thermostat.down();
     display();
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