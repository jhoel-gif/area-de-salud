let temperaturas = [];
let saturaciones = [];

function ver(n) {
    document.querySelector('.menu').style.display = 'none';
    for(let i = 1; i <= 5; i++) {
        document.getElementById('e' + i).style.display = 'none';
    }
    document.getElementById('e' + n).style.display = 'block';
}

function menu() {
    document.querySelector('.menu').style.display = 'block';
    for(let i = 1; i <= 5; i++) {
        document.getElementById('e' + i).style.display = 'none';
    }
    temperaturas = [];
    saturaciones = [];
}

function e1() {
    let sis = parseFloat(document.getElementById('sistolica').value);
    let dia = parseFloat(document.getElementById('diastolica').value);
    let r = '';
    
    if(sis < 120 && dia < 80) r = 'Normal';
    else if(sis < 130 && dia < 80) r = 'Elevada';
    else if(sis < 140 || dia < 90) r = 'HTA Grado 1';
    else r = 'HTA Grado 2';
    
    document.getElementById('r1').innerHTML = r;
}

function e2() {
    let num = parseInt(document.getElementById('pacientes').value);
    let suma = 0;
    
    for(let i = 0; i < num; i++) {
        let temp = parseFloat(prompt("Temperatura paciente " + (i+1) + ":"));
        suma += temp;
    }
    
    let promedio = suma / num;
    document.getElementById('r2').innerHTML = 'Promedio: ' + promedio + '°C';
}

function a3() {
    let t = parseFloat(document.getElementById('temp').value);
    temperaturas.push(t);
    document.getElementById('r3').innerHTML += t + '°C<br>';
}

function c3() {
    let fiebre = 0;
    for(let i = 0; i < temperaturas.length; i++) {
        if(temperaturas[i] >= 38) fiebre++;
    }
    document.getElementById('r3').innerHTML += 'Pacientes con fiebre: ' + fiebre;
}

function e4() {
    let cod = document.getElementById('triage').value;
    let r = '';
    
    if(cod == '1') r = 'Rojo';
    else if(cod == '2') r = 'Amarillo';
    else if(cod == '3') r = 'Verde';
    else r = 'Azul';
    
    document.getElementById('r4').innerHTML = r;
}

function a5() {
    let s = parseFloat(document.getElementById('spo2').value);
    saturaciones.push(s);
    document.getElementById('r5').innerHTML += s + '%<br>';
}

function c5() {
    let bajas = 0;
    for(let i = 0; i < saturaciones.length; i++) {
        if(saturaciones[i] < 95) bajas++;
    }
    document.getElementById('r5').innerHTML += 'Saturaciones bajas: ' + bajas;
}