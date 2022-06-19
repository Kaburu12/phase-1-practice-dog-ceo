console.log('%c HI', 'color: firebrick')
//adding eventListner to the DOM
document.addEventListener("DOMContentLoaded", () => {
	fetchedImages();
	fetchedDogBreeds();
	filterDogBreeds()
	let heading = document.querySelector("h1");
	heading.style.marginLeft = "25px";

})

//A function that represents the images fetched & appended images
function fetchedImages() {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
	fetch(imgUrl)
		.then((res) => res.json())
		.then((imagesData) => {
			let dogImage = imagesData.message
	 
			dogImage.forEach(dogImage=> {
				let dogContainer = document.getElementById("dog-image-container")
				let images = document.createElement('img')
				images.src = dogImage
				images.style.height = 'auto'
				images.style.width = '25%'
				images.style.padding = '12px'
				dogContainer.style.display = 'flex'
				dogContainer.style.margin = "20px"
				dogContainer.appendChild(images)
			})
		})
};

//fetching the dog breeds
function fetchedDogBreeds() {

	const breedUrl = 'https://dog.ceo/api/breeds/list/all'
	fetch(breedUrl)
		.then((res) => res.json())
		.then((breedsData) => {
			let dogBreedList = breedsData.message

			for (const dogBreed in dogBreedList) {
				let ul = document.querySelector('#dog-breeds')
				let li = document.createElement('li')
				li.textContent = dogBreed
				ul.appendChild(li)
 //when a user clicks the li changes color
				li.addEventListener("click", () => {
					li.style.color = "blue"
				})
			}
		})
	   
	   }

//filtering the dog breeds using a drop down
function filterDogBreeds() {
	let dropDown = document.querySelector("select");
	dropDown.addEventListener('click', () => {
		
		let letter = dropDown.value
		let div = document.createElement('div')
		let body = document.querySelector('body')
		document.body.appendChild(div)
		for (const dogBreed in dogBreedList) {
			if (letter === 'a') {
				if (dogBreed.charAt(0) === 'a') {
					let filterA = document.createElement('li')
					filterA.textContent = dogBreed
				return	div.appendChild(filterA)
				}
			}
			
			else if (letter === 'b') {
				if (dogBreed.charAt(0) === 'b') {
					let filterB = document.createElement('li')
					filterB.textContent = dogBreed
				return	div.appendChild(filterB)
				}
			}
			
			else if (letter === 'c') {
				if (dogBreed.charAt(0) === 'c') {
					let filterC = document.createElement('li')
					filterC.textContent = dogBreed
				return	div.appendChild(filterC)
				}
			}
			
	    	else if (letter === 'd') {
				if (dogBreed.charAt(0) === 'd') {
					let filterD = document.createElement('li')
					filterD.textContent = dogBreed
				return	div.appendChild(filterD)
				}
            }
		}
	})

}

