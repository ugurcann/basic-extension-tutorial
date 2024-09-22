document.getElementById('click-here').addEventListener('click', function() {
    chrome.runtime.sendMessage('get-click-count', (response) => {
        console.log('Click Count', response);

        alert('Button clicked ' + response + ' times!');
    });
});