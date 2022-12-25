# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.  

My Journey :

Got stuck badly on day 1 , but somehow made my way through on day 2. Finally starting to get a hang of creating clean layouts using css. It is fun seeing progress ;)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Learned css Grid solving this challenge :

```css
.container{
  display : grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
}
```

```js
let jsonData;
$.getJSON(url, function(json){
  jsonData = json;
});

$(".monthly").on("click", function(){
  console.log("monthly was clicked");
  $(".selected")[0].classList.remove("selected");
  $(".monthly")[0].classList.add("selected");
  loadData("monthly");
});
```

### Useful resources

- [css-grids](https://css-tricks.com/snippets/css/complete-guide-grid/) - excellent documentation, but was overwhelming at the start.

- [Grids-turorial](https://www.youtube.com/watch?v=BNmxUzPRYdw) - Helmed me get started quickly with css grids.


## Author

- Frontend Mentor - [@HitRock-Bottom](https://www.frontendmentor.io/profile/HitRock-Bottom)


## Acknowledgments

The solution of https://github.com/Theuz1nh0
helped me get through the card styling. I was having a hard time figuring it out. Thanks
