// All imports
import { Footer } from './components/Footer.js';
import { Diary } from './components/Diary.js';
import { EditForm } from './components/EditForm.js';




//Hamburger

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


const addNewButton = document.querySelector('.add-new');
const lightbox = document.querySelector('.lightbox');

const newName = document.getElementById('new-name');
const newCarb = document.getElementById('new-carb');
const newProtein = document.getElementById('new-protein');
const newFat = document.getElementById('new-fat');
const newkcal = document.getElementById('new-kcal');
const buttonCancelAdd = document.getElementById('button-cancel-add');
const buttonAdd = document.getElementById('button-add');




// Init objects
const diary = new Diary({
    selector: 'main'
});
diary.init();
//   Init edit form
const editForm = new EditForm({
    selector: 'form.update',
    diaryObject: diary
});
editForm.init();

diary.editForm = editForm;

// Init footer
const footer = new Footer;
footer.yearChanger();



// add events
addNewButton.addEventListener('click', () => {
    lightbox.classList.add('show'); //pridejom show css stiliu ir pasirode add forma
    lightbox.dataset.form = 'add'; // sita eilute dar labiau nurodo kuri forma nuretu buti parodyta.
})

buttonCancelAdd.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
})

buttonAdd.addEventListener('click', e => {
    e.preventDefault();
    // const meal = {
    //     id: ++diary.lastCreatedMealId,
    //     name: newName.value,
    //     carb: newCarb.value,
    //     protein: newProtein.value,
    //     fat: newFat.value,
    //     kcal: newkcal.value,
    // }
    diary.addMeal(newName.value, newCarb.value, newProtein.value, newFat.value, newkcal.value, );
    diary.clearAddForm();
    lightbox.classList.remove('show');

    // console.log('add suveike');
})

addEventListener('keyup', ({ key }) => { //spaudzian escape visada uzdarys forma

    if (key === 'Escape') {
        lightbox.classList.remove('show');
    }

});

//hamburger events 

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});



//Footer Year changer
// const year = new Date().getFullYear();
// const date = `<p>${year}: &copy;</p>
// <a href="https://www.linkedin.com/in/andrius-urbonas-45b1a433/" target="blank">
//     <img class="img" src="./img/footer/logo.png" alt="logo">`;
// document.getElementById('date-js').innerHTML = date;

//Footer visitors counter