import './App.css';
import ListaTareas from './componentes/Lista-tareas';
import logo from './img/gitlab.png';

function App() {
  return (
    <div className="Aplicaciòn-Tareas">
      <div className='logo-contenedor'>
      <img
          src={logo}
          className='logo'
          alt='logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
