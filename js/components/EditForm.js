class EditForm {
    constructor(params) {
        this.selector = params.selector;

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

    show() {
        this.lightbox.dataset.form = 'update';
        this.lightbox.classList.add('show');
    }
    hide() {

        this.lightbox.classList.remove('show');
    }
}
export { EditForm };