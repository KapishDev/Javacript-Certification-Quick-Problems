function palindrome(str) {
    const newstr1 = str.replace(/[^a-zA-Z0-9]/g, '');
    const newstr = newstr1.toLowerCase();
    const strlen = newstr.length;
    let min = 0;
    let max = strlen - 1;
    if ( strlen % 2 != 0 ) {
        while ( min <= (strlen/2) ) {
            if (newstr[min] != newstr[max]) {
                return false;
            }
            max--;
            min++;
        }
    } else if ( strlen % 2 == 0 ) {
        while ( min < (strlen/2) ) {
            if (newstr[min] != newstr[max]) {
                return false;
            }
            max--;
            min++;
        }

    } else {
        return false;
    }

    return true;
}