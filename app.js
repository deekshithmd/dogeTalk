var btn=document.querySelector(".btn-translate")
var text=document.querySelector("#input")
var output=document.querySelector(".translated")
//output.innerText="Hi"
url="https://api.funtranslations.com/translate/doge.json"

function constructUrl(text){
    return url+"?"+"text="+text
}

function errorHandle(){
    alert("Some error occured...Please try after some time")
}

function translateDoge(){
    var inputText=text.value
    fetch(constructUrl(inputText))
    .then(response=>response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(errorHandle)
}

btn.addEventListener("click",translateDoge)