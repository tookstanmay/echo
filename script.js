async function getQuote(){

    const response = await fetch("https://type.fit/api/quotes?_limit=100");

    if (response.status == 404){
        console.log("Bad Request!");
    }
    else{
        var data = response.json();
        
        let quote = await data;
        let index = randomValue(quote.length);
        let text = quote[index].text;
        let author = quote[index].author;
        author = author.substring(0, author. length - 10);
        
        if (author == null)
            author = "Unknown";
        document.querySelector(".quoteText").innerHTML= text;
        document.querySelector(".quoteAuthor").innerHTML= author;
    }
}

getQuote();

function randomValue(length){
    let value = Math.round((Math.random() * length));
    console.log(value);
    return value;
}

function randomBackground(){
    document.body.style.background="url('https://source.unsplash.com/1920x1080?nature?dark')";
}
