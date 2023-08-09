import { Label, Option, Select, SelectArea } from "./styled";

const ContentSelect = ({ onChange, value }) => {
  return (
  <SelectArea>
     <Label>
        Genero
        <Select name="genero" value={value || 'default'} onChange={onChange} >
          <Option value="default" disabled>
            Selecione o genero
          </Option>
          <Option value="Masculino">Masculino</Option>
          <Option value="Feminino">Feminino</Option>
          <Option value="Outro">Outro</Option>
        </Select>
      </Label>
    </SelectArea>
  )
}

export default ContentSelect;
