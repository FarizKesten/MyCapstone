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
    zokrate export-verifier
```
cd code/zokrates
Trusted Setup
Compute-Witness
Generate-Proof
Export-Verifier

 # Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
