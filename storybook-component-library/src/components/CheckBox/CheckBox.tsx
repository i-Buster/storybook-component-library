/** @jsx h */
import { h} from 'preact';
import './checkBox.css';
export interface CheckBoxProps {
  areaLabel: string;
  label: string;
  itemId?: string;
  checked: boolean;
  name: string;
  handleCheckboxChange: (name: string, isChecked: boolean, itemId: string) => void;
}

export const CheckBox = ({
  areaLabel,
  label,
  itemId = '',
  checked,
  name,
  handleCheckboxChange,
}: CheckBoxProps) => {

    const toggleCheckboxChange = () => {
    handleCheckboxChange(name, !checked, itemId);
  };
  return (
      <label className="checkbox-container">
        {label}
        <input type="checkbox" checked={checked} onChange={toggleCheckboxChange} />
        <span className="checkmark"></span>
      </label>
  );
};

