  
  /* MOVING ELEMENTS */

const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');
const elsdiv = document.querySelectorAll('.topdiv');

var move = false, x, y, posx, posy, static = true;
 
 
onmousemove = function(e) {
  e.stopPropagation();
  on=true;
  if (!e.target.matches('.trdiv2,.tr2,.controls')){
    if (move) {
      if (static) {
        x = e.offsetX;
        y = e.offsetY;
        static = false;
        }
     posx = (e.pageX - x)-27; 
     posy = (e.pageY - y);
	 posx+=20;
     this.style.left = posx + 'px';
     this.style.top = posy + 'px';
	 	 	 
    }  
  }
};
 
 
onmouseup = function() {
  move = false;
  static = true; 
  on=false;
  this.firstElementChild.nextElementSibling.nextElementSibling.value = Number(this.firstElementChild.nextElementSibling.nextElementSibling.value) - Number(100);
  this.style.zIndex = Number(this.style.zIndex) - Number(1);
}; 

 
onmousedown = function(event, i) {
  event.stopPropagation();   
  if (!event.target.matches('input, .triangle-with-shadow, .triangle-with-shadow2, .trdiv2, .blocked, .topdiv.squarediv')){
  move = true;


  this.firstElementChild.nextElementSibling.nextElementSibling.value = Number(this.firstElementChild.nextElementSibling.nextElementSibling.value)+ Number(100);
  this.style.zIndex = Number(this.style.zIndex) + Number(1);	 

 
 }  
};






onhov = function () {
 this.style.cursor="pointer";
};


elsdiv.forEach(eld=>eld.addEventListener("mouseover", onmoseover));

els.forEach(el=>el.addEventListener('mousedown', onmousedown, { capture:true }));
els.forEach(el=>el.addEventListener('mouseup', onmouseup));
els.forEach(el=>el.addEventListener('mousemove', onmousemove, { capture:true }));
els.forEach(el=>el.addEventListener('mouseover', onmousemove));
  

/* SELECT ELEMENT - TURN ON CONTROLS */

els.forEach(el=>el.addEventListener('dblclick', dbl));
  
  function dbl (e) {
  e.stopPropagation(); 
   
  if (!e.target.matches('.squarediv1, .triangle-with-shadow, .triangle-with-shadow2, .trdiv2, .blocked, .zs, .opac')){
 
   /* for enabling rotation */    
  if
    (this.firstElementChild.classList.contains("drop")){
    this.firstElementChild.classList.remove("drop");
  }     
  else {
    this.firstElementChild.classList.add("drop");

  } 
  
  /* for making controls visible (".topdiv.vis>input" in css) */
  if (this.classList.contains("vis"))  
    {this.classList.remove("vis");}  
  else
    {this.classList.add("vis");} 
  
  capture:true;
  }  
 
};


/* BACKGROUND COLOR AND TOGGLE */

var xx = document.body;    
xx.style.backgroundColor="white";

base1.addEventListener('change', changeColor);
base2.addEventListener('change', handleUpdate);


var myVar = 0;
var interval = 300;

function handle() {
  myVar = setInterval(function(){ setColor() }, interval); 
}

function handleUpdate() {
  handle();  
}

var tra = 0.5;
var startbase = "white";

function setColor() {   
  xx.style.transition = "all " + tra + "s";  
  xx.style.backgroundColor = xx.style.backgroundColor == startbase ? base2.value : startbase;
}


function changeColor() {

xx.style.backgroundColor = base1.value;
function hexToRGB(hex, alpha) {
    if (!hex || [4, 7].indexOf(hex.length) === -1) {
        return;
    }

    hex = hex.substr(1);
    if (hex.length === 3) { 
        hex = hex.split('').map(function(el){ 
              return el + el + '';
            }).join('');
    }

    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
   }

   startbase = hexToRGB(base1.value);
  
}

var stoptog = document.querySelector(".stoptog");
stoptog.addEventListener("click", stopToggling);

function stopToggling() {
  clearInterval(myVar); 
}

var resetcol = document.querySelector(".resetcol");
  resetcol.addEventListener("click", resetCol);

function resetCol() {
  xx.style.backgroundColor = "white";
}



/* Z PLUS AND Z MINUS */

// const zpl = document.querySelectorAll('.zpl');
// zpl.forEach(zp => zp.addEventListener('click', plz));

// const zmin = document.querySelectorAll('.zmin');
// zmin.forEach(zmtr => zmtr.addEventListener('click', minz));

// function minz () {
  
// this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value)-1;   
// this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)-1;
// }

// function plz () {
// this.previousElementSibling.value = Number(this.previousElementSibling.value)+1; 
// this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)+1;
// }  


/* ROTATION */

rots.forEach(rot=>rot.addEventListener('mousedown', function() {  
  this.className="rot drop";
}));

