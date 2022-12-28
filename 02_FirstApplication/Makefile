.PHONY : all compile deploy test console

compile:
	truffle compile

deploy:
	truffle migrate --reset --compile-all --network development --config truffle-config.js
	truffle networks

test:
	truffle test --show-events

console:
	truffle console --url http://127.0.0.1:8545