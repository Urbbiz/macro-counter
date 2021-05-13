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


    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    addMeal(meal) {
        this.diaryMeals.push(meal);
        this.renderDiaryMeals();
        return true;



    }
    generateMealItem() {

        return `<div class="col-4 col-sm-6 col-xs-12">
        <div class="block item ">
            <h3>name </h3>
            <p> carb g. </p>
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