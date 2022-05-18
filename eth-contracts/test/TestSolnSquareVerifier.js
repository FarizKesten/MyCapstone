const Verifier = artifacts.require('Verifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');


contract('TestSolnSquareVerifier', accounts => {
    const account_one = accounts[0];
    const data = require("./proof.json");
    const token = 1;
    beforeEach(async function () {
        const verifier = await Verifier.new({from: account_one});
        this.contract = await SolnSquareVerifier.new(verifier.address, {from: account_one});
    })

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('Test if a new solution can be added for contract', async function () {
        let key = await this.contract.getKeyHash(data.proof.a, data.proof.b, data.proof.c, data.inputs);
        let result = await this.contract.addSolution(account_one, token, key);

        assert.equal(result.logs[0].event, 'solutionAdded', "Event was not emmitted");
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract', async function () {
        await this.contract.verify_and_mint(token, account_one, data.proof.a, data.proof.b, data.proof.c, data.inputs);

        let tokenOwner = await this.contract.ownerOf(token);
        assert.equal(tokenOwner, account_one, "Token owner can be minted and verified");
    });

})