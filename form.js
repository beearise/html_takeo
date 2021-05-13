const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const cityInput = document.querySelector('#city');
const zipCodeInput = document.querySelector('#zipCode');
const phoneNumberInput = document.querySelector('#phoneNo');
const userInfo = document.querySelector('#userInfo');


myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || cityInput.value === '' || zipCodeInput.value === '' || phoneNumberInput.value === ''){
        alert("Dude just fill out all the info!!");
    }else{

        // Get the modal
        var modal = document.getElementById("popup");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        const li = document.createElement('li');

        li.appendChild(document.createTextNode('So, your name is: '+ nameInput.value +'. Your one of a kind email address is: '+ emailInput.value+'. You live in the hidden Leaf Village of '+cityInput.value+'. Your Debit Card Pin number is: '+zipCodeInput.value+', and anyone can now spam call you at: '+phoneNumberInput.value+ '??'));
        userInfo.appendChild(li);
    
    }

}