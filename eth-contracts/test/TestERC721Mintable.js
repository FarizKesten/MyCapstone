var ERC721MintableComplete = artifacts.require('CoolHousesToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const token_id = 1;

    describe('match erc721 spec', function () {
        beforeEach(async function () 
        { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // DONE: mint multiple tokens
            await this.contract.mint(account_one, token_id + 0, {from: account_one});
            await this.contract.mint(account_one, token_id + 1, {from: account_one});
            await this.contract.mint(account_two, token_id + 2, {from: account_one});
            await this.contract.mint(account_two, token_id + 3, {from: account_one});
        })

        it('should return total supply', async function () 
        { 
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply, 4, "Wrong total supply"); 
        })

        it('should get token balance', async function () 
        { 
            let balance = await this.contract.balanceOf.call(account_one, {from: account_one});
            assert.equal(balance, "2", "Wrong balance"); 
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () 
        { 
            let baseURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';
            let result = await this.contract.tokenURI(token_id);
            assert.equal(result, baseURI + token_id, "Wrong token uri")
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_two, token_id);
            let owner = await this.contract.ownerOf.call(token_id);
            assert.equal(owner, account_two, "Token transfer failed");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false;
            try {
                await this.contract.mint(account_two, 5, {from: account_two});
            } catch (e) {
                failed = true;
            }

            assert.equal(failed, true, "non-contract owner minting succeeded");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner.call({from: account_one});
            assert.equal(owner, account_one, "Could not get contract owner");
        })

    });
})