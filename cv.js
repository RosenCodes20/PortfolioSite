document.addEventListener('DOMContentLoaded', () => {
    let cv = document.querySelector('.a-wrap > a');
    
    const languageSelector = document.getElementById('sel');

    const languageSelectorTwo = document.getElementById('select');
    
    languageSelector.addEventListener('change', (e) => {
        cv.addEventListener('click', handleClickingCv);
        
        function handleClickingCv() {
            const selectedLang = e.target.value;
            
            if (selectedLang == 'en') {
                alert("Still dont't have, but coming soon.....");
            } else if (selectedLang == 'bg') {
                alert('Още нямам, но очаквайте скоро.......')
            }
        }
    })

    languageSelectorTwo.addEventListener('change', (e) => {
        cv.addEventListener('click', handleClickingCv);
        
        function handleClickingCv() {
            const selectedLang = e.target.value;
            
            if (selectedLang == 'en') {
                alert("Still dont't have, but coming soon.....");
            } else if (selectedLang == 'bg') {
                alert('Още нямам, но очаквайте скоро.......')
            }
        }
    })
}        
)