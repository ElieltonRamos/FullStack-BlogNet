import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/navBar";
import { EditUser, ViewUser } from "../components/EditUser";

function Profile() {
  const [editUser, setEditUser] = useState(false);
  
  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col overflow-auto">
      <Navbar />
      <section className="h-full w-11/12 mt-14 flex flex-col md:flex-row">
        <div className="bg-gray-200 w-full mt-3 fixed top-11 flex">
          <h2 className="text-blue-600 text-xl font-bold ml-36 md:ml-56">Profile</h2>
        </div>
        {editUser ? <EditUser setEditUser={setEditUser} /> : <ViewUser setEditUser={setEditUser} />}
        <CreatePost />
      </section>
    </main>
  )
}

export default Profile;