const isText = (text) => {
    return text.length > 0
}

const isDate = (dateString) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(dateFormat)) {
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
    if (!required && phone.length === 0) {
        return true
    }
    const regex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
    return regex.test(phone);
};

const isEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateService = {
    isText, isDate, isPhone, isEmail
}