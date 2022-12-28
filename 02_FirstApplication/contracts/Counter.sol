// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;
    event CountChanged(string, uint256);

    function get() public view returns (uint256) {
        return count;
    }

    function inc() public {
        count += 1;
        emit CountChanged("count number changed, current value:", count);
    }

    function dec() public {
        count -= 1;
        emit CountChanged("count number changed, current value:", count);
    }
}
