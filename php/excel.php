<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formating sql table</title>
    <link rel="stylesheet" href="/css/excel.css">
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
</head>

<body>
    <?php
    $DB = new mysqli('localhost', 'root', '', 'tc-db-log');
    if ($DB->connect_error) {
        die('Ошибка подключения (' . $DB->connect_errno . ') '
            . $DB->connect_error);
    }
    mysqli_close($DB);
    ?>
    <div class="header unselectable">
        <img src="/img/excel/logo.png">
        <p>Formating sql table</p>
    </div>
    <div class="navigation unselectable">
        <div class="navigation_item navigation_item_selected" id="navigation_item_1">
            <p>table1</p>
        </div>
        <div class="navigation_item" id="navigation_item_2">
            <p>table2</p>
        </div>
        <div class="navigation_item" id="navigation_item_3">
            <p>table3</p>
        </div>
    </div>
    <div class="action">
        <input type="date" id="date" name="date" onchange="sortalltable()" />
        <div class="xlsx unselectable">
            <img src="/img/excel/excel.png">
        </div>
        <div class="print unselectable">
            <img src="/img/excel/print.png">
        </div>
        <div class="update unselectable">
            <img src="/img/excel/refresh.png">
        </div>
    </div>
    <table class="table" id="table_1" style="display:none">
    </table>

    <table class="table" id="table_2" style="display:none">     
    </table>

    <table class="table" id="table_3" style="display:none">      
    </table>

    <script src="/js/excel.js"></script>

</body>

</html>