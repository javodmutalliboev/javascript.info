const input = document
    .getElementById("input");

const output = document
    .getElementById("output");

function outputHandler(e) {
    output.innerText = e.target.value;
}

function debounce(f, ms) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => f.apply(this, arguments), ms);
    };
}

const oninput = debounce(outputHandler, 1000);

input.oninput = oninput;

