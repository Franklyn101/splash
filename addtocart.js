document.addEventListener('DOMContentLoaded', () => {
    let addToCartButton = document.querySelectorAll('#addToCartButton');
    let counterContainer = document.querySelectorAll('#counterContainer');
    let minusButton = document.getElementById('minusButton');
    let plusButton = document.getElementById('plusButton');
    let counter = document.getElementById('counter');
    
   addToCartButton.forEach(addToCartButtons=>{
    addToCartButtons.addEventListener('click', () => {
        addToCartButtons.innerHTML = `
        <section id="counterContainer" class="quantity">
        <button id="minusButton"><img  src="cartshop/minus.png" alt=""></button>
        <p id="counter">0</p>
        <button id="plusButton"><img  src="cartshop/plus.png" alt=""></button>
       </section>
        `
        addToCartButtons.style.border = 'none'
    });
   })

    
   
    minusButton.addEventListener('click', () => {
      let count = parseInt(counter.innerText);
      if (count > 0) {
        count--;
        counter.innerText = count;
      }
      if (count === 0) {
        counterContainer.style.display = 'none';
        addToCartButton.style.display = 'block';
      }
    });
    

    plusButton.addEventListener('click', () => {
      let count = parseInt(counter.innerText);
      count++;
      counter.innerText = count;
    });
    });
    
    