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

// data = object of objects containing arrays of objects, was able to access i.e(response.data.javascript[0].headline) but 
//can't figure out how to add to components dynamically 

// axios GET call
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {console.log('response:', response)
})
.catch(error => { console.log('error:', error)
})


function Card (headline, url, author) {
    //create elements
    let cardDiv = document.createElement('div')
    let headlineDiv = document.createElement('div')
    let authorDiv = document.createElement('div')
    let imgDiv = document.createElement('div')
    let imgSrc = document.createElement('img')
    let authorSpan = document.createElement('span')

    // add class names
    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')
    

    //create child relationships
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)

    imgDiv.appendChild(imgSrc)
    cardDiv.appendChild(imgDiv)

   cardDiv.appendChild(authorDiv)

   // add content
   headlineDiv.textContent = headline;
   imgSrc.src = url;
   authorSpan.textContent= author;



   return cardDiv;
   

}

const parent = document.querySelector('.cards-container')

