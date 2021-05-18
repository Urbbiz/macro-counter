class Footer {



    yearChanger() {
        const year = new Date().getFullYear();
        const date = `<p>${year}: &copy;</p>
<a href="https://www.linkedin.com/in/andrius-urbonas-45b1a433/" target="blank">
    <img class="img" src="./img/footer/logo.png" alt="logo">`;
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