require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain mistake gloom clog orange strategy'; 
let testAccounts = [
"0x8004961951fb0af809c5812a85b52ec768474bc1053d8bfadccfbde39cdee92f",
"0x9e854f108e91438fc2379a02eb5e1a838ca185e04e5248e3b35b34f8f9ddde84",
"0x96a22da81814bfcefed34459215d3522ec3198881de431eba98d8466a008af03",
"0xf308a92e9411db83f00a591f9a0f0e33ff587b043a8140af49bd116cca35cdc6",
"0x9b2118e40419383c82d84a9fa7ee3d6bdd34578908fef127797a01375b66e1a7",
"0xfe2b5f75053d37eaf65909aa892cd39ccc246434ff996799639e4363b21a91b7",
"0xca0102eb548706cdce4d99e53fb011e8fff58d42e38009746536a30e3174fe2b",
"0xa5ee08724ac5472d73397f63a9294c589e99ba4e64650bd4679db572f888266d",
"0x9a9e0b897db648e18e5ab0eca818be67e676c550665545fb58725fc283fecc2c",
"0xf12b8b2fa45e9c0132084b3069cd8612e8f0557197f720fba3b42a1d7f75159d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

