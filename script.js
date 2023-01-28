// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.

 
// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imageContainer = document.querySelector(".display-image");
let songNameContainer = document.querySelector(".display-song");
let artistContainer = document.querySelector(".display-artist");
let songLinkContainer = document.querySelector(".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let imageArray = [
"https://t2.genius.com/unsafe/560x560/https%3A%2F%2Fimages.genius.com%2Fa8de6b36ccc06b0e9096884115bfea8c.1000x1000x1.jpg",
"https://media.pitchfork.com/photos/5a0310c5cb62e049ecd34374/1:1/w_320,c_limit/duckwrth%20cover.jpg",
"https://media.pitchfork.com/photos/5bcf8534e5dd5125e7f6bbff/1:1/w_320,c_limit/dominicfikedemos.jpg",
"https://upload.wikimedia.org/wikipedia/en/b/bb/Goat_Diljit.jpg",
"https://yt3.googleusercontent.com/K8t03vUtV7O3P7tADBtfkooGuuhjd9gI8gG8U3W8Lv8IxljGzsiXwdgH2W3Qs5rV9Ved2fPO=s176-c-k-c0x00ffffff-no-rj"];

let songNameArray = [
  "The Spins", 
  "MICHUUL", 
  "3 Nights", 
  "Peaches", 
  "Daisies"];

let artistArray = [
  "Mac Miller", 
  "DUCKWRTH", 
  "Dominic Fike", 
  "Diljit Dosanjh", 
  "Weston Estate"];

let songLinkArray = [
  "https://www.youtube.com/watch?v=LhaEXzVwNS4",
  "https://www.youtube.com/watch?v=ABYnHjc08wI",
  "https://www.youtube.com/watch?v=OWKzRngush4",
  "https://www.youtube.com/watch?v=s0JTpcDu1Tk",
  "https://www.youtube.com/watch?v=_UCGiDVxBR8"];




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  for(let i=0;i<imageArray.length;i++){
    let newImg = document.createElement("img");
    newImg.src = imageArray[i];
    imageContainer.appendChild(newImg);
  }
  for(let i=0;i<songNameArray.length;i++){
    for(let j=0;i<songLinkArray.length;j++){
      let newName = document.createElement("p");
      newName.innerHTML = songNameArray[i];
      songNameContainer.appendChild(newName);
      let newLink = document.createElement("a");
      newLink.href = songLinkArray[j];
      newLink.innerHTML = `${songNameArray[i]} Link`
      songLinkContainer.appendChild(newLink);
    }
  }
  for(let i=0;i<artistArray.length;i++){
    let newArtist = document.createElement("p");
    newArtist.innerHTML = artistArray[i];
    artistContainer.appendChild(newArtist);
  }



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
