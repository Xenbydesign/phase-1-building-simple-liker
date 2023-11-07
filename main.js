// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hiddenClass = 'hidden'

const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modal-message');


const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(span => span.addEventListener('click', handleHeartClick));

// Functions
function handleHeartClick(e) {
  mimicServerCall()
    .then(() => handleSuccess(e.target))
    .catch(handleError)
}

function handleSuccess(heartSuccess) {
  if (heartSuccess.textContent ===EMPTY_HEART) {
    heartSuccess.textContent = FULL_HEART;
    heartSuccess.classList.add('activated-heart');
  }
  else {
    heartSuccess.textContent = EMPTY_HEART;
    heartSuccess.classList.remove('activated-heart');
  }
}

function handleError(message) {
  modal.classList.remove(hiddenClass);
  modalMsg.textContent = message;
  setTimeout(() => {
    modal.classList.add(hiddenClass)
  }, 3000);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
