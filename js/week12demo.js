const twitterButton = document.querySelector('#js-tweet');
async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint)
    if (!response.ok){
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.activity);
    setTweetButton(json.message);
  } catch(err){
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText= document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint= 'http://www.boredapi.com/api/activity/';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);

function setTweetButton(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}
getQuote();
