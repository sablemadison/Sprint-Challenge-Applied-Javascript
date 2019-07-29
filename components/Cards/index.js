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
.then((axiosData2) => {
    console.log('Cards API:', axiosData2);
    const articles = axiosData2.data.articles;
    const Cards = document.querySelector('.cards-container');
    
    console.log(articles);

    articles.bootstrap.forEach(card => {
        Cards.appendChild(createCard(
            card.headline, card.authorPhoto, card.authorName))
        })
            articles.node.forEach(card => {
                Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName))
            })

            articles.technology.forEach(card => {
                Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));

                
            })

            articles.jquery.forEach(card => {
                Cards.appendChild(createCard(
                    card.headline, card.authorPhoto, card.authorName))
                })

                articles.javascript.forEach(card => {
                    Cards.appendChild(createCard(
                        card.headline, card.authorPhoto, card.authorName))
                    })
  
})
.catch((requestFail2) => {
    console.log('Request failure:', requestFail2);
});


function createCard (articleHeadline, authorImg, nameOfAuthor) {
    const newCard = document.createElement('div');

    const headline = document.createElement('div');

    const author = document.createElement('div');

    const imgContainer = document.createElement('div');

    const authorImage = document.createElement('img');

    const byauthor = document.createElement('span');

    

    newCard.classList.add('card');

    headline.classList.add('headline')

    author.classList.add('author');

    imgContainer.classList.add('img-container');

    headline.textContent = articleHeadline;

    author.textContent = nameOfAuthor;

    authorImage.src = authorImg;

    

    newCard.appendChild(headline);

    newCard.appendChild(author);

    newCard.appendChild(imgContainer)
    
    author.appendChild(imgContainer);
    
    imgContainer.appendChild(authorImage)

    author.appendChild(byauthor);

    
    return newCard;
}























// class cardComponents {
//     constructor () {

//     }

//     createArticleCard (imageURL, authorURL) {
//         const card = document.createElement('div');
//         const headline = document.createElement('div');
//         const authorDiv = document.createElement('div');
//         const imgContainer = document.createElement('div');
//         //img url needs to be passed in (as a variable)?
//         //auhor name needs to be passed in (as a variable)?
//         const authorSpan = document.createElement('span');
//         const img = document.createElement('img');

       
        
        

//         card.classList.add('card');
        

//     }
// }


// function componentFunction (cardData) {
// //possibly add for each to iterate over articles and create a card for each one or find a different way to create more cards
//     const card = document.createElement('div');

// const headline = document.createElement('div');
// headline.textContent = '${cardData.headline}';
// card.appendChild(headline);

// const image = document.createElement('img');
// image.setAttribute('url' , '${cardData.authorPhoto}')
// card.appendChild('image');

// const authorName = document.createElement('span');
// authorName.textContent = '${cardData.authorName}';
// card.appendChild(authorName);

// cardsContainer.appendChild(card);
// }

// componentFunction()