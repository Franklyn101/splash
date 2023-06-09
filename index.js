window.onload = function() {
let count = 0;
const value = document.getElementById("value");
let minus = document.getElementById("minus")
let add = document.getElementById("add")



add.addEventListener('click',()=> {
    count++;
    value.textContent = count;
  });


    minus.addEventListener('click',()=> {
        count--;
        if(count < 0){
          count = 0
        }
        value.textContent = count;
      });
    };



   

    document.addEventListener('DOMContentLoaded', () => {
      const nextimage = document.querySelectorAll('.nextimage');
      const mainImage = document.getElementById('main-image');
      
      nextimage.forEach((nextimage) => {
        nextimage.addEventListener('click', () => {
          mainImage.src = nextimage.src;
          mainImage.classList.add('enlarged');
          
        });
      });
    });


   
    document,addEventListener('DOMContentLoaded', () => {
      

    });

    // search input


    // function search() {
    //   let input = document.querySelector('.don').value.toUpperCase()
    //   let list = document.getElementsByClassName('items')
    //       for (let i = 0; i < list.length; i++) {
    //           if (!list[i].textContent.toUpperCase().includes(input)) {
    //           list[i].style.display='none'
    //           } else {
    //               list[i].style.display='flex'
                  
    //           }
    //       }

    //   }