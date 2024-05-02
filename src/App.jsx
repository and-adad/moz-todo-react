import "./App.css";

function App() {
  const subject = "React";
  return (
    <>
      <header>
        {/* Hello, React :)! */}
        <h1>Hello, {subject + ' :)'}!</h1>
        {/* Hello, REACT */}
        <h1>Hello, {subject.toUpperCase()}</h1>
        {/* Hello, 4 */}
        <h1>Hello, {2 + 2}!</h1>
      </header>
    </>
  );
}

export default App;
