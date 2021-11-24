const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();
  it('grabs the tempature', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increase temp by 1', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('decrease temp by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('only increases to the max temp', () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('changes max temp if PowerSavingMode is off', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it('sets the temperature back to defaul on reset', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('temp cannot dip below the minimum temp', () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  })

});