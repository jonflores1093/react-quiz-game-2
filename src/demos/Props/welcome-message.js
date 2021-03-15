import "./welcome-message.css";

function WelcomeMessage(props) {
  // const name = props.name;
  // const greeting = props.greetings;

  //used to condense the lines
  const { name, greeting } = props;

  // inside of jsx, {} allows us to insert a js expression
  return (
    <p className="welcome-message">
      {greeting}, {name}!
    </p>
  );
}

export default WelcomeMessage;
