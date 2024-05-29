import React, { useCallback } from "react";
import { TextInputProps } from "@/types/components/text-input";
import { BaseInput, InputTitle, Icon, Input } from "@/components";

const TextInput: React.FC<TextInputProps> = ({
  title,
  value,
  onChange,
  placeholder,
  onSubmitEditing,
}) => {
  const handleKeyDown = useCallback(
    (key: string) => {
      if (["Enter"].includes(key) && onSubmitEditing) {
        onSubmitEditing();
      }
    },
    [onSubmitEditing]
  );

  return (
    <BaseInput defaultValue={value}>
      <Input
        autoFocus
        value={value}
        placeholder={placeholder}
        onKeyDown={({ key }) => handleKeyDown(key)}
        onChange={({ target }) => onChange(target.value)}
      />
      <Icon className="fas fa-search" onClick={onSubmitEditing} />
      {title && <InputTitle>{title}</InputTitle>}
    </BaseInput>
  );
};

export default TextInput;
