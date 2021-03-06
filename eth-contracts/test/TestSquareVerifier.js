// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
const Verifier = artifacts.require('Verifier');
contract ('Verifier', accounts => {
    const account_one = accounts[0];
    // - use the contents from proof.json generated from zokrates steps
    const data = require("./proof.json");
    beforeEach(async function () {
        this.contract = await Verifier.new({from: account_one});
    });
    // Test verification with correct proof
    it('Test verification with correct proof', async function () {
        let verify = await this.contract.verifyTx.call(data.proof.a, data.proof.b, data.proof.c,
                     data.inputs);
        assert.equal(verify, true, "Proof should be correct");
    });
    // Test verification with incorrect proof
    it('Test verification with incorrect proof', async function () {
        let verify = await this.contract.verifyTx.call(data.proof.a, data.proof.b, data.proof.c, 
                     [data.inputs[0] + 1, data.inputs[1] + 2]); 
        assert.equal(verify, false, "Proof should not be correct");
    });
})
