<?php
$date = $_POST['date'];
$DB = new mysqli('localhost', 'root', '', 'tc-db-log');

$htmltable = '<tr>';
$htmltable .= '<th style="display:none">LogDate</th>';
$htmltable .= '<th width="20%">Объект КОР</th>';
$htmltable .= '<th width="20%">Исполнитель</th>';
$htmltable .= '<th width="10%">15:00 - 15:30</th>';
$htmltable .= '<th width="10%">15:30 - 16:00</th>';
$htmltable .= '<th width="10%">16:00 - 16:30</th>';
$htmltable .= '<th width="10%">16:30 - 17:00</th>';
$htmltable .= '<th width="10%">17:00 - 17:30</th>';
$htmltable .= '<th width="10%">17:30 - 18:00</th>';
$htmltable .= '</tr>';
$htmltable .= '<tr style="display:none">';
$htmltable .= '<td style="display:none"></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '</tr>';
$v_for_excel_out = $DB->query("SELECT * FROM `v_for_excel_out` WHERE `logDATE` = '$date' ORDER BY `logdate`, `obj`, `org`;");
while ($row = $v_for_excel_out->fetch_row()) {
    $htmltable .= '<tr>';
    $htmltable .= "<td style='display:none'>{$row[1]}</td>";
    $htmltable .= "<td>{$row[3]}</td>";
    $htmltable .= "<td>{$row[2]}</td>";
    $htmltable .= "<td>{$row[5]}</td>";
    $htmltable .= "<td>{$row[6]}</td>";
    $htmltable .= "<td>{$row[7]}</td>";
    $htmltable .= "<td>{$row[8]}</td>";
    $htmltable .= "<td>{$row[9]}</td>";
    $htmltable .= "<td>{$row[10]}</td>";

    $htmltable .= '</tr>';
}
$htmltable .= '<tr>';
$htmltable .= '<td style="display:none"></td>';
$htmltable .= '<td colspan="2">Общий итог</td>';
$htmltable .= '<td style="display:none"></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '<td></td>';
$htmltable .= '</tr>';
mysqli_close($DB);
exit($htmltable);
