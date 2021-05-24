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
    height = (height > 220) ? 220 : height; // apsauga nuo per didesnio negu 220 skaiciaus
    document.querySelector('.calculate .height .val span').innerText = height;
    document.querySelector('.calculate .height input').value = height; //dideja orange juosta
}

// spaudziant ant i mazeja skaicius skaicius
document.querySelector('.calculate .height .val i.sub-bmi').onclick = function() {
    height -= 1;
    height = (height < 50) ? 50 : height; // apsauga nuo per mazesnio skaiciaus negu 50 skaiciaus
    document.querySelector('.calculate .height .val span').innerText = height;
    document.querySelector('.calculate .height input').value = height; //mazeja orange juosta
}