const addtri1 = document.querySelector('.addtr1');
addtri1.addEventListener('click', addtr1);

/* ADD TRIANGLE */
function addtr1() {
    var div1 = document.createElement("div");
    div1.className = "target topdiv dragable";
    var div2 = document.createElement("div");
    div2.className = "trdiv2 target";

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
    inp14.className = "remove";
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
    };

    const ax = document.querySelectorAll(".ax");
    ax.forEach(a => a.addEventListener('change', addax));

    function addax() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.points.getItem(1).x = this.valueAsNumber + 1;
    }

    const bx = document.querySelectorAll(".bx");
    bx.forEach(b => b.addEventListener('change', addbx));

    function addbx() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.points.getItem(0).x = this.valueAsNumber + 1;
    }

    const cx = document.querySelectorAll(".cx");
    cx.forEach(c => c.addEventListener('change', addcx));

    function addcx() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.points.getItem(2).x = this.valueAsNumber + 1;
    }

    const ay = document.querySelectorAll(".ay");
    ay.forEach(a => a.addEventListener('change', adday));

    function adday() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.points.getItem(1).y = this.valueAsNumber + 1;
    }

    const by = document.querySelectorAll(".by");
    by.forEach(b => b.addEventListener('change', addby));

    function addby() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.points.getItem(0).y = this.valueAsNumber + 1;
    }

    const cy = document.querySelectorAll(".cy");
    cy.forEach(c => c.addEventListener('change', addcy));

    function addcy() {
        const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
        element.points.getItem(2).y = this.valueAsNumber;
    }

    const remove = document.querySelectorAll(".remove");
    remove.forEach(rem => rem.addEventListener("click", removeElement));

    function removeElement() {
        const par = this.parentElement;
        par.parentNode.removeChild(par);
    }
};

/* change triangle shape - triangle dots */
const ax = document.querySelectorAll(".ax");
ax.forEach(a => a.addEventListener('change', addax));

function addax() {
    const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
    element.points.getItem(1).x = this.valueAsNumber + 1;
}

const bx = document.querySelectorAll(".bx");
bx.forEach(b => b.addEventListener('change', addbx));

function addbx() {
    const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
    element.points.getItem(0).x = this.valueAsNumber + 1;
}

const cx = document.querySelectorAll(".cx");
cx.forEach(c => c.addEventListener('change', addcx));

function addcx() {
    const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
    element.points.getItem(2).x = this.valueAsNumber + 1;
}

const ay = document.querySelectorAll(".ay");
ay.forEach(a => a.addEventListener('change', adday));

function adday() {
    const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
    element.points.getItem(1).y = this.valueAsNumber * -1 + 1;
}

const by = document.querySelectorAll(".by");
by.forEach(b => b.addEventListener('change', addby));

function addby() {
    const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
    element.points.getItem(0).y = this.valueAsNumber * -1 + 1;
}

const cy = document.querySelectorAll(".cy");
cy.forEach(c => c.addEventListener('change', addcy));

function addcy() {
    const element = this.parentNode.firstElementChild.firstElementChild.firstElementChild;
    element.points.getItem(2).y = this.valueAsNumber * -1;
}