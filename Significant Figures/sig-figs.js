function head(str) {
    return str.charAt(0);
}

function tail(str) {
    return str.substring(1);
}

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

// Define SigFlot.fixed on construction
function SigFloat(str) {
    if (typeof str == 'number') {
        this.fixed = str.toString();
    } else if (parseFloat(str)) {
        this.fixed = str.toString();
    } else if (str.toString()) {
        this.fixed = str.toString(); // For creating a SigFloat from a SigFloat...?
    } else {
        this.fixed = '0';
    }
}

// Does string contain a significant digit?
SigFloat.containsSigDigit = function(str) {
    for (var i = 0; i < str.length; i++) {
        var j = parseInt(str.charAt(i));
        if ((j && j != 0) || str.charAt(i) == '.') {
            return true;
        }
    }
    return false;
}

// Only the digits to the right of the decimal place are considered significant in a logarithmic value.
SigFloat.log = function(sf) {
    if (sf.toFloat && sf.toFloat() > 0) {
        var logAsFloat = Math.log(sf.toFloat());
        var intLength = (parseInt(logAsFloat) + '').length;
        var numSigFigs = sf.sigFigures() + intLength; // accounting for non-significant digits in the result
        var logsf = new SigFloat(logAsFloat + '');
        return logsf.withSigFigures(numSigFigs);
    } else {
        return new SigFloat('0');
    }
}

// Add two SigFloats using appropriate rule (keep only smaller number of decimal places)
SigFloat.add = function(sf1, sf2) {

    var lenAfterDecimal = SigFloat.smallerLenPastDecimal(sf1, sf2);
    var sumValue = sf1.toFloat() + sf2.toFloat();
    var sumString = sumValue.toString();
    var sumArr = sumString.split(/[Ee\.]/);
    var sumSF = new SigFloat(sumString);

    let intPart=new SigFloat(sumArr[0]);

    //let sfbeforeDecimal=sumArr[0].length
    var numSFsInSum = intPart.sigFigures(); + lenAfterDecimal;
    //console.log("intpart"+ intPart+" SF="+intPart.sigFigures() +" decPart SF="+lenAfterDecimal);
    sumSF= sumSF.withSigFigures(numSFsInSum);
    //console.log("with SF "+numSFsInSum+" no is " + sumSF);

    sumSF=sumSF.toFloat().toFixed(lenAfterDecimal);
    //console.log("with decimal "+lenAfterDecimal+" no is " + sumSF);

    /*
    let one=sf1.toFixed();
    let two=sf2.toFixed();
    var partOne = one.toString().split('.'),
        partTwo = two.toString().split('.');
    one=sf1.toFloat();
    two=sf2.toFloat();
    let n=Math.min(partOne.length>1?partOne[1].length:0, partTwo.length>1?partTwo[1].length:0);
    console.log("a="+one+" , b= "+two +"   c="+((one + two).toFixed(n))+" Num deciaml="+n);
    if(partOne.length == 1 || partTwo.length == 1) {
        return new SigFloat(Math.round(one + two));
    }

    let sf=new SigFloat((one + two)
    return new SigFloat((one + two).toFixed(n));
    */

}

// Subtract two SigFloats using appropriate rule (keep only smaller number of decimal places)
SigFloat.subtract = function(sf1, sf2) {
    /*
    let one=sf1.toFixed();
    let two=sf2.toFixed();
    let partOne = one.toString().split('.'),
        partTwo = two.toString().split('.');
    console.log("a="+one+" , b= "+two +"   c="+(one - two).toFixed(0)+" SF="+Math.min(partOne.length>1?partOne[1].length:0, partTwo.length>1?partTwo[1].length:0));
    if(partOne.length == 1 || partTwo.length == 1) {
        return new SigFloat(Math.round(one - two));
    }

    return new SigFloat((one - two).toFixed(Math.min(partOne.length>1?partOne[1].length:0, partTwo.length>1?partTwo[1].length:0)));
    */
    var lenAfterDecimal = SigFloat.smallerLenPastDecimal(sf1, sf2);
    var diffValue = sf1.toFloat() - sf2.toFloat();
    var diffString = diffValue.toString();

    var diffArr = diffString.split(/[Ee\.]/);
    var diffSF = new SigFloat(diffString);
    let intPart=new SigFloat(diffArr[0]);

    var numSFsInDiff = intPart.sigFigures() + lenAfterDecimal;

    console.log("intpart"+ intPart+" SF="+intPart.sigFigures() +" decPart SF="+lenAfterDecimal);
    diffSF= diffSF.withSigFigures(numSFsInDiff);
    console.log("with SF "+numSFsInDiff+" no is " + diffSF);

    diffSF=diffSF.toFloat().toFixed(lenAfterDecimal);
    console.log("with decimal "+lenAfterDecimal+" no is " + diffSF);

    return diffSF;
}

