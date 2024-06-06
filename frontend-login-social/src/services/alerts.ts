import Swal from "sweetalert2";


export const alertError = (msg: string) => {
  localStorage.removeItem("token");
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!: " + msg,
    footer: '<a class="bg-purple hover:bg-purpleDark border-4 border-border rounded-lg p-2 text-border" href="/">Try logging in again or check your internet connection</a>'
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