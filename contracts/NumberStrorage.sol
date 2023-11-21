// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NumberStorage {
    // Mapping to store numbers with an address key
    mapping(address => uint) private userNumbers;

    // Event to emit when a number is stored
    event NumberStored(uint _number, address indexed _user);

    // Function to store a number under the sender's address
    function storeNumber(uint _number) public {
        userNumbers[msg.sender] = _number;
        emit NumberStored(_number, msg.sender); // Emitting an event
    }

    // Public function to retrieve the number stored by a specific address
    function getStoredNumber(address user) public view returns (uint) {
        return userNumbers[user];
    }

    // Function to retrieve the number stored by the sender
    function retrieveNumber() public view returns (uint) {
        return userNumbers[msg.sender];
    }
}
