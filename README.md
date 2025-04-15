# Infinite-Scroll
An infinite scroll photo gallery powered by the Unsplash API.
## Description
This front-end project dynamically loads and displays random images from Unsplash. When users scroll near the bottom of the page, more images are automatically fetched and displayed.
## Tech Stack
- HTML5
- CSS3 (Flexbox, Responsive Design)
- JavaScript
- [Unsplash API](https://unsplash.com/developers)

##  Preview 
![Quote Screenshot](InfiniteScroll.gif)

##  How to Use
1. The page loads with 5 random images.
2. As the user scrolls near the bottom, 30 more images will load.
3. Images are clickable and open in a new tab.

> ⚠️ **API Key Note**:
> For security, the API key has been moved to a `config.js` file, which is not included in this repo.  
> To run the project:
> 
> 1. Create a file named `config.js`
> 2. Add this:
> ```js
> const UNSPLASH_API_KEY = 'YOUR_KEY_HERE';
> ```
> 3. Then open `index.html` in your browser.

