import { Input, InputArea, Label, LabelImage } from "./styled";
import PropTypes from 'prop-types';

const ContentInput = ({ label, name, type, placeholder, onChange, value }) => {
  return (
    <>
      {type === 'file' && name === 'file' ? (
        <InputArea>
          <LabelImage>
            {label}
            <Input
              display="none"
              onChange={onChange}
              type={type}
              name={name}
            />
          </LabelImage>
      </InputArea>
      ) : (
      <InputArea>
        <Label>
          {label}
          <Input
            type={type ? type : "text"}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </Label>
      </InputArea>
      )}
    </>
  )
}

ContentInput.propTypes = {
  label: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default ContentInput;
