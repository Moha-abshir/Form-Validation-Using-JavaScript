const toggleBtn = document.querySelector('.js-Dashboard-toggle');
const toggleDash = document.querySelector('.Dashboard');

toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from reaching the document
  toggleDash.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  // If the dashboard is open AND the click target is NOT inside the dashboard
  if (toggleDash.classList.contains('open') && !toggleDash.contains(e.target)) {
    toggleDash.classList.remove('open');
  }
});

const tagBtn = document.querySelectorAll('.tag_btn');
const allContent = document.querySelectorAll('.sub-content');

tagBtn.forEach((tag, index)=>{
  tag.addEventListener('click', ()=>{
    tagBtn.forEach(tag=>{tag.classList.remove('active')}); //Removes all of the active class from any element that had it. 
    tag.classList.add('active');

    allContent.forEach(content=>{content.classList.remove('active')});//This does the same thing for removing any class that had the class of ative.
    allContent[index].classList.add('active');
  });
});

//Form Handling and Validation
const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
  // Get all input fields and their corresponding error message <p>
  const userNameInput = document.querySelector('#userName');
  const dobInput = document.querySelector('#dob');
  const addressInput = document.querySelector('#address');
  const phoneNumberInput = document.querySelector('#phoneNumber');
  const emailInput = document.querySelector('#email');
  const occupationInput = document.querySelector('#occupation');

  // Get all error message <p> elements
  const userNameError = userNameInput.nextElementSibling;
  const dobError = dobInput.nextElementSibling;
  const addressError = addressInput.nextElementSibling;
  const phoneNumberError = phoneNumberInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const occupationError = occupationInput.nextElementSibling;

  //Get the values of those inputs 
  const username = userNameInput.value;
  const userDob = dobInput.value;
  const userAddress = addressInput.value;
  const userPhone = phoneNumberInput.value;
  const userEmail = emailInput.value;
  const userOccupation = occupationInput.value;

  // Clear all error messages first
  [userNameError, dobError, addressError, phoneNumberError, emailError, occupationError].forEach((item)=> {item.textContent = ''});

  let hasError = false;

  if (userNameInput.value.length < 8 || userNameInput.value.length > 20) {
    userNameError.textContent = 'Please Enter a Valid Full Name (5-20 characters)';
    hasError = true;
  }
  if (dobInput.value > 2025 || dobInput.value < 1960) {
    dobError.textContent = 'Please Enter a Valid Year Of Birth';
    hasError = true;
  } else if (dobInput.value > 1960 && dobInput.value < 2008) {
    dobError.textContent = 'Underage';
    hasError = true;
  }
  if (addressInput.value.length < 3) {
    addressError.textContent = 'Please enter a valid address';
    hasError = true;
  }
  if (phoneNumberInput.value.length < 10) {
    phoneNumberError.textContent = 'Enter the correct number';
    hasError = true;
  }
  if (!emailInput.value.includes('@gmail.com') && !emailInput.value.includes('@hotmail.com') && !emailInput.value.includes('@outlook.com')) {
    emailError.textContent = 'Please Enter a valid Email address';
    hasError = true;
  }
  if (occupationInput.value.length < 2) {
    occupationError.textContent = 'Please enter your occupation';
    hasError = true;
  }

  if (hasError) {
    event.preventDefault();
  }
});
