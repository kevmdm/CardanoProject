import * as wasm from "https://cdn.jsdelivr.net/npm/@emurgo/cardano-serialization-lib-asmjs@10.0.4/cardano_serialization_lib.js";


function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

const api = await cardano.nami.enable();
console.log(api);
console.log('new balance')

const getBalance = await api.getBalance();

const balance =  wasm.Value.from_bytes(hexToBytes(getBalance));
const lovelaces = balance.coin().to_str();
const adaValue = lovelaces / 1000000;
console.log(adaValue + ' Adas');

const adress = (await api.getUsedAddresses())[0];
console.log(adress);
const adress2 =  wasm.Address.from_bytes(hexToBytes(adress));
console.log(adress2);
const adress3 = adress2.to_bech32();
console.log(adress3);
//const adress3 = adress2.;
//console.log(adress3);




