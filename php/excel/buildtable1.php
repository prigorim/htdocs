<?php
$date = $_POST['date'];
$DB = new mysqli('localhost', 'root', '', 'tc-db-log');
$v_for_excel = $DB->query("SELECT * FROM `v_for_excel` WHERE `logDATE` = '$date' ORDER BY `logDATE`, `obj`, `org`;");
$htmltable =  '<tr>';
$htmltable .= '<th style="display:none">LogDate</th>';
$htmltable .= '<th width="20%">Объект КОР</th>';
$htmltable .= '<th width="20%">Исполнитель</th>';
$htmltable .= '<th width="20%">Численность на 8.30, чел.</th>';
$htmltable .= '<th width="20%">Численность на 10.40, чел.</th>';
$htmltable .= '<th width="20%">Численность на 17.00, чел.</th>';
$htmltable .= '</tr>';
$htmltable .= '<tr style="display:none">';
$htmltable .= '<td style="display:none"></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '</tr>';

while ($row = $v_for_excel->fetch_row()) {
    $htmltable .= '<tr>';
    $htmltable .= "<td style='display:none'>{$row[1]}</td>";
    $htmltable .= "<td>{$row[3]}</td>";
    $htmltable .= "<td>{$row[2]}</td>";
    $htmltable .= "<td>{$row[4]}</td>";
    $htmltable .= "<td>{$row[5]}</td>";
    $htmltable .= "<td>{$row[6]}</td>";
    $htmltable .= '</tr>';
}

$htmltable .= '<tr>';
$htmltable .= '<td style="display:none"></td>';
$htmltable .= '<td colspan="2">Общий итог</td>';
$htmltable .= '<td style="display:none"></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '</tr>';
mysqli_close($DB);
exit($htmltable);