// Global variables
const media_base = "https://www.bluecity.dk/media/wysiwyg/";

const form_field = document.getElementById("datatrics-box-input-email");
const form_submit = document.getElementById("btn-submit");

const validate_email = (e) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
        form_submit.disabled = false
    } else {
        form_submit.disabled = true;
    }
};

form_field.addEventListener("keyup", validate_email);
form_field.addEventListener("paste", validate_email);
form_field.addEventListener("input", validate_email);


