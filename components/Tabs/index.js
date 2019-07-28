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
.then((axiosData) => {
console.log(axiosData);
const tabsData = axiosData.data.topics;
const topics = document.querySelector('.topics');

tabsData.forEach(tab => {
    topics.appendChild(createTab(tab))
    
})
})
.catch((requestFail) => {
console.log('The request failed', requestFail);

})

function createTab (tabTopic) {
const newTab = document.createElement('div');

newTab.classList.add('tab');
newTab.textContent = tabTopic;
return newTab;
}

// promise
// .then(topicsObject =>  {
//    topicsObject = topicsObject.data.promise;
//     console.log(topicsObject)
//    const topics = document.querySelector('.topics')
//    for(let i = 0; i < topicsObject.length; i++ ){
//        topics.appendChild(topicsObject.data.promise);
//    }
// })
// .catch(error =>  {
//     console.log(error);
// });



// function tabComponent (tabTopic) {
//     const tab = document.createElement('div');
    
//     tab.classList.add('tab');

//     tab.textContent = tabTopic;

//     return tab;
// }







