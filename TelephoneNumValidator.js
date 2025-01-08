function telephoneCheck(str) {
    const template = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)(\d{3})([\s\-]?)(\d{4})$/

    return template.test(str)
}