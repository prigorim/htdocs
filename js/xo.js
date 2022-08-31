let cells = document.querySelectorAll('.table td')
let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
$move = 0;
$gameend = 0;

function isVictory(cells) {
    for (let comb of combs) {
        if (
            cells[comb[0]].innerText == cells[comb[1]].innerText &&
            cells[comb[1]].innerText == cells[comb[2]].innerText &&
            cells[comb[0]].innerText != ''
        ) {
            return true;
        }
    }
    return false;
}



$("td").click(function (e) {
    if ($gameend == 1) {
        $gameend = 0;
        $move = 0;
        for (let i = 0; i < 9; i++) {
            $('#' + i).html('');
        }
    }
    $tdid = this.id;
    if ($('#' + $tdid).html() == '') {
        if ($move % 2 === 0) {
            $('#' + $tdid).html('<p class="blue">X</p>');
        }
        else {
            $('#' + $tdid).html('<p class="green">O</p>');
        }
        if (isVictory(cells)) {
            if ($move % 2 === 0) {
                for (let i = 0; i < 9; i++) {
                    $('#' + i).html('<p class="blue">X</p>');
                }
                $gameend = 1;
            }
            else {
                for (let i = 0; i < 9; i++) {
                    $('#' + i).html('<p class="green">O</p>');
                }
                $gameend = 1;
            }
        };
        $move += 1;
        if ($move == 9) {
            $gameend = 1;
        }
    }
});