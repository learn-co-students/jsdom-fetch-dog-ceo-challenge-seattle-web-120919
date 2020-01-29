console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  // Use this data inside of `json` to do DOM manipulation
  img_arr = json.message;
  console.log(json);
  addImages(img_arr);
})

function addImages(data) {
        const dog_images = document.getElementById("dog-image-container");
        let len = dog_images.length

        for (let i = 0; i < len; i++) {
          let img = document.createElement('img')
          img.src = img_arr[i]
        dog_images.appendChild(img)
    }
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  // Use this data inside of `json` to do DOM manipulation
  console.log(Object.keys(json.message));
  let arr = Object.keys(json.message);
  breedList(arr)
})

function breedList(breed_arr) {
    const dog_breed = document.getElementById('dog-breeds');
    let len = breed_arr.length

    for (let i = 0; i < len; i++) {
        let li = document.createElement('li')
        li.innerHTML = breed_arr[i];
        addGreyClick(li);

        dog_breed.appendChild(li)
    }
}

// document.querySelectorAll('li').forEach(function(node) {
// addGreyClick(node);
// });

function addGreyClick(DOMNode) {
    DOMNode.addEventListener("click", function() {
      DOMNode.style.color = "grey";
    });
  }

function breedListener() {
    let dropdown = document.querySelector("breed-dropdown");
    dropdown.addEventListener('change', function(event) {
      filterBreed(event.target.value);
    });
}

function filterBreed(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }