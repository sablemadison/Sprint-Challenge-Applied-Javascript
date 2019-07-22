// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const promise2 = axios.get('https://lambda-times-backend.herokuapp.com/articles');

promise2
.then(function (response2) {
    console.log(response2);
})
.catch(function (error2) {
    console.log(error2);
});

const cardsComponent = document.querySelector('.cards-container')
function componentFunction (cardData) {
//possibly add for each to iterate over articles and create a card for each one or find a different way to create more cards
    const card = document.createElement('div');

const headline = document.createElement('div');
headline.textContent = '${cardData.headline}';
card.appendChild(headline);

const image = document.createElement('img');
image.setAttribute('${cardData.authorPhoto}')
card.appendChild('image');

const authorName = document.createElement('span');
authorName.textContent = '${cardData.authorName}';
card.appendChild(authorName);

cardsContainer.appendChild(card);
}

cardsComponent()