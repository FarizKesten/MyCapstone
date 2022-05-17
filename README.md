# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# How to use
## run once in the beginning to populate the neccessary dependencies
`npm install && npm install --save  truffle-hdwallet-provider@1.0.17`

## Truffles
`cd eth-contracts && truffle compile` - compile smart contracts
`cd ../ && truffle migrate --reset` - migrate smart contracts`
`truffle test ./test/<test_contract.js>` - test smart contracts

## ZoKrates
( make sure you are the the project folder first)
`sudo docker run -v $PWD:/home/zokrates/code -ti zokrates/zokrates /bin/bash`

## Deployment
`truffle migrate --network rinkeby --reset`

### Compile Program
```
    cd code/zokrates/code/square
    # compile the code
    zokrates compile -i square.code
    # generate trusted setup. Create proving.key & verification.key
    zokrates setup
    # compute witness who knows the answer and generate witness file
    zokrate compute-witness -a 3 9
    # generate proof based on the witness
    zokrates generate-proof
    # export the verifiert contract
    zokrates export-verifier
```
### Truffle Test
`truffle test` to run all tests or
`truffle test test/<TestScript>.js` to test a specific part of the code

### Contracts
-`SolnSquareVerifier`: 0xb6A3F14860D1051f5886F593668Dd708514D5558

-`Verifier`: 0xe2D7C236e02aA5Ddcb8d6aB7DDaC2bE86147F067

-`Migrations`: 0x8217b5De9002b075ca394Bd675298200E1FA6911

Mint 10 tokens using MEW: Tutorial available here: https://www.youtube.com/watch?v=8MChn-NJJB0
## Tokens listed:
https://testnets.opensea.io/assets/0xb6a3f14860d1051f5886f593668dd708514d5558/1
https://testnets.opensea.io/assets/0xb6a3f14860d1051f5886f593668dd708514d5558/2
https://testnets.opensea.io/assets/0xb6a3f14860d1051f5886f593668dd708514d5558/3
https://testnets.opensea.io/assets/0xb6a3f14860d1051f5886f593668dd708514d5558/4
https://testnets.opensea.io/assets/0xb6a3f14860d1051f5886f593668dd708514d5558/5

## Purchased Tokens Transactions
https://rinkeby.etherscan.io/tx/0x18faadc383d7fa79816c0df52f1f57cbc5a5f8d76cb88f29d52522707aefb1bc (Token ID 1)
https://rinkeby.etherscan.io/tx/0x98d56cfce1e7c8ffa111896825e95e0399fc9160afe8c7bf3f95c4acb99f4a97 (Token ID 2)
https://rinkeby.etherscan.io/tx/0x3bfe6b672beae9f684a6b5cd5162a09bf16389a7677ee6a9e7ebafbe768175a5 (Token ID 3)
https://rinkeby.etherscan.io/tx/0x0887b4814835f6c5fa5e675b9c7b62a0a7bfb309e9383b2362718d9d46793cef (Bundle purchase, Token ID 4 & 5)
### Misc. Links
- Lists of project's FAQs
https://andresaaap.medium.com/capstone-real-estate-marketplace-project-faq-udacity-blockchain-69fe13b4c14e


 # Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
