// import { HungryBear } from './../js/hungrybear.js';
import { bear, eatSmall } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.name = "Fuzzy";
    fuzzy.foodLevel = 10;
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });

  it('you should get eaten if 10 seconds pass without a feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return blueberries and food level up 5 ', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual('The bear ate the blueberries! Food level goes up 5!');
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should return salmon and food level up 15', function() {
    expect(fuzzy.eatLarge("salmon")).toEqual('The bear ate the salmon! Food level goes up 15!')
    expect(fuzzy.foodLevel).toEqual(25);
  });

});
