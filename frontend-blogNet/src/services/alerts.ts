import Swal from "sweetalert2";

export const alertNoNetwork = () => {
  return Swal.fire({
    title: "The Internet?",
    text: "Are you connected to the internet?",
    icon: "question"
  });
};

export const alertNoLogged = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="/">try logging in or registering</a>'
  });
};