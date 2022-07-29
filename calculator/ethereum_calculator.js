// node connection
const { BigNumber, ethers } = require("ethers");
// node api
const Web3 = require('web3');

const web3 = new Web3("https://cloudflare-eth.com")

// swapAmount: wei
class EthereumCalculator {
  constructor(routerABI, routerAddress, swapFrom, swapTo, swapAmount, swapToDecimal) {
    this.routerABI = routerABI;
    this.routerAddress = routerAddress;
    this.swapFrom = swapFrom;
    this.swapToDecimal = swapToDecimal
    this.swapTo = swapTo;
    this.swapAmount = swapAmount;
    this.routerContract = new web3.eth.Contract(
      this.routerABI,
      this.routerAddress,
    );
  }

  async getSellPrice() {
    const pathToSell = await this.routerContract.methods.getAmountsOut(
      this.swapAmount,
      [ this.swapFrom, this.swapTo ],
    ).call();
    return web3.utils.fromWei(pathToSell[pathToSell.length - 1], 'ether') * 100/ 100;
  }

  async getBuyPrice() {
    const pathToBuy = await this.routerContract.methods.getAmountsIn(
      this.swapAmount,
      [ this.swapTo, this.swapFrom ],
    ).call();
    return Math.floor(ethers.utils.parseUnits(pathToBuy[0], this.swapToDecimal) * 100) / 100
  }
}

module.exports = EthereumCalculator;
