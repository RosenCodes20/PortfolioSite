document.addEventListener('DOMContentLoaded', () => {
    let a = document.querySelectorAll('.nav as');

    for (let link of a) {
        link.addEventListener('click', () => {
            document.querySelector('[type="checkbox"]').checked = false;
        })
    }
})