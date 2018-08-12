'use strict';

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ('has a starting value of 20 degress', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe ('up', function() {
    it ('increases the temperature target by 1 degree', function() {
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(21);
    });
    it('cannot exceed max temperature', function() {
      for( var i = 0; i < 6; i++){
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('down', function() {
    it ('decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });

    it('has a minumum of 10degrees', function(){
      for(var i = 0; i < 111; i++){
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });


  describe('power saving mode', function() {
    it ('has power saving mode on by default', function(){
      expect(thermostat.isPSMOn()).toBe(true);
    });

    it('can switch power saving mode off', function(){
      thermostat.switchPSMOff();
      expect(thermostat.isPSMOn()).toBe(false);
    });

    it('can switch PSM back on', function(){
      thermostat.switchPSMOn();
      expect(thermostat.isPSMOn()).toBe(true);
    });
    
    describe('power saving mode on', function() {
      it('has a maximum temperature of 25degrees', function(){
        for (var i = 0; i < 6; i++){
          thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
      });

      it('brings the temperature down to 25degrees', function(){
        thermostat.switchPSMOff();
        for (var i=0; i<12; i++){
          thermostat.up();
        }
        thermostat.switchPSMOn();
        expect(thermostat.getTemperature()).toEqual(25);
      });
    });

    describe('power saving mode off', function() {
      it('has a maximum temperature of 32degrees', function() {
        thermostat.switchPSMOff();
        for (var i = 0; i < 13; i++){
          thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(32);
      });
    });
  });

  describe('reset', function() {
    it('resets the temperature to 20degrees', function() {
      for (var i = 0; i < 10; i++){
        thermostat.down();
      }
      thermostat.resetTemp();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('energy usage levels', function(){
    it('returns low-usage when temperature is below 18', function(){
      for (var i = 0; i < 3; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('returns medium-usage when temperature is between 18 and 25', function(){
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('returns high-usage when temperature is above 25degrees', function(){
      thermostat.switchPSMOff();
      for (var i = 0; i < 9; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
