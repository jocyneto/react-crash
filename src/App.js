import "./App.css";

function Person(props) {
  return (
    <>
      <h1>Nome: {props.nome}</h1>
      <h1>Sobrenome: {props.sobrenome} </h1>
      <h1>Idade: {props.idade} </h1>
    </>
  );
}

function App() {
  return (
    <div className="App">
      aaaaa
      <Person nome="Jocy" sobrenome="Neto" idade="18" />
      <Person nome="Eduardo" sobrenome="Noe" idade="30" />
    </div>
  );
}

export default App;
