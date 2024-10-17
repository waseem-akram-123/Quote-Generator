const URL = "https://quotes-api-self.vercel.app/quote";

const getQuote = async()=>{
    console.log ("getting data ....");
    let response = await fetch(URL);
    let data = await response.json();
    console.log (data);

    let quote = document.querySelector ("#bq");
    let author = document.querySelector ("#author");

    quote.innerHTML = data.quote;
    author.innerHTML = "-- "+data.author
}


let btn1 = document.querySelector ("#btn1");
btn1.addEventListener ("click", ()=>{
    getQuote();
});

let btn2 = document.querySelector ("#btn2");
btn2.addEventListener ("click", ()=>{
    tweet();
});

function tweet (){
    window.open ("https://twitter.com/intent/tweet?text=Hello%20world");
}