let listElements = document.querySelectorAll('.sublist__wrapper')
let subLists = document.querySelectorAll('.sublist__container')
let burger = document.querySelector('.header__burger')


listElements.forEach((element, index) => {
    let listClickCounter = 0
    element.addEventListener('click', ()=> {
        listClickCounter++
        if (listClickCounter % 2 == 1) {
            subLists[index].style.maxHeight = subLists[index].scrollHeight + "px";
            element.classList.add('opened')
        }
        else {
            subLists[index].style.maxHeight = null;
            element.classList.remove('opened');
        }
    })
});

burger.addEventListener('click', ()=> {
    document.querySelector('body').classList.toggle('active')
})