$(document).ready(function() {
  function rotateOnMouse(e, pw) {
    var offset = pw.offset();
    var center_x = (offset.left) + ($(pw).width() / 2);
    var center_y = (offset.top) + ($(pw).height() / 2);
    var mouse_x = e.pageX;
    var mouse_y = e.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 100;
    //            window.console.log("de="+degree+","+radians);
    $(pw).css('-moz-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');
  }

  $('.rot').mousedown(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
});


/* HELP SCREEN */

const helpscreen = document.querySelector('.helpscreen');

const help = document.querySelector('.help');
help.addEventListener("click", showhelp);

const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener("click", closehelp);

function showhelp() {
  helpscreen.style.width = "85%";
}

function closehelp() {
  helpscreen.style.width = "0%";
}



/* ADDING ELEMETNS: other functions included inside */

/* ADD RECTANGLE */

const addrec1 = document.querySelector('.addrect1');
addrec1.addEventListener('click', addrect1);

function addrect1() {
var div1 = document.createElement("div"); 
div1.className  = "target topdiv";
div1.setAttribute('style', 'position: auto');
 
var div2 = document.createElement("div");
div2.className  = "squarediv1 target";
   
var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute('style', 'border: 0px solid black');
svg1.setAttribute('width', '100');
svg1.setAttribute('height', '100');
svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
svg1.className  = "squarediv1 target";  

var rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect1.setAttribute('width', '100');
rect1.setAttribute('height', '100');
rect1.setAttribute('style', 'fill: lime');
rect1.setAttribute('class', 'blocked');
rect1.setAttribute('id', 's');  

var inp1 = document.createElement("input");  
inp1.setAttribute('type', 'color');
inp1.setAttribute('class', 'controls col con');  
inp1.setAttribute('value', '#ffc600'); 

var inp2 = document.createElement("input");  
inp2.setAttribute('type', 'select');
inp2.setAttribute('class', 'controls submit');  
inp2.setAttribute('value', '0');
  
var inp3 = document.createElement("input");  
inp3.setAttribute('type', 'button');
inp3.setAttribute('class', 'controls zpl zs');  
inp3.setAttribute('value', 'z+');

var inp4 = document.createElement("input");  
inp4.setAttribute('type', 'button');
inp4.setAttribute('class', 'controls zmin zs');  
inp4.setAttribute('value', 'z-');
  
var inp5 = document.createElement("input");  
inp5.setAttribute('type', 'range');
inp5.setAttribute('class', 'controls opac col');  
inp5.setAttribute('value', '99.99');
inp5.setAttribute('max', '99.99');
inp5.setAttribute('min', '0');    
  
var inp6 = document.createElement("input");  
inp6.setAttribute('type', 'button');
inp6.setAttribute('class', 'sshape controls');  
inp6.setAttribute('value', 'Sh');
     
var inp7 = document.createElement("input");  
inp7.setAttribute('type', 'button');
inp7.setAttribute('class', 'hshape controls');  
inp7.setAttribute('value', 'x');  
inp7.setAttribute('style', 'visibility:hidden');

var inp8 = document.createElement("input");  
inp8.setAttribute('type', 'range');
inp8.setAttribute('class', 'controls wdth');  
inp8.setAttribute('max', '99');
inp8.setAttribute('min', '0');      
inp8.setAttribute('value', '99');
inp8.setAttribute('style', 'visibility:hidden');   
 
var inp9 = document.createElement("input");  
inp9.setAttribute('type', 'range');
inp9.setAttribute('class', 'controls hghtrect');
inp9.setAttribute('max', '99');
inp9.setAttribute('min', '0');      
inp9.setAttribute('value', '99');  
inp9.setAttribute('step', '0.25');
inp9.setAttribute('style', 'visibility:hidden');  
 
var inp10 = document.createElement("input");
inp10.className  = "remove";  
inp10.setAttribute('type', 'button');
inp10.setAttribute('value', 'x');  
  

svg1.appendChild(rect1);
div2.appendChild(svg1);
div1.appendChild(div2);

div1.insertBefore(inp10, div2.nextElementSibling);  
div1.insertBefore(inp9, div2.nextElementSibling);  
div1.insertBefore(inp8, div2.nextElementSibling);  
div1.insertBefore(inp7, div2.nextElementSibling);  
div1.insertBefore(inp6, div2.nextElementSibling);  
div1.insertBefore(inp5, div2.nextElementSibling);  
div1.insertBefore(inp4, div2.nextElementSibling);  
div1.insertBefore(inp3, div2.nextElementSibling);  
div1.insertBefore(inp2, div2.nextElementSibling);  
div1.insertBefore(inp1, div2.nextElementSibling);  

rect.appendChild(div1);

/*drag elements*/   
const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');

els.forEach(el=>el.addEventListener('mousedown', onmousedown, { capture:true }));
els.forEach(el=>el.addEventListener('mouseup', onmouseup));
els.forEach(el=>el.addEventListener('mousemove', onmousemove, { capture:true }));  
els.forEach(el=>el.addEventListener('mouseover', onmousemove));

/*double click for controls and rotating*/  
  
els.forEach(el=>el.addEventListener('dblclick', dbl)); 
  

/*change color of element*/  
  
const ctr = document.querySelectorAll('.con');
ctr.forEach(cl => cl.addEventListener('change', function() {this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.fill= this.value;} ));
els.forEach(el=>el.addEventListener('mouseover', onhov));

/*rotate elements*/
  
rots.forEach(rot=>rot.addEventListener('mousedown', function() {  
  this.className="rot drop";
}));
  
$(document).ready(function() {
 
  $('.rot').mousedown(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
});

  
/*change z-index: z- and z+ buttons*/  
  
const zpl = document.querySelectorAll('.zpl');
zpl.forEach(zp => zp.addEventListener('click', plz));

const zmin = document.querySelectorAll('.zmin');
zmin.forEach(zm => zm.addEventListener('click', minz));

function minz () {
this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value)-1;   
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)-Number(1);
}

function plz () {
this.previousElementSibling.value = Number(this.previousElementSibling.value)+1; 
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)+1;
}   
 
/*change z-index by submiting*/  
  
const subm = document.querySelectorAll('.submit');
subm.forEach(su => su.addEventListener('change', chz));
subm.forEach(su => su.addEventListener('keyup', chz)); 

