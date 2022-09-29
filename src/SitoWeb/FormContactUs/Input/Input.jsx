import "./Input.css";

export default function Input(props) {
  if((props.type==="textarea")){
    return(
      <div>
      <label htmlFor={props.id}>{props.etichetta}</label>
      <textarea
        rows={props.rows}
        type={props.type}
        placeholder={props.children}
        id={props.id}
        defaultValue={props.value}
        onChange={props.onChange}
      ></textarea>

      </div>

    )
  }
  return (
    
    <div>
    
      <label htmlFor={props.id}>{props.etichetta}</label>
      <input
        type={props.type}
        placeholder={props.children}
        id={props.id}
        defaultValue={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
