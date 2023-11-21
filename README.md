# Blockchain Essentials

This repository contains a collection of Solidity smart contracts with accompanying Hardhat test scripts, showcasing fundamental functionalities for Ethereum-based decentralized applications (DApps).
Contracts Overview

## Greeter Contract

The Greeter contract is a simple, introductory contract in Solidity. It allows the storage and retrieval of a greeting message. Key functionalities include:

    Setting an initial greeting upon deployment.
    Allowing the greeting to be read and updated.

## Lock Contract

The Lock contract demonstrates a time-based locking mechanism. It's designed to lock ether for a specified period. Notable features:

    Allows sending ether to the contract, locking it until a predefined unlock time.
    Ensures ether can only be withdrawn after the unlock time by the owner.
    Includes safeguards to prevent premature withdrawals and unauthorized access.

## NumberStorage Contract

The NumberStorage contract is a basic contract for storing and retrieving numbers. It serves as an example of mapping and event emission in Solidity. Features include:

    Storing a number associated with an Ethereum address.
    Retrieving the stored number with the option to return zero for addresses that haven't stored a number.
    Emitting an event whenever a number is stored.

## Testing

All contracts are thoroughly tested using Hardhat's testing framework, ensuring reliability and correct functionality. Test results confirm successful deployment and operation of all contract functionalities.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