function chz () {
this.parentNode.style.zIndex = Number(this.value); 
}
  
/*change opacity*/
  
const opac = document.querySelectorAll(".opac");
opac.forEach(op => op.addEventListener('change', opacity));
opac.forEach(op => op.addEventListener('musemove', opacity));

function opacity (e) {
  this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.opacity=(this.valueAsNumber)*0.01 + 0.01;
  e.stopPropagation();
}
  
/*change width and height*/
  
const wdth = document.querySelectorAll(".wdth");
wdth.forEach(w => w.addEventListener('click', addwidth));
 
function addwidth () { 
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.style.transition = "all 0.5s";
element.style.r = this.valueAsNumber;
element.style.width = this.valueAsNumber+1;
}

const hghtr = document.querySelectorAll(".hghtrect");
hghtr.forEach(hr => hr.addEventListener('change', addheightr));
hghtr.forEach(hr => hr.addEventListener('mousemove', addheightr));
 
function addheightr () {
const elementr = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
elementr.style.transition = "all 0.5s";
elementr.style.height = this.valueAsNumber+1;
  } 

/*show adn hide shape controls*/

const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));
 
function showsh (e) {
  this.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility="visible";
}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh (e) {   
  this.style.visibility="hidden";
  this.nextElementSibling.style.visibility="hidden";
  this.nextElementSibling.nextElementSibling.style.visibility="hidden";   
  };   

  
const remove = document.querySelectorAll(".remove");
remove.forEach(rem=>rem.addEventListener("click", removeElement));

function removeElement () {
  const par = this.parentNode;
  par.parentNode.removeChild(par);
 }
  
  
};


/* ADD TRIANGLE */

const addtri1 = document.querySelector('.addtr1');
addtri1.addEventListener('click', addtr1);

function addtr1 () {
var div1 = document.createElement("div"); 
div1.className  = "target topdiv dragable";

var div2 = document.createElement("div");
div2.className  = "trdiv2 target";

var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute('width', '100');
svg1.setAttribute('height', '86');
svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
svg1.setAttribute('class', 'trdiv2 target blocked');

var tr1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tr1.setAttribute('points', '50,00 0,86 100,86'); 
tr1.setAttribute('style', 'fill: blue');
tr1.setAttribute('class', 'blocked');

var inp1 = document.createElement("input");  
inp1.setAttribute('type', 'color');
inp1.setAttribute('class', 'controls col con');  
inp1.setAttribute('value', '#ffc600'); 
 
var inp2 = document.createElement("input");  
inp2.setAttribute('type', 'select');
inp2.setAttribute('class', 'controls submit');  
inp2.setAttribute('value', '0');
  
var inp3 = document.createElement("input");  
inp3.setAttribute('type', 'button');
inp3.setAttribute('class', 'controls zpl zs');  
inp3.setAttribute('value', 'z+');

var inp4 = document.createElement("input");  
inp4.setAttribute('type', 'button');
inp4.setAttribute('class', 'controls zmin zs');  
inp4.setAttribute('value', 'z-');   
 
var inp5 = document.createElement("input");  
inp5.setAttribute('type', 'range');
inp5.setAttribute('class', 'controls opac col');  
inp5.setAttribute('value', '99.99');
inp5.setAttribute('max', '99.99');
inp5.setAttribute('min', '0'); 

var inp6 = document.createElement("input");  
inp6.setAttribute('type', 'button');
inp6.setAttribute('class', 'sshape controls');  
inp6.setAttribute('value', 'Sh');    
 
var inp7 = document.createElement("input");  
inp7.setAttribute('type', 'button');
inp7.setAttribute('class', 'hshape controls');  
inp7.setAttribute('value', 'x');  
inp7.setAttribute('style', 'visibility:hidden');  
  
var inp8 = document.createElement("input");  
inp8.setAttribute('type', 'range');
inp8.setAttribute('class', 'controls ax'); 
inp8.setAttribute('max', '99');
inp8.setAttribute('min', '0');      
inp8.setAttribute('value', '0');
inp8.setAttribute('style', 'visibility:hidden;');
 
var inp9 = document.createElement("input");  
inp9.setAttribute('type', 'range');
inp9.setAttribute('class', 'controls bx');  
inp9.setAttribute('max', '99');
inp9.setAttribute('min', '0');      
inp9.setAttribute('value', '50');
inp9.setAttribute('style', 'visibility:hidden;;');
  
var inp10 = document.createElement("input");  
inp10.setAttribute('type', 'range'); 
inp10.setAttribute('class', 'controls cx');  
inp10.setAttribute('max', '99');
inp10.setAttribute('min', '0');      
inp10.setAttribute('value', '99');
inp10.setAttribute('style', 'visibility:hidden;');
  
var inp11 = document.createElement("input");  
inp11.setAttribute('type', 'range');
inp11.setAttribute('class', 'controls ay');  
inp11.setAttribute('max', '86');
inp11.setAttribute('min', '0');      
inp11.setAttribute('value', '86');
inp11.setAttribute('style', 'visibility:hidden;position:absolute;left:-30px;');   
  
var inp12 = document.createElement("input");  
inp12.setAttribute('type', 'range');
inp12.setAttribute('class', 'controls by');  
inp12.setAttribute('max', '86');
inp12.setAttribute('min', '0');      
inp12.setAttribute('value', '0');
inp12.setAttribute('style', 'visibility:hidden;left:10px;');   
  
var inp13 = document.createElement("input");  
inp13.setAttribute('type', 'range');
inp13.setAttribute('class', 'controls cy');  
inp13.setAttribute('max', '86');
inp13.setAttribute('min', '0');      
inp13.setAttribute('value', '86');
inp13.setAttribute('style', 'visibility:hidden;left:50px;');   
  
var inp14 = document.createElement("input");
inp14.className  = "remove";  
inp14.setAttribute('type', 'button');
inp14.setAttribute('value', 'x');    
  
  
svg1.appendChild(tr1);
div2.appendChild(svg1);
div1.appendChild(div2);

div1.insertBefore(inp14, div2.nextSibling);   
div1.insertBefore(inp13, div2.nextSibling);  
div1.insertBefore(inp12, div2.nextSibling);  
div1.insertBefore(inp11, div2.nextSibling);   
div1.insertBefore(inp10, div2.nextSibling);  
div1.insertBefore(inp9, div2.nextSibling);    
div1.insertBefore(inp8, div2.nextSibling);  
div1.insertBefore(inp7, div2.nextSibling);  
div1.insertBefore(inp6, div2.nextSibling);   
div1.insertBefore(inp5, div2.nextSibling);  
div1.insertBefore(inp4, div2.nextSibling);  
div1.insertBefore(inp3, div2.nextSibling);  
div1.insertBefore(inp2, div2.nextSibling);  
div1.insertBefore(inp1, div2.nextSibling); 

  
tr.appendChild(div1);
// const all = []; 
// all.push(div1);  

    
const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');

els.forEach(el=>el.addEventListener('mousedown', onmousedown, { capture:true }));
els.forEach(el=>el.addEventListener('mouseup', onmouseup));
els.forEach(el=>el.addEventListener('mousemove', onmousemove, { capture:true }));  
els.forEach(el=>el.addEventListener('mouseover', onhov));
 
els.forEach(el=>el.addEventListener('dblclick', dbl)); 
  

const zpl = document.querySelectorAll('.zpl');
zpl.forEach(zp => zp.addEventListener('click', plz));

const zmin = document.querySelectorAll('.zmin');
zmin.forEach(zm => zm.addEventListener('click', minz));

function minz () {
this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value-1);   
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)-1;
}

