import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function toastSucess(text) {
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background:
        "linear-gradient(90deg, #2daa6e 0%, #2daaaa 33.33%, #856ccf 66.67%, #d658b3 100%)",
    },
  }).showToast();
}

export function toastError(text) {
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background:
        "red",
    },
  }).showToast();
}