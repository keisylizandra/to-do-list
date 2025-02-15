import React from "react";
import { Box, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import { FaPen } from "react-icons/fa";

import './CheckboxesGroup.css'

export default function CheckboxesGroup({ label, items, border, labelColor, boxBgColor, formItemsBgColor}) {

  const [checkboxItems, setCheckboxItems] = React.useState(items);
  const [newItemName, setNewItemName] = React.useState('')

  const handleChange = (index) => {
    setCheckboxItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = () => {
    const newItemName = `Item ${checkboxItems.length + 1}`;
    setCheckboxItems([...checkboxItems, { name: newItemName, checked: false }]);
  };

  return (
    <div className={`my-box ${border}`} style={{ backgroundColor: boxBgColor }}>
      <div className="form-box">
        <label className="form-label" style={{ color: labelColor }}>{label}</label>
        <FormGroup className="form-items" style={{ backgroundColor: formItemsBgColor }}>
          {checkboxItems.map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleChange(index)}
                  
                />
              }
              label={item.name}
            />
          ))}
        </FormGroup>
        
        <button className="form-button" style={{color: boxBgColor, backgroundColor: labelColor}} onClick={handleAddItem}>
        <FaPen />
        Add Item
        </button>
        
      </div>
    </div>
    
  );
}
