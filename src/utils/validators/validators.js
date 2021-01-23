export const required = value => value ? undefined : 'Required'
    // if (value) return undefined;
    // return 'error';


export const maxLength = max => text =>
    text && text.length > max ? `Must be ${max} length long or less` : undefined;
    // if (text.length > max) return `max length is ${max}`;
    // return undefined;
