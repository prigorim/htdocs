function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function createTable(rows, columns, table, percentcolor) {
    for (i = 0; i < rows; i++) {
        table += '<tr>';
        for (j = 0; j < columns; j++) {
            if (Math.random() >= percentcolor) {
                table += '<td></td>'
            }
            else {
                table += '<td style="background-color:#bbb"></td>'
            }
        }
        table += '</tr>'
    }
    $(".anttable")[0].innerHTML = table;
    table = '';
}

function createAB(rows, columns, tr) {
    tdfirst = tr[getRandomInt(0, rows)].getElementsByTagName("td")[getRandomInt(0, columns)];
    tdfirst.style.backgroundColor = "#dff3ff";
    tdfirst.innerHTML = 'S';

    tdlast = tr[getRandomInt(0, rows)].getElementsByTagName("td")[getRandomInt(0, columns)];
    tdlast.style.backgroundColor = "#addfad"
    tdlast.innerHTML = 'F';
    return tdlast;
}

function firstLoop(rows, columns, tr) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td.innerHTML == 'S') {
                if ((i > 0) && (tr[i - 1].getElementsByTagName("td")[j].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    tr[i - 1].getElementsByTagName("td")[j].innerHTML = '1';
                }
                if ((i < rows - 1) && (tr[i + 1].getElementsByTagName("td")[j].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    tr[i + 1].getElementsByTagName("td")[j].innerHTML = '1';
                }
                if ((j > 0) && (tr[i].getElementsByTagName("td")[j - 1].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    tr[i].getElementsByTagName("td")[j - 1].innerHTML = '1';
                }
                if ((j < columns - 1) && (tr[i].getElementsByTagName("td")[j + 1].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    tr[i].getElementsByTagName("td")[j + 1].innerHTML = '1';
                }
            }
        }
    }
}

function findPath(rows, columns, index, path) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (parseInt(td.innerHTML, 10) == index) {
                if ((i > 0) &&
                    (tr[i - 1].getElementsByTagName("td")[j].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    if (tr[i - 1].getElementsByTagName("td")[j].innerHTML == 'F') {
                        path = 1;
                    }
                    else {
                        if (tr[i - 1].getElementsByTagName("td")[j].innerHTML == '') {
                            tr[i - 1].getElementsByTagName("td")[j].innerHTML = index + 1;
                        }
                    }
                }
                if ((i < rows - 1) &&
                    (tr[i + 1].getElementsByTagName("td")[j].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    if (tr[i + 1].getElementsByTagName("td")[j].innerHTML == 'F') {
                        path = 1;
                    }
                    else {
                        if (tr[i + 1].getElementsByTagName("td")[j].innerHTML == '') {
                            tr[i + 1].getElementsByTagName("td")[j].innerHTML = index + 1;
                        }
                    }
                }
                if ((j > 0) &&
                    (tr[i].getElementsByTagName("td")[j - 1].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    if (tr[i].getElementsByTagName("td")[j - 1].innerHTML == 'F') {
                        path = 1;
                    }
                    else {
                        if (tr[i].getElementsByTagName("td")[j - 1].innerHTML == '') {
                            tr[i].getElementsByTagName("td")[j - 1].innerHTML = index + 1;
                        }
                    }
                }
                if ((j < columns - 1) &&
                    (tr[i].getElementsByTagName("td")[j + 1].style.backgroundColor != 'rgb(187, 187, 187)')) {
                    if (tr[i].getElementsByTagName("td")[j + 1].innerHTML == 'F') {
                        path = 1;
                    }
                    else {
                        if (tr[i].getElementsByTagName("td")[j + 1].innerHTML == '') {
                            tr[i].getElementsByTagName("td")[j + 1].innerHTML = index + 1;
                        }
                    }
                }
            }
        }
    }
    return path;
}

function colorCells(rows, columns, index) {
    table = $(".anttable")[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (parseInt(td.innerHTML, 10) == index) {
                if (i > 0) {
                    if (tr[i - 1].getElementsByTagName("td")[j].style.backgroundColor == 'rgb(173, 223, 173)') {
                        td.style.background = '#addfad';
                    }
                }
                if (i < rows - 1) {
                    if (tr[i + 1].getElementsByTagName("td")[j].style.backgroundColor == 'rgb(173, 223, 173)') {
                        td.style.background = '#addfad';
                    }
                }
                if (j > 0) {
                    if (tr[i].getElementsByTagName("td")[j - 1].style.backgroundColor == 'rgb(173, 223, 173)') {
                        td.style.background = '#addfad';
                    }
                }
                if (j < columns - 1) {
                    if (tr[i].getElementsByTagName("td")[j + 1].style.backgroundColor == 'rgb(173, 223, 173)') {
                        td.style.background = '#addfad';
                    }
                }
            }
        }
    }
}

function colorPath(rows, columns, index) {
    setTimeout(function () {
        for (let i = index - 1; i > 0; i--) {
            colorCells(rows, columns, i);
        }
    }, 600);


}

function findPathMain(rows, columns, percentcolor) {
    var table = $(".anttable")[0].innerHTML;
    createTable(rows, columns, table, percentcolor);
    table = document.getElementsByClassName("anttable")
    tr = table[0].getElementsByTagName("tr");
    createAB(rows, columns, tr);
    firstLoop(rows, columns, tr);
    index = 1;
    path = 0;
    while (path != 1) {
        path = findPath(rows, columns, index, path);
        index++;
        if (index > 99) {
            path = 1;
        }
    }
    console.log(index);
    if (index != 100) {
        colorPath(rows, columns, index);
    }
}

$("#rows").change(function () {
    var rows = $('#rows').val();
    var columns = $('#columns').val();
    var percentcolor = $('#fill').val();
    $("#anttable tr").remove();
    findPathMain(rows, columns, percentcolor);
});

$("#columns").change(function () {
    var rows = $('#rows').val();
    var columns = $('#columns').val();
    var percentcolor = $('#fill').val();
    $("#anttable tr").remove();
    findPathMain(rows, columns, percentcolor);
});

$("#fill").change(function () {
    var rows = $('#rows').val();
    var columns = $('#columns').val();
    var percentcolor = $('#fill').val();
    $("#anttable tr").remove();
    findPathMain(rows, columns, percentcolor);
});

$(document).ready(function () {
    var rows = $('#rows').val();
    var columns = $('#columns').val();
    var percentcolor = $('#fill').val();
    findPathMain(rows, columns, percentcolor);
});