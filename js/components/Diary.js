// import { EditForm } from "./EditForm.js";

class Diary {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;

        this.diaryMeals = []; //tuscias meals arejus

        this.editForm = null;
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.updateStyle();


    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    updateStyle() { // jeigu nera main elemente class list, tuomet ja prides si funkcija
        if (!this.DOM.classList.contains('list')) {
            this.DOM.classList.add('list')
        }
    }

    // CRUD: create 
    addMeal(meal) {
        console.log(meal);
        this.diaryMeals.push(meal);
        this.renderDiaryMeals();

        localStorage.setItem(this.diaryMeals.length, JSON.stringify(meal));
        return true;



    }
    generateMealItem(meal) {

        return `<div class="col-4 col-sm-6 col-xs-12 list">
        <div class="block item ">
            <h3>${meal.name}</h3>
            <p> carb ${meal.carb} g. </p>
            <p> protein ${meal.protein} g. </p>
            <p> fat ${meal.fat} g. </p>
            <p> kcal. ${meal.kcal} </p>
            <div class="actions ">
                <button class="btn small edit"  type="button">Edit</button>
                <button class="btn small remove" id = "trintukas" type="button">Delete</button>
            </div>
        </div>
    </div>`

    }

    // CRUD: read
    renderDiaryMeals() {
        let HTML = '';
        for (let item of this.diaryMeals) {
            HTML += this.generateMealItem(item);
        }
        this.DOM.innerHTML = HTML;
        this.addEvents();

    }


    // CRUD: update
    updateMeal(mealIndex, newText, newCarb, newProtein, newFat, newkcal) {
        this.diaryMeals[mealIndex].name = newText;
        this.diaryMeals[mealIndex].carb = newCarb;
        this.diaryMeals[mealIndex].protein = newProtein;
        this.diaryMeals[mealIndex].fat = newFat;
        this.diaryMeals[mealIndex].kcal = newkcal;
        this.renderDiaryMeals();
        // console.log('New Text:', newText);

    }

    // CRUD: delete
    deleteMeal(mealIndex) {
        this.diaryMeals = this.diaryMeals.filter((meal, index) => index !== mealIndex) // paliekam tuos indexus kurie nesutampa, o kurie sutampa istrinam
        this.renderDiaryMeals();

    }


    clearAddForm() {
        document.getElementById("new-name").value = "";
        document.getElementById("new-carb").value = "";
        document.getElementById("new-protein").value = "";
        document.getElementById("new-fat").value = "";
        document.getElementById("new-kcal").value = "";
    }

    addEvents() {
        const meals = this.DOM.querySelectorAll('.item');

        for (let i = 0; i < meals.length; i++) {
            const meal = meals[i];
            const editBtn = meal.querySelector('.btn.small.edit');
            const removeBtn = meal.querySelector('.btn.small.remove');

            editBtn.addEventListener('click', () => {
                this.editForm.show(i);
                // console.log('bla bla');
            });
            removeBtn.addEventListener('click', () => {
                this.deleteMeal(i);
                // console.log('bla bla');
            });
        }
    };
    // initDiaryMealEditing(mealIndex) {
    //     const meal = this.diaryMeals[mealIndex];

    //     console.log('inicijuojamas TODO redagavimas');

    //     const lightbox = document.querySelector('.lightbox');
    //     const updateName = document.getElementById('edit-name');
    //     const updateCarb = document.getElementById('edit-carb');
    //     const updateProtein = document.getElementById('edit-protein');
    //     const updateFat = document.getElementById('edit-fat');
    //     const updateKcal = document.getElementById('edit-kcal');
    //     const buttonCancelUpdate = document.getElementById('button-cancel-update');
    //     const buttonUpdate = document.getElementById('button-update');

    //     lightbox.dataset.form = 'update'; // nurodo kuria butent forma parodyti.

    //     updateName.value = meal.name;
    //     updateCarb.value = meal.carb;
    //     updateProtein.value = meal.protein;
    //     updateFat.value = meal.fat;
    //     updateKcal.value = meal.kcal;

    //     lightbox.classList.add('show');

    //     buttonCancelUpdate.addEventListener('click', e => {
    //         e.preventDefault();
    //         lightbox.classList.remove('show');
    //     })

    //     buttonUpdate.addEventListener('click', e => {
    //         e.preventDefault();

    //         this.diaryMeals[mealIndex].name = updateName.value;
    //         this.diaryMeals[mealIndex].carb = updateCarb.value;
    //         this.diaryMeals[mealIndex].protein = updateProtein.value;
    //         this.diaryMeals[mealIndex].fat = updateFat.value;
    //         this.diaryMeals[mealIndex].kcal = updateKcal.value;

    //         lightbox.classList.remove('show');
    //         this.renderDiaryMeals();
    //     })

    // }

}

export { Diary }