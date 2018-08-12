'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT =18;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  if(this.isMaxTemp()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function(){ 
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinTemp = function(){
  return this.temperature === this.MIN_TEMP; 
}

Thermostat.prototype.isMaxTemp = function(){
  if (this.isPSMOn()){
    return this.temperature === this.MAX_TEMP_PSM_ON;
  }
  return this.temperature === this.MAX_TEMP_PSM_OFF;
}

Thermostat.prototype.isPSMOn = function(){
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPSMOff = function(){
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPSMOn = function(){
  this.powerSavingMode = true;
}

Thermostat.prototype.resetTemp = function(){
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return "low-usage";
  }
  if(this.temperature <= this.MAX_TEMP_PSM_ON){
    return "medium-usage";
  }
  return "high-usage"
}
