var glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(function (glowInText) {
    var letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i * 0.3 + "s";
        glowInText.append(span);
    });
});

var shinchouMenuLinks = document.querySelectorAll(".shinchou-menu li a");
shinchouMenuLinks.forEach(function (link) {
    var letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        if (i < 1) {
            span.className = "highlight";
        }
        span.style.transitionDelay = i / 10 + "s";
        link.append(span);
    });
});