const renderEl = document.getElementById('render-here');
let count = 0;

setInterval(() => {
    renderEl.textContent = ++count;
}, 1000);
