import SpeakButton from "./demos/Props/speak-button";
import WelcomeMessage from "./demos/Props/welcome-message";
import ChatMessage from "./demos/Props/chat-message";
import AlertButton from "./demos/Props/alert-button";
import ClickButton from "./demos/states/click-button";
import SpeakForm from "./demos/states/speak-form";
import IncrementButton from "./demos/states/custom-increment";

// Components can take inputs in the form of props (or properties).

//a (functional) component is just a JS function that returns JSX
function App() {
  return (
    <main>
      <h1>Welcome!</h1>

      <h2>Custom Increment</h2>

      <IncrementButton />

      <h2>Speak Form</h2>
      <SpeakForm />
      <h2>Stateful Buttons</h2>
      <ClickButton />

      <WelcomeMessage name="Jon" greeting="Hello" />
      <WelcomeMessage name="Jon" greeting="Howdy" />

      <h2>Buttons</h2>
      <SpeakButton message="Hello there!" rate={1} pitch={1} />
      <SpeakButton message="Speedu raceru!" rate={3} pitch={2} />

      <h2>Chat</h2>
      <ChatMessage message="How is react?" userName="BigBoi" date="02/18/21" />

      <h2>Social Media</h2>
      <AlertButton buttonText="Click Me for an alert!" />
    </main>
  );
}

export default App;
