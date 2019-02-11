var slsCode = {"HEADER":{"TAG":"PROJECT","APP_VERSION": 71},"COMPONENTS":[],"DEPENDENCIES":{}};
var s = new CanvasState(document.getElementById('canvas1'));
globalCavasState(s);

//* COMPONENTS LIST *//
// INPUT-OUTPUT
var pulse_button = {"TRAITS":{"NAME":"Pulse Button","SIZE":{"W":100,"H":100},"FILL":"rgba(254, 193, 7, 1)","STROKE":"rgba(231, 174, 9, 1)","SHAPETYPE":"pulse","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"PULSE_BUTTON","X":0,"Y":0,"INPUTS":[]};
var toggle_button = {"TRAITS":{"NAME":"Toggle Button","SIZE":{"W":100,"H":100},"FILL":"rgba(211, 47, 46, 1)","STROKE":"rgba(235, 168, 28, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"TOGGLE_BUTTON","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"ENABLED":false}};
var light_bulb = {"TRAITS":{"NAME":"Light Bulb","SIZE":{"W":70,"H":70},"FILL":"rgba(28, 28, 28, 1)","STROKE":"rgba(60, 60, 60, 1)","SHAPETYPE":"circle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"LIGHT_BULB","X":0,"Y":0,"INPUTS":[]};
// FLIP FLOPS
var d_flipflop = {"TRAITS":{"NAME":"D Flip-FLop","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"D_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var sr_flipflop = {"TRAITS":{"NAME":"SR Flip-FLop","SIZE":{"W":70,"H":80},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SR_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var jk_flipflop = {"TRAITS":{"NAME":"JK Flip-FLop","SIZE":{"W":70,"H":80},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"JK_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var t_flipflop = {"TRAITS":{"NAME":"T Flip-FLop","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"T_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var sr_latch = {"TRAITS":{"NAME":"SR Latch","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SR_LATCH","X":0,"Y":0,"INPUTS":[]};
// GATES
var and_gate = {"TRAITS":{"NAME":"AND Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"AND_GATE","X":0,"Y":0,"INPUTS":[]};
var buffer_gate = {"TRAITS":{"NAME":"Buffer Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"BUFFER_GATE","X":0,"Y":0,"INPUTS":[]};
var nand_gate = {"TRAITS":{"NAME":"NAND Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NAND_GATE","X":0,"Y":0,"INPUTS":[]};
var nor_gate = {"TRAITS":{"NAME":"NOR Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NOR_GATE","X":0,"Y":0,"INPUTS":[]};
var not_gate = {"TRAITS":{"NAME":"NOT Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NOT_GATE","X":0,"Y":0,"INPUTS":[]};
var or_gate = {"TRAITS":{"NAME":"OR Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"OR_GATE","X":0,"Y":0,"INPUTS":[]};
var xor_gate = {"TRAITS":{"NAME":"XOR Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"XOR_GATE","X":0,"Y":0,"INPUTS":[]};
var xnor_gate = {"TRAITS":{"NAME":"XNOR Gate","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"XNOR_GATE","X":0,"Y":0,"INPUTS":[]};
// CLOCK
var ten_clock = {"TRAITS":{"NAME":"Clock (10 Hz)","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":5000}};
var five_clock = {"TRAITS":{"NAME":"Clock (5 Hz)","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":2000}};
var two_clock = {"TRAITS":{"NAME":"Clock (2 Hz)","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":1000}};
var one_clock = {"TRAITS":{"NAME":"Clock (1 Hz)","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":500}};
var half_clock = {"TRAITS":{"NAME":"Clock (0.50 Hz)","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":200}};
var fifth_clock = {"TRAITS":{"NAME":"Clock (0.20 Hz)","SIZE":{"W":70,"H":70},"FILL":"rgba(2, 119, 189, 1)","STROKE":"rgba(72, 193, 248, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":100}};
// OTHER
var high_constant = {"TRAITS":{"NAME":"High Constant","SIZE":{"W":70,"H":70},"FILL":"rgba(76, 176, 80, 1)","STROKE":"rgba(69, 157, 71, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"HIGH_CONSTANT","X":0,"Y":0,"INPUTS":[]};
var low_constant = {"TRAITS":{"NAME":"Low Constant","SIZE":{"W":70,"H":70},"FILL":"rgba(254, 87, 34, 1)","STROKE":"rgba(229, 75, 21, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"LOW_CONSTANT","X":0,"Y":0,"INPUTS":[]};
var ss_display = {"TRAITS":{"NAME":"Seven Segment Display","SIZE":{"W":120,"H":200},"FILL":"rgba(28, 28, 28, 1)","STROKE":"rgba(44, 44, 44, 1)","SHAPETYPE":"ssdisplay","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SEVEN_SEGMENT_DISPLAY","X":0,"Y":0,"INPUTS":[]};
var dm_display = {"TRAITS":{"NAME":"5X7 LED Matrix Display","SIZE":{"W":160,"H":230},"FILL":"rgba(28, 28, 28, 1)","STROKE":"rgba(44, 44, 44, 1)","SHAPETYPE":"dmdisplay","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"DOT_MATRIX_DISPLAY_5X7","X":0,"Y":0,"INPUTS":[]};
var ss_decoder = {"TRAITS":{"NAME":"Seven Segment Display Decoder","SIZE":{"W":60,"H":180},"FILL":"rgba(28, 28, 28, 1)","STROKE":"rgba(44, 44, 44, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SEVEN_SEGMENT_DISPLAY_DECODER","X":0,"Y":0,"INPUTS":[]};
var flashlight = {"TRAITS":{"NAME":"Flashlight","SIZE":{"W":70,"H":70},"FILL":"rgba(103, 59, 183, 1)","STROKE":"rgba(81, 46, 166, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"FLASHLIGHT","X":0,"Y":0,"INPUTS":[]};
var speaker = {"TRAITS":{"NAME":"Speaker","SIZE":{"W":80,"H":340},"FILL":"rgba(158, 158, 158, 1)","STROKE":"rgba(117, 117, 117, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SPEAKER","X":0,"Y":0,"INPUTS":[]};
var vibration = {"TRAITS":{"NAME":"Vibration","SIZE":{"W":70,"H":70},"FILL":"rgba(81, 45, 167, 1)","STROKE":"rgba(48, 28, 143, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"VIBRATION","X":0,"Y":0,"INPUTS":[]};
var charge_sensor = {"TRAITS":{"NAME":"Charge Detector","SIZE":{"W":100,"H":70},"FILL":"rgba(254, 87, 34, 1)","STROKE":"rgba(229, 75, 21, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CHARGER_PLUGGED_SENSOR","X":0,"Y":0,"INPUTS":[]};
var light_sensor = {"TRAITS":{"NAME":"Light Sensor","SIZE":{"W":80,"H":180},"FILL":"rgba(0, 152, 168, 1)","STROKE":"rgba(19, 88, 95, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"LIGHT_SENSOR","X":0,"Y":0,"INPUTS":[]}
var magnetic_sensor = {"TRAITS":{"NAME":"Magnetic Field Sensor","SIZE":{"W":80,"H":300},"FILL":"rgba(94, 59, 117, 1)","STROKE":"rgba(103, 75, 126, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"MAGNETIC_FIELD_SENSOR","X":0,"Y":0,"INPUTS":[]};
var proximity_sensor = {"TRAITS":{"NAME":"Proximity Sensor","SIZE":{"W":80,"H":70},"FILL":"rgba(63, 81, 181, 1)","STROKE":"rgba(48, 62, 159, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"PROXIMITY_SENSOR","X":0,"Y":0,"INPUTS":[]};
var notification_led = {"TRAITS":{"NAME":"Notification","SIZE":{"W":80,"H":80},"FILL":"rgba(117, 117, 117, 1)","STROKE":"rgba(66, 66, 66, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NOTIFICATION_LED","X":0,"Y":0,"INPUTS":[]};
var rgb_light = {"TRAITS":{"NAME":"RGB Light","SIZE":{"W":90,"H":90},"FILL":"rgba(0, 0, 0, 1)","STROKE":"rgba(60, 60, 60, 1)","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"RGB_LIGHT","X":0,"Y":0,"INPUTS":[]};
// PIN SPACING
var pin_size = 15;

var compArray = [pulse_button,toggle_button,light_bulb,d_flipflop,sr_flipflop,jk_flipflop,t_flipflop,sr_latch,and_gate,buffer_gate,nand_gate,nor_gate,not_gate,or_gate,xor_gate,xnor_gate,ten_clock,five_clock,two_clock,one_clock,half_clock,fifth_clock,high_constant,low_constant,ss_display,dm_display,ss_decoder,flashlight,speaker,vibration,charge_sensor,light_sensor,magnetic_sensor,proximity_sensor,notification_led,rgb_light];
var sel = document.getElementById("dropDown");
for(var m = 0; m < compArray.length; m++) {
    var opt = document.createElement("option");
    opt.innerHTML = compArray[m].TRAITS.NAME;
    opt.value = JSON.stringify(compArray[m]);
    sel.appendChild(opt);
}
var selectedComp = pulse_button;
var e = document.getElementById("dropDown");
    
function patternize() {
    e = document.getElementById("dropDown");
    selectedComp = JSON.parse(e.options[e.selectedIndex].value);

    var comp = selectedComp;
    var compWidth = comp.TRAITS.SIZE.W;
    var compHeight = comp.TRAITS.SIZE.H;
    var gridWidth = document.getElementById("gridWidth").value;
    var gridHeight = document.getElementById("gridHeight").value;
    for (var i = 0; i < gridHeight; i++) {
        for (var j = 0; j < gridWidth; j++) {
            addComp(comp.X, comp.Y);
            comp.X += compWidth;
        }
        comp.X = 0;
        comp.Y += compHeight;
    }
    for(var k = 0; k < slsCode.COMPONENTS.length; k++)
    {
        delete slsCode.COMPONENTS[k].TRAITS;
    }
    document.getElementById("codeDisplay").innerHTML = JSON.stringify(slsCode, null, 2);
}

function addComp(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    e = document.getElementById("dropDown");
    selectedComp = JSON.parse(e.options[e.selectedIndex].value);
    var comp = selectedComp;
    comp.X = this.x;
    comp.Y = this.y;
    comp.ID = randomID();
    s.addShape(new Shape(comp.X,comp.Y,comp.TRAITS.SIZE.W/1.1,comp.TRAITS.SIZE.H/1.1, comp.TRAITS.FILL, comp.TRAITS.STROKE, comp.ID, comp.TRAITS.NAME, comp.TRAITS.SHAPETYPE));
    delete comp.TRAITS;
    slsCode.COMPONENTS.push(JSON.parse(JSON.stringify(comp)));

    document.getElementById("codeDisplay").innerHTML = JSON.stringify(slsCode, null, 2);
}

function randomID() {
    return Math.floor(Math.random() * 999999999) + 1;
}

function download(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = document.getElementById("filename").value;
    a.href = "data:text/html," + document.getElementById("codeDisplay").innerHTML;
    a.click();
}