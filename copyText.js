function copyDiscordUsername() {
    let copyText = 'coding_with_rosen';
    
    let tempInput = document.createElement('input');
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);
    
    let selectedLang = null;
    const selElement = document.getElementById('sel');
    const selectElement = document.getElementById('select');

    if (selElement && window.getComputedStyle(selElement).display !== 'none') {
        selectedLang = selElement.value;
    } else if (selectElement && window.getComputedStyle(selectElement).display !== 'none') {
        selectedLang = selectElement.value;
    }
    if (selectedLang == 'en') {
        alert('Copied username: ' + copyText + '!');
    } else if (selectedLang == 'bg') {
        alert('Дискорд името: ' + copyText + ' е копирано!')
    }
}

function copyGmail() {
    let gmail = 'rrirrirri08@gmail.com';
    
    let currentInput = document.createElement('input');
    currentInput.value = gmail;
    
    document.body.appendChild(currentInput);
    
    currentInput.select();
    document.execCommand('copy');
    
    currentInput.remove();

    let selectedLang = null;
    const selElement = document.getElementById('sel');
    const selectElement = document.getElementById('select');

    if (selElement && window.getComputedStyle(selElement).display !== 'none') {
        selectedLang = selElement.value;
    } else if (selectElement && window.getComputedStyle(selectElement).display !== 'none') {
        selectedLang = selectElement.value;
    }
    
    if (selectedLang == 'en') {
        alert(`Copied the email: ${gmail}!`);
    } else if (selectedLang == 'bg') {
        alert('Имейлът: ' + gmail + ' е копиран!')
    }
}