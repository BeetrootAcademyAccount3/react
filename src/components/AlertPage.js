import { Alert } from "react-bootstrap";

function AlertPage() {
  const serverCondition = ["online", "offline", "maintenance", "info"];

  const currentServerCondition = serverCondition[4];

  switch (currentServerCondition) {
    case "online":
      return (
        <Alert key="success" variant="success">
          Servers are up!
        </Alert>
      );
    case "offline":
      return (
        <Alert key="danger" variant="danger">
          Servers are down! Probably on fire!
        </Alert>
      );
    case "maintenance":
      return (
        <Alert key="warning" variant="warning">
          Servers are in maintenance!
        </Alert>
      );
    case "info":
      return (
        <Alert key="info" variant="info">
          Servers are ready to be updated!
        </Alert>
      );
    default:
      return null;
  }

  /*
  if (currentServerCondition === "online") {
    return (
      <Alert key="success" variant="success">
        Servers are up!
      </Alert>
    );
  } else if (currentServerCondition === "offline") {
    return (
      <Alert key="danger" variant="danger">
        Servers are down! Probably on fire!
      </Alert>
    );
  } else if (currentServerCondition === "maintenance") {
    return (
      <Alert key="warning" variant="warning">
        Servers are in maintenance!
      </Alert>
    );
  } else if (currentServerCondition === "info") {
    return (
      <Alert key="info" variant="info">
        Servers are ready to be updated!
      </Alert>
    );
  } else {
    return null;
  }
    */
}

export default AlertPage;
