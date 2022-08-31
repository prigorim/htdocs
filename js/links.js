$(".navigation_item").click(function (e) {
    var name = $(this).attr("id");
    if (name != 'mix') {
        window.open('php/' + name + '.php')
    }

});

function fadeOutnavigation(duration) {
    $(".navigation_item").slideUp(duration);
}

function fadeInnavigation(duration) {
    $(".navigation_item").each(function (index) {
        $(this).delay(duration * index).slideDown(duration);
    });
}

function sortdivs() {
    var parent = $(".navigation");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

$("#mix").click(function () {
    fadeOutnavigation(800);
    setTimeout(() => { sortdivs(); fadeInnavigation(300); }, 1000);

});

$(document).ready(function () {
    console.log('powered by Egeniy Chernyshev');
    setTimeout(() => { fadeInnavigation(250); }, 500);
});