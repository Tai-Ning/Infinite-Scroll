const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
let photosArray = []
let ready = false
let imagesLoaded = 0
let totalImage =0

// Unsplash API
let count = 5
const apiKey= UNSPLASH_API_KEY
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&topics=film`

//Check if all images were loaded
function imageLoaded() {
    imagesLoaded++
    if(imagesLoaded === totalImage) {
        ready = true
        count = 30
        loader.hidden = true
    }
}

//Set Attributes on DOM Elements
function setAttribute(element,attributes) {
    for(const key in attributes) {
        element.setAttribute(key,attributes[key])
    }
}

// Create Element For Links & Photos and Add to DOM
function displayPhotos(){
    imagesLoaded = 0
    totalImage = photosArray.length
    photosArray.forEach( photo => {
        const item = document.createElement('a')
        setAttribute(item , {
            href:photo.links.html,
            target:'_blank'
        })
        // item.setAttribute('href',photo.links.html)
        // item.setAttribute('target','_blank')
        const image = document.createElement('img')
        setAttribute(image , {
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })
        // image.setAttribute('src',photo.urls.regular)
        // image.setAttribute('alt',photo.alt_description)
        // image.setAttribute('title',photo.alt_description)

        // Check each image is finished loading
        image.addEventListener('load',imageLoaded)

        item.appendChild(image)
        imageContainer.appendChild(item)
    })
}

// Get phones from Unsplash API
// Everytime call getPhones(),photesArray will be covered by new api images data
async function getPhones() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch(error) {
        console.log('Fail to get phones',error)
    }
}

//If scrolling near bottom of page,Load more photos
window.addEventListener('scroll',() => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false
        getPhones()
    }
})

//On Load
getPhones()


