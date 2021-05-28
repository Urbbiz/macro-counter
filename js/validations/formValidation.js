class FormValidations {




    clearValidations() {
        const validationElements = document.querySelectorAll("[id$=validation]");
        validationElements.forEach(messages => messages.innerHTML = "");
    }

    nameValidation() {
        const newName = document.getElementById('new-name');
        const newCarb = document.getElementById('new-carb');
        const errorNewName = document.getElementById("new-name-validation");
        const errorNewCarb = document.getElementById("new-carb-validation");
        let messagesName = [];
        let messagesCarb = [];
        // NAME
        if (newName.value === '' || newName === null) {
            messagesName.push('Name is required');
        }
        if (newName.value.length >= 40) {
            messagesName.push('Name cannot be longer than 40 characters');
        }
        // if (messages.length > 0) {

        //     // e.preventDefault();
        //     errorNewName.innerText = messages.join(', ')
        //     return true;

        // }

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
        if (messagesName.length > 0 || messagesCarb.length > 0) {

            // e.preventDefault();
            errorNewName.innerText = messagesName.join(', ');
            errorNewCarb.innerText = messagesCarb.join(', ');
            return true;

        }
        // if (messagesCarb.length > 0) {

        //     // e.preventDefault();
        //     errorNewCarb.innerText = messagesCarb.join(', ');

        //     return true;

        // }
    }
}

export { FormValidations }