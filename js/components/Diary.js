class Diary {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;

        this.diaryMeals = []; //tuscias meals arejus
        this.lastCreatedMealId = 0;

        this.editForm = null;
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.updateStyle();
        this.getInfoFromLocalStorage();
        this.renderDiaryMeals();


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
    addMeal(name, carb, protein, fat, kcal) {
        const meal = {
            id: ++this.lastCreatedMealId,
            name: name,
            carb: +carb,
            protein: +protein,
            fat: +fat,
            kcal: +kcal,
        }

        this.diaryMeals.push(meal);
        this.renderDiaryMeals();

        localStorage.setItem(meal.id, JSON.stringify(meal));
        localStorage.setItem('last-id', this.lastCreatedMealId);
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
        document.getElementById("total-carbs").innerHTML = this.totalCarbs();
        document.getElementById("total-protein").innerHTML = this.totalProtein();
        document.getElementById("total-fat").innerHTML = this.totalFat();
        document.getElementById("total-kcal").innerHTML = this.totalKcal();

    }


    // CRUD: update
    updateMeal(mealIndex, newText, newCarb, newProtein, newFat, newkcal) {
        this.diaryMeals[mealIndex].name = newText;
        this.diaryMeals[mealIndex].carb = +newCarb;
        this.diaryMeals[mealIndex].protein = +newProtein;
        this.diaryMeals[mealIndex].fat = +newFat;
        this.diaryMeals[mealIndex].kcal = +newkcal;
        this.renderDiaryMeals();
        // console.log('New Text:', newText);

        const meal = this.diaryMeals[mealIndex];

        localStorage.setItem(meal.id, JSON.stringify(meal));

    }

    // CRUD: delete
    deleteMeal(mealIndex) {

        if (confirm("Are you sure?")) {
            localStorage.removeItem(this.diaryMeals[mealIndex].id);
            this.diaryMeals = this.diaryMeals.filter((meal, index) => index !== mealIndex) // paliekam tuos indexus kurie nesutampa, o kurie sutampa istrinam
            this.renderDiaryMeals();
        }
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

    getInfoFromLocalStorage() {

        const keys = Object.keys(localStorage).sort();

        for (let key of keys) {
            const meal = localStorage.getItem(key);
            const obj = JSON.parse(meal);
            if (key == 'last-id') {
                this.lastCreatedMealId = obj
            } else {
                this.diaryMeals.push(obj);
            }

        }

        console.log(this.diaryMeals);
    }

    totalCarbs() {
        return this.diaryMeals.reduce((currentTotal, CurrentMeal) => currentTotal + CurrentMeal.carb, 0);
    };
    totalProtein() {
        return this.diaryMeals.reduce((currentTotal, CurrentMeal) => currentTotal + CurrentMeal.protein, 0);
    };
    totalFat() {
        return this.diaryMeals.reduce((currentTotal, CurrentMeal) => currentTotal + CurrentMeal.fat, 0);
    };
    totalKcal() {
        return this.diaryMeals.reduce((currentTotal, CurrentMeal) => currentTotal + CurrentMeal.kcal, 0);
    };

}

export { Diary }