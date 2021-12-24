const Token1 = artifacts.require('Token1');

contract('Token1', () =>{
    it("Should deploy the Token Contract", async function(){
        const token1 = await Token1.deployed();
        assert (token1.address !== '');
    })
});

