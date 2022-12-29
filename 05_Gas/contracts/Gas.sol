// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/*
你需要为一笔交易支付多少以太币？
[gas数量] * [gas价格]

其中：
  gas是一个计算单位
  耗费的gas是指在一次交易中使用的gas总量
  gas price是指你愿意为每个gas支付多少ether
*/

contract Gas {
    uint256 public loopCount;
    event gasPrice(uint256);
    event gasLeft(uint256);
    event gasUsed(uint256);
    event loop(uint256);

    function setLoopCount(uint256 c) public {
        loopCount = c;
    }

    /*
There are 2 upper bounds to the amount of gas you can spend
  - gas limit (max amount of gas you're willing to use for your transaction, set by you)
  - block gas limit (max amount of gas allowed in a block, set by the network)
  */
    function eatGas() public {
        emit gasPrice(tx.gasprice);
        uint256 i = loopCount;
        uint256 startGas = gasleft();
        while (i > 0) {
            emit loop(i);
            i -= 1;
            emit gasLeft(gasleft());
        }
        emit gasUsed(startGas - gasleft());
    }
}
