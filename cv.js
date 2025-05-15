document.addEventListener('DOMContentLoaded', () => {
    let cv = document.querySelector('.a-wrap > a');

    cv.addEventListener('click', handleClickingCv);

    function handleClickingCv() {
        let selectedLang = null;
        const selElement = document.getElementById('sel');
        const selectElement = document.getElementById('select');
    
        if (selElement && window.getComputedStyle(selElement).display !== 'none') {
            selectedLang = selElement.value;
        } else if (selectElement && window.getComputedStyle(selectElement).display !== 'none') {
            selectedLang = selectElement.value;
        }
        
        if (selectedLang == 'en') {
            alert("Still don't have, but coming soon.....");
        } else if (selectedLang == 'bg') {
            alert('Още нямам, но очаквайте скоро.......')
        }
    }
    
}        
)