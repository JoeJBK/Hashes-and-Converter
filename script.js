function encrypt(input) {
    input = document.getElementById("input").value;

    var encryptAES = CryptoJS.AES.encrypt(input, "ITEC225");
    var encryptSHA1 = CryptoJS.SHA1(input);
    var encryptSHA224 = CryptoJS.SHA224(input);
    var encryptSHA256 = CryptoJS.SHA256(input);

    if (input.length == 0) {
        alert("Blank Input");
    }
    else {
        document.getElementById("outputAES").innerHTML = encryptAES;
        document.getElementById("outputSHA1").innerHTML = encryptSHA1;
        document.getElementById("outputSHA224").innerHTML = encryptSHA224;
        document.getElementById("outputSHA256").innerHTML = encryptSHA256;
    }
}

function convertB(input) {

    var input = document.getElementById("inputC").value;

    var dec = 0;
    if (isNaN(input)) {
        alert("Not a Number");
    }
    else {
        for (i = 0; i < input.length; i++) {
            dec = dec * 2 + +input[i];

        }
        document.getElementById("output").innerHTML = dec;
    }
}

function convertD(input) {
    var input = document.getElementById("inputC").value;
    var bin = 0;
    var i = 1;
    var rem;

    if (isNaN(input)) {
        alert("Not a Number");
    }
    else {
        while (input != 0) {

            rem = input % 2;
            input = parseInt(input / 2);
            bin = bin + rem * i;
            i = i * 10;

        }

        document.getElementById("output").innerHTML = bin;
    }
}