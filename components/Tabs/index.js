// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const promise = axios.get('https://lambda-times-backend.herokuapp.com/topics');

promise
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

function tabComponent (tabsArray) {
    const data = document.querySelector('topics');
    data.forEach(function (tabs) {
        const div = document.createElement('div');
        div.classList.add(tab);
        div.textContent = 'topic here';
data.appendChild(div);
        
    })


}

tabComponent(data.topics) //pass array (topics) into function as argument --->