function plz () {
this.previousElementSibling.value = Number(this.previousElementSibling.value)+1; 
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)+1;
}  

const subm = document.querySelectorAll('.submit');
subm.forEach(su => su.addEventListener('change', chz));
subm.forEach(su => su.addEventListener('keyup', chz)); 

function chz () {
this.parentNode.style.zIndex = Number(this.value); 
}
  
const ctr = document.querySelectorAll('.con');
ctr.forEach(cl => cl.addEventListener('change', function() {this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.setProperty(`fill`, this.value);} ));
 

rots.forEach(rot=>rot.addEventListener('mousedown', function() {  
  this.className="rot drop";
}));
$(document).ready(function() {
 
  $('.rot').mousedown(function(e) {
    e.preventDefault(); 
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
});



const opac = document.querySelectorAll(".opac");
opac.forEach(op => op.addEventListener('change', opacity));
opac.forEach(op => op.addEventListener('musemove', opacity));

function opacity (e) {
  this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.opacity=(this.valueAsNumber)*0.01 + 0.01;
  e.stopPropagation();
}
  

const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));
 
function showsh (e) {
  const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
  const next2 = next1.nextElementSibling.nextElementSibling;
  
  this.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.style.visibility="visible";
  next1.style.visibility="visible";
  next1.nextElementSibling.style.visibility="visible";
  next1.nextElementSibling.nextElementSibling.style.visibility="visible";
  next2.nextElementSibling.style.visibility="visible";
  next2.nextElementSibling.nextElementSibling.style.visibility="visible";
  next2.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility="visible";      
}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh (e) {   
  const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
  const next2 = next1.nextElementSibling.nextElementSibling;
    
  this.style.visibility="hidden";
  this.nextElementSibling.style.visibility="hidden";
  this.nextElementSibling.nextElementSibling.style.visibility="hidden";
  next1.style.visibility="hidden";
  next1.nextElementSibling.style.visibility="hidden";
  next1.nextElementSibling.nextElementSibling.style.visibility="hidden";
  next2.nextElementSibling.style.visibility="hidden";
  next2.nextElementSibling.nextElementSibling.style.visibility="hidden";  
  };   
  

const ax= document.querySelectorAll(".ax");
ax.forEach(a => a.addEventListener('change', addax));
 
function addax () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(1).x = this.valueAsNumber+1;
}

const bx = document.querySelectorAll(".bx");
bx.forEach(b => b.addEventListener('change', addbx));
 
function addbx () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(0).x = this.valueAsNumber+1;
}

const cx = document.querySelectorAll(".cx");
cx.forEach(c => c.addEventListener('change', addcx));
 
function addcx () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(2).x = this.valueAsNumber+1;
}

const ay= document.querySelectorAll(".ay");
ay.forEach(a => a.addEventListener('change', adday));
 
function adday () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(1).y = this.valueAsNumber+1;
}



const by = document.querySelectorAll(".by");
by.forEach(b => b.addEventListener('change', addby));
 
function addby () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(0).y = this.valueAsNumber+1;
}

const cy = document.querySelectorAll(".cy");
cy.forEach(c => c.addEventListener('change', addcy));
 
function addcy () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(2).y = this.valueAsNumber;
  } 

  
const remove = document.querySelectorAll(".remove");
remove.forEach(rem=>rem.addEventListener("click", removeElement));

