/** @jsx h */
import { h} from 'preact';
import './selectComponent.css'

export type Option = {
  value: string
  description: string
}

type SelectProps = {
  label: string
  name: string
  id: string
  options: Option[]
  value: string
  required?: boolean
}

export const SelectComponent = (props: SelectProps) => {
  return (
    <div className='select-component'>
      <label for={props?.id}>
        { props?.label }
      </label>
      <select name={props?.name} id={props?.id} required={props?.required}>
        <option value="">Please select</option>
        {
          props?.options.map((option: Option) => <option value={option?.value} selected={option.value === props?.value}>{option?.description}</option>)
        }
    </select>
    </div>
  );
};