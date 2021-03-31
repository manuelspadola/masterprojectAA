
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
    let errorEmail = document.getElementById("errorEmail");
    let errorName = document.getElementById("errorName");
    let errorTeln = document.getElementById("errorTeln");
    let errorBdate = document.getElementById("errorBdate");
    let errorHuman = document.getElementById("errorHuman");
    let goodEmail = document.getElementById("goodEmail");
    let goodName = document.getElementById("goodName");
    let goodTeln = document.getElementById("goodTeln");
    let goodBdate = document.getElementById("goodBdate");
    let goodHuman = document.getElementById("goodHuman");
    let bdate = document.getElementById("bdate");
    let hiddenFormularAlertdiv = document.getElementById("hiddenFormularAlertdiv")
    // let hiddenFormularAlert = document.getElementById("hiddenFormularAlertdiv")


    // Guideline 3.3 Input Assistance 3.3.1 Error Identification SCR18: Providing client-side validation and alert
    // initialize error message
    let msg = "";


    //validate name
    let pattern1 = /^[a-zA-Z\s]+$/;
    let name = document.getElementById("name");

    // validate number
    let pattern2 = /^[\d\-+\.\s]+$/;
    let tel = document.getElementById("tel");

    // validate email
    let pattern3 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;



    if (!pattern3.test(email) || email === 'mrgoogle@gmail.com' || email === '') {
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G85 Providing a text description when user input falls outside the required format or values  */
        y.style.color = "#ff0000"; /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        y.style.backgroundColor = "#000000"; /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        y.style.borderColor = "#ff0000";
        errorEmail.style.display = "inline";
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        msg += "Bitte email Feld korrekt ausfüllen! \n";
        let msg1 = document.createTextNode("Bitte email Feld korrekt ausfüllen!\n");
        let nodebreak = document.createElement("br");
        hiddenFormularAlertdiv.appendChild(msg1);
        hiddenFormularAlertdiv.appendChild(nodebreak);
    } else {
        goodEmail.style.display = "inline";
    }

    if (!pattern1.test(name.value)) {
        errorName.style.display = "inline";
        name.style.borderColor = "#ff0000";
        msg += "Nachname kann nur Buchstaben enthalten.\n";
        let msg2 = document.createTextNode("Nachname kann nur Buchstaben enthalten.\n");
        let nodebreak = document.createElement("br");
        hiddenFormularAlertdiv.appendChild(msg2);
        hiddenFormularAlertdiv.appendChild(nodebreak);
    } else {
        goodName.style.display = "inline";
    }




    if (!pattern2.test(tel.value)) {
        errorTeln.style.display = "inline";
        tel.style.borderColor = "#ff0000";
        msg += "Die Telefonnummer kann nur Ziffern und Trennzeichen enthalten.\n ";
        let msg3 = document.createTextNode("Die Telefonnummer kann nur Ziffern und Trennzeichen enthalten.\n");
        let nodebreak = document.createElement("br");
        hiddenFormularAlertdiv.appendChild(msg3);
        hiddenFormularAlertdiv.appendChild(nodebreak);
    } else {
        goodTeln.style.display = "inline";
    }


    if (bdate.valueOf() === '') {
        errorBdate.style.display = "inline";
        bdate.style.borderColor = "#ff0000";
        msg += "Diese Eingabe ist kein gültiges Datum. Bitte geben Sie den Wert erneut ein. \n";
        let msg4 = document.createTextNode("Diese Eingabe ist kein gültiges Datum. Bitte geben Sie den Wert erneut ein.\n");
        let nodebreak = document.createElement("br");
        hiddenFormularAlertdiv.appendChild(msg4);
        hiddenFormularAlertdiv.appendChild(nodebreak);
    } else {
        goodBdate.style.display = "inline";
    }


    if (human === 'robot') {
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G85 Providing a text description when user input falls outside the required format or values  */
        z.style.color = "#ff0000"; /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        z.style.backgroundColor = "#000000"; /* AA Guideline 1.4 Distinguishable 1.4.3 Contrast (Minimum) G18 Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text Kontrast 5.25*/
        z.style.borderColor = "#ff0000";
        // errorHuman.style.visibility = "initial";
        errorHuman.style.display = "inline";
        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        msg += "Bitte i am human Feld setzen!\n";
        let msg5 = document.createTextNode("Bitte i am human Feld setzen!\n");
        let nodebreak = document.createElement("br");
        hiddenFormularAlertdiv.appendChild(msg5);
        hiddenFormularAlertdiv.appendChild(nodebreak);
    } else {
        goodHuman.style.display = "inline";
    }
    if (msg != "") {
        hiddenFormularAlertdiv.style.display = "block";
        hiddenFormularAlertdiv.style.color = "#8b0000";
        hiddenFormularAlertdiv.style.paddingLeft = "40px";
        hiddenFormularAlertdiv.style.paddingBottom = "20px";
        hiddenFormularAlertdiv.style.paddingTop = "20px";
        hiddenFormularAlertdiv.style.paddingRight = "40px";
        alert(msg); /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        return false;
    } else

        /* AA Guideline 3.3 Input Assistance 3.3.3 Error Suggestion G83 Providing text descriptions to identify required fields that were not completed z.B: Alert */
        alert("Die Anmeldung für den Newsletter war erfolgreich.");



}
function manage(txt) {
    let bt = document.getElementById('submitbutton');
    let ele = document.getElementById('email');
    // Check the element type
    if (ele.type == 'email' && ele.value == '') {
        bt.disabled = true;    // Disable the button.
        return false;
    }
    else {
        bt.disabled = false;   // Enable the button.
    }
}


