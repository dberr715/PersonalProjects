const submitForm = document.querySelector('#turn-in-form');



const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const gender = document.querySelector('name=[gender]: checked');
const birthdate = document.querySelector("#birthdate");
const symptoms = document.querySelectorAll('type=[checkbox]: checked');
submitForm.addEventListener('click', function(event){
    event.preventDefault(),
    alert(`Thank you, ${firstName} ${lastName}
    You selected:
    ${gender} for your gender
    ${birthdate} for your date of birth
    ${symptoms.join(', ')} for all the symptoms experienced.`
    );

})
