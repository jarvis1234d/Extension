function main() {



    function downloadUrl() {
        var now = window.location.href;
        now2 = now.split('.');
        now2[1] = "youtubepp";
        link = now2[0] + "." + now2[1] + "." + now2[2];

        return link;
    };
    var flink = downloadUrl();



    function buttonLoad() {
        var container = document.getElementById("top-level-buttons");
        var btn = document.createElement("button");
        this.cont = container;
        btn.className = "style-scope ytd-video-secondary-info-renderer";
        btn.setAttribute("role", "button");
        btn.id = "downloadVideo";

        btn.setAttribute("onclick", "document.location = '" + flink + "'")
        // btn.innerHTML = "<a href = '" + downloadUrl + "'>DOWNLOAD</a>"
        btn.innerText = "DOWNLOAD";

        container.appendChild(btn);




    }

    buttonLoad();





};
main();
// setTimeout(() => main(), 500);

