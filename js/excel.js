//функция вывода на экран печатного образца
$('.print').click(function () {
    //формируем html документ с таблицей
    $htmlcode = '<html>'
    $htmlcode += '<head>'
    $htmlcode += '<title>Выгружаемая таблица</title>'
    $htmlcode += '<style type="text/css">'
    $htmlcode += '.table {'
    $htmlcode += 'border-spacing: 0;'
    $htmlcode += 'border: 1px solid black; font-size: 10px;}'
    $htmlcode += '.table td, th{'
    $htmlcode += 'border: 0.5px solid black; min-width: 20px; text-align: center; padding-left: 3px; padding-right: 3px;'
    $htmlcode += '}'
    $htmlcode += '</style>'
    $htmlcode += '<script src="/js/jquery-3.6.0.min.js"></script>'
    $htmlcode += '</head>'
    $htmlcode += '<body>'
    $htmlcode += '<div class="save" style = "font-size : 20px" >ГГГГ-ММ-ДД : ' + $('#date').val() + '</div>'
    $htmlcode += '<table class="table">'
    //получаем все таблицы
    $tables = $(".table")
    //выбираем нужную которую видно
    for (i = 0; i < 3; i++) {
        if ($tables[i].style.display != 'none') {
            $table = $tables[i];
        }
    }
    //получаем массив строк из таблицы
    tr = $table.getElementsByTagName("tr");
    for (i = 0; i <= tr.length - 1; i++) {
        //если строку видно
        if (tr[i].style.display != 'none') {
            //копируем эту строку
            $htmlcode += '<tr>'
            $htmlcode += tr[i].innerHTML;
            $htmlcode += '</tr>'
        }
    }
    //закрывающие теги
    $htmlcode += '</table>'
    $htmlcode += '</body>'
    $htmlcode += '</html>'
    //красиво объединяем
    $htmlcode = $htmlcode.replaceAll('<th></th>', '');
    $htmlcode = $htmlcode.replaceAll('<th style="display:none"></th>', '<th style="display:none"></th><th colspan="2"></th>');
    //открываем новое окно
    new_window = window.open();
    //пилим туда таблицу
    new_window.document.write($htmlcode);
    //закрываем соединение
    new_window.document.close();
});


//экспортируем таблицу в excel
$('.xlsx').click(function () {
    //формируем таблицу в html
    $htmlcode = '<table class="table">';
    //забираем выбранный элемент навигации
    $navigation_item = $(".navigation_item_selected");
    //получаем текст из элемента
    $p_navigation_item = $navigation_item[0].getElementsByTagName("p");
    var name = $p_navigation_item[0].innerHTML;
    //получаем список таблиц
    $tables = $(".table");
    //вибираем видимую
    for (i = 0; i < 3; i++) {
        if ($tables[i].style.display != 'none') {
            $table = $tables[i];
        }
    }
    //получаем массив строк для таблицы
    tr = $table.getElementsByTagName("tr");
    //если таблицы не 3-яя
    if ($table.id != 'table_3') {
        //формируем таблицу
        $htmlcode += '<tr>'
        //формируем шаблон пустой строки для последующего удаления
        $replaestring = '<tr>'
        //заголовок
        for (i = 1; i < tr[0].cells.length; i++) {
            th = tr[0].getElementsByTagName("th")[i];
            $htmlcode += '<th>' + th.innerHTML + '</th>';
            $replaestring += '<td></td>';
        }
        $replaestring += '</tr>'
        $htmlcode += '</tr>'
        //тело
        for (i = 2; i <= tr.length - 1; i++) {
            if (tr[i].style.display != 'none') {
                $htmlcode += '<tr>'
                for (j = 1; j < tr[i].cells.length; j++) {
                    td = tr[i].getElementsByTagName("td")[j];
                    if (td.style.display != 'none') {
                        $htmlcode += '<td>'
                        $htmlcode += td.innerHTML
                        $htmlcode += '</td>'
                    }
                    else {
                        $htmlcode += '<td>'
                        $htmlcode += ''
                        $htmlcode += '</td>'
                    }
                }
                $htmlcode += '</tr>'
            }
        }
        //закрываем
        $htmlcode += '</table>'
    }
    else {
        //если таблица 3-яя
        //фрмируем таблицу
        $htmlcode += '<tr>'
        //заголовки
        $htmlcode += '<th colspan="2">' + $('#date').val() + '</th>'
        for (i = 3; i < tr[0].cells.length; i++) {
            th = tr[0].getElementsByTagName("th")[i];
            $htmlcode += '<th colspan="2">' + th.innerHTML + '</th>';
        }
        $htmlcode += '</tr>'
        $htmlcode += '<tr>'
        //пустая строка
        $replaestring = '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'
        for (i = 1; i < tr[1].cells.length; i++) {
            th = tr[1].getElementsByTagName("th")[i];
            $htmlcode += '<th>' + th.innerHTML + '</th>';
        }
        $htmlcode += '</tr>'
        //тело
        for (i = 3; i <= tr.length - 1; i++) {
            if (tr[i].style.display != 'none') {
                $htmlcode += '<tr>'
                for (j = 1; j < tr[i].cells.length; j++) {
                    td = tr[i].getElementsByTagName("td")[j];
                    if (td.style.display != 'none') {
                        $htmlcode += '<td>'
                        $htmlcode += td.innerHTML
                        $htmlcode += '</td>'
                    }
                    else {
                        $htmlcode += '<td>'
                        $htmlcode += ''
                        $htmlcode += '</td>'
                    }
                }
                $htmlcode += '</tr>'
            }
        }
        $htmlcode += '</table>'
    }

    //меняем пустые строки на пустоту и увеличиваем ячейку Общий итог до 2-ух в ширь
    $htmlcode = $htmlcode.replaceAll($replaestring, '');
    $htmlcode = $htmlcode.replaceAll('<td>Общий итог</td><td></td>', '<td colspan="2">Общий итог</td>');
    //парсим в xml в двоичном коде и передаем запрос на скачиваение файла
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head> <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style type="text/css">td, th{border: 1px solid black;}</style></head><body>{table}</body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    var ctx = {
        worksheet: name,
        table: $htmlcode
    }
    window.location.href = uri + base64(format(template, ctx));
});

