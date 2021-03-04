import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Email invalído. Formato aceito ex: banana@peixinha.com').required('Preechimento obrigatório'),
    password: yup.string().min(5,'Senha invalída. Sua senha deve conter no mínimo 5 caracteres').required('Preechimento obrigatório'),
});

export default schema;