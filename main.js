const gridItems = document.querySelectorAll('.grid-item');

// SETS THE DESCRIPTION BY ID
const setDescription = (element, newElement) => {
    console.log();
    switch(element.id){
        case 'mood-song':
            newElement.textContent = "Takes input of mood or occasion and concatenates 'music' to run a google search. Used selenium to make a web scraper that would find youtube videos from the search results and collect their ids. Used Youtube API to create a youtube playlist of all the songs on a users account."
            break;
        case 'contacts-app':
            newElement.textContent = "Used Java and SQLite in Android Studio to create a simple apllication with multiple activities to store contacts with names, numbers, and contact photos. Built in functionality to insert, update, and delete contacts from the database."
            break;
        case 'personal-website':
            newElement.textContent = "You're looking at it! Made with HTML, CSS, and Vanilla Javascript :)"
            break;
        case 'more':
            newElement.textContent = "See more at my Git Hub..."
            break;
    }
};  


gridItems.forEach(gridItem => {
    const element = gridItem;
    // TOGGLES GRID DESCRIPTION
    gridItem.addEventListener('click', () => {
        // console.log(element);
        
        // CREATES A NEW DESCRIPTION ELEMENT FOR EVERY CLICK
        const newElement = document.createElement('div');
        newElement.classList.add('flex-item');
        newElement.classList.add('flex');
        newElement.innerHTML = "<h3></h3>";
        setDescription(element, newElement);
        console.log(newElement.textContent);

        // IF THE ELEMENT IS ALREADY ACTIVATED
        if(element.classList.contains('active')){
            console.log(element);
            element.classList.remove('active');
            const child = element.lastElementChild;
            element.removeChild(child);
        }
        // IF THE ELEMENT IS NOT ACTIVED
        else{
            console.log(element);
            element.classList.add('active');
            // adds the new element before the end of the current instance
            element.insertAdjacentElement('beforeend', newElement);
        }
        
    });
    
});