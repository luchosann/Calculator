window.onload = ()=> {
    calculator()
}

function calculator() {
    var numCalculate = '';
    var Result = '';
    var Ans = '';
    var result = document.getElementById('result');
    var equal = document.getElementById('equal');
    var AC = document.getElementById('clear');
    var C = document.getElementById('delete');
    
    function parse(data) {
        return new Function(` return ${data}`)();
    }
    nums = document.querySelectorAll('.num');
    console.log(nums); 
    console.log(5 + 5);

    for (var i = 0; i < nums.length; i++){
        nums[i].onclick = function(){
            if (numCalculate[0] == '/' || numCalculate[0] == '*' || numCalculate[0] == '+' || numCalculate[0] == '-' || numCalculate[0] == '%' ){ 
                numCalculate = Ans + numCalculate;
                numCalculate += this.getAttribute('data-num');
                result.innerHTML = numCalculate;
                console.log(Ans);
                console.log(numCalculate);
            } else {
                numCalculate += this.getAttribute('data-num');
                result.innerHTML = numCalculate;
                console.log(Ans);
                console.log(numCalculate);
            }

        };
    };

    equal.onclick = function(){
        if (numCalculate[0] == '/' || numCalculate[0] == '*' || numCalculate[0] == '+' || numCalculate[0] == '-' || numCalculate[0] == '%' ){ 
            result.innerHTML = 'Error';
        } else {
            Result = parse(numCalculate);
            Ans = Result;
            numCalculate = '';
            console.log(Result);
    
            result.innerHTML = Result;
        }
        
    };

    AC.onclick = function(){
        numCalculate = '';
        Ans = '';
        Result = '';

        result.innerHTML = '';
    };

    C.onclick = function(){
        numCalculate = numCalculate.slice(0, -1);
        result.innerHTML = numCalculate;
    };

}

