/** @jsx h */
import { h } from 'preact';
import './button.css'

type ButtonType = "BUTTON" | "SUBMIT" | "RESET"

export type ButtonProps = {
  text: string
  disabled?: boolean
  type?: ButtonType
  skin?: "PRIMARY" | "SECONDARY"
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type={(props?.type || 'button').toLowerCase()}
      className={`${['button']} ${[`skin-${(props?.skin || 'PRIMARY').toLowerCase()}`]}`}
      disabled={props?.disabled || false}
    >   
      { props?.text }
    </button>
  );
};