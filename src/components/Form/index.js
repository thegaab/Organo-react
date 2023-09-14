import { useState } from "react";
import Botao from "../Botao";
import DropDown from "../Dropdown/Index";
import TextField from "../TextField/Index";
import "./Form.css";

const Form = (props) => {

  const [name, setName] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [team, setTeam] = useState('')


  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.collaboratorCreated({
      name,
      cargo,
      imagem,
      team
    })
    setName('')
    setCargo('')
    setImagem('')
    setTeam('')
  }
  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
        essential={true} 
        label="Name" 
        placeholder="Digite o seu nome"
        valor={name}
        aoAlterado={val => setName(val)}
        />
        <TextField 
        essential={true} 
        label="Cargo" 
        placeholder="Digite o seu cargo"
        valor={cargo}
        aoAlterado={val => setCargo(val)}
        />
        <TextField 
        label="Imagem" 
        placeholder="Digite o endereço da imagem"
        valor={imagem}
        aoAlterado={val => setImagem(val)}
        />
        <DropDown 
        essential={true}
        label="Time"
        placeholder="Selecione o cargo"
        itens={props.teams}
        valor={team}
        aoAlterado={val => setTeam(val)}/>
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};
export default Form;
