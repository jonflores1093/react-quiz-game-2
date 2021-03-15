import "./alert-button.css";

function AlertButton({ buttonText, alertMessage }) {
  const alertSpeech = () => {
    alert(`HEY WHAT ARE YOU DOING!?`);
    // console.log(`HEY WHAT ARE YOU DOING?!`);
  };

  return (
    <button className="alert-button" onClick={alertSpeech}>
      {buttonText}
    </button>
  );
}

export default AlertButton;
