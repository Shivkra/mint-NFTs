require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey:"ZA7KV1IHREEQ9CPS68TQGFWCRZ56K5T68Y",
  }
};