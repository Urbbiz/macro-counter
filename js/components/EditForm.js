class EditForm {
    constructor(params) {
        this.selector = params.selector;
        this.diaryObject = params.diaryObject;

        this.DOM = null;
        this.lightbox = null;
        this.updateName = null;
        this.updateCarb = null;
        this.updateProtein = null;
        this.updateFat = null;
        this.updateKcal = null;
        this.buttonCancelUpdate = null;
        this.buttonUpdate = null;

    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.findInnerElements();
        this.addEvents();
        console.log(this);
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    findInnerElements() {
        // this.lightbox = document.querySelector('.lightbox');
        this.lightbox = this.DOM.closest('.lightbox');

        this.updateName = document.getElementById('edit-name');
        this.updateCarb = document.getElementById('edit-carb');
        this.updateProtein = document.getElementById('edit-protein');
        this.updateFat = document.getElementById('edit-fat');
        this.updateKcal = document.getElementById('edit-kcal');
        this.buttonCancelUpdate = document.getElementById('button-cancel-update');
        this.buttonUpdate = document.getElementById('button-update');
    }

    show(mealIndex) {
        console.log('Gavau:', mealIndex);
        this.lightbox.dataset.form = 'update';
        this.lightbox.classList.add('show');

        this.updateName.value = this.diaryObject.diaryMeals[mealIndex].name;
        this.updateCarb.value = this.diaryObject.diaryMeals[mealIndex].carb;
        this.updateProtein.value = this.diaryObject.diaryMeals[mealIndex].protein;
        this.updateFat.value = this.diaryObject.diaryMeals[mealIndex].fat;
        this.updateKcal.value = this.diaryObject.diaryMeals[mealIndex].kcal;
    }
    hide() {
        this.lightbox.classList.remove('show');
    }

    addEvents() {
        this.buttonCancelUpdate.addEventListener('click', e => {
            e.preventDefault();
            this.hide();
        });

        this.buttonUpdate.addEventListener('click', e => {
            e.preventDefault();
            this.hide();
            console.log(this.diaryObject);
        })
    }
}
export { EditForm };