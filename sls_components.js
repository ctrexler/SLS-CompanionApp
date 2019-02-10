var slsCode = {"HEADER":{"TAG":"PROJECT","APP_VERSION": 71},"COMPONENTS":[],"DEPENDENCIES":{}};
var s = new CanvasState(document.getElementById('canvas1'));
s.addShape(new Shape(-500,-500,1500,1500, 'rgba(50, 50, 50, 1)',"id","rectangle"));
//s.addShape(new Shape(40,40,50,50)); // The default is gray
//s.addShape(new Shape(60,140,40,60, 'lightskyblue'));
// Lets make some partially transparent
//s.addShape(new Shape(80,150,60,30, 'rgba(127, 255, 212, .5)'));
//s.addShape(new Shape(125,80,30,80, 'rgba(245, 222, 179, .7)'));

//* COMPONENTS LIST *//
// INPUT-OUTPUT
var pulse_button = {"TRAITS":{"NAME":"","SIZE":{"W":100,"H":100},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"PULSE_BUTTON","X":0,"Y":0,"INPUTS":[]};
var toggle_button = {"TRAITS":{"NAME":"","SIZE":{"W":100,"H":100},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"TOGGLE_BUTTON","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"ENABLED":false}};
var light_bulb = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"circle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"LIGHT_BULB","X":0,"Y":0,"INPUTS":[]};
// FLIP FLOPS
var d_flipflop = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"D_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var sr_flipflop = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":80},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SR_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var jk_flipflop = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":80},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"JK_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var t_flipflop = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"T_FLIP_FLOP","X":0,"Y":0,"INPUTS":[]};
var sr_latch = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SR_LATCH","X":0,"Y":0,"INPUTS":[]};
// GATES
var and_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"AND_GATE","X":0,"Y":0,"INPUTS":[]};
var buffer_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"BUFFER_GATE","X":0,"Y":0,"INPUTS":[]};
var nand_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NAND_GATE","X":0,"Y":0,"INPUTS":[]};
var nor_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NOR_GATE","X":0,"Y":0,"INPUTS":[]};
var not_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NOT_GATE","X":0,"Y":0,"INPUTS":[]};
var or_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"OR_GATE","X":0,"Y":0,"INPUTS":[]};
var xor_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"XOR_GATE","X":0,"Y":0,"INPUTS":[]};
var xnor_gate = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"XNOR_GATE","X":0,"Y":0,"INPUTS":[]};
// CLOCK
var ten_clock = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":5000}};
var five_clock = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":2000}};
var two_clock = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":1000}};
var one_clock = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":500}};
var half_clock = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":200}};
var fifth_clock = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CLOCK","X":0,"Y":0,"INPUTS":[],"ARGUMENTS":{"PERIOD":100}};
// OTHER
var high_constant = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"HIGH_CONSTANT","X":0,"Y":0,"INPUTS":[]};
var low_constant = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"LOW_CONSTANT","X":0,"Y":0,"INPUTS":[]};
var ss_display = {"TRAITS":{"NAME":"","SIZE":{"W":120,"H":200},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SEVEN_SEGMENT_DISPLAY","X":0,"Y":0,"INPUTS":[]};
var dm_display = {"TRAITS":{"NAME":"","SIZE":{"W":150,"H":220},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"DOT_MATRIX_DISPLAY_5X7","X":0,"Y":0,"INPUTS":[]};
var ss_decoder = {"TRAITS":{"NAME":"","SIZE":{"W":0,"H":0},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SEVEN_SEGMENT_DISPLAY_DECODER","X":0,"Y":0,"INPUTS":[]};
var flashlight = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"FLASHLIGHT","X":0,"Y":0,"INPUTS":[]};
var speaker = {"TRAITS":{"NAME":"","SIZE":{"W":0,"H":0},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"SPEAKER","X":0,"Y":0,"INPUTS":[]};
var vibration = {"TRAITS":{"NAME":"","SIZE":{"W":70,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"VIBRATION","X":0,"Y":0,"INPUTS":[]};
var charge_sensor = {"TRAITS":{"NAME":"","SIZE":{"W":100,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"CHARGER_PLUGGED_SENSOR","X":0,"Y":0,"INPUTS":[]};
var light_sensor = {"TRAITS":{"NAME":"","SIZE":{"W":0,"H":0},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"LIGHT_SENSOR","X":0,"Y":0,"INPUTS":[]}
var magnetic_sensor = {"TRAITS":{"NAME":"","SIZE":{"W":0,"H":0},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"MAGNETIC_FIELD_SENSOR","X":0,"Y":0,"INPUTS":[]};
var proximity_sensor = {"TRAITS":{"NAME":"","SIZE":{"W":80,"H":70},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"PROXIMITY_SENSOR","X":0,"Y":0,"INPUTS":[]};
var notification_led = {"TRAITS":{"NAME":"","SIZE":{"W":0,"H":0},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"NOTIFICATION_LED","X":0,"Y":0,"INPUTS":[]};
var rgb_light = {"TRAITS":{"NAME":"","SIZE":{"W":90,"H":90},"COLOR":"","SHAPETYPE":"rectangle","PINS":{"INPUT":"","OUTPUT":""}},"ID":0,"TAG":"RGB_LIGHT","X":0,"Y":0,"INPUTS":[]};
// PIN SPACING
var pin_size = 15;

var compArray = [pulse_button,toggle_button,light_bulb,d_flipflop,sr_flipflop,jk_flipflop,t_flipflop,sr_latch,and_gate,buffer_gate,nand_gate,nor_gate,not_gate,or_gate,xor_gate,xnor_gate,ten_clock,five_clock,two_clock,one_clock,half_clock,fifth_clock,high_constant,low_constant,ss_display,dm_display,ss_decoder,flashlight,speaker,vibration,charge_sensor,light_sensor,magnetic_sensor,proximity_sensor,notification_led,rgb_light];
var sel = document.getElementById("dropDown");
for(var m = 0; m < compArray.length; m++) {
    var opt = document.createElement('option');
    opt.innerHTML = compArray[m].TAG;
    opt.value = JSON.stringify(compArray[m]);
    sel.appendChild(opt);
}
    
function patternize() {
    var e = document.getElementById("dropDown");
    var selectedComp = JSON.parse(e.options[e.selectedIndex].value);

    var comp = selectedComp;
    var compWidth = comp.TRAITS.SIZE.W;
    var compHeight = comp.TRAITS.SIZE.H;
    var gridWidth = document.getElementById("gridWidth").value;
    var gridHeight = document.getElementById("gridHeight").value;
    comp.ID = Math.floor(Math.random() * 999999999) + 1;
    for (var i = 0; i < gridHeight; i++) {
        for (var j = 0; j < gridWidth; j++) {
            slsCode.COMPONENTS.push(JSON.parse(JSON.stringify(comp)));
            s.addShape(new Shape(comp.X,comp.Y,compWidth/1.1,compHeight/1.1,'rgba(48, 162, 255, 1)', comp.ID, comp.TRAITS.SHAPETYPE));
            comp.ID++;
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

function download(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = document.getElementById("filename").value;
    a.href = "data:text/html," + document.getElementById("codeDisplay").innerHTML;
    a.click();
}