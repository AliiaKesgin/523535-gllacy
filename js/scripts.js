var link = document.querySelector(".feedback-button");
var preForm = document.querySelector(".pre-form");
var popup = document.querySelector(".modal-feedback");
var closePopup = popup.querySelector(".modal-feedback-close");
var form = popup.querySelector("form");
var inputName = popup.querySelector("[name=name]");
var inputEmail = popup.querySelector("[name=email]");
var inputText = popup.querySelector("[name=comment");
var storage = localStorage.getItem("inputName");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    preForm.classList.add("modal-feedback-show");
    popup.classList.add("modal-feedback-show");

    if (storage) {
        inputName.value = storage;
        inputEmail.focus();
    } else {
        inputName.focus();
    }
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    popup.classList.remove("modal-feedback-error");
    preForm.classList.remove("modal-feedback-show");
});

form.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-feedback-error");
    } else {
        localStorage.setItem("inputName", inputName.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-feedback-show")) {
            popup.classList.remove("modal-feedback-show");
            popup.classList.remove("modal-feedback-error");
            preForm.classList.remove("modal-feedback-show");
        }
    }
});

preForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    popup.classList.remove("modal-feedback-error");
    preForm.classList.remove("modal-feedback-show");
});
