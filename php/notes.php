<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Notes</title>
    <link rel="stylesheet" href="/css/notes.css">
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
</head>

<body>
    <div class="menu">
        <div class="menu_element"></div>
        <div class="menu_element menu_element_toggle" id="menu_element_2"></div>
    </div>
    <div class="menu_body" style="display:none">
        <div class="navigation_menu">
            <div class="navigation_item" id="navigation_item_1">
                <p>C</p>
            </div>
            <div class="navigation_item" id="navigation_item_2">
                <p>N</p>
            </div>
        </div>
    </div>
    <div class="sendsuccessnotes" style="display:none">
        <p>Success</p>
    </div>
    <?php
    $DB = new mysqli('localhost', 'root', '', 'notes');
    if ($DB->connect_error) {
        die('Ошибка подключения (' . $DB->connect_errno . ') '
            . $DB->connect_error);
    }
    ?>
    <div class="canvas" id="canvas">
        <?php
        $notes = $DB->query("SELECT * FROM `notes`;");
        while ($row = $notes->fetch_row()) {
        ?>
            <div class="task">
                <div class="task_header">
                    <div class=save_changes>
                        <p>S</p>
                    </div>
                    <input placeholder="name"></input>
                    <div class="delete_changes">
                        <p>X</p>
                    </div>
                </div>
                <div class="task_body">
                    <div class="task_items">
                        <?php echo "$row[4]" ?>
                    </div>
                    <div class="task_input">
                        <input placeholder="item"></input>
                        <div class="task_input_add">
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                $top = <?php echo "$row[2]" ?>;
                $left = <?php echo "$row[1]" ?>;
                $name = "<?php echo "$row[3]" ?>";
                $offsetcanvas = $(".canvas").offset();
                $topcanvas = $offsetcanvas.top;
                $leftcanvas = $offsetcanvas.left;
                $(".task:last").offset({
                    top: $topcanvas + $top,
                    left: $leftcanvas + $left
                });
                $(".task_header:last input").val($name);
            </script>
        <?php
        }
        mysqli_close($DB);
        ?>
    </div>
</body>

<script src="/js/notes.js"></script>


</html>