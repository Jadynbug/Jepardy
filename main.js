const links = [
    {
        label: "Temple Jepardy",
        url: "../temple/temple-index.html"
    }
]

function listLinks () {
    var len = links.length;
    var fullContent = "";
    for (var i = 0; i < len; i++) {
        var content = '<li><a href="' + links[i]["url"] + '">' + links[i]["label"] + "</li>";
        fullContent += content;
    }
    document.getElementById("link-list").innerHTML = fullContent;
}