
export function addcomma(number){
    number += "" // convert to string
    var cnt = 0;
    var todisplay = ""
    var readyToCount = true

    for(var idx = number.length - 1; idx >= 0; idx--){//verifying if contains decimal point
        if (number.charAt(idx) === '.') readyToCount = false;
    }

    for (var i = number.length - 1; i >= 0; i--) {
        if (!readyToCount) {
            if (number.charAt(i) === '.') readyToCount = true;
            todisplay = number.charAt(i) + todisplay
        } else {
            if (number.charAt(i) < 10) cnt++;
            todisplay = number.charAt(i) + todisplay
            if (cnt % 4 === 0) {
                todisplay = todisplay.charAt(0) + "," + todisplay.substring(1, todisplay.length)
                cnt = 1;
            }
        }
    }

    return todisplay
}