function removeElement () {
  const par = this.parentElement;
  par.parentNode.removeChild(par);
 }  

  
};


/* ADD CIRCLE */


const cir1 = document.querySelector('.cir1');
cir1.addEventListener('click', addcircle1);

function addcircle1 () {
var div1 = document.createElement("div"); 
div1.className  = "target topdiv";

var div2 = document.createElement("div");
div2.className  = "squarediv1 target";

var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute('style', 'border: 0px solid black');
svg1.setAttribute('width', '100');
svg1.setAttribute('height', '100');
svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
svg1.className  = "squarediv1 target blocked";  

var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c1.setAttribute('cx', '50');
c1.setAttribute('cy', '50');
c1.setAttribute('r', '50');  
c1.setAttribute('style', 'fill: yellow');
c1.setAttribute('class', 'blocked');

var inp1 = document.createElement("input");  
inp1.setAttribute('type', 'color');
inp1.setAttribute('class', 'controls col con');  
inp1.setAttribute('value', '#ffc600'); 
 
var inp2 = document.createElement("input");  
inp2.setAttribute('type', 'select');
inp2.setAttribute('class', 'controls submit');  
inp2.setAttribute('value', '0');
  
var inp3 = document.createElement("input");  
inp3.setAttribute('type', 'button');
inp3.setAttribute('class', 'controls zpl zs');  
inp3.setAttribute('value', 'z+');

var inp4 = document.createElement("input");  
inp4.setAttribute('type', 'button');
inp4.setAttribute('class', 'controls zmin zs');  
inp4.setAttribute('value', 'z-');
  
var inp5 = document.createElement("input");  
inp5.setAttribute('type', 'range');
inp5.setAttribute('class', 'controls opac col');  
inp5.setAttribute('value', '99.99');
inp5.setAttribute('max', '99.99');
inp5.setAttribute('min', '0');    
  
var inp6 = document.createElement("input");  
inp6.setAttribute('type', 'button');
inp6.setAttribute('class', 'sshape controls');  
inp6.setAttribute('value', 'Sh');
     
var inp7 = document.createElement("input");  
inp7.setAttribute('type', 'button');
inp7.setAttribute('class', 'hshape controls');  
inp7.setAttribute('value', 'x');  
inp7.setAttribute('style', 'visibility:hidden');

var inp8 = document.createElement("input");  
inp8.setAttribute('type', 'range');
inp8.setAttribute('class', 'controls wdth');  
inp8.setAttribute('max', '50');
inp8.setAttribute('min', '0');      
inp8.setAttribute('value', '50');
inp8.setAttribute('style', 'visibility:hidden');    

var inp9 = document.createElement("input");
inp9.className  = "remove";  
inp9.setAttribute('type', 'button');
inp9.setAttribute('value', 'x');    

  
svg1.appendChild(c1);
div2.appendChild(svg1);
div1.appendChild(div2);

div1.insertBefore(inp9, div2.nextSibling);     
div1.insertBefore(inp8, div2.nextSibling);  
div1.insertBefore(inp7, div2.nextSibling);  
div1.insertBefore(inp6, div2.nextSibling);   
div1.insertBefore(inp5, div2.nextSibling);  
div1.insertBefore(inp4, div2.nextSibling);  
div1.insertBefore(inp3, div2.nextSibling);  
div1.insertBefore(inp2, div2.nextSibling);  
div1.insertBefore(inp1, div2.nextSibling);
  
  
cir.appendChild(div1);

  
  
  
const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');

els.forEach(el=>el.addEventListener('mousedown', onmousedown, { capture:true }));
els.forEach(el=>el.addEventListener('mouseup', onmouseup));
els.forEach(el=>el.addEventListener('mousemove', onmousemove, { capture:true }));  
els.forEach(el=>el.addEventListener('mouseover', onhov));

els.forEach(el=>el.addEventListener('dblclick', dbl)); 
  

const zpl = document.querySelectorAll('.zpl');
zpl.forEach(zp => zp.addEventListener('click', plz));

const zmin = document.querySelectorAll('.zmin');
zmin.forEach(zm => zm.addEventListener('click', minz));

function minz () {
this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value)-1;   
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)-1;
}

function plz () {
this.previousElementSibling.value = Number(this.previousElementSibling.value)+1; 
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)+1;
}  
 
const subm = document.querySelectorAll('.submit');
subm.forEach(su => su.addEventListener('change', chz));
subm.forEach(su => su.addEventListener('keyup', chz)); 

function chz () {
this.parentNode.style.zIndex = Number(this.value); 
}  
  
const ctr = document.querySelectorAll('.con');
ctr.forEach(cl => cl.addEventListener('change', function() {this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.setProperty(`fill`, this.value);} ));
 

rots.forEach(rot=>rot.addEventListener('mousedown', function() {  
  this.className="rot drop";
}));
$(document).ready(function() {
 
  $('.rot').mousedown(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
});


const opac = document.querySelectorAll(".opac");
opac.forEach(op => op.addEventListener('change', opacity));
//opac.forEach(op => op.addEventListener('wheel', opacity));
opac.forEach(op => op.addEventListener('musemove', opacity));
function opacity (e) {
  this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.opacity=(this.valueAsNumber)*0.01 + 0.01;
  e.stopPropagation();
  //capture:true;
}
  
const wdth = document.querySelectorAll(".wdth");
wdth.forEach(h => h.addEventListener('click', addwidth));
 
function addwidth () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.style.r = this.valueAsNumber;
element.style.width = this.valueAsNumber+1;
element.style.transition = "all 0.5s";
}
  

