import * as wasm from "https://cdn.jsdelivr.net/npm/@emurgo/cardano-serialization-lib-asmjs@10.0.4/cardano_serialization_lib.js";

function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}


function nami() {
  console.log("Funcion corriendo");
  window.cardano.nami.enable().then((api) => {//asi se usa una promesa
    console.log("Conecte con cardano");
    console.log(api);
    api.getBalance().then((res) => {
      console.log('opten respuesta de balance')
      console.log(res)
      const balance = wasm.Value.from_bytes(hexToBytes(res));
      const lovelaces = balance.coin().to_str();

      console.log('Kev Tiene', lovelaces);
      const adaValue = lovelaces / 1000000;
      console.log('Kev Tiene ' + adaValue + ' Adas');
      alert('Kev Tiene ' + adaValue + ' Adas');
    });

    //opten UTXO sin serializar 

    api.getUtxos().then((res) => {
      console.log('getting utxo');
      const utxo = res[0];
      console.log(utxo);
     

    });
  });
}
setTimeout(nami, 1000);