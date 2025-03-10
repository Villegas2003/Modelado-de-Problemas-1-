function actualizarDatos(tiempo, proyectil) {
    document.getElementById("tiempo").innerText = `Tiempo: ${tiempo.toFixed(2)} s`;
    document.getElementById("posX").innerText = `Posición X: ${proyectil.xReal.toFixed(2)} m`;
    document.getElementById("posY").innerText = `Posición Y: ${proyectil.yReal.toFixed(2)} m`;
    document.getElementById("velX").innerText = `Velocidad X: ${proyectil.vx.toFixed(2)} m/s`;
    document.getElementById("velY").innerText = `Velocidad Y: ${proyectil.vy.toFixed(2)} m/s`;
}
