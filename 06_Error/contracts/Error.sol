// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//pragma solidity >=0.4.22 <0.9.0;

contract Error {
    uint256 public number;
    error InsufficientBalance(uint256 balance, uint256 withdrawAmount);

    function testReqiure(uint256 _i) public pure {
        require(_i > 10, "arg must be greater than 10");
    }

    function testRevert(uint256 _i) public pure {
        if (_i <= 10) {
            revert("arg must be greater than 10");
        }
    }

    function testAssert() public view {
        // Assert应该只用于测试内部错误。
        // 和检查不变量。

        // 这里我们断言num总是等于0
        // 因为不可能更新num的值

        assert(number == 0);
    }

    function testCustomError(uint256 _withdraw) public view {
        //https://github.com/trufflesuite/ganache/issues/1331
        //uint256 balance = address(this).balance;
        uint256 balance = payable(address(this)).balance;
        if (balance < _withdraw) {
            revert InsufficientBalance(balance, _withdraw);
        }
    }

    receive() external payable {}

    fallback() external payable {}
}
