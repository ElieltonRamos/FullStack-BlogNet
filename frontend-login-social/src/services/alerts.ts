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

export const alertConfirmDeletePost = () => {
  let confirm = false;
  return Swal.fire({
    title: "Do you really want to delete the post?",
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: "Cancel",
    denyButtonText: "Confirm",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      confirm = false;
      Swal.fire("Post is not deleted", "", "info");
    } else if (result.isDenied) {
      confirm = true;
      Swal.fire("Deleted", "", "success");
    }
    return confirm;
  });
};