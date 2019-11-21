/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function compArticle(array) {
  let x;
/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.
*/
  let divItem = document.createElement('div');
  divItem.classList.add('menu');
  let ulItem = divItem.appendChild(createElement('ul'));

  /* 
    Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
    Add those items to the <ul>
  */
  for (x = 0; x<array.length;x++){
    let liItem = ulItem.appendChild(createElement('li'));
  }

  
  /* 
    Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  */
  document.querySelectorAll('.menu-button')[0]


  /* 
    Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  */
  document.querySelectorAll('.menu-button')[0].addEventListener("click", () => document.querySelectorAll('.menu').classList.toggle('menu--open'));

  /*
  STRETCH ITEM: 
  Close Button

  Add a close(or 'read') button to each Article component.When clicked the article will disappear.
  */
  let closeButton = document.querySelectorAll('.header')[0].createElement('div');
  closeButton.classList.add('article-toggle');
  closeButton.addEventListener("click", () =>{
    if (document.querySelectorAll('.articles')[0].style.visibility = "hidden") {
    document.querySelectorAll('.articles')[0].style.visibility = "visible"
  } else {
    document.querySelectorAll('.articles')[0].style.visibility = "hidden"
  }
  });
  

  
  /* 
    Step 5: return the menu component.
    come back
  */
  return compArticle();
  
  /* 
    Step 6: add the menu component to the DOM.  

  */

menuItems.forEach(
  (dataItem) => { 
    let newMenu = compArticle(dataItem);
    document.querySelectorAll('.header')[0].appendChild(newMenu);
  }
);


}