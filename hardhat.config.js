require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/${process.env.INFURA_KEY}",
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      gasPrice: 100000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
