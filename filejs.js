var output = document.getElementById('res');
var btn = Array.from(document.getElementsByClassName('btns'));
btn.map(
    button => {
        button.addEventListener("click", e => {
            switch (e.target.innerText) {
                case 'C': output.innerText = ''; break;
                case '=': try {
                    output.innerText = Cal(output.innerText);
                } catch {
                    output.innerText = "Invalid Input !";
                }; break;
                default: output.innerText += e.target.innerText;
            }
        })
    }
)
function BinToDec(num) {
    let bin = num.split('').reverse();
    let dec = 0;
    for (let i in bin) {
        if (bin[i] == '1') dec += 2 ** i;
    }
    return dec;
}
function DecToBin(num) {
    let bin = [];
    while (num > 0) {
        let tmp = num % 2;
        bin.unshift(tmp);
        num = parseInt(num / 2);
    }
    return bin.join('').toString();
}
function Cal(val) {
    let operator;
    for (let x of val)
        if (x != '1' && x != '0') operator = x;
    val = val.split(/[+,-,*,/]/).map(element => {
        return BinToDec(element);
    }).join(operator);
    let result = parseInt(eval(val));
    return (result==0)?0:DecToBin(result);
}