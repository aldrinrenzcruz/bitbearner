//Button delay ns1-to-ns2
function convertNS1() {
    document.getElementById("ns1-to-ns2").disabled = true;
    setTimeout(function () {
        document.getElementById("ns1-to-ns2").disabled = false;
    }, 1500);
}
document.getElementById("ns1-to-ns2").addEventListener("click", convertNS1);

//Button delay ns2-to-ns1
function convertNS2() {
    document.getElementById("ns2-to-ns1").disabled = true;
    setTimeout(function () {
        document.getElementById("ns2-to-ns1").disabled = false;
    }, 1500);
}
document.getElementById("ns2-to-ns1").addEventListener("click", convertNS2);

//Prevent links from being dragged
$('a').mousedown(function (e) {
    e.preventDefault();
});

//Copy textarea
function copy1() {
    let textarea = document.getElementById("textarea3");
    textarea.select();
    document.execCommand("copy");
}

//Clear textarea
function eraseText1() {
    document.getElementById("textarea3").value = "";
}

//Save textarea content as .txt file
function saveTextAsFile() {
    var textToWrite = document.getElementById('textarea3').value;
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var downloadLink = document.createElement("a");

    downloadLink.download = "yourScript.js";

    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

//Insert to textarea onclick
var isChrome = !!window.chrome && !!window.chrome.webstore;
var mapObj = {
    'main-ns': 'export async function main(ns) {\n\n}'

}
jQuery(".cbtn").on("click", function (event) {
    var currButtonId = jQuery(event.target).attr('id');
    var mappedText = mapObj[currButtonId];

    jQuery("#textarea3").focus();
    document.execCommand('insertText', false, mappedText);
});