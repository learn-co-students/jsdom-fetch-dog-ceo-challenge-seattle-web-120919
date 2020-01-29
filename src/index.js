console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const allBreeds = []


document.addEventListener("DOMContentLoaded", function () {
    fetchAll()
    dropDown()
})

function fetchAll() {
    fetch(imgUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            // console.log(data)
            let arr = data.message
            showDogs(arr)
        })
    fetch(breedUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            for (const key in data.message) {
                showBreed(key)
            }
        })
}


function showDogs(json) {
    const imgs = document.getElementById('dog-image-container')
    json.forEach(dog => {
        const img = document.createElement('img')
        img.src = dog
        imgs.appendChild(img)
    })
}

function showBreed(breed) {
    const breeds = document.getElementById('dog-breeds')
    // console.log(json)
    const li = document.createElement('li')
    li.innerHTML = `${breed}`
    addGreyClick(li)
    allBreeds.push(breed)
    breeds.appendChild(li)
}

function addGreyClick(DOMNode) {
    DOMNode.addEventListener("click", function () {
        DOMNode.style.color = "grey";
    });
}

function dropDown() {
    const breeds = document.getElementById("dog-breeds")
    document.getElementById("breed-dropdown").addEventListener("change", function (event) {
        event.preventDefault()
        const letter = event.target.value
        const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(letter))
        breeds.innerHTML = ''
        // function showBreeds() {
        //     arr = []
        filteredBreeds.forEach(function (breed) {
            // arr.push(showBreed(breed))
            showBreed(breed)
        })
        // return arr
        // }
        // breeds.innerHTML = showBreeds()
    })
}


// function changeLiColor() {
//     document.querySelectorAll("li").forEach(function (item) {
//         console.log(typeof item)
//         item.addEventListener("click", function () {
//             item.style.color = "grey"
//         })
//     })
// }


// function fetchBooks() {
//     const books = fetch('https://anapioficeandfire.com/api/books')
//       .then(resp => resp.json())
//       .then(json => renderBooks(json));
//     return books
//   }

//   function renderBooks(json) {
//     const main = document.querySelector('main')
//     json.forEach(book => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = `<h2>${book.name}</h2>`
//       main.appendChild(h2)
//     })
//   }

//   document.addEventListener('DOMContentLoaded', function () {
//     fetchBooks()
//   })