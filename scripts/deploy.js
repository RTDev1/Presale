const { ethers, upgrades } = require("hardhat");

async function main() {
  const time = Math.round(new Date().getTime() / 1000);
  console.log("Time is ", time);
  const Presale = await ethers.getContractFactory("Presale");
  const presale = await upgrades.deployProxy(Presale, [
    "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    "0x2C4f83053D08fBD4AE9f7491CDfb4B840Ab050EC",
    time + 180,
    time + 300,
  ]);

  await presale.deployed();
  console.log(`Presale address is ${presale.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
