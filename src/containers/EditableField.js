// eslint-disable-next-line
import React from 'react';

const EditableField = ({
  onsubmit,
  children,
  text
}) =>
{
  let input;

  return (
      <input type='text' defaultValue={text}
        className='editable-field'
        ref={node => {input = node}}

        onBlur={() =>
          {
            const val = input.value.trim();

            if ( ! val || val === text)
            {
              input.value = text;
              return;
            }

            onsubmit(val);
          }}

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
