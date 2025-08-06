import * as Yup from 'yup'

export const ContactFormValidation = Yup.object({
    firstname: Yup.string().min(3).required('Please enter you first name'),
    lastname: Yup.string().min(3).required('Please enter you last name'),
    email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
    message: Yup.string().min(10).required('Please enter your message')

})