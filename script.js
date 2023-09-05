let alertMessage = '';

const submitForm = document.getElementById('turn-in-form');

// document.addEventListener('DOMContentLoaded', function(){
//     submitForm = document.getElementById('turn-in-form');
// });



submitForm.addEventListener('click', function(event){
    event.preventDefault();
showAlert(); 


function showAlert() {
    

const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;

const gender = document.querySelector('input[name="gender"]:checked').value;
const birthdate = document.querySelector("#birthdate").value;

const symptoms = [];
document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox){
    symptoms.push(checkbox.value);
});

const alertMessage = `Thank you, ${firstName} ${lastName}
You selected:
${gender} for your gender
${birthdate} for your date of birth
${symptoms.join(', ')} for all the symptoms experienced.`;

alert(alertMessage);

};

})
