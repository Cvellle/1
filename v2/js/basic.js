/* MOVING ELEMENTS */
const els = document.querySelectorAll('.target');
const rots = document.querySelectorAll('.rot');
const elsdiv = document.querySelectorAll('.topdiv');
var move = false, x, y, posx, posy, static = true;

onmousemove = function () {
  $(".topdiv").draggable();
};

onmousedown = function () {
  $(".topdiv").draggable();
};

onhov = function () {
  this.style.cursor = "pointer";
};

elsdiv.forEach(eld => eld.addEventListener("mouseover", onmoseover));
els.forEach(el => el.addEventListener('mousedown', onmousedown, { capture: true }));
els.forEach(el => el.addEventListener('mouseup', onmouseup));
els.forEach(el => el.addEventListener('mousemove', onmousemove, { capture: true }));
els.forEach(el => el.addEventListener('mouseover', onmousemove));
els.forEach(el => el.addEventListener('dblclick', dbl));

/* SELECT ELEMENT - TURN ON CONTROLS */
function dbl(e) {
  e.stopPropagation();
  if (!e.target.matches('.squarediv1, .triangle-with-shadow, .triangle-with-shadow2, .trdiv2, .blocked, .zs, .opac')) {
    /* for enabling rotation */
    if
      (this.firstElementChild.classList.contains("drop")) {
      this.firstElementChild.classList.remove("drop");
    }
    else {
      this.firstElementChild.classList.add("drop");
    }
    /* for making controls visible (".topdiv.vis>input" in css) */
    if (this.classList.contains("vis")) { this.classList.remove("vis"); }
    else { this.classList.add("vis"); }
    capture: true;
  }
};

/* SHAPE CHANGE COMMANDS SHOW */
function showsh(e) {
  this.nextElementSibling.style.visibility = "visible";
  this.nextElementSibling.nextElementSibling.style.visibility = "visible";
  this.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility = "visible";
}

/* BACKGROUND COLOR AND TOGGLE */
var xx = document.body;
xx.style.backgroundColor = "white";

base1.addEventListener('change', changeColor);
base2.addEventListener('change', handleUpdate);

var myVar = 0;
var interval = 300;

function handle() {
  myVar = setInterval(function () { setColor() }, interval);
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
      hex = hex.split('').map(function (el) {
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

/* ROTATION */
rots.forEach(rot => rot.addEventListener('mousedown', function () {
  this.className = "rot drop";
}));

$(document).ready(function () {
  function rotateOnMouse(e, pw) {
    var offset = pw.offset();
    var center_x = (offset.left) + ($(pw).width() / 2);
    var center_y = (offset.top) + ($(pw).height() / 2);
    var mouse_x = e.pageX;
    var mouse_y = e.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 100;
    $(pw).css('-moz-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');
  }

  $('.rot').mousedown(function (e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function (e2) {
      rotateOnMouse(e2, $('.drop'));
    });
  });
  $(document).mouseup(function (e) {
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

// OPACITY CHANGE 
function opacity(e) {
  this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.opacity = (this.valueAsNumber) * 0.01 + 0.01;
  e.stopPropagation();
}

// Z-INDEX CHANGE
function plz() {
  this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1;
  this.parentNode.style.zIndex = Number(this.parentNode.style.zIndex) + 1;
}

function minz() {
  this.previousElementSibling.previousElementSibling.value = Number(this.previousElementSibling.previousElementSibling.value) - 1;
  this.parentNode.style.zIndex = Number(this.parentNode.style.zIndex) - 1;
}

function chz() {
  this.parentNode.style.zIndex = Number(this.value);
}

/* SHOW AND HIDE SHAPE CONTROLS OF ELEMENTS */

const ssh = document.querySelectorAll(".sshape");
ssh.forEach(s => s.addEventListener('click', showsh));

function showsh(e) {
  const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
  const next2 = next1.nextElementSibling.nextElementSibling;
  this.nextElementSibling.style.visibility = "visible";
  this.nextElementSibling.nextElementSibling.style.visibility = "visible";
  next1.style.visibility = "visible";
  next1.nextElementSibling.style.visibility = "visible";
  next1.nextElementSibling.nextElementSibling.style.visibility = "visible";
  next2.nextElementSibling.style.visibility = "visible";
  next2.nextElementSibling.nextElementSibling.style.visibility = "visible";
  next2.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility = "visible";
}

const hsh = document.querySelectorAll(".hshape");
hsh.forEach(hs => hs.addEventListener('click', hidesh));

function hidesh(e) {
  const next1 = this.nextElementSibling.nextElementSibling.nextElementSibling;
  const next2 = next1.nextElementSibling.nextElementSibling;
  this.style.visibility = "hidden";
  this.nextElementSibling.style.visibility = "hidden";
  this.nextElementSibling.nextElementSibling.style.visibility = "hidden";
  next1.style.visibility = "hidden";
  next1.nextElementSibling.style.visibility = "hidden";
  next1.nextElementSibling.nextElementSibling.style.visibility = "hidden";
  next2.nextElementSibling.style.visibility = "hidden";
  next2.nextElementSibling.nextElementSibling.style.visibility = "hidden";
}

/* CHANGE SHAPE OF ELEMENTS */

/*  width and height */
const wdth = document.querySelectorAll(".wdth");
wdth.forEach(h => h.addEventListener('click', addwidth));

function addwidth() {
  const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
  element.style.r = this.valueAsNumber;
  element.style.width = this.valueAsNumber + 1;
}

const hght = document.querySelectorAll(".hght");
hght.forEach(h => h.addEventListener('change', addheight));
hght.forEach(h => h.addEventListener('mousemove', addheight));

function addheight() {
  const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
  element.style.height = this.valueAsNumber * (-1) + 1;
}

// REMOVE ELEMENT
function removeElement() {
  const par = this.parentElement;
  par.parentNode.removeChild(par);
}
