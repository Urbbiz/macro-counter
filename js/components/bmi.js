let gender = 'male';
height = 50;

document.querySelector('.calculate .gender .male').onclick = function() {
    gender = 'male';
    this.classList.add('active');
    document.querySelector('.calculate .gender .female').className = 'female';

}

document.querySelector('.calculate .gender .female').onclick = function() {
        gender = 'female';
        this.classList.add('active');
        document.querySelector('.calculate .gender .male').className = 'male';

    }
    // keicia skaicius keiciant input reiksme.
document.querySelector('.calculate .height input').onchange = function() {
    height = parseInt(this.value);
    document.querySelector('.calculate .height .val span').innerText = height;
}

// spaudziant ant + dideja skaicius
document.querySelector('.calculate .height .val i.add-bmi').onclick = function() {
    height += 1;
    document.querySelector('.calculate .height .val span').innerText = height;
}