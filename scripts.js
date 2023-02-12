//  open and close menu when click on icon

const header = document.querySelector('#header')
const openClose = document.querySelectorAll('.openClose')

for (const element of openClose) {
    element.addEventListener('click', function() {
        header.classList.toggle('show')
    })
}
 
// close menu when clock on a list item 

const list = document.querySelectorAll('.list')

for (const li of list){
    li.addEventListener('click', function () {
        header.classList.remove('show')
    })
}