const hght = document.querySelectorAll(".hght");
hght.forEach(h => h.addEventListener('change', addheight));
hght.forEach(h => h.addEventListener('mousemove', addheight));
 
function addheight () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.style.height = this.valueAsNumber*(-1)+1;
} 


const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));
 
function showsh (e) {
  this.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.style.visibility="visible";
}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh (e) {   
  this.style.visibility="hidden";
  this.nextElementSibling.style.visibility="hidden";
  };   
  
  
const remove = document.querySelectorAll(".remove");
remove.forEach(rem=>rem.addEventListener("click", removeElement));

function removeElement () {
  const par = this.parentElement;
  par.parentNode.removeChild(par);
 }  
  
  
};



/* ADD ELLIPSE */

const ell1 = document.querySelector('.ell1');
ell1.addEventListener('click', addellipse1);

function addellipse1 () {
var div1 = document.createElement("div"); 
div1.className  = "target topdiv";

var div2 = document.createElement("div");
div2.className  = "trdiv2 target";

var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute('style', 'border: 0px solid black');
svg1.setAttribute('width', '100');
svg1.setAttribute('height', '100');
svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
svg1.setAttribute('class', 'elipsediv1 target blocked');

var e1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
e1.setAttribute('cx', '50');
e1.setAttribute('cy', '50');
e1.setAttribute('rx', '50');
e1.setAttribute('ry', '35');    
e1.setAttribute('style', 'fill: orange;');
e1.setAttribute('class', 'blocked');

var inp1 = document.createElement("input");  
inp1.setAttribute('type', 'color');
inp1.setAttribute('class', 'controls col con');  
inp1.setAttribute('value', '#ffc600'); 
  
var inp2 = document.createElement("input");  
inp2.setAttribute('type', 'select');
inp2.setAttribute('class', 'controls submit');  
inp2.setAttribute('value', '0');
  
var inp3 = document.createElement("input");  
inp3.setAttribute('type', 'button');
inp3.setAttribute('class', 'controls zpl zs');  
inp3.setAttribute('value', 'z+');

var inp4 = document.createElement("input");  
inp4.setAttribute('type', 'button');
inp4.setAttribute('class', 'controls zmin zs');  
inp4.setAttribute('value', 'z-');

var inp5 = document.createElement("input");  
inp5.setAttribute('type', 'range');
inp5.setAttribute('class', 'controls opac col');  
inp5.setAttribute('value', '99.99');
inp5.setAttribute('max', '99.99');
inp5.setAttribute('min', '0');    
  
var inp6 = document.createElement("input");  
inp6.setAttribute('type', 'button');
inp6.setAttribute('class', 'sshape controls');  
inp6.setAttribute('value', 'Sh');
     
var inp7 = document.createElement("input");  
inp7.setAttribute('type', 'button');
inp7.setAttribute('class', 'hshape controls');  
inp7.setAttribute('value', 'x');  
inp7.setAttribute('style', 'visibility:hidden');

var inp8 = document.createElement("input");  
inp8.setAttribute('type', 'range');
inp8.setAttribute('class', 'controls wdthell');  
inp8.setAttribute('max', '50');
inp8.setAttribute('min', '1');      
inp8.setAttribute('value', '50');
inp8.setAttribute('style', 'visibility:hidden');   
 
var inp9 = document.createElement("input");  
inp9.setAttribute('type', 'range');
inp9.setAttribute('class', 'controls hghtell');  
inp9.setAttribute('max', '-1');
inp9.setAttribute('min', '-35');      
inp9.setAttribute('value', '-35');  
inp9.setAttribute('step', '0.25');
inp9.setAttribute('style', 'visibility:hidden;height:70px;');   

var inp10 = document.createElement("input");
inp10.className  = "remove";  
inp10.setAttribute('type', 'button');
inp10.setAttribute('value', 'x');      
  
svg1.appendChild(e1);
div2.appendChild(svg1);
div1.appendChild(div2);

div1.insertBefore(inp10, div2.nextSibling);
div1.insertBefore(inp9, div2.nextSibling);    
div1.insertBefore(inp8, div2.nextSibling);  
div1.insertBefore(inp7, div2.nextSibling);  
div1.insertBefore(inp6, div2.nextSibling);   
div1.insertBefore(inp5, div2.nextSibling);  
div1.insertBefore(inp4, div2.nextSibling);  
div1.insertBefore(inp3, div2.nextSibling);  
div1.insertBefore(inp2, div2.nextSibling);  
div1.insertBefore(inp1, div2.nextSibling); 

  
el.appendChild(div1);

  
  
  
const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');

els.forEach(el=>el.addEventListener('mousedown', onmousedown, { capture:true }));
els.forEach(el=>el.addEventListener('mouseup', onmouseup));
els.forEach(el=>el.addEventListener('mousemove', onmousemove, { capture:true }));  
els.forEach(el=>el.addEventListener('mouseover', onhov));

els.forEach(el=>el.addEventListener('dblclick', dbl)); 
   
const ctr = document.querySelectorAll('.con');//||''
ctr.forEach(cl => cl.addEventListener('change', function() {this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.setProperty(`fill`, this.value);} ));
 
const zpl = document.querySelectorAll('.zpl');
zpl.forEach(zp => zp.addEventListener('click', plz));

const zmin = document.querySelectorAll('.zmin');
zmin.forEach(zm => zm.addEventListener('click', minz));

function minz () {
this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value)-1;   
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)-1;
}

function plz () {
this.previousElementSibling.value = Number(this.previousElementSibling.value)+1; 
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)+1;
}  
  
