console.log('it works')

let toggles = document.querySelectorAll('#show-password, #show-passwords')
let passwordFields = document.querySelectorAll('[type="password"]')

document.addEventListener('click', function(event) {
    for (let toggle of toggles) {
        if (event.target.matches(`#${toggle.id}`)) {
            for (let password of passwordFields)
                if (password.attributes["form-number"].value === toggle.attributes["form-number"].value) {
                    if (toggle.checked){
                        password.type="text"
                    } else {
                        password.type="password"
                    }
            }            
        }
    }

})

forms = document.querySelectorAll('form')
for (let i = 0; i<forms.length; i++) {
    forms[i].setAttribute('form-number', `form-${i}`);
    for (let value of forms[i]){
        value.setAttribute('form-number', `form-${i}`);
    }
}