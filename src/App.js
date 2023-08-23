import "./App.css";

function App() {
  const name = "";

  return (
    <div className="App">
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>VASCO DA GAMA</h1>
          <h2>Nome vazio.</h2>
        </>
      )}
    </div>
  );
}

export default App;
