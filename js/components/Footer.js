class Footer {



    yearChanger() {
        const year = new Date().getFullYear();
        const date = `
<a href="https://www.linkedin.com/in/andrius-urbonas-45b1a433/" target="blank"><span>${year} &copy;</span>
    <img class="img" src="./img/footer/logo.png" alt="logo"></a>`;
        document.getElementById('date-js').innerHTML = date;
    }

    visitorsCounter() {
        const countEl = document.getElementById('count');
        fetch('https://api.countapi.xyz/update/macro-counter/macro/?amount=1')
            .then(res => res.json())
            .then(res => {
                countEl.innerHTML = res.value;
            })

    }
}
export { Footer }