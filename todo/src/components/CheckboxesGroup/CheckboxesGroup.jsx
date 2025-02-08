import * as React from "react";
import { Box, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, ButtonBase } from '@mui/material';
import { IoMdAdd } from "react-icons/io";

import './CheckboxesGroup.css'

export default function CheckboxesGroup({ label, items, border, labelColor, boxBgColor, formItemsBgColor}) {

  const [checkboxItems, setCheckboxItems] = React.useState(items);

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
        <ButtonBase className="form-button" onClick={handleAddItem} disableRipple>
        <IoMdAdd />
          Add Item
        </ButtonBase>
        
      </div>
    </div>
    
  );
}
