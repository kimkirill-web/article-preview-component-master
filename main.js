const modal = document.getElementById('share')
const btn = document.getElementById('openModal')
const bodyElementHTML = document.body
const mobileCloseButton = document.getElementById('mobileCloseButton')


btn.addEventListener('click', function () {
    if (modal.style.display === 'flex') {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'flex'
    }
})



mobileCloseButton.addEventListener('click', () => {
    if (modal.style.display === 'flex') {
        modal.style.display = 'none'
    }
})

// bodyElementHTML.addEventListener('click', (event) => {
//     if (event.target === bodyElementHTML) {
//         modal.style.display = 'none'}
// })


document.addEventListener('click', 
    function(event) {
        const isClickInsideModal = modal.contains(event.target)
        const isClickOnButton = btn.contains(event.target)

        if (!isClickInsideModal && !isClickOnButton) {
            modal.style.display = 'none'
        }
    }
)
