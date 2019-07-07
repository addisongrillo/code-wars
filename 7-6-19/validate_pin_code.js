// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
// but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    String.prototype.isNumber = function(){return /^\d+$/.test(this);}
    const pinNum = parseInt(pin, 10)
    const pinNumLength = pin.toString().length
    if ((pinNumLength === 4 || pinNumLength === 6) && isNaN(pinNum) === false && pin.isNumber() === true){
        return true
    }else{
        return false
    }
  }