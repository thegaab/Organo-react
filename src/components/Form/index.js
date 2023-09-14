import { useState } from "react";
import Botao from "../Botao";
import DropDown from "../Dropdown/Index";
import TextField from "../TextField/Index";
import "./Form.css";

const Form = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [team, setTeam] = useState('')


  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.collaboratorCreated({
      nome,
      cargo,
      imagem,
      team
    })
  }
  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
        essential={true} 
        label="Nome" 
        placeholder="Digite o seu nome"
        valor={nome}
        aoAlterado={val => setNome(val)}
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
