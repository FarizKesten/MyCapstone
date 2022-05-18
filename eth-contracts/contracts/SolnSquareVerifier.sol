pragma solidity >=0.4.21 <0.6.0;

// DONE define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import './Verifier.sol';
import "./ERC721Mintable.sol";

// DONE define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CoolHousesToken
{
    Verifier public verifier;
    constructor(address verifierAddr) CoolHousesToken() public
    {
        verifier = Verifier(verifierAddr);
    }

    // DONE define a solutions struct that can hold an index & an address
    struct Solution
    {
        uint256 index;
        address addr;
    }

    // DONE define an array of the above struct
    Solution[] solutions;

    // DONE define a mapping to store unique solutions submitted
    mapping (bytes32 => address) public uniqueSolutions;

    // DONE Create an event to emit when a solution is added
    event solutionAdded(bytes32 solution, address addr);

    // DONE Create a function to add the solutions to the array and emit the event
    function addSolution(address addr, uint256 index, bytes32 key) public
    {
        Solution memory sol = Solution({index: index, addr: addr});
        solutions.push(sol);
        uniqueSolutions[key] = addr;
        emit solutionAdded(key, addr);
    }

    // DONE Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function verify_and_mint(uint256 index,
                address addr,
                uint[2] memory a,
                uint[2][2] memory b,
                uint[2] memory c,
                uint[2] memory input
                ) public
    {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(uniqueSolutions[key] == address(0), "Solution already used");
        require(verifier.verifyTx(a, b, c, input), "Solution is not valid");
        addSolution(addr, index, key);
        mint(addr, index);
    }

}


























