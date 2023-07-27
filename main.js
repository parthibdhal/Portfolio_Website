//////////////////// contact From //////////////////////



      // listen to the form submission
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const serviceID = "service_b4qmiqc";
          const templateID = "template_fv38whr";

          // send the email here
          emailjs.sendForm('service_rcoqvor', 'contact_form', this).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            }
          );
        });


        // window.onload = function() {
        // 	var params{
        // 		name : document.getElementById('name').value,
        // 		email : document.getElementById('email').value,
        // 		message : document.getElementById('message').value
        // 	}  
        //     document.getElementById('contact-form').addEventListener('submit', function(event) {
        //         event.preventDefault();
        //         // generate a five digit number for the contact_number variable
                
        //         // these IDs from the previous steps
        //         emailjs.sendForm('service_rcoqvor', 'contact_form', params)
        //             .then(function() {
        //                 alert('MESSAGE SENT SUCCESS!');
        //             }, function(error) {
        //                 console.log('FAILED...', error);
        //             });
        //     });
        // }


// const contactForm = document.getElementById('contact-form'),
// contactName = document.getElementById('contact-name'),
// contactEmail = document.getElementById('contact-email'),
// Message = document.getElementById('message'),
// contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
// 	e.preventDefault();
// 	if(contactName.value==='' || contactEmail.value==='' || Message.value===''){
// 		contactMessage.classList.remove('color-light');
// 		contactMessage.classList.add('color-dark');

// 		contactMessage.textContent = 'Write all the input fields';
// 	} else {
// 		emailjs.sendForm('service_rcoqvor',
// 			'template_c3do22s',
// 			'#contact-form',
// 			'5QDgOUkXJHAUVfxQN');
// 		then(() => {
// 			contactMessage.classList.add('color-light');
// 			contactMessage.textContent = 'Message sent !';

// 			setTimeout(() => {
// 				contactMessage.textContent = '';
// 			}, 5000);
// 		},
// 		(error) => {
// 			atert('OOPS! SOMETHING WENT WRONG...', error);
// 		});
// 	}
// };
// contactForm.addEventListener('submit', sendEmail);


// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_c3do22s';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });




// const btn = document.getElementById('button');

// document.getElementById('contact-form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'contact_form';

//    emailjs.sendForm('service_rcoqvor', 'contact_form', this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

