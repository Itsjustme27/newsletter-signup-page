document.addEventListener("DOMContentLoaded", () => {
    const email = document.forms["form"]["email"].value;
    const emailError = document.getElementById("email-error");

    const isValidEmail = (email) => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if(!isValidEmail(email)){
        emailError.innerHTML = "Valid email required";
        return;
    }

    const succesPageUrl = "succes.html" + "?email=" + encodeURIComponent(email.value);

    window.location.href = succesPageUrl;

});