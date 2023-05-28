const form = document.getElementById('form')
const success = document.getElementById('success')
const dismiss = document.getElementById('dismiss')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email')
    const err = document.getElementById('err')
    const classes = ['bg-tomato/20', 'border-tomato', 'text-tomato']

    if (validateEmail(email.value)) {
        err.classList.add('hidden')
        email.classList.remove(...classes)
        success.showModal()
    } else {
        email.classList.add(...classes)
        err.classList.remove('hidden')
    }
})

dismiss.addEventListener('click', () => {
    success.close()
})

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}
