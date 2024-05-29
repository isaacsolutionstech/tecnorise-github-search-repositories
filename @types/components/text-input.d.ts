export interface TextInputProps {
  title?: string;
  value?: string;
  placeholder?: string;
  onSubmitEditing?: () => void;
  onChange: (value: string) => void;
}
