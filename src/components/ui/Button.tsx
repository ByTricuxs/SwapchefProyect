//clase para definir un boton - CTA
interface ButtonProps {
  text: string;
  style: string;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  return (<button className={props.style} onClick={props.onClick}>
        {props.text}</button>);
}
