class EditFormValidations {

    clearEditFormValidations() {
        const validationElements = document.querySelectorAll("[id$=validation]");
        validationElements.forEach(messages => messages.innerHTML = "");
    }

    editFormValidation() {
        const editName = document.getElementById('edit-name');
        const editCarb = document.getElementById('edit-carb');
        const editProtein = document.getElementById('edit-protein');
        const editFat = document.getElementById('edit-fat');
        const editKcal = document.getElementById('edit-kcal');
        const errorEditName = document.getElementById("edit-name-validation");
        const errorEditCarb = document.getElementById("edit-carb-validation");
        const errorEditProtein = document.getElementById("edit-protein-validation");
        const errorEditFat = document.getElementById("edit-fat-validation");
        const errorEditKcal = document.getElementById("edit-kcal-validation");

        let messagesEditName = [];
        let messagesEditCarb = [];
        let messagesEditProtein = [];
        let messagesEditFat = [];
        let messagesEditKcal = [];

        // NAME
        if (editName.value === '' || editName === null) {
            messagesEditName.push('Name is required');
        }
        if (editName.value.length >= 40) {
            messagesEditName.push('Name cannot be longer than 40 characters');
        }
        if (editName.value.length <= 2) {
            messagesEditName.push('Name cannot be shorter than 2 characters');
        }

        // CARB 

        if (editCarb.value === '' || editCarb === null) {
            messagesEditCarb.push('Carb is required');
        }
        if (editCarb.value.length >= 8) {
            messagesEditCarb.push('Carb cannot be longer than 7 characters');
        }
        if (isNaN(editCarb.value)) {
            messagesEditCarb.push('Only numeric input');
        }

        // PROTEIN

        if (editProtein.value === '' || editProtein === null) {
            messagesEditProtein.push('Protein is required');
        }
        if (editProtein.value.length >= 8) {
            messagesEditProtein.push('Protein cannot be longer than 7 characters');
        }
        if (isNaN(editProtein.value)) {
            messagesEditProtein.push('Only numeric input');
        }
        if (editProtein.value < 0) {
            messagesEditProtein.push('Please provide positive number');
        }

        // FAT

        if (editFat.value === '' || editFat === null) {
            messagesEditFat.push('Fat is required');
        }
        if (editFat.value.length >= 8) {
            messagesEditFat.push('Fat cannot be longer than 7 characters');
        }
        if (isNaN(editFat.value)) {
            messagesEditFat.push('Only numeric input');
        }
        if (editFat.value < 0) {
            messagesEditFat.push('Please provide positive number');
        }


        // KCAL

        if (editKcal.value === '' || editKcal === null) {
            messagesEditKcal.push('Kcal is required');
        }
        if (editKcal.value.length >= 10) {
            messagesEditKcal.push('Kcal cannot be longer than 10 characters');
        }
        if (isNaN(editKcal.value)) {
            messagesEditKcal.push('Only numeric input');
        }
        if (editKcal.value < 0) {
            messagesEditKcal.push('Please provide positive number');
        }
        if (editKcal.value != parseInt(editKcal.value)) {
            messagesEditKcal.push('Please provide integer');
        }


        if (messagesEditName.length > 0 || messagesEditCarb.length > 0 || messagesEditProtein.length > 0 || messagesEditFat.length > 0 || messagesEditKcal.length > 0) {

            // e.preventDefault();
            errorEditName.innerText = messagesEditName.join(', ');
            errorEditCarb.innerText = messagesEditCarb.join(', ');
            errorEditProtein.innerText = messagesEditProtein.join(', ');
            errorEditFat.innerText = messagesEditFat.join(', ');
            errorEditKcal.innerText = messagesEditKcal.join(', ');
            return true;

        }

    }


}

export { EditFormValidations }