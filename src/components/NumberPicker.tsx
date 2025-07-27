import React, { useState } from 'react';
import { NUMBER_RANGE } from '../constants';

interface NumberPickerProps {
  onPick: (num: number) => void;
}

const NumberPicker: React.FC<NumberPickerProps> = ({ onPick }) => {
  const [selected, setSelected] = useState<number>(NUMBER_RANGE.min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setSelected(value);
    }
  };

  const isValid = selected >= NUMBER_RANGE.min && selected <= NUMBER_RANGE.max;

  return (
    <div className="container flex-center flex-column">
      <h2>Pick a secret number (between {NUMBER_RANGE.min} and {NUMBER_RANGE.max})</h2>
      <input
        type="number"
        value={selected}
        min={NUMBER_RANGE.min}
        max={NUMBER_RANGE.max}
        onChange={handleChange}
      />
      <button className="primary" disabled={!isValid} onClick={() => onPick(selected)}>
        Confirm
      </button>
    </div>
  );
};

export default NumberPicker;