function Thermostat() {
  this.temperatureTarget = 20;
  this.MINIMUMTEMPERATURE = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25
}

Thermostat.prototype.up = function(){
  if(this.powerSavingMode === true && this.temperatureTarget === 25) {
    throw new Error("Power saving mode is on, cannot exceed 25degrees");
  }
  this.temperatureTarget += 1;
}

Thermostat.prototype.down = function(){ 
  if (this.temperatureTarget === this.MINIMUMTEMPERATURE) {
    throw new Error("Cannot go below minimum temperature");
  }
  this.temperatureTarget -= 1;
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
    return this.maxTemp = 25
  }
  this.maxTemp = 32
}


