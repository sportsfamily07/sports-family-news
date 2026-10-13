const contactForm =
  document.getElementById("contact-form");


contactForm.addEventListener("submit", function(event) {

  event.preventDefault();


  const name =
    document.getElementById("contact-name").value.trim();

  const email =
    document.getElementById("contact-email").value.trim();

  const subject =
    document.getElementById("contact-subject").value.trim();

  const message =
    document.getElementById("contact-message").value.trim();


  if (
    name === "" ||
    email === "" ||
    subject === "" ||
    message === ""
  ) {

    alert("Please fill in all fields.");

    return;
  }


  alert(
    "Thank you for contacting Sports Family News!"
  );


  contactForm.reset();

});
