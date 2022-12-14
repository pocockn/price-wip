const tokens = [
	// { name: 'DAI', address: '0x6b175474e89094c44da98b954eedeac495271d0f', decimal: 18 },
	//{ name: 'USDC', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', decimal: 6 },
	 { name: 'USDT', address: '0xdac17f958d2ee523a2206206994597c13d831ec7', decimal: 6 },
	// { name: 'UNI', address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', decimal: 18 },
	// { name: 'WBTC', address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', decimal: 8 },
	// { name: 'YFI', address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', decimal: 18 },
	// TODO: Work out why SPELL and CVX error when attempting to get the price.
	// { name: "SPELL", address: '0x090185f2135308BaD17527004364eBcC2D37e5F6', decimal :  }
	// { name: "CVX", address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B', decimal :  },
];

const swapFrom = {
	WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
};

const routers = {
	uniswapV2: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
	sushiswapV2: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
};

const factories = {
	uniswapV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
	sushiswapV2: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
};

const ABIs = {
	uniswapV2ABI: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_factory',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_WETH',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'WETH',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'tokenA',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'tokenB',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amountADesired',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountBDesired',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountAMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountBMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'addLiquidity',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountA',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountB',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amountTokenDesired',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountTokenMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETHMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'addLiquidityETH',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountToken',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETH',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'factory',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOut',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveOut',
					type: 'uint256',
				},
			],
			name: 'getAmountIn',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveOut',
					type: 'uint256',
				},
			],
			name: 'getAmountOut',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountOut',
					type: 'uint256',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOut',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
			],
			name: 'getAmountsIn',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
			],
			name: 'getAmountsOut',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountA',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveA',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'reserveB',
					type: 'uint256',
				},
			],
			name: 'quote',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountB',
					type: 'uint256',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'tokenA',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'tokenB',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountAMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountBMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'removeLiquidity',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountA',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountB',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountTokenMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETHMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'removeLiquidityETH',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountToken',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETH',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountTokenMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETHMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountETH',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountTokenMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETHMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'approveMax',
					type: 'bool',
				},
				{
					internalType: 'uint8',
					name: 'v',
					type: 'uint8',
				},
				{
					internalType: 'bytes32',
					name: 'r',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 's',
					type: 'bytes32',
				},
			],
			name: 'removeLiquidityETHWithPermit',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountToken',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETH',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountTokenMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountETHMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'approveMax',
					type: 'bool',
				},
				{
					internalType: 'uint8',
					name: 'v',
					type: 'uint8',
				},
				{
					internalType: 'bytes32',
					name: 'r',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 's',
					type: 'bytes32',
				},
			],
			name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountETH',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'tokenA',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'tokenB',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'liquidity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountAMin',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountBMin',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'approveMax',
					type: 'bool',
				},
				{
					internalType: 'uint8',
					name: 'v',
					type: 'uint8',
				},
				{
					internalType: 'bytes32',
					name: 'r',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 's',
					type: 'bytes32',
				},
			],
			name: 'removeLiquidityWithPermit',
			outputs: [
				{
					internalType: 'uint256',
					name: 'amountA',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountB',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOut',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapETHForExactTokens',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOutMin',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapExactETHForTokens',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOutMin',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountOutMin',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapExactTokensForETH',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountOutMin',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountOutMin',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapExactTokensForTokens',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountOutMin',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOut',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountInMax',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapTokensForExactETH',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'amountOut',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'amountInMax',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapTokensForExactTokens',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amounts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
};

module.exports = {
	tokens,
	routers,
	factories,
	ABIs,
	swapFrom,
};
