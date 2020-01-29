console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then(function(response) {
  return response.json();
}).then(function(data){
    // Use this data inside of `json` to do DOM manipulation
        let arr = data.message;
        addImages(arr);
    })

function addImages(img_arr) {
    const dog_images_container = document.getElementById("dog-image-container");
    let len = img_arr.length;

    for(let i = 0; i < len; i++) {
        var img = document.createElement('img');
        img.src = img_arr[i]; 
        dog_images_container.appendChild(img);
    }
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


fetch(breedUrl).then(function(response) {
    return response.json();
  }).then(function(data){
      // Use this data inside of `json` to do DOM manipulation
        console.log(Object.keys(data.message));
        let arr = Object.keys(data.message);
        get_breed(arr);
      })

function get_breed(breed_arr) {
    const dog_breed_contianer =document.getElementById("dog-breeds");
    let len = breed_arr.length
    for(let i = 0; i < len; i++) {
        let li = document.createElement('li');
        li.innerHTML = breed_arr[i];
        addColorOnClick(li);
        dog_breed_contianer.appendChild(li);
    }
}


function addColorOnClick(DOMnode) {
    DOMnode.addEventListener("click", function() {
        DOMnode.style.color = "red";
    });
}
document.addEventListener("DOMContentLoaded", function() {
    addEventListener();
});



function addEventListener() {
    document.getElementById("breed-dropdown").addEventListener("change", function(selected) {
        filterBreeds(selected.target.value);
    });

}

function filterBreeds(letter) {

    fetch(breedUrl).then(function(response) {
        return response.json();
      }).then(function(data){
          // Use this data inside of `json` to do DOM manipulation
          console.log(letter);
            // console.log(Object.keys(data.message));
            let arr = Object.keys(data.message);
            getBreedByLetter(arr, letter);
          })
}

function getBreedByLetter(arr, letter) {
    removeBreed();
    let filter = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        if(arr[i].charAt(0) === letter) {
            filter.push(arr[i]);
        }
    }
    get_breed(filter);
    console.log(filter);
}

function removeBreed() {
    let ul = document.querySelector('#dog-breeds');
    let child = ul.lastElementChild;

    while(child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }
}