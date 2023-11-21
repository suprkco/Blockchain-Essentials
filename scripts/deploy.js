const hre = require("hardhat");

async function main() {
    // Déploiement du contrat Lock
    const Lock = await hre.ethers.getContractFactory("Lock");
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;
    const lockedAmount = hre.ethers.utils.parseEther("0.001");

    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
    // Removed await lock.deployed();

    console.log(
        `Lock with ${hre.ethers.utils.formatEther(
            lockedAmount
        )} ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
    );

    // Déploiement du contrat NumberStorage
    const NumberStorage = await hre.ethers.getContractFactory("NumberStorage");
    const numberStorage = await NumberStorage.deploy();
    // Removed await numberStorage.deployed();

    console.log("NumberStorage deployed to:", numberStorage.address);

    // Déploiement du contrat Greeter
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Monsieur Ducray!");
    // Removed await greeter.deployed();

    console.log("Greeter deployed to:", greeter.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
