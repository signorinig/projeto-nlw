//Componentes e Propriedades

interface ButtonProps {
  title: string;
}

function Button (props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Primeiro"/>
      <Button title="Segundo"/>
      <Button title="Terceiro"/>
      <Button title="Quarto"/>
      <Button title="Quinto"/>
    </div>
  )
}

export default App
