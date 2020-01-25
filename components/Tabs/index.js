// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//axios GET request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(  response => {
console.log('data:', response)
response.data.topics.forEach(item => { 
    const newTab = Tabs(item);
    parentDiv.appendChild(newTab)
})
    })
    .catch( error => {
console.log('Oh no, an error:', error)
    })


    function Tabs (arr) {
        
        //create elements
        const tab = document.createElement('div')
        
        // add class names
        tab.classList.add('tab')

        //add text content
        tab.textContent = arr;

        return tab;
 }

// grab parent
const parentDiv = document.querySelector('.topics')