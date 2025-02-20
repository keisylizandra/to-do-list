import React from "react";
import { Box, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import { FaPen } from "react-icons/fa";

import './CheckboxesGroup.css'
import ModalBox from "../ModalBox/ModalBox";

export default function CheckboxesGroup({ label, items, border, labelColor, boxBgColor, formItemsBgColor}) {

  const [checkboxItems, setCheckboxItems] = React.useState(items);
  const [inputValue, setInputValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItems = inputValue.split(',').map(item => ({
        name: item.trim(),
        checked:false
      }))
      setCheckboxItems([...checkboxItems, ...newItems])
      setInputValue("")
      setShowModal(false)
    }

  }
  const handleChange = (index) => {
    setCheckboxItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
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
        
        <button className="form-button" style={{color: boxBgColor, backgroundColor: labelColor}} onClick={() => setShowModal(true)}>
        <FaPen />
        Add Item
        </button>

        { showModal && (
          <ModalBox 
            inputValue= {inputValue}
            setInputValue= {setInputValue}
            handleConfirm= {handleAddItem}
            handleClose= {() => setShowModal(false)}
          />
        )}
        
      </div>
    </div>
    
  );
}
