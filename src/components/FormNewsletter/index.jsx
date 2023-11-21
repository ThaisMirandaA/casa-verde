import { StyledForm, StyledInput, StyledButton, StyledSpan } from './styles';
import { useEffect, useState } from "react";

function useFormik({
    initialValues,
    validate
}) {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validateValues(values);
    }, [values])

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        const value = event.target.value;

        setValues({
            ...values,
            [fieldName]: value
        })
    }

    function handleBlur(event) {
        const fieldName = event.target.getAttribute('name');

        setTouched({
            ...touched,
            [fieldName]: touched
        })

    }

    function validateValues(values) {
        setErrors(validate(values));
    }

    return {
        values,
        handleChange,
        errors,
        setErrors,
        handleBlur,
        touched,
    }
}

const FormNewsletter = () => {
    const formik = useFormik({
        initialValues: {
            userEmail: 'email@email.com'
        },
        validate: function (values) {
            const errors = {};
            if (!values.userEmail.includes('@')) {
                errors.userEmail = "Por favor, insira um email válido.";
            }

            return errors;
        }
    })

    return (
        <StyledForm onSubmit={(event) => {
            event.preventDefault();
        }}>
            <StyledInput
                type="text"
                placeholder="Insira seu e-mail"
                name="userEmail"
                id="userEmail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userEmail}
            ></StyledInput>
            <StyledButton>Assinar newsletter</StyledButton>
            <StyledSpan>{formik.touched.userEmail && formik.errors.userEmail}</StyledSpan>
        </StyledForm>
    )
}

export default FormNewsletter;