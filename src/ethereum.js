const EthereumCalculator = require('../calculator/ethereum_calculator');
const { tokens, routers, ABIs, swapFrom } = require('../addresses/ethereum');

const main = async () => {
  // user input of 2 tokens
  const swapAmount = '1000000000000000000'; // in wei = 1 ethereum

  console.log("Uniswap:")
  await Promise.all(tokens.map(async (token) => {
    const uniswapV2EthCalc = new EthereumCalculator(ABIs.uniswapV2ABI, routers.uniswapV2, swapFrom.WETH, token.address, swapAmount, token.decimal);
    const uniswapV2V2BuyPrice = await uniswapV2EthCalc.getBuyPrice();
    console.log("WETH", "/", token.name, " ", uniswapV2V2BuyPrice)
  }));

  console.log("--------")

  console.log("SushiSwap:")
  await Promise.all(tokens.map(async (token) => {
    const sushiSwapEthCalc = new EthereumCalculator(ABIs.uniswapV2ABI, routers.sushiswapV2, swapFrom.WETH, token.address, swapAmount, token.decimal);
    const sushiSwapV2V2BuyPrice = await sushiSwapEthCalc.getBuyPrice();
    console.log("WETH", "/", token.name, " ", sushiSwapV2V2BuyPrice)
  }));
}

main().catch(error => console.log(error));
