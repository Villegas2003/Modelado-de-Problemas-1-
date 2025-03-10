class Proyectil {
    constructor(v0, angulo) {
        this.xReal = 0;
        this.yReal = 0;
        this.trayectoria = [];
        angulo = constrain(angulo, 0, 180);
        let rad = radians(angulo);
        this.vx = v0 * cos(rad);
        this.vy = v0 * sin(rad);
        this.tiempo = 0;
        this.enMovimiento = true;
        this.primerFrame = true;
    }

    actualizar() {
        if (this.enMovimiento) {
            this.xReal = this.vx * this.tiempo;
            this.yReal = (this.vy * this.tiempo) - (0.5 * 9.8 * this.tiempo * this.tiempo);
            
            if (this.yReal < 0) {
                if (!this.primerFrame) {
                    this.yReal = 0;
                    this.enMovimiento = false;
                }
            } else {
                this.tiempo += 0.1;
                this.trayectoria.push({ x: this.xReal, y: this.yReal });
            }
            this.primerFrame = false;
        }
    }

    mostrar() {
        stroke(255);
        strokeWeight(1);
        noFill();
        beginShape();
        for (let punto of this.trayectoria) {
            let xPix = width / 2 + punto.x;
            let yPix = height / 2 - punto.y;
            vertex(xPix, yPix);
        }
        endShape();
        fill(255, 0, 0);
        ellipse(width / 2 + this.xReal, height / 2 - this.yReal, 10, 10);
    }
}
