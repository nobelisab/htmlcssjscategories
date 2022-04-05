/**
 * Solution: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

 import Investment from "./Investment.js";
 import Portfolio from "./Portfolio.js";
 
 
 
 const Portfolio = new Portfolio(
    "Value Fund",
    "index",
    "yes",
    "yes",
    57,
    "moderate",
    "January 27, 2022 10:00:00 EST"
 );
 
 const Investment = new Investment(
   "Apple",
   "AAPL",
   "162.62",
   "Stock",
   1000,
   "January 27, 2022 10:00:00 EST"
 );
 
 const content = `
   
     <figure class="Investment__image">
       <img src=${Investment.image} alt="" />
     </figure>
     <h1 class="investment__name">Investment</h1>
     <ul class="investment__features">
       <li class="investment__volume">Volume:<span> ${
         Investment.volume
       }l</span></li>
       <li class="investment__color">Color:<span> ${
         Investment.color
       }</span></li>
       <li class="investment__age">Age:<span> ${Investment.investmentAge()} days old</span></li>
     </ul>
   
 `;
 
 const main = document.querySelector(".maincontent");
 
 const newArticle = document.createElement("article");
 newArticle.classList.add("investment");
 newArticle.setAttribute("id", "investment");
 newArticle.innerHTML = content;
 
 main.append(newArticle);
 
 /**
  * Add a navigation section to the DOM
  */
 const navContent = `
       <li><a href="#">Name</a></li>
       <li><a href="#">Ticker</a></li>
       <li><a href="#">Price</a></li>
       <li><a href="#">Type</a></li>
       <li><a href="#">Volume</a></li>
       <li><a href="#">Investment Age</li>
 `;
 
 const mainNav = document.createElement("nav")
 mainNav.classList.add("main-navigation");
 const navList = document.createElement("ul")
 navList.innerHTML = navContent
 mainNav.append(navList)
 
 document.querySelector(".siteheader").append(mainNav)
 
