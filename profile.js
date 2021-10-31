function buttonClickEventHandler(event) {
    event.preventDefault();
    alert(`Rob's favorite ${event.target.id} is ${Rob[event.target.id]}.`); // SO EXCITED when I thought of this absoultely simple implentation!

    if (event.target.id === "color") {
        const colorChangingElements = document.querySelectorAll('.color-changing');
        colorChangingElements.forEach(elem=>{elem.style.color = '#ffffff', elem.style.background = '#169616'});
    }
}

const buttons = document.querySelectorAll('.favorites');
buttons.forEach(btn=>btn.addEventListener('click',buttonClickEventHandler))


const Rob = {
    "color": 'green',
    "place": 'Disney World',
    "ritual": 'buying my son a big box of Cadbury Creme Eggs every Spring'
}
