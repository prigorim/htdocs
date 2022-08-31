<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>blocks</title>
    <link rel="stylesheet" href="/css/blocks.css">
    <script src="/js/jquery-3.6.0.min.js"></script>
</head>

<body>

    <div class="head">
        <p>
            <font color="#bbb">blocks </font>
            <font color="#dff3ff">mouse</font>
        </p>
        <input type="number" id="fill" name="fill" min="1" max="5" value="3">
        <p class="score">0</p>
        <div class="content">
            <canvas id="cv" width="600" height="600"></canvas>
        </div>

    </div>
</body>
<script src="/js/blocks.js"></script>

</html>
