/** @jsx h */
import { h } from 'preact';
import './button.css'

type ButtonType = "BUTTON" | "SUBMIT" | "RESET"

export type ButtonProps = {
  text: string
  backgroundColor: string
  disabled?: boolean
  type?: ButtonType
  skin?: "PRIMARY" | "SECONDARY"
  onClick?: CallableFunction
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type={(props?.type || 'button').toLowerCase()}
      onClick={props?.onClick}
      className={`${['button']} ${[`skin-${(props?.skin || 'PRIMARY').toLowerCase()}`]}`}
      style={props?.backgroundColor && { backgroundColor: props?.backgroundColor }}
      disabled={props?.disabled || false}
    >   
      { props?.text }
    </button>
  );
};