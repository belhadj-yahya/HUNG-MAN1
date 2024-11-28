const theInput = document.querySelector(".textArea");
const allButtons = document.querySelectorAll(".key")
console.log(allButtons)
allButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = 'red'
    theInput.value = e.target.value;
    input += btn.value; 
    btn.disabled = true; 

    btn.classList.add("clicked"); 
  });
});

// Step 1: Fetch a random word from the Random Word API
// fetch("https://random-word-api.vercel.app/api?words=1")
//   .then(rspo => {
//     return rspo.json(); // Parse the response into JSON
//   })
//   .then(data => {
//     let word = data[0];
//     console.log('Random word:', word);
    
//     //
//     return fetch(`https://api.urbandictionary.com/v0/define?term=${word}`);
//   })
//   .then(response => {
//     // Check if the Urban Dictionary response was successful
//     if (!response.ok) {
//       throw new Error('Error fetching definition');
//     }
//     return response.json(); // Parse the response into JSON
//   })
//   .then(data => {
//     // Step 4: Log the definition data
//     if (data.list && data.list.length > 0) {
//       console.log(`hint:`, data.list[0].definition);
//     } else {
//       console.log('No definition found for this word.');
//     }
//   })
//   .catch(error => {
//     // Step 5: Handle any errors during the fetch operations
//     console.error('Error:', error);
//   });


