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
    it('cannot exceed max temperature', function() {
      thermostat.powerSavingModeOn();
      thermostat.temperatureTarget = 25;
      expect(function (){
        thermostat.up();
      }).toThrowError("Power saving mode is on, cannot exceed 25degrees");
      expect(thermostat.temperatureTarget).toEqual(25);
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
    it ('sets max temp to 25 when power saving mode is on', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.maxTemp).toEqual(25);
    });

    it('sets max temp tp 32 when max temp is off', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.maxTemp).toEqual(32);
    });
  });
});
