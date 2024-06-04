import Swal from "sweetalert2";


export const alertError = (msg: string) => {
  localStorage.removeItem("token");
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!: " + msg,
    footer: '<a class="bg-blue-500 hover:bg-blue-600 rounded-lg p-2 text-black" href="/">Try logging in again or check your internet connection</a>'
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