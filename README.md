# Thermostat

### Week 5 pairing assignment - Introduction to JavaScript
---

![thermo](https://user-images.githubusercontent.com/15127871/45599028-8f204300-b9dc-11e8-8ac8-6cdf3ea57efe.png)

During this project, I was tasked with learning a new language in a short period of time in order and producing a product. I completed the first 4 user stories during pairing sessions and completed the remainder of the project alone.

## Goals

* I can learn new languages quickly
* I wrote code that is easy to change
* I know how my language works
* I can build web apps
* I can test-drive my code

## How to use

Clone this project to your machine.

`$ git clone https://github.com/MarcusKerr/thermostat.git`

Once cloned, open `index.html` and you're ready to play!

<img width="1440" alt="index" src="https://user-images.githubusercontent.com/15127871/45594814-b6552100-b998-11e8-9bbc-f42bdb654b4a.png">


#### Increase/decrease the temperature

Use the Up and Down arrows to increase or decrease the temperature. The temperature will be incremented or decremented by 1 per click.

<img width="1440" alt="up down" src="https://user-images.githubusercontent.com/15127871/45594759-e05a1380-b997-11e8-9e70-81f4bb341ac6.png">

#### Power saving mode

When power saving mode is switched on, the maximum temperature is 25, when off the temperature can be increased to 32.

<img width="1440" alt="psm" src="https://user-images.githubusercontent.com/15127871/45594764-0b446780-b998-11e8-8e0e-718683885203.png">

### Energy usage

The usage will update depending on the thermostat's current temperature. < 18 is low, > 25 is high usage.

<img width="1440" alt="usage" src="https://user-images.githubusercontent.com/15127871/45594821-f0262780-b998-11e8-9ae6-407e977e11b6.png">

#### Reset

The Reset button will reset the temperature to 20.

<img width="1440" alt="reset" src="https://user-images.githubusercontent.com/15127871/45594770-1bf4dd80-b998-11e8-8ab3-4819261c2f66.png">

## Running tests

To run the entire test suite open `SpecRunner.html`.

<img width="1436" alt="tests" src="https://user-images.githubusercontent.com/15127871/45599094-b0356380-b9dd-11e8-82ba-3e2c4aabe155.png">


## Specification

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
