import './TextField.css'

const TextField = (props) =>{

    const typing = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.val} onChange={typing} required={props.essential} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField