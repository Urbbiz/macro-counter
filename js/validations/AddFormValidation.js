class AddFormValidations {




    clearValidations() {
        const validationElements = document.querySelectorAll("[id$=validation]");
        validationElements.forEach(messages => messages.innerHTML = "");
    }

    addFormValidation() {
        const newName = document.getElementById('new-name');
        const newCarb = document.getElementById('new-carb');
        const newProtein = document.getElementById('new-protein');
        const newFat = document.getElementById('new-fat');
        const newKcal = document.getElementById('new-kcal');
        const errorNewName = document.getElementById("new-name-validation");
        const errorNewCarb = document.getElementById("new-carb-validation");
        const errorNewProtein = document.getElementById("new-protein-validation");
        const errorNewFat = document.getElementById("new-fat-validation");
        const errorNewKcal = document.getElementById("new-kcal-validation");

        let messagesName = [];
        let messagesCarb = [];
        let messagesProtein = [];
        let messagesFat = [];
        let messagesKcal = [];

        // NAME
        if (newName.value === '' || newName === null) {
            messagesName.push('Name is required');
        }
        if (newName.value.length >= 40) {
            messagesName.push('Name cannot be longer than 40 characters');
        }
        if (newName.value.length <= 2) {
            messagesName.push('Name cannot be shorter than 2 characters');
        }

        // CARB 

        if (newCarb.value === '' || newName === null) {
            messagesCarb.push('Carb is required');
        }
        if (newCarb.value.length >= 8) {
            messagesCarb.push('Carb cannot be longer than 7 characters');
        }
        if (isNaN(newCarb.value)) {
            messagesCarb.push('Only numeric input');
        }

        // PROTEIN

        if (newProtein.value === '' || newProtein === null) {
            messagesProtein.push('Protein is required');
        }
        if (newProtein.value.length >= 8) {
            messagesProtein.push('Protein cannot be longer than 7 characters');
        }
        if (isNaN(newProtein.value)) {
            messagesProtein.push('Only numeric input');
        }
        if (newProtein.value < 0) {
            messagesProtein.push('Please provide positive number');
        }

        // FAT

        if (newFat.value === '' || newFat === null) {
            messagesFat.push('Fat is required');
        }
        if (newFat.value.length >= 8) {
            messagesFat.push('Fat cannot be longer than 7 characters');
        }
        if (isNaN(newFat.value)) {
            messagesFat.push('Only numeric input');
        }
        if (newFat.value < 0) {
            messagesFat.push('Please provide positive number');
        }


        // KCAL

        if (newKcal.value === '' || newKcal === null) {
            messagesKcal.push('Kcal is required');
        }
        if (newKcal.value.length >= 10) {
            messagesKcal.push('Kcal cannot be longer than 10 characters');
        }
        if (isNaN(newKcal.value)) {
            messagesKcal.push('Only numeric input');
        }
        if (newKcal.value < 0) {
            messagesKcal.push('Please provide positive number');
        }
        if (newKcal.value != parseInt(newKcal.value)) {
            messagesKcal.push('Please provide integer');
        }


        if (messagesName.length > 0 || messagesCarb.length > 0 || messagesProtein.length > 0 || messagesFat.length > 0 || messagesKcal.length > 0) {

            // e.preventDefault();
            errorNewName.innerText = messagesName.join(', ');
            errorNewCarb.innerText = messagesCarb.join(', ');
            errorNewProtein.innerText = messagesProtein.join(', ');
            errorNewFat.innerText = messagesFat.join(', ');
            errorNewKcal.innerText = messagesKcal.join(', ');
            return true;

        }

    }
}

export { AddFormValidations }