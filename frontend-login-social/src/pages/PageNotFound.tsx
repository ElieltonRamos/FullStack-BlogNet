import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="w-screen h-screen bg-gray-300 flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white rounded-lg p-10 text-center">
        <h1>404 - Page Not Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/home')}
          className="button p-1 rounded-lg bg-gray-800 text-white font-semibold">
          Return Home Page
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;