SigFloat.multiply = function(sf1, sf2) {
    var numSFs = Math.min(sf1.sigFigures(), sf2.sigFigures());
    var prodValue = sf1.toFloat() * sf2.toFloat();
    var prodString = prodValue.toString();
    var prodSF = new SigFloat(prodString);
    return prodSF.withSigFigures(numSFs);
}

SigFloat.divide = function(sf1, sf2) {
    var numSFs = Math.min(sf1.sigFigures(), sf2.sigFigures());
    var prodValue = sf1.toFloat() / sf2.toFloat();
    var prodString = prodValue.toString();
    var prodSF = new SigFloat(prodString);
    return prodSF.withSigFigures(numSFs);
}

// Find and return the smaller number of digits past the decimal in two SigFloats
SigFloat.smallerLenPastDecimal = function(sf1, sf2) {
    var lenAfterDecimal1 = 0,
        lenAfterDecimal2 = 0,
        numSFsInSum = 0;
    var decArr1 = sf1.toString().split(/[Ee\.]/);
    if (decArr1.length == 2 && sf1.toString().match(/[Ee]/)) {
        lenAfterDecimal1 = 0;
    } else if (decArr1.length > 1) {
        lenAfterDecimal1 = decArr1[1].length;
    }
    var decArr2 = sf2.toString().split(/[Ee\.]/);
    if (decArr2.length == 2 && sf2.toString().match(/[Ee]/)) {
        lenAfterDecimal2 = 0;
    } else if (decArr2.length > 1) {
        lenAfterDecimal2 = decArr2[1].length;
    }
    return Math.min(lenAfterDecimal1, lenAfterDecimal2);
}

SigFloat.prototype.toFixed = function() {
    var str = this.fixed;
    var arr = str.split('.');
    if (arr.length == 1 ||str.indexOf("e")>0||str.indexOf("E")>0) {
        return str;
    }
    return parseFloat(str).toFixed(arr[1].length);
}

SigFloat.prototype.toFloat = function() {
    return parseFloat(this.fixed);
}

SigFloat.prototype.toString = function() {
    return this.fixed;
}

SigFloat.prototype.trailingZeros = function() {
    var decimalCorrection = 0;
    if (this.toFloat() == parseInt(this.toFloat()) && this.toFixed() != this.toFloat().toString()) {
        decimalCorrection = -1;
    }
    return (this.toFixed().length - this.toFloat().toString().length + decimalCorrection);
}

SigFloat.prototype.isSignificantAt = function(index) {
    var flStr = this.toString();
    var flChar = flStr.charAt(index);
    if (!(parseInt(flChar) || parseInt(flChar) === 0)) { // If character isn't an integer
        return false;
    }
    if ((flStr.substring(0, index).match(/^[-\.0]+$/g) || index == 0) && parseInt(flChar) === 0) { // If character is a leading zero
        return false;
    }
    if (flStr.substring(0, index).match(/[eE]/g)) { // If character is the argument of an exponent (e.g. "23" in 6.022e+23)
        return false;
    }
    if (parseInt(flChar) != 0) { // If character is a non-zero integer
        return true;
    }
    if (SigFloat.containsSigDigit(flStr.substring(index + 1))) { // If character is followed by a significant digit
        return true;
    }
    if (flStr.substring(0, index).match(/\./g) && !SigFloat.containsSigDigit(flStr.substring(index + 1))) { // If character is a trailing zero
        return true;
    }
    return false;
}

SigFloat.prototype.sigFigures = function() {
    var flStr = this.toString(),
        count = 0;
    for (var i = 0; i < flStr.length; i++) {
        count += (this.isSignificantAt(i) * 1);
    }
    return count;
}

