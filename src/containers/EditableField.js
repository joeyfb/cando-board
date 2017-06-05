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
    if ( ! input.value.trim())
    {
      input.value = text;
      return;
    }

    onsubmit(input.value);
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
            
            change();
            input.blur();
          }}
      />
      );
};

export default EditableField;