const subm = document.querySelectorAll('.submit');
subm.forEach(su => su.addEventListener('change', chz));
subm.forEach(su => su.addEventListener('keyup', chz)); 

function chz () {
this.parentNode.style.zIndex = Number(this.value); 
} 
  
const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));
 
function showsh (e) {
//   const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
//   const next2 = next1.nextElementSibling.nextElementSibling; 
  this.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility="visible";

}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh (e) {   
  this.style.visibility="hidden";
  this.nextElementSibling.style.visibility="hidden";
  this.nextElementSibling.nextElementSibling.style.visibility="hidden";
};   
  
  
const wdth = document.querySelectorAll(".wdthell");
wdth.forEach(h => h.addEventListener('click', addwidth));
 
function addwidth () {
const elementell = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
elementell.style.rx = this.valueAsNumber;
elementell.style.transition = "all 0.5s";
 
}

const hght = document.querySelectorAll(".hghtell");
hght.forEach(he => he.addEventListener('change', addheight));
hght.forEach(he => he.addEventListener('mousemove', addheight));
 
function addheight () {
const elementell = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
elementell.style.ry = this.valueAsNumber*(-1);
elementell.style.transition = "all 0.5s"; 
} 

  
  
rots.forEach(rot=>rot.addEventListener('mousedown', function() {  
  this.className="rot drop";
}));
$(document).ready(function() {
 
  $('.rot').mousedown(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
});
  
 
const opac = document.querySelectorAll(".opac");
opac.forEach(op => op.addEventListener('change', opacity));
//opac.forEach(op => op.addEventListener('wheel', opacity));
opac.forEach(op => op.addEventListener('musemove', opacity));
function opacity (e) {
  this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.opacity=(this.valueAsNumber)*0.01 + 0.01;
  e.stopPropagation();
  }  
  
  
const remove = document.querySelectorAll(".remove");
remove.forEach(rem=>rem.addEventListener("click", removeElement));

function removeElement () {
  const par = this.parentElement;
  par.parentNode.removeChild(par);
 }  
  
  
};


/* ADD LINE */

const line1 = document.querySelector('.line1');
line1.addEventListener('click', addline1);

function addline1 () {
var div1 = document.createElement("div"); 
div1.className  = "target topdiv";

var div2 = document.createElement("div");
div2.className  = "linediv1 target";
  
var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute('style', 'border: 0px solid black');
svg1.setAttribute('width', '100');
svg1.setAttribute('height', '100');
svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
svg1.setAttribute('class', 'linediv1 target blocked');
  
var l1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
l1.setAttribute('style', 'stroke:rgb(255,0,0);stroke-width:2');
l1.setAttribute('x1', '50');
l1.setAttribute('y1', '0');
l1.setAttribute('x2', '50');
l1.setAttribute('y2', '100');  
l1.setAttribute('class', 'blocked');

var inp1 = document.createElement("input");  
inp1.setAttribute('type', 'color');
inp1.setAttribute('class', 'controls col con');  
inp1.setAttribute('value', '#ffc600'); 
  
var inp2 = document.createElement("input");  
inp2.setAttribute('type', 'select');
inp2.setAttribute('class', 'controls submit');  
inp2.setAttribute('value', '0');
  
var inp3 = document.createElement("input");  
inp3.setAttribute('type', 'button');
inp3.setAttribute('class', 'controls zpl zs');  
inp3.setAttribute('value', 'z+');

var inp4 = document.createElement("input");  
inp4.setAttribute('type', 'button');
inp4.setAttribute('class', 'controls zmin zs');  
inp4.setAttribute('value', 'z-');
   
var inp5 = document.createElement("input");  
inp5.setAttribute('type', 'range');
inp5.setAttribute('class', 'controls opac col');  
inp5.setAttribute('value', '99.99');
inp5.setAttribute('max', '99.99');
inp5.setAttribute('min', '0');    
  
var inp6 = document.createElement("input");  
inp6.setAttribute('type', 'button');
inp6.setAttribute('class', 'sshape controls');  
inp6.setAttribute('value', 'Sh');
     
var inp7 = document.createElement("input");  
inp7.setAttribute('type', 'button');
inp7.setAttribute('class', 'hshape controls');  
inp7.setAttribute('value', 'x');  
inp7.setAttribute('style', 'visibility:hidden');  
  
var inp8 = document.createElement("input");  
inp8.setAttribute('type', 'range');
inp8.setAttribute('class', 'controls hght'); 
inp8.setAttribute('max', '100');
inp8.setAttribute('min', '0');      
inp8.setAttribute('value', '0');
inp8.setAttribute('style', 'visibility:hidden;display:inline-flex;');
 
var inp9 = document.createElement("input");
inp9.className  = "remove";  
inp9.setAttribute('type', 'button');
inp9.setAttribute('value', 'x');    
  
svg1.appendChild(l1);
div2.appendChild(svg1);
div1.appendChild(div2);
  
div1.insertBefore(inp9, div2.nextSibling); 
div1.insertBefore(inp8, div2.nextSibling);  
div1.insertBefore(inp7, div2.nextSibling);  
div1.insertBefore(inp6, div2.nextSibling);   
div1.insertBefore(inp5, div2.nextSibling);  
div1.insertBefore(inp4, div2.nextSibling);  
div1.insertBefore(inp3, div2.nextSibling);  
div1.insertBefore(inp2, div2.nextSibling);  
div1.insertBefore(inp1, div2.nextSibling); 
 
lin.appendChild(div1);
  

const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');

els.forEach(el=>el.addEventListener('mousedown', onmousedown, { capture:true }));
els.forEach(el=>el.addEventListener('mouseup', onmouseup));
els.forEach(el=>el.addEventListener('mousemove', onmousemove, { capture:true }));  
els.forEach(el=>el.addEventListener('mouseover', onhov));

els.forEach(el=>el.addEventListener('dblclick', dbl)); 
  
  
const ctr = document.querySelectorAll('.con');//||''
ctr.forEach(cl => cl.addEventListener('change', function() {this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.setProperty(`stroke`, this.value);} ));
 

rots.forEach(rot=>rot.addEventListener('mousedown', function() {  
  this.className="rot drop";
}));
$(document).ready(function() {
 
  $('.rot').mousedown(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
});
  

const zpl = document.querySelectorAll('.zpl');
zpl.forEach(zp => zp.addEventListener('click', plz));

const zmin = document.querySelectorAll('.zmin');
zmin.forEach(zm => zm.addEventListener('click', minz));

function minz () {
this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value)-1;   
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)-1;
}