//при клике на элемент с классом .update
//функция группировки таблиц
function grouptable(tableid, columns, firstrow) {
    //переменные показывающие текущий row count
    k = 1;
    l = 1;
    //массивы переменных
    //массив содержимого
    var time = [];
    //массив текущих td
    var targettd = [];
    //массив следующих td
    var nexttargettd = [];
    //получаем таблицу
    table = document.getElementById(tableid);
    //получаем массив строк
    tr = table.getElementsByTagName("tr");
    //обнуляем переменные
    for (j = 0; j < columns; j++) {
        time[j] = 0;
    }
    //для каждой строки начиная с последней до firstrow
    for (i = tr.length - 1; i >= firstrow; i--) {
        //в каждой колонке получаем текущее значение и выше
        for (j = 0; j < columns; j++) {
            targettd[j] = tr[i].getElementsByTagName("td")[j];
            nexttargettd[j] = tr[i - 1].getElementsByTagName("td")[j];
        }
        //если объект и дата совпадают
        if ((targettd[1].innerHTML == nexttargettd[1].innerHTML) && (targettd[0].innerHTML == nexttargettd[0].innerHTML)) {
            l++;
            nexttargettd[1].setAttribute('rowSpan', l);
            targettd[1].style.display = "none";
        }
        else {
            l = 1;
        }
        for (j = 3; j < columns; j++) {
            if (targettd[j].innerHTML == '1') {
                time[j]++;
            }
        }
        //если объект и организация совпадают
        if ((targettd[2].innerHTML == nexttargettd[2].innerHTML) && (targettd[1].innerHTML == nexttargettd[1].innerHTML)) {
            k++;
            nexttargettd[2].setAttribute('rowSpan', k);
            targettd[2].style.display = "none";
            for (j = 3; j < columns; j++) {
                nexttargettd[j].setAttribute('rowSpan', k);
                targettd[j].style.display = "none";
            }
        }
        else {
            for (j = 3; j < columns; j++) {
                targettd[j].textContent = time[j];
                time[j] = 0;
            }
            k = 1;
        }
    }
}

