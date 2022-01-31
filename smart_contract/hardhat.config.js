//https://eth-ropsten.alchemyapi.io/v2/Z-XGisNxXunC8nyHzm8pErRyAHh2OrDa

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Z-XGisNxXunC8nyHzm8pErRyAHh2OrDa",
      accounts:["8d146e60f53a67755a0b0b7842a44dcd63e9ae26be9e3ccf9711a5797596ffa1"]
    }
  }
}
