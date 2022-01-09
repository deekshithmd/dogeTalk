var btn=document.querySelector(".btn-translate")
var text=document.querySelector("#input")
var output=document.querySelector(".translated")
//output.innerText="Hi"
const url="https://api.funtranslations.com/translate/doge.json"

const constructUrl= text => url+"?"+"text="+text;

const errorHandle=()=>{
    alert("Some error occured...Please try after some time")
}

const translateDoge=()=>{
    var inputText=text.value
    fetch(constructUrl(inputText))
    .then(response=>response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(errorHandle)
}

btn.addEventListener("click",translateDoge)