class Diary {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;

        this.diaryMeals = []; //tuscias meals arejus

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

        this.diaryMeals.push(meal);
        this.renderDiaryMeals();
        return true;



    }
    generateMealItem(meal) {

        return `<div class="col-4 col-sm-6 col-xs-12 list">
        <div class="block item ">
            <h3>  ${meal.name}</h3>
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
    updateMeal() {

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
                this.initDiaryMealEditing(meal);
                console.log('bla bla');

            });

            removeBtn.addEventListener('click', () => {
                this.deleteMeal(i);
                console.log('bla bla');
            });

        }
    };
    initDiaryMealEditing(itemDOM) {
        console.log('inicijuojamas TODO redagavimas');
    }

}

export { Diary }