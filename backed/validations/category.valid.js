import Joi from 'joi';

const createCategory = Joi.object(
    {
        name: Joi.string().required()
    })

const CategoryValidate ={
    createCategoryValid:(body)=> createCategory.validate(body),

}
export default CategoryValidate;