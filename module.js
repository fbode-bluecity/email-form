// Dom element variables
const subs_form = document.getElementById("subscribe-form");
const form_field = document.getElementById("datatrics-box-input-email");
const form_submit = document.getElementById("btn-submit");
const auto_toggle = document.getElementById("auto-toggle");

const validate_email = (e) => {
    // Regex String for matching input value to email standard format: -----@---.---
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
        form_field.style.borderColor = "rgba(19, 144, 181, 0.5)";
        form_submit.disabled = false
    } else {
        form_field.style.borderColor = "#cecece";
        form_submit.disabled = true;
    }
};

form_field.addEventListener("keyup", validate_email);
form_field.addEventListener("paste", validate_email);
form_field.addEventListener("input", validate_email);