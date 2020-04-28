
/* ADD RECTANGLE */
const addrec1 = document.querySelector('.addrect1');
addrec1.addEventListener('click', addrect1);

function addrect1() {
    var div1 = document.createElement("div");
    div1.className = "target topdiv";
    div1.setAttribute('style', 'position: auto');

    var div2 = document.createElement("div");
    div2.className = "squarediv1 target";

    var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute('style', 'border: 0px solid black');
    svg1.setAttribute('width', '100');
    svg1.setAttribute('height', '100');
    svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg1.className = "squarediv1 target";

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
    inp10.className = "remove";
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

    els.forEach(el => el.addEventListener('mousedown', onmousedown, { capture: true }));
    els.forEach(el => el.addEventListener('mouseup', onmouseup));
    els.forEach(el => el.addEventListener('mousemove', onmousemove, { capture: true }));
    els.forEach(el => el.addEventListener('mouseover', onmousemove));

    /*double click for controls and rotating*/
    els.forEach(el => el.addEventListener('dblclick', dbl));

    /*change color of element*/
    const ctr = document.querySelectorAll('.con');
    ctr.forEach(cl => cl.addEventListener('change', function () { this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.fill = this.value; }));
    els.forEach(el => el.addEventListener('mouseover', onhov));

    /*rotate elements*/
    rots.forEach(rot => rot.addEventListener('mousedown', function () {
        this.className = "rot drop";
    }));

    $(document).ready(function () {
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

    /*change z-index: z- and z+ buttons*/
    const zpl = document.querySelectorAll('.zpl');
    zpl.forEach(zp => zp.addEventListener('click', plz));
    const zmin = document.querySelectorAll('.zmin');
    zmin.forEach(zm => zm.addEventListener('click', minz));

    /*change z-index by submiting*/
    const subm = document.querySelectorAll('.submit');
    subm.forEach(su => su.addEventListener('change', chz));
    subm.forEach(su => su.addEventListener('keyup', chz));

    /*change opacity*/
    const opac = document.querySelectorAll(".opac");
    opac.forEach(op => op.addEventListener('change', opacity));
    opac.forEach(op => op.addEventListener('musemove', opacity));

    /*change width and height*/
    const wdth = document.querySelectorAll(".wdth");
    wdth.forEach(w => w.addEventListener('click', addwidth));

    function addwidth() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.style.transition = "all 0.5s";
        element.style.r = this.valueAsNumber;
        element.style.width = this.valueAsNumber + 1;
    }

    const hghtr = document.querySelectorAll(".hghtrect");
    hghtr.forEach(hr => hr.addEventListener('change', addheightr));
    hghtr.forEach(hr => hr.addEventListener('mousemove', addheightr));

    function addheightr() {
        const elementr = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        elementr.style.transition = "all 0.5s";
        elementr.style.height = this.valueAsNumber + 1;
    }

    /*show adn hide shape controls*/
    const ssh = document.querySelectorAll(".sshape");
    ssh.forEach(s => s.addEventListener('click', showsh));

    const hsh = document.querySelectorAll(".hshape");
    hsh.forEach(hs => hs.addEventListener('click', hidesh));

    function hidesh(e) {
        this.style.visibility = "hidden";
        this.nextElementSibling.style.visibility = "hidden";
        this.nextElementSibling.nextElementSibling.style.visibility = "hidden";
    };

    const remove = document.querySelectorAll(".remove");
    remove.forEach(rem => rem.addEventListener("click", removeElement));
};