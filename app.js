var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output");

// outputText.innerText="output will display here"
 var url= "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text)
{
    return url + "?" + "text=" + text
}

function errorHandler(error)
{
    console.log("An error occured: " + error)
    alert("something wrong happened with the server")

}


function clickHandler()
 {  // taking input
    var input=inputText.value

    // calling server for processing
    fetch(constructUrl(input))
    .then(response => response.json())
    .then( function output(json)
    {       //output
       var translatedText = json.contents.translated
        outputText.innerText  = translatedText
   
      
       
    })
    //for handling error
    .catch(errorHandler)


}


btnTranslate.addEventListener("click",clickHandler);
