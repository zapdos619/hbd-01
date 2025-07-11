// 🌐 Window size tracking for reload on resize
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth !== clientWidth && newHeight !== clientHeight) {
        location.reload();
    }
});

// ✍️ Typewriter animation for messages
(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current === '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

// ⏳ Time elapsed clock
function timeElapse(startDate) {
    var current = new Date();
    var seconds = (Date.parse(current) - Date.parse(startDate)) / 1000;

    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    var hours = Math.floor(seconds / 3600);
    if (hours < 10) hours = "0" + hours;

    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) minutes = "0" + minutes;

    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    var result =
        "Days <span class=\"digit\">" + days + "</span> " +
        "Hours <span class=\"digit\">" + hours + "</span> " +
        "Minutes <span class=\"digit\">" + minutes + "</span> " +
        "Seconds <span class=\"digit\">" + seconds + "</span>";

    $("#clock").html(result);

    var text = "THE WORLD JUST GOT LUCKIER SINCE ";
    $("#message-box").html(text);
}

// 📐 Responsive canvas setup
function setupResponsiveCanvas(canvas) {
    const width = Math.min($(window).width(), 1100); // Max width 1100px
    const height = width * 0.618; // Maintain aspect ratio

    canvas.attr("width", width);
    canvas.attr("height", height);

    return { width, height };
}
