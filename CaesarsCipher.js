function rot13(str) {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newstr = '';
    const strlen = str.length;
    let i = 0;
    while (i < strlen) {
      if (/[a-zA-Z0-9]/g.test(str[i])) {
        let j = 0;
        while (j < 26) {
          if (Alphabet[j] === str[i]) {
            let newIndex = (j + 13) % 26;
            newstr += Alphabet[newIndex];
            break;
          }
          j++;
        }
      } else {
        newstr += str[i];
      }
      i++;
    }
    console.log(newstr);
    return newstr;
}