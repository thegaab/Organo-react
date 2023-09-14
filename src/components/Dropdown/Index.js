import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='DropDown'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.val)} required={props.required} value={props.val}>
                    {props.itens.map(item =><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default DropDown