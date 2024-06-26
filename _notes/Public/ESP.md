---
title : ESP
feed: show
date : 22-04-2021
---

I plan to use the ESP8266 for multiple projects so this will be the information I've learned about a generic ESP8266-12F setup.

# Resources
[ESP8266 Tutorial](https://tttapa.github.io/ESP8266/Chap02%20-%20Hardware.html)
[rayshobby.net](https://rayshobby.net/wordpress/tips-and-tricks-for-using-esp8266/)
[tttapa.github.io](https://tttapa.github.io/ESP8266/Chap04%20-%20Microcontroller.html)

# Todo
- [x] Clear all majority of copper ✅ 2023-11-18
- [x] Increase track clearance where possible ✅ 2023-11-18
- [x] Move vias from under esp to anywhere else ✅ 2023-11-18

# Power
## Requirements:
- 3.3v
- Amperage unknown
## Plan:
Use linear regulator(AMS1117-3-3v) to drop input voltage(5-12v). Use filter caps (10pF?) on input and output
## Unknown/ToDo:
Find amperage/power reqs

# Programming/UART
I need a version of this to work as it needs to be programmed initially and should have a way of updating firmware after use.
## USB UART
## JTAG

# V0
![V0 Circuit](/assets/img/Pasted image 20240202225235.png)
## Issues
- MicroUSB soldering issues
	- The traces and pins hardly overlap making it very difficult to solder
		- The solution is add more adjustment to the slots or make the traces extend further into the footprint
	- Bad connection
	- Might be weak with repeated use
	- Might look for better USB option, USB-C?
- The pinout of the ESP12-F completely wrong
	- Several pins grounded that shouldn't
	- RX and TX in wrong place
	- Need to reroute whole board
- Buttons and surrounding pins needed modification
	- SW1 needed ground from SW2
	- SW2 needed to cut connection from the resistor to ground
		- So that when pressed it pulls to ground
- New ideas
	- Add status LEDs
		- TX,RX, Power, +customizable?
	- Rearange the caps to properly reflect the schematic and move away from USB to protect
	- Mounting holes or standoffs
	- Add JTAG or programming pins
	- JST connectors for pinouts?
	- Also add auto programming and reset
	- Also research other features

# V0.1
Works, was able to upload a blink program to the esp over USB.
## Problems
- The button is not connected to anything
- The leds are not bright, should increase current
	- Can hardly see LEDs flash on TX/RX
- Needs more robust IO pins, maybe logic level converters?
- Want SPI/I2C junction breakouts

![V0.1 Circuit](/assets/img/Pasted image 20240322051337.png)
