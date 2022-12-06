function selectMode(mode) {
    let color = "ghostWhite";
    let image = "";
    let label = "Light Mode";

    if (mode === "dark") {
        color = "darkSlateBlue";
        image = "";
        label = "Dark Mode";
    } else if (mode === "light") {
        color = "ghostWhite";
        image = "";
        label = "Light Mode";
    } else {
        color = "dimGray";
        image = "";
        label = "Ninja Mode";
    }

    document.getElementById("icon").src = image;
    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;

}