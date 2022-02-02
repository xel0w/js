
function isPalindrome(string){
    if (string.length === 1)return false;
    let isStringApalindrome = true
    const isHalfofword = parseInt(string.length/2);



    for (let i = 0; i < isHalfofword; i++) {
            if(string[i] == string[(string.length)-1])return true;
            return false;
    }
}
console.log(isPalindrome("klolpmlk"));