function plz () {

this.previousElementSibling.value = Number(this.previousElementSibling.value)+1; 
this.parentNode.style.zIndex=Number(this.parentNode.style.zIndex)+1;
}  
  
const subm = document.querySelectorAll('.submit');
subm.forEach(su => su.addEventListener('change', chz));
subm.forEach(su => su.addEventListener('keyup', chz)); 

function chz () {
this.parentNode.style.zIndex = Number(this.value); 
} 
  
const opac = document.querySelectorAll(".opac");
opac.forEach(op => op.addEventListener('change', opacity));
opac.forEach(op => op.addEventListener('musemove', opacity));
function opacity (e) {
  this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.opacity=(this.valueAsNumber)*0.01 + 0.01;
  e.stopPropagation();
}
  

const hght = document.querySelectorAll(".hght");
hght.forEach(hl => hl.addEventListener('change', addheight));
hght.forEach(hl => hl.addEventListener('mousemove', addheight));
 
function addheight () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
l1.setAttribute('y1', this.valueAsNumber); 
  } 


const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));
 
function showsh (e) {
  this.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility="visible";
}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh () {   
  this.style.visibility="hidden";
  this.nextElementSibling.style.visibility="hidden";
  this.nextElementSibling.nextElementSibling.style.visibility="hidden";   
  }
  

const remove = document.querySelectorAll(".remove");
remove.forEach(rem=>rem.addEventListener("click", removeElement));

function removeElement () {
  const par = this.parentElement;
  par.parentNode.removeChild(par);
 }    
  
  
};


/* SHOW AND HIDE SHAPE CONTROLS OF ELEMENTS */

const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));
 
function showsh (e) {
  const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
  const next2 = next1.nextElementSibling.nextElementSibling;
  
  this.nextElementSibling.style.visibility="visible";
  this.nextElementSibling.nextElementSibling.style.visibility="visible";
  next1.style.visibility="visible";
  next1.nextElementSibling.style.visibility="visible";
  next1.nextElementSibling.nextElementSibling.style.visibility="visible";
  next2.nextElementSibling.style.visibility="visible";
  next2.nextElementSibling.nextElementSibling.style.visibility="visible";
  next2.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility="visible";      
}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh (e) {
  const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
  const next2 = next1.nextElementSibling.nextElementSibling;
    
  this.style.visibility="hidden";
  this.nextElementSibling.style.visibility="hidden";
  this.nextElementSibling.nextElementSibling.style.visibility="hidden";
  next1.style.visibility="hidden";
  next1.nextElementSibling.style.visibility="hidden";
  next1.nextElementSibling.nextElementSibling.style.visibility="hidden";
  next2.nextElementSibling.style.visibility="hidden";
  next2.nextElementSibling.nextElementSibling.style.visibility="hidden";  
}


/* CHANGE SHAPE OF ELEMENTS */

/*  width and height */

const wdth = document.querySelectorAll(".wdth");
wdth.forEach(h => h.addEventListener('click', addwidth));
 
function addwidth () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.style.r = this.valueAsNumber;
element.style.width = this.valueAsNumber+1;
}

const hght = document.querySelectorAll(".hght");
hght.forEach(h => h.addEventListener('change', addheight));
hght.forEach(h => h.addEventListener('mousemove', addheight));
 
function addheight () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.style.height = this.valueAsNumber*(-1)+1;
}


/* triangle dots */

const ax= document.querySelectorAll(".ax");
ax.forEach(a => a.addEventListener('change', addax));
 
function addax () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(1).x = this.valueAsNumber+1;
}

const bx = document.querySelectorAll(".bx");
bx.forEach(b => b.addEventListener('change', addbx));
 
function addbx () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(0).x = this.valueAsNumber+1;
}

const cx = document.querySelectorAll(".cx");
cx.forEach(c => c.addEventListener('change', addcx));
 
function addcx () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(2).x = this.valueAsNumber+1;
}

const ay= document.querySelectorAll(".ay");
ay.forEach(a => a.addEventListener('change', adday));
 
function adday () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(1).y = this.valueAsNumber*-1+1;
}


const by = document.querySelectorAll(".by");
by.forEach(b => b.addEventListener('change', addby));
 
function addby () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(0).y = this.valueAsNumber*-1+1;
}

const cy = document.querySelectorAll(".cy");
cy.forEach(c => c.addEventListener('change', addcy));
 
function addcy () {
const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
element.points.getItem(2).y = this.valueAsNumber*-1;
}
