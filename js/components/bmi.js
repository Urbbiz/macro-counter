let gender = 'male';

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