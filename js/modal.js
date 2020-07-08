var feedback = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal");
var feedbackClose = feedbackPopup.querySelector(".close-button");
var feedbackForm = feedbackPopup.querySelector(".modal-form");
var feedbackName = feedbackPopup.querySelector(".modal-name-input");
var feedbackEmail = feedbackPopup.querySelector(".modal-email-input");
var feedbackAnswer = feedbackPopup.querySelector(".modal-answer-input");
var isStorageSupport = true;
var storage = "";
var storage2 = "";

try {
  storage = localStorage.getItem("name");
  storage2 = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackForm.classList.add("form-show");
  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.value = storage2;
    feedbackAnswer.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackForm.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackForm.classList.remove("modal-error");
    }
  }
});
