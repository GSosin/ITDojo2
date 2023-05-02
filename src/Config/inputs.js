export const inputs = [
    {
        "key": "userInput",
        "type": "string",
        "label": "Ingresar un usuario",
        "validations": [
            { "required": true, "regex": /^(.+)$/, "message": "Es un campo requerido" },
            { "minLength": 10, "regex": /^.{10,}$/, "message": "No cumple con la cantidad minima de caracteres" }

        ],

    },
    {
        "key": "emailInput",
        "type": "email",
        "label": "Ingresar un mail",
        "validations": [
            { "required": true, "regex": /^(.+)$/, "message": "Es un campo requerido" },
            { "emailType": 10, "regex": /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/, "message": "No cumple con las caracteristicas de un email" },
            { "minLength": 10, "regex": /^.{10,}$/, "message": "No cumple con la cantidad minima de caracteres" }

        ],

    }
]