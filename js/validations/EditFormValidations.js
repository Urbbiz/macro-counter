class EditFormValidations {

    clearEditFormValidations() {
        const validationElements = document.querySelectorAll("[id$=validation]");
        validationElements.forEach(messages => messages.innerHTML = "");
    }




}

export { EditFormValidations }