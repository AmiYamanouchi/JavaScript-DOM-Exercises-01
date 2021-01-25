/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text
   (with a yellow background for example)
*/


// let letter = document.querySelector('p')
// letter.innerHTML = letter.innerText.split(" ").map( element =>{
//   return element.length >= 8 ? `<span style="background-color:yellow">${element}</span>` : element
// }).join(" ");



/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

let a = document.createElement('a');
a.href = "http://officeipsum.com/";
a.innerText = "ここがリンク先です"
document.body.appendChild(a);



/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

// letter.innerHTML = letter.innerText.split('.').map( element => {
//   return `<p>${element}.</p>`
// }).join(" ")


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count after the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const h = document.querySelector('h1');
const wordCount = document.querySelector('p').innerText.split(" ").length; //806
const span = document.createElement('span');
span.innerHTML = `<br> word count : ${wordCount}`;
h.appendChild(span);


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

// let p = document.querySelector('p');
// p.innerHTML = p.innerText.split("").map( element => {

//   if(element === "?"){
//     return '🤔'
//   } else if(element === "!"){
//     return '😲'
//   } else{
//     return element
//   }

// }).join('');


let p = document.querySelector('p');
const pArray = p.innerText.split(""); 
// p.innerHTML = pArray.map( element => {

//   if(element === "?"){
//     return '🤔'
//   } else if(element === "!"){
//     return '😲'
//   } else{
//     return element
//   }

// }).join('');

const convertedArray = pArray.map( element => {

  if(element === "?"){
    return '🤔'
  } else if(element === "!"){
    return '😲'
  } else{
    return element
  }
})

p.innerHTML = convertedArray.join('')