
export const inputValidation = (inputRef, value) => {
    let errors = []
    for (const validation of inputRef.validations) {
        if (!validation.regex.test(value)) {
                    errors.push(validation.message)
                }
    }

    return errors ? errors : undefined
}