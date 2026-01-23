function handleEvent(event, funcs) {


  const setGatesBitsValue = () => {
    var binaryString = "";
    for (let i=7; i>=0; i--) {        
        const isChecked = event.icon.find(`#gatebit${i}`).prop("checked");
        binaryString += isChecked ? "1" : "0";
    }
    const val = parseInt(binaryString, 2);
    console.log("Setting GatesBits to: " + val);
    funcs.set_port_value('GatesBits', val);
    event.icon.find(`#binVal`).text(val);
  }





  if (event.type == 'start') {
    console.log("start event:");
    for (let i=0; i<8; i++) {
        event.icon.find(`#gatebit${i}`).on("click", () => {
            setGatesBitsValue();
        });
    }

  } else if (event.type == 'change' && event.symbol=='GatesBits') {
    //handleEvent(event.symbol, event.value);
    var boolArray = [false, false, false, false, false, false, false, false];
    var value = parseInt(event.value,2).toString();
    console.log(value);
    for (let i=0; i<8; i++) {
      boolArray[i] = ( (event.value & (1 << i)) != 0 );
    }
    event.icon.find(`#binVal`).text(parseInt(event.value,10));
    boolArray.map((v, i) => {
      event.icon.find(`#gatebit${i}`).prop("checked", v);
    });
  }
}
