//...


export default function MyButton() {
  return (
    <div>
      <h1>Welcome Testing</h1>
      <h2>Ticket Review </h2>
      <form>
        <textarea disabled={onclick === "submitting"} />
        <br />

        <button disabled={onauxclick === "empty"}>Join Slack</button>
        {onclick === "error" && (
          <p className="Error">
            Good guess but a wrong answer. Would you like to play a game?!
          </p>
        )}
      </form>
    </div>
  );
}