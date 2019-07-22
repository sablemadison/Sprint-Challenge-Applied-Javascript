// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(data) {
    const contentDiv =  document.createElement('div');
contentDiv.classList.add('header');

const dateSpan = document.createElement('span');
dateSpan.classList.add('date');
dateSpan.textContent = 'SMARCH 28, 2019';
contentDiv.appendChild(dateSpan)

const tempSpan = document.createElement('span');
tempSpan.textContent = '98°';
contentDiv.appendChild(tempSpan);

const headerContainer = document.querySelector('.headerContainer')
headerContainer.appendChild(contentDiv);
}



// 1. Div with a class of Header
// 2. Span with a class of date and text content
// 3. H1 with text content
// 4. span with a class of temp and text content
// 5. add it to the DOM in the .headerContainer component