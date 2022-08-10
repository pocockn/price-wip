const EthereumCalculator = require('../calculator/ethereum_calculator');
const { tokens, routers, ABIs, swapFrom } = require('../addresses/ethereum');
const Web3 = require('web3');
const web3 = new Web3('https://cloudflare-eth.com');

async function estimateProfitAfterTradingFees(uniswapPrice, sushiswapPrice) {
	if (uniswapPrice > sushiswapPrice) {
		return Math.abs(sushiswapPrice - uniswapPrice);
	}

	console.log(`trade is not profitable from SushiSwap to Uniswap`);
}

const main = async () => {
	//listening for incoming new blocks
	const newBlockEvent = web3.eth.subscribe('newBlockHeaders');

	newBlockEvent.on('connected', () => {
		console.log('\nBot listening!\n');
	});

	// user input of 2 tokens
	const swapAmount = '1000000000000000000'; // in wei = 1 ethereum

	await Promise.all(
		tokens.map(async (token) => {
			const uniswapV2EthCalc = new EthereumCalculator(
				ABIs.uniswapV2ABI,
				routers.uniswapV2,
				swapFrom.WETH,
				token.address,
				swapAmount,
				token.decimal,
			);
			const uniswapV2V2BuyPrice = await uniswapV2EthCalc.getBuyPrice();
			console.log('Uniswap:');
			console.log('WETH', '/', token.name, ' ', uniswapV2V2BuyPrice);

			const sushiSwapEthCalc = new EthereumCalculator(
				ABIs.uniswapV2ABI,
				routers.sushiswapV2,
				swapFrom.WETH,
				token.address,
				swapAmount,
				token.decimal,
			);
			const sushiSwapV2V2BuyPrice = await sushiSwapEthCalc.getBuyPrice();
			console.log('Sushi Swap: ');
			console.log('WETH', '/', token.name, ' ', sushiSwapV2V2BuyPrice);

			let estimatedProfit = await estimateProfitAfterTradingFees(uniswapV2V2BuyPrice, sushiSwapV2V2BuyPrice);
			console.log('estimated profit on trade ', 'WETH/', token.name, ' ', estimatedProfit);

			// const gasLimit = 100000;
			let gasPrice;
			await web3.eth.getGasPrice().then((result) => {
				gasPrice = web3.utils.fromWei(result, 'ether');
			});
			console.log('gas price in Eth ', gasPrice);
		}),
	);
};

main();
