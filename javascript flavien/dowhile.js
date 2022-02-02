function isPalindrome(string){
    if (string.length === 1)return false;
    let isStringApalindrome = true
    const isHalfofword = parseInt(string.length/2);
    let i = 0 ;
    do {
        if (string[i] !== string[string.length - 1 - i])return false;
        (i++)
     }
    while (i<isHalfofword); 
    return true;
}

    
