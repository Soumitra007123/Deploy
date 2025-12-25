$(document).ready(function () {

    // Smooth scrolling
    $("nav a").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 50
        }, 800);
    });

    // Fade-in sections on load
    $("section").hide().fadeIn(1200);
});
