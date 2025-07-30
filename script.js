const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const tweetBtn = document.getElementById("tweetBtn");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];
  quoteText.textContent = `"${selected.quote}"`;
  authorText.textContent = `— ${selected.author}`;
}

// Initial quote
getQuote();

// Tweet functionality
tweetBtn.addEventListener("click", () => {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " " + author)}`;
  window.open(tweetUrl, "_blank");
});
