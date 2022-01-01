//Button delay ns1-to-ns2
function convertNS1(){
    document.getElementById("ns1-to-ns2").disabled = true;
    setTimeout(function() {
        document.getElementById("ns1-to-ns2").disabled = false;
    }, 1500);
}
document.getElementById("ns1-to-ns2").addEventListener("click", convertNS1);

//Button delay ns2-to-ns1
function convertNS2(){
    document.getElementById("ns2-to-ns1").disabled = true;
    setTimeout(function() {
        document.getElementById("ns2-to-ns1").disabled = false;
    }, 1500);
}
document.getElementById("ns2-to-ns1").addEventListener("click", convertNS2);

//Prevent links from being dragged
$('a').mousedown(function(e) {
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

//Insert to textarea onclick
var isChrome = !!window.chrome && !!window.chrome.webstore;
var mapObj = {
    'main-ns': 'export async function main(ns) {\n\n}'

}
jQuery(".cbtn").on("click", function(event) {
var currButtonId = jQuery(event.target).attr('id');
var mappedText = mapObj[currButtonId];

    jQuery("#textarea3").focus();
    document.execCommand('insertText', false, mappedText);
});