// By Simon Sarris
// www.simonsarris.com
// sarris@acm.org
//
// Last update December 2011
//
// Free to use and distribute at will
// So long as you are nice to people, etc


//Global Canvas State
s = "s";
function globalCavasState(state) {
  s = state;
}

// Constructor for Shape objects to hold data for all drawn objects.
// For now they will just be defined as rectangles.
function Shape(comp) {
  // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
  // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
  // But we aren't checking anything else! We could put "Lalala" for the value of x 
  this.x = comp.X || 0;
  this.y = comp.Y || 0;
  this.w = comp.TRAITS.SIZE.W || 1;
  this.h = comp.TRAITS.SIZE.H || 1;
  this.fill = comp.TRAITS.FILL || "#FFFFFF";
  this.stroke = comp.TRAITS.STROKE || "#000000"
  this.id = comp.ID || "id";
  this.name = comp.TRAITS.NAME || "";
  this.shapeType = comp.TRAITS.SHAPETYPE || "shapeType";
  this.pinsN = comp.TRAITS.PINS.N || 0;
  this.pinsE = comp.TRAITS.PINS.E || 0;
  this.pinsS = comp.TRAITS.PINS.S || 0;
  this.pinsW = comp.TRAITS.PINS.W || 0;
}

function Pins(ctx,thisShape) {
  ctx.strokeStyle = "#AAAAAA";

  //N
  var spacingN = thisShape.w/(parseInt(thisShape.pinsN[0]) + 1);
  var spaceCount = spacingN;
  for(var pN = 0; pN < thisShape.pinsN[0]; pN++) {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(thisShape.x + spaceCount, thisShape.y - 22, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(thisShape.x + spaceCount, thisShape.y - 15);
    ctx.lineTo(thisShape.x + spaceCount, thisShape.y - 2);
    ctx.stroke();
    spaceCount += spacingN;
  }

  //E
  var spacingE = thisShape.h/(parseInt(thisShape.pinsE[0]) + 1);
  spaceCount = spacingE;
  for(var pE = 0; pE < thisShape.pinsE[0]; pE++) {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(thisShape.x + thisShape.w + 22, thisShape.y + spaceCount, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(thisShape.x + thisShape.w + 15, thisShape.y + spaceCount);
    ctx.lineTo(thisShape.x + thisShape.w + 2, thisShape.y + spaceCount);
    ctx.stroke();
    spaceCount += spacingE;
  }

  //S
  var spacingS = thisShape.w/(parseInt(thisShape.pinsS[0]) + 1);
  spaceCount = spacingS;
  for(var pS = 0; pS < thisShape.pinsS[0]; pS++) {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(thisShape.x + spaceCount, thisShape.y + thisShape.h + 22, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(thisShape.x + spaceCount, thisShape.y + thisShape.h + 15);
    ctx.lineTo(thisShape.x + spaceCount, thisShape.y + thisShape.h + 2);
    ctx.stroke();
    spaceCount += spacingS;
  }

  //W
  var spacingW = thisShape.h/(parseInt(thisShape.pinsW[0]) + 1);
  spaceCount = spacingW;
  for(var pW = 0; pW < thisShape.pinsW[0]; pW++) {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(thisShape.x - 22, thisShape.y + spaceCount, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(thisShape.x - 15, thisShape.y + spaceCount);
    ctx.lineTo(thisShape.x - 2, thisShape.y + spaceCount);
    ctx.stroke();
    spaceCount += spacingW;
  }
}

// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {
  ctx.fillStyle = this.fill;
  ctx.strokeStyle = this.stroke;
  ctx.lineWidth = 5;
  if(this.shapeType == "rectangle") {
    ctx.strokeRect(this.x,this.y,this.w,this.h);
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  else if(this.shapeType == "pulse") {
    ctx.strokeRect(this.x,this.y,this.w,this.h);
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.beginPath();
    ctx.arc(this.x + (this.w/2), this.y + (this.h/2), this.w/2.2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgba(211, 47, 46, 1)";
    ctx.fill();
  }
  else if(this.shapeType == "dmdisplay") {
    ctx.strokeRect(this.x,this.y,this.w,this.h);
    ctx.fillRect(this.x, this.y, this.w, this.h);
    for(var o = 0; o < 5; o++) {
      for(var p = 0; p < 7; p++) {
        ctx.beginPath();
        ctx.arc(this.x + ((this.w/5) * (o + 1)) - this.w/10, this.y + ((this.h/7) * (p + 1)) - this.h/14, (this.w/7)/1.8, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "rgba(44, 44, 44, 1)";
        ctx.fill();
      }
    }
  }
  else if(this.shapeType == "ssdisplay") {
    ctx.strokeRect(this.x,this.y,this.w,this.h);
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.font="200px sans-serif";
    ctx.fillStyle = "rgba(44, 44, 44, 1)";
    ctx.textAlign = "center";
    ctx.fillText("8", this.x + (this.w/2), this.y + (this.h - 20));
  }
  else if (this.shapeType == "circle") {
    ctx.beginPath();
    ctx.arc(this.x + (this.w/2), this.y + (this.h/2), this.w/2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  Pins(ctx, this);
  ctx.font="8px sans-serif";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(this.name, this.x + (this.w/2), this.y + this.h + 10);
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

function CanvasState(canvas) {
  // **** First some setup! ****
  
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = canvas.getContext('2d');
  // This complicates things a little but but fixes mouse co-ordinate problems
  // when there's a border or padding. See getMouse for more detail
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
  // They will mess up mouse coordinates and this fixes that
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  // **** Keep track of state! ****
  
  this.valid = false; // when set to false, the canvas will redraw everything
  this.shapes = [];  // the collection of things to be drawn
  this.shapesToConnect = [];
  this.dragging = false; // Keep track of when we are dragging
  // the current selected object. In the future we could turn this into an array for multiple selection
  this.selection = null;
  this.dragoffx = 0; // See mousedown and mousemove events for explanation
  this.dragoffy = 0;
  
  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
  // Up, down, and move are for dragging
  canvas.addEventListener('mousedown', function(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var shapes = myState.shapes;
    var shapesToConnect = myState.shapesToConnect;
    var l = shapes.length;
    for (var i = l-1; i >= 0; i--) {
      if (shapes[i].contains(mx, my)) {
        var mySel = shapes[i];
        if(wireModeToggle == 1) {
          shapesToConnect.push(mySel);
        }
        // Keep track of where in the object we clicked
        // so we can move it smoothly (see mousemove)
        myState.dragoffx = mx - mySel.x;
        myState.dragoffy = my - mySel.y;
        myState.dragging = true;
        myState.selection = mySel;
        myState.valid = false;
        return;
      }
      else if(checkPinRange(shapes[i], mx, my)) {
        //document.getElementById("codeDisplay").innerHTML = "YES!";
      }
    }

    // havent returned means we have failed to select anything.
    // If there was an object selected, we deselect it
    if (myState.selection) {
      myState.selection = null;
      myState.valid = false; // Need to clear the old selection border
    }
  }, true);

  // Prevent scrolling when touching the canvas
  document.body.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

  canvas.addEventListener('mousemove', function(e) {
    if (myState.dragging){
      var mouse = myState.getMouse(e);
      // We don't want to drag the object by its top-left corner, we want to drag it
      // from where we clicked. Thats why we saved the offset and use it here
      myState.selection.x = mouse.x - myState.dragoffx;
      myState.selection.y = mouse.y - myState.dragoffy;
      for (var j = 0; j < slsCode.COMPONENTS.length; j++) {
        if(slsCode.COMPONENTS[j].ID == myState.selection.id) {
            slsCode.COMPONENTS[j].X = myState.selection.x;
            slsCode.COMPONENTS[j].Y = myState.selection.y;
            document.getElementById("codeDisplay").innerHTML = JSON.stringify(slsCode, null, 2);
        }
    }
      myState.valid = false; // Something's dragging so we must redraw
    }
  }, true);
  canvas.addEventListener('mouseup', function(e) {
    myState.dragging = false;
  }, true);
  // double click for making new shapes
  canvas.addEventListener('dblclick', function(e) {
    if(tapFlag == 1) {
      addComp(0, 0);
      tapFlag = 0;
    } else {
      var mouse = myState.getMouse(e);
      addComp(mouse.x, mouse.y);
    }
  }, true);

  // Set up touch events for mobile, etc
  canvas.addEventListener("touchstart", function (e) {
    mousePos = getTouchPos(canvas, e);
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  }, false);
  // canvas.addEventListener("touchend", function (e) {
  //   var mouseEvent = new MouseEvent("mouseup", {});
  //   canvas.dispatchEvent(mouseEvent);
  // }, false);
  canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  }, false);
  // Get the position of a touch relative to the canvas
  function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }
  var timeout;
  var lastTap = 0;
  var tapFlag = 0;
  canvas.addEventListener('touchend', function(e) {
      var currentTime = new Date().getTime();
      var tapLength = currentTime - lastTap;
      clearTimeout(timeout);
      if (tapLength < 500 && tapLength > 0) {
        tapFlag = 1;
        var mouseEvent = new MouseEvent("dblclick", {});
        canvas.dispatchEvent(mouseEvent);
        event.preventDefault();
      } else {
          timeout = setTimeout(function() {
              clearTimeout(timeout);
          }, 500);
      }
      lastTap = currentTime;
  });
  
  // **** Options! ****
  
  this.selectionColor = '#00FF00';
  this.selectionWidth = 4;  
  this.interval = 30;
  setInterval(function() { myState.draw(); }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  this.valid = false;
}

CanvasState.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function() {
  // if our state is invalid, redraw and validate!
  if (!this.valid) {
    var ctx = this.ctx;
    var shapes = this.shapes;
    var shapesToConnect = this.shapesToConnect;
    this.clear();
    
    // ** Add stuff you want drawn in the background all the time here **
    
    // draw all shapes
    var l = shapes.length;
    for (var i = 0; i < l; i++) {
      var shape = shapes[i];
      // We can skip the drawing of elements that have moved off the screen:
      if (shape.x > this.width || shape.y > this.height ||
          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
      shapes[i].draw(ctx);
    }
    
    // draw selection
    // right now this is just a stroke along the edge of the selected Shape
    if (this.selection != null) {
      ctx.strokeStyle = this.selectionColor;
      ctx.lineWidth = this.selectionWidth;
      var mySel = this.selection;
      if(mySel.shapeType != "circle") {
        ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
      }
      else if (mySel.shapeType == "circle") {
        ctx.beginPath();
        ctx.arc(mySel.x + (mySel.w/2), mySel.y + (mySel.h/2), mySel.w/2, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
    
    // ** Add stuff you want drawn on top all the time here **

    this.valid = true;
    connectShapes();
  }
}


// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
}

// If you dont want to use <body onLoad='init()'>
// You could uncomment this init() reference and place the script reference inside the body tag
//init();

//function init() {
//  var s = new CanvasState(document.getElementById('canvas1'));
//  s.addShape(new Shape(40,40,50,50)); // The default is gray
//  s.addShape(new Shape(60,140,40,60, 'lightskyblue'));
//  // Lets make some partially transparent
//  s.addShape(new Shape(80,150,60,30, 'rgba(127, 255, 212, .5)'));
//  s.addShape(new Shape(125,80,30,80, 'rgba(245, 222, 179, .7)'));
//}

// Now go make something amazing!

function checkPinRange(shape, mx, my) {
  var spaceCount = 0;
  if(shape.pinsN[0] > 0) {
    if(my > (shape.y - 30) && my < shape.y && mx > shape.x && mx < (shape.x + shape.w)) {
      var spacingN = shape.w/(parseInt(shape.pinsN[0]) + 1);
      spaceCount = spacingN;
      for(var sN = 0; sN < shape.pinsN[0]; sN++) {
        if(mx > (shape.x + spaceCount - 10) && mx < (shape.x + spaceCount + 10)) {
          document.getElementById("codeDisplay").innerHTML += shape.name + " N-Pin: " + sN + ", ID: " + shape.pinsN[sN + 1] + "\n";
        }
        spaceCount += spacingN;
      }
      //return true;
    }
  }
  if(shape.pinsE[0] > 0) {
    if(mx < (shape.x + shape.w + 30) && mx > (shape.x + shape.w) && my > shape.y && my < (shape.y + shape.h)) {
      var spacingE = shape.h/(parseInt(shape.pinsE[0]) + 1);
      spaceCount = spacingE;
      for(var sE = 0; sE < shape.pinsE[0]; sE++) {
        if(my > (shape.y + spaceCount - 10) && my < (shape.y + spaceCount + 10)) {
          document.getElementById("codeDisplay").innerHTML += shape.name + " E-Pin: " + sE + ", ID: " + shape.pinsE[sE + 1] + "\n";
        }
        spaceCount += spacingE;
      }
      // return true;
    }
  }
  if(shape.pinsS[0] > 0) {
    if(my < (shape.y + shape.h + 30) && my > (shape.y + shape.h) && mx > shape.x && mx < (shape.x + shape.w)) {
      var spacingS = shape.w/(parseInt(shape.pinsS[0]) + 1);
      spaceCount = spacingS;
      for(var sS = 0; sS < shape.pinsS[0]; sS++) {
        if(mx > (shape.x + spaceCount - 10) && mx < (shape.x + spaceCount + 10)) {
          document.getElementById("codeDisplay").innerHTML += shape.name + " S-Pin: " + sS + ", ID: " + shape.pinsS[sS + 1] + "\n";
        }
        spaceCount += spacingS;
      }
      // return true;
    }
  }
  if(shape.pinsW[0] > 0) {
    if(mx > (shape.x - 30) && mx < shape.x && my > shape.y && my < (shape.y + shape.h)) {
      var spacingW = shape.h/(parseInt(shape.pinsW[0]) + 1);
      spaceCount = spacingW;
      for(var sW = 0; sW < shape.pinsW[0]; sW++) {
        if(my > (shape.y + spaceCount - 10) && my < (shape.y + spaceCount + 10)) {
          document.getElementById("codeDisplay").innerHTML += shape.name + " W-Pin: " + sW + ", ID: " + shape.pinsW[sW + 1] + "\n";
        }
        spaceCount += spacingW;
      }
      // return true;
    }
  return true;
  }
  document.getElementById("codeDisplay").innerHTML += "\n";
}

// function connectShapes() {
//   shapesToConnect = s.shapesToConnect;
//   s.ctx.strokeStyle = "#00FF00";
//   s.ctx.lineWidth = 4;
//   for(var t = 0; t < shapesToConnect.length;) {
//     if(t + 1 != null) {
//       s.ctx.beginPath();
//       s.ctx.moveTo(shapesToConnect[t].x + shapesToConnect[t].w + 22, shapesToConnect[t].y + (shapesToConnect[t].h/2));
//       s.ctx.lineTo(shapesToConnect[t + 1].x - 22, shapesToConnect[t + 1].y + (shapesToConnect[t + 1].h/2));
//       s.ctx.stroke();
//     }
//     if(t + 2 != null) {
//       t += 2;
//     }
//   }
// }