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

    addMeal(meal) {

        this.diaryMeals.push(meal);
        this.renderDiaryMeals();
        return true;



    }
    generateMealItem(meal) {

        return `<div class="col-4 col-sm-6 col-xs-12 list">
        <div class="block item ">
            <h3>name:  ${meal.text}</h3>
            <p> carb ${meal.newCarb} g. </p>
            <p> protein g. </p>
            <p> fat g. </p>
            <p> kcal. </p>
            <div class="actions ">
                <button class="btn small edit" type="button">Edit</button>
                <button class="btn small remove" type="button">Delete</button>
            </div>
        </div>
    </div>`

    }
    renderDiaryMeals() {
        let HTML = '';
        for (let item of this.diaryMeals) {
            HTML += this.generateMealItem(item);
        }
        this.DOM.innerHTML = HTML;

    }

    updateMeal() {

    }

    deleteMeal() {

    }

}

export { Diary }