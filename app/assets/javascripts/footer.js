function copyemail() {
  // Create new element
   var email = document.createElement('textarea');
   // Set value (string to be copied)
   email.value = "felicity.ng@nyu.edu";
   // Set non-editable to avoid focus and move outside of view
   email.setAttribute('readonly', '');
   email.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(email);
   // Select text inside element
   email.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(email);
  /* Alert the copied text */
  alert("Felicity's email: 'felicity.ng@nyu.edu' has been copied to your clipboard");
}

document.querySelector("#emailButton").addEventListener("click", copyemail);
