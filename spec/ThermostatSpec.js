'use strict';

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it (' has a start value of 20 degress', function() {
    expect(thermostat.temperatureTarget).toEqual(20);
  });

  describe ('up', function() {
    it ( 'increases the temperature target by 1 degree', function() {
      thermostat.up()
      expect(thermostat.temperatureTarget).toEqual(21);
    });
    
  });

  describe ('down', function() {
    it ( 'decreases the temperature target by 1 degree', function() {
      thermostat.down()
      expect(thermostat.temperatureTarget).toEqual(19);
    });

    it('cannot go below the minimum temperature', function(){
      thermostat.temperatureTarget = 10;
      expect(function (){
        thermostat.down();
      }).toThrowError("Cannot go below minimum temperature");
      expect(thermostat.temperatureTarget).toEqual(10);
    });
  });

  describe ('minumum temperature', function(){
    it ('the minumum temp is 10', function() {
      expect(thermostat.MINIMUMTEMPERATURE).toEqual(10);
    });
  });

  describe ('power saving mode', function() {
    it ('when on, max temp is 25', function() {
      thermostat.powerSavingModeOn();
      thermostat.temperatureTarget = 25;
      expect(function (){
        thermostat.up();
      }).toThrowError("Power saving mode is on, cannot exceed 25degrees");
      expect(thermostat.temperatureTarget).toEqual(25);
    });
  });
});
