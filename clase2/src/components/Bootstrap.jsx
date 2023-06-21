import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../assets/testApp.css";
import "bootstrap/js/dist/alert";
import Gallery from "./Gallery";

export const Bootstrap = () => {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div className="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      appendAlert("Nice, you triggered this alert message!", "success");
    });
  }

  return (
  <>
    <div className="testapp-container">
      <div className="alert alert-success" role="alert">
        Test App
      </div>
    </div>
    <div id="liveAlertPlaceholder"></div>
    <button type="button" className="btn btn-primary" id="liveAlertBtn">
      Show live alert
    </button>
    <Gallery />
  </>
  );
};
