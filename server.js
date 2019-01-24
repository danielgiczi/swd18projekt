var express = require("express")
var fs = require("fs")
var path = require("path")

var app = express();

var PORT = 3000;

app.use("/public/img", express.static(path.join(__dirname, "public", "img")))

app.use("/public/css", express.static(path.join(__dirname, "public", "css")))

app.use("/public/js", express.static(path.join(__dirname, "public", "js")))

var getPageData = function (folder) {
    var html = fs.readFileSync(path.join(__dirname, "index.html"))

    var contentHtml = "";

    try {
        contentHtml = fs.readFileSync(path.join(__dirname, "pages", folder ))
    }
    catch (ex) {
        if (String(ex).indexOf("no such file or directory") > -1) {
            return { status: 404 }
        }
        else {
            return { status: 500, html: String(ex) }
        }
    }

    html = String(html).replace("<!-- CONTENT -->", contentHtml);

    var cssHtml = "";

    var files = fs.readdirSync(path.join(__dirname, "public", "css")) || []
    files = files.sort((a, b) => {
        return b == "reset.css"
    })
    files.forEach((el, inx) => {
        if (el.indexOf(".css") == -1) return;

        cssHtml += "<link rel='stylesheet' href='/public/css/" + el + "' type='text/css'/>" + (inx == files.length-1 ? "" : "\n\t")
    })

    html = String(html).replace("<!-- CSS -->", cssHtml);

    return { status: 200, html: html };
}

app.get("*", (req, res) => {
    var folder = req.path.replace("/", "");
    if (req.path == "/") folder = "home"
    var data = getPageData(folder)
    res.status(data.status);
    res.send(data.html)
    res.end();
})

app.listen( process.env.PORT || PORT, () => {
    console.log("Listening on PORT: " + PORT);
})