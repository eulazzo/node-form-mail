const contactForm = document.querySelector(".contact-form");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


contactForm.addEventListener("submit",async (event) => {
  event.preventDefault();

  let formData = {
    fullName: fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  const noEmptyField = async(formData) => {
    if(!(Object.values(formData).includes(' '))){
      try {
        await axios.post('/send',formData); 
      } catch (err) {
        console.log(err);
      } 
    }
  }

  noEmptyField(formData)  
});
