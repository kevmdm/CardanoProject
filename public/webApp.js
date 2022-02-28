import * as wasm from "https://cdn.jsdelivr.net/npm/@emurgo/cardano-serialization-lib-asmjs@10.0.4/cardano_serialization_lib.js";

function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}


await cardano.nami.enable().then((api) => {

  api.getBalance().then(res => {
    console.log(res); //respuesta de la instruccion en bytes 
    const balance = wasm.Value.from_bytes(hexToBytes(res));
    const lovelaces = balance.coin().to_str();
    console.log(lovelaces + ' Lovelace');
    const adaValue = lovelaces / 1000000;
    console.log(adaValue + ' Adas');
  });

  api.getUtxos().then(res => {
    console.log('getting utxo');
    const utxoCbor = res[0];
    console.log(utxoCbor);
  });

});

