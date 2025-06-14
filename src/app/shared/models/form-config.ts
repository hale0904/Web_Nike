export interface FormField {
    label: string;
    name: string;
    value: string;
    placeholder: string;
}

export interface FormButton {
    linkText: string;
}

export interface FormConfig {
    back: string;
    heading: string;
    description: string;
    fields: FormField[];
    info: string;
    buttons: FormButton[];
}