//ищем общий итог
function findsum(tableid, columns, firstrow) {
    //получаем таблицу
    table = document.getElementById(tableid);
    //получаем массив строк
    tr = table.getElementsByTagName("tr");
    //массив сумм
    var sumtime = [];
    //массив элементов
    var time = [];
    //обнуляем переменные
    for (j = 3; j < columns; j++) {
        sumtime[j] = 0;
    }
    //начиная с first row до предпоследнего включительно
    for (i = firstrow; i < tr.length - 1; i++) {
        //для элементов в столбцах от 3-его до последнего включительно
        for (j = 3; j < columns; j++) {
            //заполняем массив элементов
            time[j] = tr[i].getElementsByTagName("td")[j];
        }
        //если строка видна
        if (tr[i].style.display != 'none') {
            //для элементов в столбцах от 3-его до последнего включительно
            for (j = 3; j < columns; j++) {
                //если ячейка видна
                if ((time[j]).style.display != 'none') {
                    //записывам новое значение в массив сумм
                    sumtime[j] += parseInt((time[j]).textContent, 10);
                }
            }
        }
    }
    //для элементов в столбцах от 3-его до последнего включительно
    for (j = 3; j < columns; j++) {
        //в последней строке записываем значение суммы для текущего индекса
        tr[tr.length - 1].getElementsByTagName("td")[j].textContent = sumtime[j];
        //обнуляем
        sumtime[j] = 0;
    }
}

function hoverTD(tableid) {
    //при наведении на ячейку подсвечиваем столбцы
    $('#' + tableid + ' td').hover(function () {
        var t = parseInt($(this).index()) + 1;
        if (t != 1 && t != 2 && t != 3) {
            $('td:nth-child(' + t + ')').addClass('yellowcolor');
        }
    }, function () {
        var t = parseInt($(this).index()) + 1;
        $('td:nth-child(' + t + ')').removeClass('yellowcolor');
    });
}

$('.update').click(function () {
    //обновляем страницу
    location.reload();
});

//при клике на элемент с классом .navigation_item
$('.navigation_item').click(function (e) {
    //удаляем класс у всех элементов с классом .navigation_item класс .navigation_item_selected
    $('.navigation_item').removeClass('navigation_item_selected');
    //на выбранный элемент вешаем класс .navigation_item_selected
    $(this).addClass('navigation_item_selected');
});

//при клике на элемнт с id #navigation_item_1
$('#navigation_item_1').click(function () {
    //скрываем ненужные таблицы показываем нужную
    $('#table_2')[0].style.display = 'none';
    $('#table_3')[0].style.display = 'none';
    $('#table_1')[0].style.display = '';
    sortalltable();
});

//при клике на элемнт с id #navigation_item_2
$('#navigation_item_2').click(function () {
    //скрываем ненужные таблицы показываем нужную
    $('#table_1')[0].style.display = 'none';
    $('#table_3')[0].style.display = 'none';
    $('#table_2')[0].style.display = '';
    sortalltable();
});

//при клике на элемнт с id #navigation_item_3
$('#navigation_item_3').click(function () {
    //скрываем ненужные таблицы показываем нужную
    $('#table_1')[0].style.display = 'none';
    $('#table_2')[0].style.display = 'none';
    $('#table_3')[0].style.display = '';
    sortalltable();
});

//функция сортировки всех таблиц
function sortalltable() {
    //получаем дату из input
    var $date = $("#date").val();
    //проверяем какая таблица активна
    for (i = 0; i < 3; i++) {
        if ($(".table")[i].style.display != 'none') {
            tablecount = $(".table")[i].id;
        }
    }
    //если активна первая наполняем первую
    if (tablecount == 'table_1') {
        $.ajax({
            url: 'excel/buildtable1.php',
            method: 'post',
            dataType: 'html',
            data: { 'date': $date },
            success: function (data) {
                $("#table_1")[0].innerHTML = data;
                grouptable('table_1', 6, 2);
                findsum('table_1', 6, 2);
                hoverTD('table_1');
            }
        });
    }
    //если активна вторая наполняем вторую
    if (tablecount == 'table_2') {
        $.ajax({
            url: 'excel/buildtable2.php',
            method: 'post',
            dataType: 'html',
            data: { 'date': $date },
            success: function (data) {
                $("#table_2")[0].innerHTML = data;
                grouptable('table_2', 9, 2);
                findsum('table_2', 9, 2);
                hoverTD('table_2');
            }
        });
    }
    //если активна тертья наполняем третью
    if (tablecount == 'table_3') {
        $.ajax({
            url: 'excel/buildtable3.php',
            method: 'post',
            dataType: 'html',
            data: { 'date': $date },
            success: function (data) {
                $("#table_3")[0].innerHTML = data;
                grouptable('table_3', 33, 3);
                findsum('table_3', 33, 3);
                hoverTD('table_3');
            }
        });
    }
}

//когда документ готов
$(document).ready(function () {
    //блок группировки таблиц
    //получаем текущую дату
    var date = new Date();
    //устанавливаем значение даты в элемент #date
    $("#date").val(date.toISOString().split('T')[0]);
    //сортируем все таблицы
    $("#table_1")[0].style.display = '';
    sortalltable();
});
