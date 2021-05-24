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

    if (bmi < 18.5) { // keicia spalva ir pakeicia texta jeigu bmi > 18.5
        document.querySelector('.result .text-bmi').innerText = 'YOU ARE UNDERWEIGHT!';
        document.querySelector('.result .bmi .val').style.color = '#3f51b5';
        document.querySelector('.result .text-bmi').style.color = '#3f51b5';
    } else if (bmi >= 18.5 && bmi < 25) { // keicia spalva ir pakeicia texta jeigu svoris normalus
        document.querySelector('.result .text-bmi').innerText = 'YOU HAVE HEALTHY WEIGHT!';
        document.querySelector('.result .bmi .val').style.color = '#0f4';
        document.querySelector('.result .text-bmi').style.color = '#0f4';
    } else if (bmi >= 25 && bmi < 30) { // keicia spalva ir pakeicia texta jeigu bmi >= 25  < 30
        document.querySelector('.result .text-bmi').innerText = 'YOU ARE OVERWEIGHT!';
        document.querySelector('.result .bmi .val').style.color = '#ffc107';
        document.querySelector('.result .text-bmi').style.color = '#ffc107';
    } else if (bmi >= 30) { // keicia spalva ir pakeicia texta jeigu bmi >= 30  
        document.querySelector('.result .text-bmi').innerText = 'YOU ARE OBESE!';
        document.querySelector('.result .bmi .val').style.color = '#f00';
        document.querySelector('.result .text-bmi').style.color = '#f00';
    }






    document.querySelector('.calculate').style.display = 'none';
    document.querySelector('.result').style.display = 'flex';

}

// RECALC BUTTON
document.querySelector('.result .recalc').onclick = function() {
    document.querySelector('.calculate').style.display = 'flex';
    document.querySelector('.result').style.display = 'none';
}