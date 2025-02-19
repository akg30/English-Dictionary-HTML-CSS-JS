var userWord=document.getElementById("userWord").value;
var showMeaning=document.getElementById("showMeaning");
var apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`;

$("#getMeaning").click(function(){
    fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
        showMeaning.textContent=`Meaning Of ${data[0]["word"]} Is ${data[0]["meanings"][0]["definitions"][0]["definition"]}`;
    })
    .catch(error=>{
        showMeaning.textContent="Not Found";
    })
})