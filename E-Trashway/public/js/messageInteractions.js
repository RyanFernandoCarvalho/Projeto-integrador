const closer = document.querySelector('#messageCloser')
const messageBox = document.querySelector('.message')

closer.addEventListener('click', () => {
    messageBox.style.display = 'none'
})