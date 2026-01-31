function handleEvent(event, funcs) {


  const setDecimal = () => {
    var binaryString = "";
    for (let i=6; i>=0; i--) {        
        const isChecked = event.icon.find(`#gatebit${i}`).prop("checked");
        binaryString += isChecked ? "1" : "0";
    }
    const val = parseInt(binaryString, 2);
    //console.log("Setting Decimal to: " + val);
    if (!isNaN(val)) funcs.set_port_value('GatesBits', val);
    event.icon.find(`#decVal`).text(val);
  }

  const setBinary = (value) => {
    var boolArray = [false, false, false, false, false, false, false];
    for (let i=0; i<boolArray.length; i++) {
      boolArray[i] = ( (value & (1 << i)) != 0 );
    }
    boolArray.map((v, i) => {
      event.icon.find(`#gatebit${i}`).prop("checked", v);
    });
  }


  if (event.type == 'start') {
    //console.log("start event:");
    if (port.symbol=='GatesBits') setBinary(port.value);
    //attaching onclick to each checkbox
    for (let i=0; i<7; i++) {       
        event.icon.find(`#gatebit${i}`).on("click", () => {
            setDecimal();
        });
    }

  } else if (event.type == 'change' && event.symbol=='GatesBits') {
    setBinary(event.value);
  }
}
