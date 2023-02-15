// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.
// button variable
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");
let remove = document.querySelector(".remove");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imageContainer = document.querySelector(".display-image");
let songNameContainer = document.querySelector(".display-song");
let artistContainer = document.querySelector(".display-artist");
let songLinkContainer = document.querySelector(".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
// let imageArray = [
// "images/thespins.jpg",
// "images/michuul.webp",
// "images/3nights.webp",
// "images/peaches.jpg",
// "images/daisies.jpg"];

// let songNameArray = [
//   "The Spins", 
//   "MICHUUL", 
//   "3 Nights", 
//   "Peaches", 
//   "Daisies"];

// let artistArray = [
//   "Mac Miller", 
//   "DUCKWRTH", 
//   "Dominic Fike", 
//   "Diljit Dosanjh", 
//   "Weston Estate"];

// let songLinkArray = [
//   "https://www.youtube.com/watch?v=LhaEXzVwNS4",
//   "https://www.youtube.com/watch?v=ABYnHjc08wI",
//   "https://www.youtube.com/watch?v=OWKzRngush4",
//   "https://www.youtube.com/watch?v=s0JTpcDu1Tk",
//   "https://www.youtube.com/watch?v=_UCGiDVxBR8"];




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let song0 = {
  name:"The Spins",
  artist:"Mac Miller", 
  image:"images/thespins.jpg",
  link:"https://www.youtube.com/watch?v=LhaEXzVwNS4"
}

let song1 = {
  name:"MICHUUL",
  artist:"DUCKWRTH", 
  image:"images/michuul.webp",
  link:"https://www.youtube.com/watch?v=ABYnHjc08wI"
}

let song2 = {
  name: "3 Nights",
  artist:"Dominic Fike", 
  image:"images/3nights.webp",
  link:"https://www.youtube.com/watch?v=OWKzRngush4"
}

let song3 = {
  name:"Peaches",
  artist:"Diljit Dosanjh", 
  image:"images/peaches.jpg",
  link:"https://www.youtube.com/watch?v=s0JTpcDu1Tk"
}

let song4 = {
  name: "Daisies",
  artist:"Weston Estate", 
  image:"images/daisies.jpg",
  link:"https://www.youtube.com/watch?v=_UCGiDVxBR8"
}

let playlist = [song0, song1, song2, song3, song4]
//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
// let image = document.querySelector(".image");
// let song = document.querySelector(".song-name");
// let artist = document.querySelector(".artist");
// let link = document.querySelector(".song-link");

// task 10: use `.push()` to add each input value to the correct array.
// imageArray.push(image.value);
// songNameArray.push(song.value);
// artistArray.push(artist.value);
// songLinkArray.push(link.value);
// }




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  imageContainer.innerHTML = "";
  songNameContainer.innerHTML = "";
  artistContainer.innerHTML = "";
  songLinkContainer.innerHTML = "";
}




function displaySongInfo() {

// // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  for(let i=0;i<imageArray.length;i++){
    let newImg = document.createElement("img");
    newImg.src = imageArray[i];
    imageContainer.appendChild(newImg);
  }
  for(let i=0;i<songLinkArray.length;i++){
      let newLink = document.createElement("a");
      newLink.href = songLinkArray[i];
      // newLink.innerHTML = `${songNameArray[i]} Link`
      newLink.innerHTML = "Link"
      songLinkContainer.appendChild(newLink);
  }
  for(let i=0;i<artistArray.length;i++){
    let newArtist = document.createElement("p");
    newArtist.innerHTML = artistArray[i];
    artistContainer.appendChild(newArtist);
  }
  for(let i=0;i<songNameArray.length;i++){
    let newName = document.createElement("p");
    newName.innerHTML = songNameArray[i];
    songNameContainer.appendChild(newName);
  }



}


function removeSongInfo(){
  imageContainer.removeChild(newImg)
  songNameContainer.removeChild(newName)
  artistContainer.removeChild(newArtist)
  songLinkContainer.removeChild(newLink)
}


// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

// remove.onclick = function() {
//   emptyDisplay();
//   addSongInfo();
//   displaySongInfo();
//   removeSongInfo();
// };

clear.onclick = function() {
  emptyDisplay();
};

// function call to display stored songs
displaySongInfo();
