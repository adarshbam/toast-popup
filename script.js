const form = document.querySelector(".toast-popup");
const toastContainer = document.querySelector("#toast-container");

const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const duration = document.querySelector("#duration");

const positions = {
  "top-left": "top-left",
  "top-right": "top-right",
  "bottom-left": "bottom-left",
  "bottom-right": "bottom-right",
};

let toastPosition;

console.log(form);
form.addEventListener("submit", (e) => {
  const toast = document.createElement("div");
  e.preventDefault();

  toast.textContent = toastMessage.value;
  toastPosition =
    positions[verticalPosition.value + "-" + horizontalPosition.value];
  console.log(toastPosition);
  toast.setAttribute("class", `toast ${toastType.value}`);
  toast.setAttribute("id", "toast");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close-btn");
  closeBtn.textContent = " ✕";

  toast.append(closeBtn);

  toastContainer.setAttribute("class", toastPosition);
  toastContainer.append(toast);

  function closeToast() {
    toast.classList.add("close");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 200);
  }

  closeBtn.addEventListener("click", () => {
    closeToast();
  });

  setTimeout(() => {
    closeToast();
  }, duration.value * 1000);
});
