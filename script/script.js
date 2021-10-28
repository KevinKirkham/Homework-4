
function encrypt() {
    
    let userInput = document.getElementById("input-string").value;
    if (userInput == "" || userInput.length == 0 || userInput == null) {
        alert("What did you expect to encrypt?");
    }
    else {
        let secret = "D A G O T H W A V E";
        let shaEncrypt = CryptoJS.SHA1(userInput);
        let aesEncrypt = CryptoJS.AES.encrypt(userInput, secret);
        let md5Encrypt = CryptoJS.MD5(userInput);
        let hmacEncrypt = CryptoJS.HmacSHA256(userInput, secret);
    
        document.getElementById("aes-encryption").innerHTML = "AES: " + aesEncrypt;
        document.getElementById("sha1-encryption").innerHTML = "SHA1: " + shaEncrypt;
        document.getElementById("md5-encryption").innerHTML = "MD5: " + md5Encrypt;
        document.getElementById("hmac-encryption").innerHTML = "HMAC-SHA256: " + hmacEncrypt;
    }

}

function toDecimal() {
    let userInput = document.getElementById("inputBinary").value;
    if (validateBinary(userInput.trim())) {
        let length = userInput.length;
        let exp = userInput.length - 1;
        let sum = 0;

        for (let i = 0; i < length; i++, exp--) {
            let value = parseInt(userInput[i]);
            sum += value * Math.pow(2, exp);
        }

        document.getElementById("convertDecimal").innerHTML = sum;
    }
}

function toBinary() {
    let userInput = document.getElementById("inputDecimal").value;
    if (isNaN(userInput)) {
        alert("You must input a number to convert to binary.");
    }
    else if (userInput == "0") {
        document.getElementById("convertBinary").innerHTML = "0";
    }
    else {
        userInput = parseInt(userInput);
        let binary = "";
        let ans = "";
    
        while (userInput >= 1) {
            let value = userInput % 2;
            binary += value.toString();
            userInput = parseInt(userInput / 2);
        }

        let conversion = createArray(binary);
        document.getElementById("convertBinary").innerHTML = arrayToString(reverseString(conversion));
        
    }
}

function arrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

function createArray(input) {
    let array = Array(input.length - 1);
    for (let i = 0; i < input.length; i++) {
        array[i] = input[i];
    }
    return array;
}

function reverseString(arrayChars) {
    for (let l = 0, r = arrayChars.length - 1; l < r; l++, r--) {
        let temp = arrayChars[r];
        arrayChars[r] = arrayChars[l];
        arrayChars[l] = temp;
    }
    return arrayChars;
}

function validateInput(input) {
    if (isNaN(input)) {
        alert("You must put in a number to covert!");
        return false;
    }
    return true;
}

function validateBinary(userInput) {
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] != "1" && userInput[i] != "0") {
            alert("A valid binary number must be inputted to convert it to decimal.");
            return false;
        }
    }
    return true;
}