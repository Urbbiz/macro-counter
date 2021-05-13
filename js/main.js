// All imports
import { Diary } from './components/Diary.js';


// run

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

// add events


addNewButton.addEventListener('click', () => {
    lightbox.classList.add('show'); //pridejom show css stiliu ir pasirode add forma
})

buttonCancelAdd.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
})

buttonAdd.addEventListener('click', e => {
    e.preventDefault();
    diary.addMeal(newName.value)
        // const meal = {
        //     Name: newName.value,
        //     Carb: newCarb.value,
        // }
        // diary.addMeal(meal);


    console.log('add suveike');
})

addEventListener('keyup', ({ key }) => { //spaudzian escape visada uzdarys forma

    if (key === 'Escape') {
        lightbox.classList.remove('show');
    }

});


console.log(diary);