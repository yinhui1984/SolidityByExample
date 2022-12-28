.PHONY: all init compile deploy console test

# init:
# 	truffle init
# 	truffle create all HelloWorld

compile:
	truffle compile

deploy:
	truffle migrate --reset --compile-all --network loc_development_development --config truffle-config.js
	truffle networks

console:
	truffle console --url http://127.0.0.1:8545

test:
	truffle test