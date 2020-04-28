/* ADD CIRCLE */
const cir1 = document.querySelector('.cir1');
cir1.addEventListener('click', addcircle1);

function addcircle1() {
    var div1 = document.createElement("div");
    div1.className = "target topdiv";
    var div2 = document.createElement("div");
    div2.className = "squarediv1 target";

    var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute('style', 'border: 0px solid black');
    svg1.setAttribute('width', '100');
    svg1.setAttribute('height', '100');
    svg1.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg1.className = "squarediv1 target blocked";

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
    inp9.className = "remove";
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

    els.forEach(el => el.addEventListener('mousedown', onmousedown, { capture: true }));
    els.forEach(el => el.addEventListener('mouseup', onmouseup));
    els.forEach(el => el.addEventListener('mousemove', onmousemove, { capture: true }));
    els.forEach(el => el.addEventListener('mouseover', onhov));
    els.forEach(el => el.addEventListener('dblclick', dbl));

    const zpl = document.querySelectorAll('.zpl');
    zpl.forEach(zp => zp.addEventListener('click', plz));

    const zmin = document.querySelectorAll('.zmin');
    zmin.forEach(zm => zm.addEventListener('click', minz));

    const subm = document.querySelectorAll('.submit');
    subm.forEach(su => su.addEventListener('change', chz));
    subm.forEach(su => su.addEventListener('keyup', chz));

    const ctr = document.querySelectorAll('.con');
    ctr.forEach(cl => cl.addEventListener('change', function () { this.parentNode.firstElementChild.firstElementChild.firstElementChild.style.setProperty(`fill`, this.value); }));

    rots.forEach(rot => rot.addEventListener('mousedown', function () {
        this.className = "rot drop";
    }));
    $(document).ready(function () {

        $('.rot').mousedown(function (e) {
            e.preventDefault();
            $(document).bind('mousemove.rotateImg', function (e2) {
                rotateOnMouse(e2, $('.drop'));
            });
        });
        $(document).mouseup(function (e) {
            $(document).unbind('mousemove.rotateImg');
        });
    });

    const opac = document.querySelectorAll(".opac");
    opac.forEach(op => op.addEventListener('change', opacity));
    opac.forEach(op => op.addEventListener('musemove', opacity));

    const wdth = document.querySelectorAll(".wdth");
    wdth.forEach(h => h.addEventListener('click', addwidth));

    function addwidth() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.style.r = this.valueAsNumber;
        element.style.width = this.valueAsNumber + 1;
        element.style.transition = "all 0.5s";
    }

    const hght = document.querySelectorAll(".hght");
    hght.forEach(h => h.addEventListener('change', addheight));
    hght.forEach(h => h.addEventListener('mousemove', addheight));

    function addheight() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.style.height = this.valueAsNumber * (-1) + 1;
    }

    const ssh = document.querySelectorAll(".sshape");
    ssh.forEach(s => s.addEventListener('click', showsh));

    function showsh(e) {
        this.nextElementSibling.style.visibility = "visible";
        this.nextElementSibling.nextElementSibling.style.visibility = "visible";
    }

    const hsh = document.querySelectorAll(".hshape");
    hsh.forEach(hs => hs.addEventListener('click', hidesh));

    function hidesh(e) {
        this.style.visibility = "hidden";
        this.nextElementSibling.style.visibility = "hidden";
    };

    const remove = document.querySelectorAll(".remove");
    remove.forEach(rem => rem.addEventListener("click", removeElement));

    function removeElement() {
        const par = this.parentElement;
        par.parentNode.removeChild(par);
    }
};