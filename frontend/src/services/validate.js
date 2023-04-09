const isText = (text) => {
    return !!text && text.length > 0
}

const isDate = (dateString) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    if (!!dateString && !dateString.match(dateFormat)) {
        return false;
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        // If the date is invalid, return false
        return false;
    }

    // If the input matches the date format and the date is valid, return true
    return true;
}


const isPhone = (phone, required = false) => {
    if (!required && (!phone || phone.length === 0)) {
        return true
    }
    const regex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
    return regex.test(phone);
};

const isEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const isZipcode = (zipcode) => {
    const regex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/
    return regex.test(zipcode)
}

const isBic = (bic) => {
    const regex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/
    return regex.test(bic)
}

const isIban = (iban) => {
    const regex = /^(?=.{5,34}$)[A-Z]{2}\d{2}[A-Z]{4}(\d{1,3}){0,2}$/
    return regex.test(iban)
}

export const validateService = {
    isText, isDate, isPhone, isEmail, isZipcode, isBic, isIban
}