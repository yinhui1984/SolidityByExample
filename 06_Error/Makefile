.PHONY: all clean compile test

compile:
	truffle compile

test:
	truffle test --show-events

deploy:
	truffle migrate --reset --network development --config truffle-config.js
	truffle networks
