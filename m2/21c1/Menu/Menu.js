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
  document.querySelectorAll('.menu-button')[0].addEventListener("click", () => {
    document.querySelectorAll('.menu').classList.toggle('menu--open')
  });

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
STRETCH ITEM
Animation Goal #1. Animate the menu opening: You will need to change the CSS for the menu in order to achieve this. Get the menu to slide in from the left side of the screen. And slide out when the button is clicked. Bonus: Get the menu to slide back out when the user clicks anywhere on the screen other than the menu.
  */  
  function menuAnimation() {
  document.querySelectorAll('.menu-button')[0].addEventListener("click", () => {
    if (querySelectorAll('.menu--open')[0]) { 
      gsap.to("#menu", { duration: 1, x: -50 });
      document.querySelectorAll('.menu').classList.toggle('menu--close');
    }
    else if(querySelectorAll('.menu--close')[0]) {
      gsap.to("#menu", {duration: 1, x: 50});
      document.querySelectorAll('.menu').classList.toggle('menu--open');
    }
  });

  document.querySelectorAll('.articles')[0].addEventListener("click",
    () => {
      gsap.to("#menu", { duration: 1, x: -50 });
      document.querySelectorAll('.menu').classList.toggle('menu--close');
    }
  );
    }


  
  /*   
STRETCH ITEM
Animation Goal #2 Animate the article opening. This one is a bit trickier. You will need to change the CSS for this component as well. Animate the component so that it slides open and slides closed on each click. Update the text in the expand button to read 'Click to Expand' or 'Click to Close' depending on the state of the article.
  */
  function animateArticleOpen() {

  let closeButton = document.querySelectorAll('.header')[0].createElement('div');
  closeButton.classList.add('article-toggle');
  closeButton.addEventListener("click", () =>{
    if (document.querySelectorAll('.articles')[0].style.visibility = "hidden") {
      gsap.to("#menu", { duration: 1, x: 200 });
      // <span class='expandButton'>Click to Close</span>
      document.querySelectorAll('.expandButton')[0].textContent = "Click to Close";
      document.querySelectorAll('.articles')[0].style.visibility = "visible"
  } else if (document.querySelectorAll('.articles')[0].style.visibility = "visible") {
      gsap.to("#menu", { duration: 1, x: -200 });
      // <span class='expandButton'>Click to Expand</span>
      document.querySelectorAll('.expandButton')[0].textContent = "Click to Expand";
      document.querySelectorAll('.articles')[0].style.visibility = "hidden"
  }
  });
  }
  
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


/*
Component Constructor
Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints.
*/

/*
Implement a way to write your own articles using the Component Constructor and some input fields.
*/

