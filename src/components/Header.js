import "../css/Header.css";
import { Alert, Toast } from "react-bootstrap";
import ToastMessage from "./Toast";

function Header() {
  const isServerDown = false;
  const isAdmin = true;

  return (
    <div>
      {isServerDown && (
        <Alert key="danger" variant="danger">
          Servers are down!
        </Alert>
      )}

      {isAdmin ? (
        <ToastMessage />
      ) : (
        <Toast>
          <Toast.Header>
            <strong className="me-auto">User</strong>
            <small>55 mins ago</small>
          </Toast.Header>
          <Toast.Body>Update your email address.</Toast.Body>
        </Toast>
      )}
      <h1 className="Header-h1">Title</h1>
      <h2 className="Header-h2">Second Title</h2>
    </div>
  );
}

export default Header;
