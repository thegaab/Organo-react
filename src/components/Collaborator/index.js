import './Collaborator.css'

const Collaborator = ({nome, imagem, cargo}) => {
    return(<div className='collaborator'>
        <div className='header'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='footer'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>     
    )
}

export default Collaborator