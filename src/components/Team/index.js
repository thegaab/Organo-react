import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) =>{
    return(
        <section className='team' style={{backgroundColor: props.primaryColor}}>
            <h3 style={{borderColor: props.secondaryColor}}>{props.nome}</h3>
            <div className='collaborators'>
            {props.collaborators.map(collaborator => <Collaborator nome={collaborator.nome} cargo={collaborator.cargo} imagem={collaborator.imagem}/>)}
            </div>
        </section>
    )
}
export default Team