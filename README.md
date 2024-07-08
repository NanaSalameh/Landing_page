# Landing page


> **Note**: This page was developed by adding a navbar and adding an action to it using JavaScript


The project title is a level 1 heading (`<h1>Landing page</h1>`) .

I added several links to Navbar, and when you click on one of the links, it goes to a specific part of the page..

And also create a function using JavaScript to change the color of the link that was clicked and return to its original color when clicking on another link.

I also used a simple feature to change the background of the navbar when it is not in a standing state


# Table of Contents


- [lnding page](#landing-page)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [License](#license)

# Installation
[(Back to top)](#table-of-contents)



I also used a simple feature to change the background of the navbar when it is not in a standing state


```shell
document.addEventListener('scroll',()=>{
 header=document.querySelector('nav');
if(window.scrollY>0){
  header.classList.add('scrolled');

}else{
header.classList.remove('scrolled');

}

})


```
# License
[(Back to top)](#table-of-contents)


[MIT ](./LICENSE)






