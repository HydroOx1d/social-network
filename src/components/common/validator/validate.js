

export const required = (value) => !value ? 'Required' : undefined
export const minValue = (minLength) => (value) => minLength <= value ? 'Minimum symbols ' + minLength : undefined

export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined)