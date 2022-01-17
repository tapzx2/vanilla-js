console.log('it works')

let toggles = document.querySelectorAll('#show-password, #show-passwords')
let passwordFields = document.querySelectorAll('[type="password"]')

document.addEventListener('click', function(event) {
    for (let toggle of toggles) {
        if (event.target.matches(`#${toggle.id}`)) {
            //console.log('clicked a password toggle, this one:')
            //console.log(toggle)
            //console.log(`specificaly, the toggle from ${toggle.attributes["form-number"].value}`)
            let formNumber = toggle.attributes["form-number"].value
            //console.log('lets only select the password fields appropriate to the form')
            let fieldPasswords = []
            for (let password of passwordFields)
                if (password.attributes["form-number"].value === formNumber) {
                    fieldPasswords.push(password)
            }
            //console.log("here the are")
            //console.log(fieldPasswords)
            //console.log("now, let's update the visiblity as appropate")
            for (let field of fieldPasswords) {
                if (toggle.checked){
                    field.type="text"
                } else {
                    field.type="password"
                }
            }
        }
    }

})

forms = document.querySelectorAll('form')
for (let i in forms) {
    forms[i].setAttribute('form-number', `form-${i}`);
    for (let value of forms[i]){
        value.setAttribute('form-number', `form-${i}`);
    }
}
