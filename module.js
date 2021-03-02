// Dom element variables
const form = document.getElementById("subscribe-form");
const form_field = document.getElementById("datatrics-box-input-email");
const form_submit = document.getElementById("btn-submit");

// Regex matching input value to email standard format: -----@---.---
const validate_email = (e) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
        form_field.style.borderColor = "rgba(19, 144, 181, 0.5)";
        form_submit.disabled = false
    } else {
        form_field.style.borderColor = "#cecece";
        form_submit.disabled = true;
    }
};

// Function for posting the content of form
const post_email = (e) => {
    e.preventDefault();

    // Values from the form
    let field_name = form_field.name;
    let field_value = String(form_field.value);

    // Pack form values to object
    let details = {
        "email": field_value,
        "list": 1,
    }

    // Initialize empty arr to hold form data
    var formBody = [];

    // Iterating through items in object
    for (var property in details) {
        // Encode to match standard URL post formatting
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        // Append Data to formBody Array
        formBody.push(encodedKey + "=" + encodedValue);
    }
    // Join each element in arr to one string
    formBody = formBody.join("&");

    // Handling after post success 
    const postSucces = (data) => {
        form_field.value = "";
        // Class to success style
        const submit_class_org = "datatrics-box-button";
        const submit_class_new = "datatrics-box-button subscribed";

        // Text to success content
        const submit_text_org = "Tilmeld";
        const submit_text_new = "Du er tilmeldt!";
        
        // Set new text and style to button
        form_submit.innerText = submit_text_new;
        form_submit.className = submit_class_new;
        setTimeout(function(){
            // After 5 secods revert to old content and style
            form_submit.innerText = submit_text_org;
            form_submit.className = submit_class_org;
        }, 5000);
    }

    // Endpoint and Requst options
    const url_endpoint = 'https://a3i4d5.emailsp.com/frontend/Subscribe.aspx';

    // Fetch as Post Request
    fetch(url_endpoint, {
        method: 'POST',
        headers: {
            // Accepted Content Type
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      })
    .then(response => response)
    .then(data => postSucces(data))
    .catch((error) => {console.error('Error:', error);})  
}

// Event Listeners
form_field.addEventListener("keyup", validate_email);
form_field.addEventListener("paste", validate_email);
form_field.addEventListener("input", validate_email);
form.addEventListener('submit', post_email);