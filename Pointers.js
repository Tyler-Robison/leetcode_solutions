// #9
var isPalindrome = function(x) {
    const numStr = `${x}`;
    if (numStr.length === 1) return true;
    
    for (let i = 0; i < numStr.length; i++) {
        const left = numStr[i];
        const right = numStr[numStr.length - 1 - i];
        if (i >= numStr.length - 1 - i) break;
        
        if(left !== right) return false;
    }
    return true;
};