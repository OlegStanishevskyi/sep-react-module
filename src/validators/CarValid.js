import Joi from "joi";

const carValid = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви 1-20 символів'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'мінімум 0',
        'number.max':'максимум 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'мінімум 1900',
        'number.max':`максимум${new Date().getFullYear()}`
    })
})
export {
    carValid
}