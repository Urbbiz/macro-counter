let gender = 'male';
height = 50;
weight = 10;

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
    //  ****HEIGHT keicia skaicius keiciant input reiksme.
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

//  ******WEIGHT keicia skaicius keiciant input reiksme.
document.querySelector('.calculate .weight input').onchange = function() {
    weight = parseInt(this.value);
    document.querySelector('.calculate .weight .val span').innerText = weight;
}

// spaudziant ant + dideja skaicius
document.querySelector('.calculate .weight .val i.add-bmi').onclick = function() {
    weight += 1;
    weight = (weight > 180) ? 180 : weight; // apsauga nuo per didesnio negu 220 skaiciaus
    document.querySelector('.calculate .weight .val span').innerText = weight;
    document.querySelector('.calculate .weight input').value = weight; //dideja orange juosta
}

// spaudziant ant i mazeja skaicius skaicius
document.querySelector('.calculate .weight .val i.sub-bmi').onclick = function() {
    weight -= 1;
    weight = (weight < 10) ? 10 : weight; // apsauga nuo per mazesnio skaiciaus negu 50 skaiciaus
    document.querySelector('.calculate .weight .val span').innerText = weight;
    document.querySelector('.calculate .weight input').value = weight; //mazeja orange juosta
}

// biznio logika

document.querySelector('.calculate .calc').onclick = function() {
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    height = 50;
    weight = 10;

    document.querySelector('.calculate .weight input').value = weight;
    document.querySelector('.calculate .weight .val span').innerText = weight;
    document.querySelector('.calculate .height input').value = height;
    document.querySelector('.calculate .height .val span').innerText = height;

    document.querySelector('.result .bmi .val').innerText = bmi;

    document.querySelector('.calculate').style.display = 'none';
    document.querySelector('.result').style.display = 'flex';



}