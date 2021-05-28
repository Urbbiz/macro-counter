// All imports
import { Footer } from './components/Footer.js';
import { Diary } from './components/Diary.js';
import { EditForm } from './components/EditForm.js';
import { Bmi } from './components/Bmi.js';;
import { AddFormValidations } from './validations/AddFormValidation.js';


const addNewButton = document.querySelector('.add-new');
const lightbox = document.querySelector('.lightbox');

const newName = document.getElementById('new-name');
const newCarb = document.getElementById('new-carb');
const newProtein = document.getElementById('new-protein');
const newFat = document.getElementById('new-fat');
const newkcal = document.getElementById('new-kcal');
const buttonCancelAdd = document.getElementById('button-cancel-add');
const buttonAdd = document.getElementById('button-add');



const errorNewName = document.getElementById("new-name-validation");




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
footer.visitorsCounter();
// Init bmi
const bmi = new Bmi;
bmi.bmiCounter();

// Init validations

const addFormValidations = new AddFormValidations;




// add events
addNewButton.addEventListener('click', () => {
    lightbox.classList.add('show'); //pridejom show css stiliu ir pasirode add forma
    lightbox.dataset.form = 'add'; // sita eilute dar labiau nurodo kuri forma nuretu buti parodyta.

})

buttonCancelAdd.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
    addFormValidations.clearValidations();
})

buttonAdd.addEventListener('click', e => {



    if (addFormValidations.addFormValidation() == true) {
        e.preventDefault()
    } else {

        diary.addMeal(newName.value, newCarb.value, newProtein.value, newFat.value, newkcal.value, );
        diary.clearAddForm();
        lightbox.classList.remove('show');

        addFormValidations.clearValidations();
    }

})

addEventListener('keyup', ({ key }) => { //spaudzian escape visada uzdarys forma

    if (key === 'Escape') {
        lightbox.classList.remove('show');
        formValidations.clearValidations();
    }

});

//hamburger events 

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// });
//Hamburger
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navbarLinks.classList.toggle('active')
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navbarLinks.classList.toggle('active')
    }
});