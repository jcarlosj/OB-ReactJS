exports.emailIsValid = ( email ) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
}

exports.minLength = ( value, min ) => {
    return value.length >= min;
}

exports.maxLength = ( value, max ) => {
    return value.length <= max;
}