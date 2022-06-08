// ? Valida email
const emailIsValid = ( email ) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
}

const minLength = ( value, min ) => {
    return value.length >= min;
}

const maxLength = ( value, max ) => {
    return value.length <= max;
}

// ? Validaciones para el campo de correo
exports.validateEmail = ( email, setError ) => {
    let emailValid = false;

    if( ! email )
        setError({ 'email': 'Email is required!' });
    else if( ! emailIsValid( email ) )
        setError({ 'email': 'Email is not valid!' });
    else
        emailValid = true;

    return emailValid;
}

// ? Validaciones para el campo de contraseña
exports.validatePassword = ( passwd, setError ) => {
    let passwordValid = false;

    if( ! passwd )
        setError({ 'password': 'Password is required!' });
    else if( ! minLength( passwd, 5 ) )
        setError({ 'password': 'Password must be at least 5 characters' });
    else
        passwordValid = true;

    return passwordValid;
}

exports.validateAndConfirmPassword = ( confirm_passwd, passwd, setError ) => {
    let confirmPasswordValid = false;

    if( ! confirm_passwd )
        setError({ 'confirm_password': 'Confirm password is required!' });
    else if( ! minLength( confirm_passwd, 5 ) )
        setError({ 'confirm_password': 'Password must be at least 5 characters' });
    else if( passwd !== confirm_passwd )
        setError({ 'confirm_password': 'Passwords do not match!' });
    else
        confirmPasswordValid = true;

    return confirmPasswordValid;
}

// ? Validaciones para el campo nombre
exports.validateName = ( name, setError ) => {
    let nameValid = false;

    if( ! name )
        setError({ 'name': 'Name is required!' });
    else
        nameValid = true;

    return nameValid;
}