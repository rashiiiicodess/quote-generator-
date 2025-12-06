let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

async function getQuote() {
    try {
       
        quote.classList.add("fade-out");

        quote.innerText = "Loading...";
        author.innerText = "";

        const response = await fetch("https://thequoteshub.com/api/");
        const data = await response.json();

        setTimeout(() => {
            quote.innerText = "“" + data.quote + "”";
            author.innerText = "- " + data.author;
            quote.classList.remove("fade-out");
        }, 300);

    } catch (error) {
        quote.innerText = "Could not fetch a quote.";
        author.innerText = "";
        console.log("API Error:", error);
    }
}


getQuote();

btn.addEventListener("click", getQuote);
