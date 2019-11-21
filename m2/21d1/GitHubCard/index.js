/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
let desiredUN;
function passData(desiredUN) {
  
  axios.get(`https://api.github.com/users/${desiredUN}`)
  .then(response => {
    // proper response
    meMyselfI = response.data;
    console.log(meMyselfI);
    gitHubinfo(meMyselfI);
      // response.data.avatar_url, bio, blog, company, created_at, email, events_url, followers, followers_url, following, following_url, gists_url, gravatar_id, hireable, html_url, id, location, login, name, node_id, organizations_url, public_gists, public_repos, received_events_url, repos_url, site_admin, starred_url, subscriptions_url, type, updated_at, url
  })  
  .catch(err => {
    // error
    console.log(err);
  });
 }


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

function arrayIterate(){
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const friendsArray = ['evoingram', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'dmattox10', 'PHONGdotTech', 'jagins', 'Henry2212', 'naomi121'];

friendsArray.forEach(passData);}

arrayIterate();

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/

      // response.data.avatar_url, bio, blog, company, created_at, email, events_url, followers, followers_url, following, following_url, gists_url, gravatar_id, hireable, html_url, id, location, login, name, node_id, organizations_url, public_gists, public_repos, received_events_url, repos_url, site_admin, starred_url, subscriptions_url, type, updated_at, url
function gitHubinfo(meMyselfI) {
  // add elements to div class cards
// <div class="card">
  let divCard = document.querySelectorAll('.cards')[0]
    .appendChild(document.createElement('div'));
  divCard.classList.add('card');

  // <img src={image url of user} />
  let imgUser = divCard.appendChild(document.createElement('img'));
  imgUser.src = meMyselfI.avatar_url;

  // <div class="card-info">
  let divInfo = divCard.appendChild(document.createElement('div'));
  divInfo.classList.add('card-info');

  // <h3 class="name">{users name}</h3>
  let h3Name = divInfo.appendChild(document.createElement('h3'));
  h3Name.classList.add('name');
  h3Name.textContent = `${meMyselfI.name}`;

  // <p class="username">{users user name}</p>
  let pUsername = divInfo.appendChild(document.createElement('p'));
  pUsername.classList.add('username');
  pUsername.textContent = `${meMyselfI.login}`;

  // <p>Location: {users location}</p>
  let pLocation = divInfo.appendChild(document.createElement('p'));
  pLocation.textContent = `Location:  ${meMyselfI.location}`;

  //<p>Profile:  
    // <a href={address to html_url}>html_url</a>
    // </p>
  let pProfile = divInfo.appendChild(document.createElement('p'));
  pProfile.appendChild(document.createElement('a'));
  pProfile.setAttribute('href', `${meMyselfI.html_url}`);
  pProfile.textContent = `${ meMyselfI.html_url }`;

  // <p>Followers: {users followers count}</p>
  let pFollowers = divInfo.appendChild(document.createElement('p'));
  pFollowers.textContent = `Followers:  ${meMyselfI.followers}`;

  // <p>Following: {users following count}</p>
  let pFollowing = divInfo.appendChild(document.createElement('p'));
  pFollowing.textContent = `Following:  ${meMyselfI.following}`;

  // <p>Bio: {users bio}</p>
  let pBio = divInfo.appendChild(document.createElement('p'));
  pBio.textContent = `Bio:  ${meMyselfI.bio}`;

}

