let proyectil;
let tiempo = 0;
let simulacionActiva = true;

function setup() {
    createCanvas(600, 400).parent("canvas-container");
    document.getElementById("startButton").addEventListener("click", iniciarSimulacion);
    document.getElementById("resetButton").addEventListener("click", () => {
        tiempo = 0;
        simulacionActiva = true;
        iniciarSimulacion();
    });

    iniciarSimulacion();
}

function draw() {
    background(30);
    stroke(255);
    textSize(12);
    stroke(200);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);

    for (let i = -width / 2; i < width / 2; i += 50) {
        let metros = i; 
        let xPix = width / 2 + i;
        line(xPix, height / 2 - 5, xPix, height / 2 + 5);
        fill(255);
        text(metros.toFixed(1) + " m", xPix + 5, height / 2 + 15);
    }

    for (let j = -height / 2; j < height / 2; j += 50) {
        let metrosY = -j; 
        let yPix = height / 2 + j;
        line(width / 2 - 5, yPix, width / 2 + 5, yPix);
        fill(255);
        text(metrosY.toFixed(1) + " m", width / 2 + 10, yPix);
    }

    if (simulacionActiva) {
        proyectil.actualizar();
        if (proyectil.yReal === 0 && tiempo > 0.2) {
            simulacionActiva = false;
        }
    }

    proyectil.mostrar();
    actualizarDatos(tiempo, proyectil);

    if (simulacionActiva) {
        tiempo += 0.1;
    }
}

function iniciarSimulacion() {
    tiempo = 0;
    let velocidad = parseFloat(document.getElementById("velocidadInicial").value);
    let angulo = parseFloat(document.getElementById("angulo").value);

    simulacionActiva = true;
    proyectil = new Proyectil(velocidad, angulo);
}
