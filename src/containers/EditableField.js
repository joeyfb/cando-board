// eslint-disable-next-line
import React from 'react';

const EditableField = ({
  onsubmit,
  children,
  text
}) =>
{
  let input;
  const change = () =>
  {
    const val = input.value.trim();
  
    if ( ! val || val === text)
    {
      input.value = text;
      return;
    }

    onsubmit(val);
  }

  return (
      <input type='text' defaultValue={text}
        className='editable-field'
        ref={node => {input = node}}

        onBlur={change}
        onKeyPress={ (e) => 
          {
            if (e.charCode !== 13)
            {
              return;
            }
            
            input.blur();
          }}
      />
      );
};

export default EditableField;
