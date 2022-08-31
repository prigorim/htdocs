<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ant</title>
    <link rel="stylesheet" href="/css/ant.css">
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
</head>

<body>
    <div class="anthead">
        <input type="number" id="rows" name="rows" min="1" max="100" value="20">
        <input type="number" id="columns" name="columns" min="1" max="100" value="20">
        <input type="number" id="fill" name="fill" min="0" max="1" value="0.3" step="0.01">
    </div>
    <div class="content">
        <table class="anttable" id="anttable"></table>
    </div>
</body>
<script src="/js/ant.js"></script>

</html>