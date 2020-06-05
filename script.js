const message = document.querySelector('.message');
const counter = document.querySelector('.counter');

message.addEventListener('input', function(e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    counter.innerHTML = `${currentLength}/${maxLength}`;
});
 
