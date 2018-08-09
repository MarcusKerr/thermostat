function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMPERATURE = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25
}

Thermostat.prototype.up = function(){
  if(this.powerSavingMode === true && this.temperature === 25) {
    throw new Error("Power saving mode is on, cannot exceed 25degrees");
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function(){ 
  if (this.temperature === this.MINIMUMTEMPERATURE) {
    throw new Error("Cannot go below minimum temperature");
  }
  this.temperature -= 1;
}

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
  this.setMaxTemp();
}

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
  this.setMaxTemp();
}

Thermostat.prototype.setMaxTemp = function(){
  if (this.powerSavingMode){
    return this.maxTemp = 25;
  }
  this.maxTemp = 32;
}

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18){
    return "low-usage";
  }
  else if(this.temperature < 25){
    return "medium-usage";
  }
  else
    return "high-usage"
}
