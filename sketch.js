var x, y, px, py;
var cy;
var vel = .8;
var velx = 4;
var vely = 4;
var rango = 450;
var estado = 0;
var texto = "";
var cnv;

function setup() {
    cnv = createCanvas(500, 700);
    cnv.mouseClicked(resetgame);
    x = width / 2;
    y = height / 2;
    px = 20;
    py = height / 2;
    cy = height / 2;
}

function Fin(j) {

    if (j == 0) {
        estado = 1;
        texto = "Perdiste!";
    }
    if (j == 1) {
        estado = 1;
        texto = "Ganaste!";
    }
}

function resetgame() {

    if (estado === 1) {
        x = width / 2;
        y = height / 2;
        px = 20;
        py = height / 2;
        cy = height / 2;
        estado = 0;
    }

}

function draw() {
    if (estado === 0) {
        noStroke();
        background(0);
        circle(x, y, 20);
        rect(px, mouseY, 10, 75);
        rect(width - 10 - px, cy, 10, 75);
        x += velx;
        y += vely;

        if (y > height || y < 0) {
            vely = -vely;
        }
        if (x < 0) {
            Fin(0);
        }
        if (x > width) {
            Fin(1);
        }
        if (x + px / 2 > px && x - px / 2 < px + 10 && y + px / 2 > mouseY && y - 20 / 2 < mouseY + 75) {
            velx = -velx;
        }

        if (x + px / 2 > width - 10 - px && x - 20 / 2 < width - 10 - px && y + px / 2 > cy && y - 20 / 2 < cy + 75) {
            velx = -velx;
        }

        var distancia = dist(x, y, width - 10 - px, cy);
        if (abs(distancia) < rango) {
            cy = lerp(cy, y, 0.3);
        }
    } else if (estado === 1) {
        background(0);
        textAlign(CENTER);
        fill(255);
        textSize(24);
        text(texto, 250, height / 2);
        text("Presiona el click para volver a jugar", 250, height / 2 + 35);
    }


}
