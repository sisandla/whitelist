import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import assert from 'assert';


if (process.argv.length == 2) {
    console.log('create wallet address.')
} else if (process.argv.length != 3) {
    console.log('Usage: reach run index [address] to display your address info.\n');
    process.exit(0);
}  
const reach = loadStdlib(process.env);

const startingBalance = reach.parseCurrency(100);
const user = await reach.newTestAccount(startingBalance);

// const ctcDefault = admin.contract(backend);
// const ctcUser = user.contract(backend, ctcDefault.getInfo());

const addrs = {
    'Address': user.getAddress(),
};
const len = addrs.length;
console.log(len);
addrs[len] = user.getAddress();

// const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);

console.log(`User addresses: ${addrs}`);
console.log(addrs);

// await Promise.all([
//     backend.Default(ctcDefault, {}),
//     backend.User(ctcUser, {
//         showList: (a) => {
//         console.log(a);
//         assert(reach.addressEq(a, addrs['Address']), "Did not receive address");
//         },
//     }),
// ]);


// transferAmount: async (addr) => {
//     const address = stdlib.formatAddress(addr);
//     await stdlib.transfer(accUser, address, stdlib.parseCurrency(50));
//     console.log(`Sent some amount to:`, address);
//     await logBalances(address);
//   }