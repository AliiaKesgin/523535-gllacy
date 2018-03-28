
  var feedback = document.querySelector(".feedback-submit");
  
  var popup = document.querySelector(".modal-feedback-show");
  var close = popup.querySelector(".odal-feedback-close");
  
  var form = popup.querySelector("modal-login-form");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");
  var comment = popup.querySelector("[name=comment]");
  
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  
  feedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-show");
    
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }

//добавить автозаполение электронной почты

  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    popup.classList.remove("modal-feedback-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !comment.value) {
      evt.preventDefault();
      //console.log("Нужно ввести имя и электронную почту и написать нам что-нибудь");
      popup.classList.remove("modal-feedback-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-feedback-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value); 
        // localStorage.setItem("email", login.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-feedback-show")) {
        popup.classList.remove("modal-feedback-show");
        popup.classList.remove("modal-feedback-error");
      }
    }
  });
