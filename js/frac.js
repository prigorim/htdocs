﻿var canvasposition = [];
canvasposition[0] = $("#canvas1").offset().left
canvasposition[1] = $("#canvas1").offset().top
canvasposition[2] = $("#canvas2").offset().left
canvasposition[3] = $("#canvas2").offset().top
canvasposition[4] = $("#canvas3").offset().left
canvasposition[5] = $("#canvas3").offset().top
canvasposition[6] = $("#canvas4").offset().left
canvasposition[7] = $("#canvas4").offset().top

let c1 = document.getElementById("canvas1").getContext('2d'), w1 = document.getElementById("canvas1").width, h1 = document.getElementById("canvas1").height
let formula1 = (x, y, cx, cy) => {
    let z = [(2 * y - h1) / w1 * 1.5, (2 * x - w1) / w1 * 1.5];
    for (var i = 0; i < 32; ++i) {
        z = [z[0] * z[0] - z[1] * z[1] + cy / h1, 2. * z[0] * z[1] + cx / w1];
        if (z[0] * z[0] + z[1] * z[1] > 4.)
            return i;
    }
    return 0
}

document.getElementById("canvas1").onmousemove = e => {
    var img1 = c1.getImageData(0, 0, w1, h1)
    for (var x = 0; x < w1; x++) {
        for (var y = 0; y < h1; y++) {
            let v = formula1(x, y, e.x - canvasposition[0], e.y - canvasposition[1])
            let o = (y * w1 + x) * 4
            img1.data[o++] = Math.sin(v / 5) * 255
            img1.data[o++] = Math.sin(v / 4) * 255
            img1.data[o++] = Math.sin(v / 3) * 255
            img1.data[o++] = 255
        }
    }
    c1.putImageData(img1, 0, 0);
}

let c2 = document.getElementById("canvas2").getContext('2d'), w2 = document.getElementById("canvas2").width, h2 = document.getElementById("canvas2").height
let formula2 = (x, y, cx, cy, m) => {
    x = (2 * x - w2) / w2;
    y = (2 * y - h2) / w2;
    for (var i = 0; i < 10; i++) {
        x = Math.abs(x)
        y = Math.abs(y)
        m = x * x + y * y
        x = x / m - cx / w2
        y = y / m - cy / h2
    }
    return [x, y, Math.sqrt(x * x + y * y) / 2.]
}

document.getElementById("canvas2").onmousemove = e => {
    var img2 = c2.getImageData(0, 0, w2, h2)
    for (var x = 0; x < w2; x++) {
        for (var y = 0; y < h2; y++) {
            let value = formula2(x, y, e.x - canvasposition[2], e.y - canvasposition[3])
            let offset2 = (y * w2 + x) * 4
            img2.data[offset2] = value[0] * 255
            img2.data[offset2 + 1] = value[1] * 255
            img2.data[offset2 + 2] = value[2] * 255
            img2.data[offset2 + 3] = 255
        }
    }
    c2.putImageData(img2, 0, 0)
}

let c3 = document.getElementById("canvas3").getContext('2d'), w3 = document.getElementById("canvas3").width, h3 = document.getElementById("canvas3").height
let formula3 = (x, y, cx, cy, m) => {
    x = (2 * x - w3) / w3;
    y = (2 * y - h3) / w3;
    for (var i = 0; i < 10; i++) {
        x = Math.abs(x)
        y = Math.abs(y)
        m = x * y + x * y
        x = x / m - cx / w3
        y = y / m - cy / h3
    }
    return [x, y, Math.sqrt(x * x + y * y) / 2.]
}

document.getElementById("canvas3").onmousemove = e => {
    var img3 = c3.getImageData(0, 0, w3, h3)
    for (var x = 0; x < w3; x++) {
        for (var y = 0; y < h3; y++) {
            let value = formula3(x, y, e.x - canvasposition[4], e.y - canvasposition[5])
            let offset3 = (y * w3 + x) * 4
            img3.data[offset3] = value[0] * 255
            img3.data[offset3 + 1] = value[1] * 255
            img3.data[offset3 + 2] = value[2] * 255
            img3.data[offset3 + 3] = 255
        }
    }
    c3.putImageData(img3, 0, 0)
}

let c4 = document.getElementById("canvas4").getContext('2d'), w4 = document.getElementById("canvas4").width, h4 = document.getElementById("canvas4").height
let formula4 = (x, y, cx, cy, m) => {
    x = (2 * x - w4) / w4;
    y = (2 * y - h4) / w4;
    for (var i = 0; i < 10; i++) {
        x = Math.abs(x)
        y = Math.abs(y)
        m = x * y + x * y - 1
        x = x / m - cx / w4
        y = y / m - cy / h4
    }
    return [x, y, Math.sqrt(x * x + y * y) / 2.]
}

document.getElementById("canvas4").onmousemove = e => {
    var img4 = c3.getImageData(0, 0, w4, h4)
    for (var x = 0; x < w4; x++) {
        for (var y = 0; y < h4; y++) {
            let value = formula4(x, y, e.x - canvasposition[6], e.y - canvasposition[7])
            let offset4 = (y * w4 + x) * 4
            img4.data[offset4] = value[0] * 255
            img4.data[offset4 + 1] = value[1] * 255
            img4.data[offset4 + 2] = value[2] * 255
            img4.data[offset4 + 3] = 255
        }
    }
    c4.putImageData(img4, 0, 0)
}

document.getElementById("canvas1").onmousemove({ x: canvasposition[0], y: canvasposition[1] })
document.getElementById("canvas2").onmousemove({ x: canvasposition[2] + 150, y: canvasposition[3] + 150 })
document.getElementById("canvas3").onmousemove({ x: canvasposition[4] + 150, y: canvasposition[5] + 150 })
document.getElementById("canvas4").onmousemove({ x: canvasposition[6], y: canvasposition[7] })