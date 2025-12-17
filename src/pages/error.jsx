import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={() => navigate("/")}>
        Click on this button to go back to the main page
      </button>
    </div>
  );
}