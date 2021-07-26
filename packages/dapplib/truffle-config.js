require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food stone recipe random unfair hard light army general'; 
let testAccounts = [
"0x3e8cf11d8dc27865d5a4f457c8375aa2244efd33edf636f3d37fd59321528fc5",
"0xee7658e5c01f9258ddcb250f6cb555c8c43362ebf4dbe381d31b4f6230339972",
"0x79f3b6a7db7efef3da1d02d35cd29d07700833316165381a9b982a5612e0cd4d",
"0x7fa24b5623269bf7d18457f928749bb7e66fd2ea4f114e7907464574d298cf3c",
"0x8b932692b3b54cbca7ee2088f820563b750cd8e757707b1a8e3c10c9df82e527",
"0xe28b7a15deba01ec5ae1c753e10fc1a2f5bc280de3c172049112fe3fb7900b9e",
"0x875a0e6e4a7812d810bc343605e96beef5f0e0e24becfa2c6820d28c502c7e19",
"0x20dd350cc7e7541926668953adca825d2bb93c978982d8b8696a72f0bdf27841",
"0x508e664fa7dd9468e4e6aba9380b5dcae63c3453d56069d2268f689a9cb237a0",
"0xa08e2a4d7ce67776960973f2201f22b1ac8b57553f7981df621a179256aff8a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

