import { Toast } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";

function ToastMessage() {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">
          <AiFillAlert />
          Admin
        </strong>
        <small>
          <i class="bi bi-alarm"></i>11 mins ago
        </small>
      </Toast.Header>
      <Toast.Body>Urgent message for Admin.</Toast.Body>
    </Toast>
  );
}

export default ToastMessage;