SigFloat.prototype.withSigFigures = function(n) {
    if (n == this.sigFigures() || ! parseInt(n + '') || n < 0) {
        return this;
    } else if (n > this.sigFigures()) {
        var sciNotationArray = this.toString().split(/[eE]/);
        var newStr = sciNotationArray[0];

        if (newStr.indexOf('.') == -1) {
            newStr=Round_off(this.toFloat(),n);
            sciNotationArray = (newStr+"").split(/[eE]/);
            newStr = sciNotationArray[0];
            // console.log(n+" n<sf so "+newStr +" has sig figures "+sciNotationArray);
            //return new SigFloat(newStr);
            /*
            newStr += '.';
            for (var i = this.sigFigures(); i <= n - 1; i++) {
                newStr += '0';
            }
            */
        } else {
            for (var i = this.sigFigures(); i < n; i++) {
                newStr += '0';
            }
        }

        if (sciNotationArray.length > 1) {
            console.log(" N=" +newStr +"e"+sciNotationArray[1]);
            let sf=new SigFloat(newStr+ 'e' + sciNotationArray[1]);
            console.log(" N=" +sf.toFixed() +" has SF "+sf.sigFigures());
            return new SigFloat(newStr + 'e' + sciNotationArray[1]);
        } else {
            let sf=new SigFloat(newStr);

            return sf;//new SigFloat(newStr);
        }
    } else {
        // Step through string from the left (using index j) and save n significant digits;
        // change all other digits to zero and trim zeros at the end.
        var sciNotationArray = this.toString().split(/[eE]/);
        var flStr = sciNotationArray[0];
        if (n > this.sigFigures()) {
            for (var i = this.sigFigures(); i < n; i++) {
                flStr += '0';
            }
        }
        var sfCount = 0;
        var j = 0;
        while (sfCount < (n - 1)) {
            if (j < this.toString().length) {
                sfCount += (this.isSignificantAt(j) * 1);
            }
            j++;
        }
        if (flStr.charAt(j) == '.') {
            j++;
        }
        var toRound = flStr.substring(j).replace(/\./g, '');
        var nn=toRound.substring(0, 1);
        if(parseFloat("0."+toRound.substring(1))==0.5 && nn%2==0){
            flStr = flStr.replaceAt(j,nn);
        }else{

            toRound = toRound.substring(0, 1) + '.' + toRound.substring(1);
            //console.log(toRound+" rounded to "+Math.round(parseFloat(toRound)));
            if( Math.round(parseFloat(toRound))==10){
                //console.log(flStr+" rounded to "+new SigFloat(Round_off(parseFloat(flStr),n)).toFixed());
                return new SigFloat(Round_off(parseFloat(flStr),n));
            }
            flStr = flStr.replaceAt(j, Math.round(parseFloat(toRound)).toString());
        }

        j++;
        while (j < flStr.length) {
            if (flStr.charAt(j) != '.') {
                flStr = flStr.replaceAt(j, '0');
            }
            j++;
        }
        if (parseFloat(flStr)) {
            if (sciNotationArray.length == 2) {
                return new SigFloat(parseFloat(flStr + 'e' + sciNotationArray[1]).toString());
            } else {
                let sf=new SigFloat(parseFloat(flStr).toString());
                if(sf.sigFigures()<n){
                    console.log(sf.toFixed()+" has sig figures less than "+n);
                    sf= sf.withSigFigures(n);
                    console.log(sf.toFloat()+" now has sig figures "+sf.sigFigures());
                }
                return sf; // Removes trailing zeros
            }
        } else {
            return new SigFloat('0');
        }
    }
}

// Function to round - off the number
function  Round_off( N,  n)
{

    let h;
    let l, a, b, c, d, e, i, j, m, f, g;
    b = N;
    c = Math.floor(N);

    // Counting the no. of digits to the left of decimal point
    // in the given no.
    for (i = 0; b >= 1; ++i)
        b = b / 10;

    d = n - i;``
    b = N;
    b = b * Math.pow(10, d);
    e = b + 0.5;
    if (e===Math.ceil(b) && n<=0) {
        f = (Math.ceil(b));
        h = Math.floor(f - 2);
        if (h % 2 != 0) {
            e = e - 1;
        }
    }else{
        //let sf1=new SigFloat(N);
        let sf2=new SigFloat(N.toPrecision(n));

        if(n!=sf2.sigFigures()){
            let m=Round_off( N/10,  n);
            console.log("sf2="+sf2+","+" n="+n+" m"+m);
            return m+"e1";
        }
        return N.toPrecision(n);
    }
    j = Math.floor(e);
    m = Math.pow(10, d);
    j = j / m;
    //System.out.println("The number after rounding-off is "
      //  + j);
    return j;
}