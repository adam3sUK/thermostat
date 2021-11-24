class Thermostat {
  constructor() {
    this.default = 20;
    this.temp = this.default;
    this.powerSaving = true;
    this.maxtemp = 25;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if(this.temp < this.maxtemp) {
      this.temp++;
    } 
  }

  down() {
    if(this.temp > 10) {
      this.temp--;
    }
  }

  setMaxTemp() {
    if (this.powerSaving) {
      this.maxtemp = 25;
    } else {
      this.maxtemp = 32;
    }
  }

  setPowerSavingMode(boolean) {
    this.powerSaving = boolean;
    this.setMaxTemp();
  }

  reset() {
    this.temp = this.default;
  }

  energyUsage() {
    if(this.temp < 18) {
      return "Low usage";
    } else if (this.temp <= 25) {
      return "Medium usage";
    } else {
      return "High usage";
    }
  }


}

module.exports = Thermostat;