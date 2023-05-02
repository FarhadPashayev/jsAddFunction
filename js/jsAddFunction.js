const inputValue = document.querySelector('.myInput');
const addBtn = document.querySelector('.addBtn');
const list = document.querySelector('.list');
const sumNumber = document.querySelector('.sumNumber')

addBtn.addEventListener('click', function() {
    if(inputValue.value){
      
      list.innerHTML += `<li>${inputValue.value}</li>`
    }
})

