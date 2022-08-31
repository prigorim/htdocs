$(".menu").click(function () { 
    $(".menu_body").slideToggle();
    $("#menu_element_2").toggleClass("menu_element_toggle");
});

$("#navigation_item_1").click(function () {
    var target = document.getElementById("canvas");
    target.innerHTML = '';
});

$("#navigation_item_2").click(function () {
    $(".canvas").append($('<div class="task"><div class="task_header"><div class=save_changes><p>S</p></div><input placeholder="name"></input><div class="delete_changes"><p>X</p></div></div><div class="task_body"><div class="task_items"></div><div class="task_input"><input placeholder="item"></input><div class="task_input_add"><p>+</p></div></div></div></div>'));
});

$(document).ready(function () {
    $('body').on('click', '.task', function () {
        $('.task').draggable({
            containment: '.canvas',
            grid: [10, 10]
        });
    });

    $('body').on('click', '.task_input_add', function () {
        $value = $(this).prev().val();
        $(this).parent().prev().append($('<div class="task_item"><div class="task_item_dot"><p>•</p></div><p>' + $value + '</p><div class="task_item_remove"><p>-</p></div></div>'));
    });

    $('body').on('click', '.task_item_remove', function () {
        $(this).parent().remove();
    });

    $('body').on('click', '.delete_changes', function () {
        $name = $(this).prev().val();
        $.ajax({
            url: 'notes/deletenote.php',
            method: 'post',
            dataType: 'html',
            data: { 'name': $name },
            success: function (data) {
                $('.sendsuccessnotes').fadeToggle();
                $('.sendsuccessnotes').fadeToggle();
            }
        });
        $(this).parent().parent().remove();

    });

    $('body').on('click', '.save_changes', function (e) {
        var offsetcanvas = $(".canvas").offset();
        var topcanvas = offsetcanvas.top;
        var leftcanvas = offsetcanvas.left;
        var offset = $(this).parent().parent().offset();
        var top = offset.top;
        var left = offset.left;
        var x = left - leftcanvas;
        var y = top - topcanvas;
        $name = $(this).next().val();
        var msg = $(this).parent().next().children(".task_items").html();
        msg = msg.trimLeft().trimRight();
        $.ajax({
            url: 'notes/sendnote.php',
            method: 'post',
            dataType: 'html',
            data: { 'x': x, 'y': y, 'name': $name, 'msg': msg },
            success: function (data) {
                $(".sendsuccessnotes").fadeIn();
                $(".sendsuccessnotes").fadeOut();
            }
        });
    });

});
