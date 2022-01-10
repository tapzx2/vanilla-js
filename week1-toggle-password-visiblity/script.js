console.log("it works")

let showpasswd = document.querySelector('#show-password')
let passwd = document.querySelector('#password')
let passedword = document.querySelector('password')

function togglePassword () {
    if (showpasswd.checked === true){
        passwd.setAttribute("type", "text")
    } else {
        passwd.setAttribute("type", "password")
    }
}

showpasswd.addEventListener('click', function(event) {
    togglePassword()
})

togglePassword()

function validateQueries (...all){
    i = 0
    console.log(all)
    for (let value of all) {
        if (value === null) {
            console.log(`WARNING! query at index ${i} is null`)
        }
        i += 1
    }
}

validateQueries(showpasswd, passwd, passedword)