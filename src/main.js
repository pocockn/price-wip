// Import the Uniswap SDK
const UNISWAP = require('@uniswap/sdk');
const { TradeType } = require("@uniswap/sdk");
const ethers = require("ethers")
const Web3 = require('web3');
const exchanges = require("../exchanges/exchanges.json");

// Use the mainnet
const network = "homestead";

// Specify your own API keys
// Each is optional, and if you omit it the default
// API key for that service will be used.
const provider = ethers.getDefaultProvider(network, {
  etherscan: "HPYZM6X1CTA5N6SJNGQ185C1SQ7KD82J95",
  infura: "01c8644cabb9484faaf993191ca9375c",
});

// Tokens with the address and the symbols
const USDC = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin');
const DAI = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai');
const USDT = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'usdt');
const CRV = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xD533a949740bb3306d119CC777fa900bA034cd52', 18, 'CRV', 'Curve DAO Token');
const WBTC = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'wbtc', 'wbtc');
const CVX = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B', 18, 'CVX', 'Convex Token');
const YFI = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18, 'YFI', 'yfi');
const SPELL = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x090185f2135308BaD17527004364eBcC2D37e5F6', 18, 'SPELL', 'Spell Token');

const tokens = [
  { token: UNISWAP.WETH[USDC.chainId], name: "USDC/ETH" },
  { token: UNISWAP.WETH[USDT.chainId], name: "USDT/ETH"},
  { token: UNISWAP.WETH[DAI.chainId], name: "DAI/ETH"},
  { token: UNISWAP.WETH[CRV.chainId], name: "CRV/ETH"},
  { token: UNISWAP.WETH[WBTC.chainId], name: "WBTC/ETH"},
  { token: UNISWAP.WETH[SPELL.chainId], name: "SPELL/ETH" },
  { token: UNISWAP.WETH[YFI.chainId], name: "YFI/ETH" }
]

// retrieve the pairs price
async function pairs() {
  let pair = [], route = [];
  pair[0] = await UNISWAP.Fetcher.fetchPairData(USDC, UNISWAP.WETH[USDC.chainId], provider)
  pair[1] = await UNISWAP.Fetcher.fetchPairData(USDT, UNISWAP.WETH[USDT.chainId], provider)
  pair[2] = await UNISWAP.Fetcher.fetchPairData(DAI, UNISWAP.WETH[DAI.chainId], provider)
  pair[3] = await UNISWAP.Fetcher.fetchPairData(CRV, UNISWAP.WETH[CRV.chainId], provider)
  pair[4] = await UNISWAP.Fetcher.fetchPairData(WBTC, UNISWAP.WETH[WBTC.chainId], provider)
  pair[5] = await UNISWAP.Fetcher.fetchPairData(CVX, UNISWAP.WETH[CVX.chainId], provider)
  pair[6] = await UNISWAP.Fetcher.fetchPairData(SPELL, UNISWAP.WETH[SPELL.chainId], provider)
  pair[7] = await UNISWAP.Fetcher.fetchPairData(YFI, UNISWAP.WETH[YFI.chainId], provider)

  route[0] = new UNISWAP.Route([ pair[0] ], UNISWAP.WETH[USDC.chainId])
  route[1] = new UNISWAP.Route([ pair[1] ], UNISWAP.WETH[USDT.chainId])
  route[2] = new UNISWAP.Route([ pair[2] ], UNISWAP.WETH[DAI.chainId])
  route[3] = new UNISWAP.Route([ pair[3] ], UNISWAP.WETH[CRV.chainId])
  route[4] = new UNISWAP.Route([ pair[4] ], UNISWAP.WETH[WBTC.chainId])
  route[5] = new UNISWAP.Route([ pair[5] ], UNISWAP.WETH[CVX.chainId])
  route[6] = new UNISWAP.Route([ pair[6] ], UNISWAP.WETH[SPELL.chainId])
  route[7] = new UNISWAP.Route([ pair[7] ], UNISWAP.WETH[YFI.chainId])

  console.log("Uniswap token prices:")
  for (let i = 0; i < tokens.length; i++) {
    const tokenAmount = new UNISWAP.TokenAmount(tokens[i].token, '1000000000000000000');
    const trade = new UNISWAP.Trade(route[i], tokenAmount, TradeType.EXACT_INPUT);
    console.log("execution price ", tokens[i].name, " :", trade.executionPrice.toSignificant(6));
  }
}

let pancakeSwapAbi =  [
  {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},
];

async function PancakeSwap() {
  const web3 = new Web3(exchanges[2].provider);
  const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
  const USDTokenAddress  = "0x55d398326f99059fF775485246999027B3197955" //USDT
  let bnbToSell = web3.utils.toWei("1", "ether") ;
  let amountOut;
  try {
    let router = await new web3.eth.Contract( pancakeSwapAbi, exchanges.pancake.factory_address );
    amountOut = await router.methods.getAmountsOut(bnbToSell, [BNBTokenAddress ,USDTokenAddress]).call();
    amountOut =  web3.utils.fromWei(amountOut[1]);
  } catch (error) {}
  if(!amountOut) return 0;
  return amountOut;
}

function main() {
  pairs().then().catch(error => console.log(error.message));
}

main();
