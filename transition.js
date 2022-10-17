let readTextFile = (file, callback) => {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

let transition = (requestURL) => {
    let result = readTextFile(requestURL, function(text){
        var data = JSON.parse(text);

        for (const key in data) {
            document.querySelector('[data-lang-name=' + key + ']').textContent = data[key];
        }
    });
}