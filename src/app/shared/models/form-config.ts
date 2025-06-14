export interface FormField {
    label: string;
    name: string;
    value: string;
    placeholder: string;
}


export interface FormConfig {
    back: string;
    heading: string;
    description: string;
    fields: FormField[];
    info: string;
    btn: string;
    linkText: string;
}
