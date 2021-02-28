// function meldungMachen() {
//     // alert("Newsletteranfrage erfolgreich abgeschickt");
//     window.location.assign("http://www.google.com");
// }
window.addEventListener("load", init);

function init() {

    document.getElementById("submitbutton").addEventListener("click", validateForm);


}
function validateForm() {
    let email = document.validateForm.email.value;
    let emailb = document.validateForm.email;
    let human = document.validateForm.human.value;
    // let x = document.getElementsByTagName("label");
    let y = document.getElementById("email");
    let z = document.getElementById("human");
    if(email === 'mrgoogle@gmail.com' ||  email ==='' ){
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G85 Providing a text description when user input falls outside the required format or values  */
        y.style.color = "#ff0000" /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        y.style.backgroundColor = "#000000"; /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/

        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        alert("Bitte email Feld korrekt ausfüllen!");
    }
    else if (human === 'robot' ){
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G85 Providing a text description when user input falls outside the required format or values  */
        z.style.color = "#ff0000" /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        z.style.backgroundColor = "#000000"; /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        alert("Bitte i am human Feld setzen!");
    }
    else {
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        alert ("Die Anmeldung für den Newsletter war erfolgreich.");
    }
}
function manage(txt) {
    var bt = document.getElementById('submitbutton');
    var ele = document.getElementById('email');
// Check the element type
    if (ele.type == 'email' && ele.value == '') {
        bt.disabled = true;    // Disable the button.
        return false;
    }
    else {
        bt.disabled = false;   // Enable the button.
    }
}
