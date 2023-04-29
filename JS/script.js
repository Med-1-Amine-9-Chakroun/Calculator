

document.body.addEventListener("click", function(e){
    var x =e.target.value; 
    if ((x != undefined) && (x != '')){        
        if (( x >= '0') && (x <= '9')){
            numpad_update(parseInt(x));
        }
        else if (x == '.'){
            add_decimal();
        }
        else if (x == '='){
            var eq = document.getElementById('monitor');
            calculate(eq);
        }
        else if ((x == '+') || (x == '-') || (x == '/') || (x == '*')){
            operators_update(x);
        }
        else if(x == 'AC'){
            clear_monitor();
        }
    }    
});

/************************************************
*                             *                 *
*    num_update(x);           *       done      *
*    operators_update(x);     *       done      *
*    calculate();             *       done      *
*    clear_monitor();         *       done      *   
*    add_decimal();           *       done      *
*                             *                 *
*************************************************/ 
document.body.addEventListener("keyup", function(e){
    var x =e.code;   
    console.log(x);    
    if ((x == 'Numpad0') ||  (x == 'Numpad1') ||  (x == 'Numpad2') ||  (x == 'Numpad3') || (x == 'Numpad4') ||  (x == 'Numpad5') ||  (x == 'Numpad6') ||  (x == 'Numpad7') ||  (x == 'Numpad8') ||  (x == 'Numpad9')){        
        numpad_update(x);
    }  
    else if ((x == 'NumpadAdd') || (x == 'NumpadSubtract') || (x == 'NumpadMultiply') || (x == 'NumpadDivide')){
        operators_update(x);
    }
    else if (x == 'Equal'){
        var eq = document.getElementById('monitor');
        calculate(eq);
    }
    else if (x == 'Backspace'){
        clear_monitor();
    }
    else if (x == 'NumpadDecimal'){
        add_decimal();
    }
});

function add_decimal(){
    var monitor = document.getElementById('monitor');
    var x = monitor.value;
    if (x != ''){
        var spec='/*-+%.';
        if (x != ''){            
            if (spec.indexOf(x[x.length-1]) == -1){
                monitor.value = monitor.value+'.';
            }
        }
    }
}

function clear_monitor(){
    var monitor = document.getElementById('monitor');
    var x = monitor.value;
    if (x != ''){
        monitor.value = x.substring(0,x.length-1);
    }
}

function calculate(){
    var monitor = document.getElementById('monitor');
    var x = monitor.value;
    if (x == ''){
        monitor.value = '0';
        return 0;
    }
    else {
        var spec='/*-+%.';
        while (spec.indexOf(x[x.length-1]) != -1){
            x=x.substring(0,x.length-1);
        }
    }
    monitor.value=eval(x);
}

function operators_update(operator){
    var monitor = document.getElementById('monitor');
    var x = monitor.value;
    if ((x != '') && (((x[x.length-1] >= 0) && (x[x.length-1] <= 9)) || (x[x.length-1] == '*') || (x[x.length-1] == '/'))){
        switch (operator){
            case 'NumpadDivide' : monitor.value=x+'/';break;
            case 'NumpadMultiply' : monitor.value=x+'*';break;
            case 'NumpadSubtract' : monitor.value=x+'-';break;
            case 'NumpadAdd' : monitor.value=x+'+';break;

            case '/' : monitor.value=x+'/';break;
            case '*' : monitor.value=x+'*';break;
            case '-' : monitor.value=x+'-';break;
            case '+' : monitor.value=x+'+';break;
        }
    }
    else if((x == '') && ((operator == 'NumpadSubtract') || (operator == '-'))){
        monitor.value='-';
    }
}

function numpad_update(number){
    var monitor = document.getElementById('monitor');
    switch (number){
        case 'Numpad0' : monitor.value = monitor.value+'0'; break;
        case 'Numpad1' : monitor.value = monitor.value+'1'; break;
        case 'Numpad2' : monitor.value = monitor.value+'2'; break;
        case 'Numpad3' : monitor.value = monitor.value+'3'; break;
        case 'Numpad4' : monitor.value = monitor.value+'4'; break;
        case 'Numpad5' : monitor.value = monitor.value+'5'; break;
        case 'Numpad6' : monitor.value = monitor.value+'6'; break;
        case 'Numpad7' : monitor.value = monitor.value+'7'; break;
        case 'Numpad8' : monitor.value = monitor.value+'8'; break;
        case 'Numpad9' : monitor.value = monitor.value+'9'; break;

        case 0 : monitor.value = monitor.value+'0'; break;
        case 1 : monitor.value = monitor.value+'1'; break;
        case 2 : monitor.value = monitor.value+'2'; break;
        case 3 : monitor.value = monitor.value+'3'; break;
        case 4 : monitor.value = monitor.value+'4'; break;
        case 5 : monitor.value = monitor.value+'5'; break;
        case 6 : monitor.value = monitor.value+'6'; break;
        case 7 : monitor.value = monitor.value+'7'; break;
        case 8 : monitor.value = monitor.value+'8'; break;
        case 9 : monitor.value = monitor.value+'9'; break;
    }
}



// var x= 'abcdefghijklmn..../*-+';
// console.log('hhhhhhhhhhhhhhhhhhh');
// console.log(n);
// n=n.substring(0,n.length-1);
// console.log('hhhhhhhhhhhhhhhhhhh');
// console.log(n);


// var spec='/*-+%.';
// console.log('rrrrrrrrrrrr'+x[x.length-1])
// console.log('rrrrrrrrrrrr'+spec.indexOf(x[x.length-1]));
// while (spec.indexOf(x[x.length-1]) != -1){
//     x=x.substring(0,x.length-1);
// }
// console.log(x);






// document.body.addEventListener('keydown', function(e){
//     var x = e.code;
//     console.log(x);    
//     if ((x == 'ShiftRight') || (x == 'ShiftLeft')){
//         document.body.addEventListener("keypress", function(e){
//             var x =e.code; 
//             if (x == 'Quote'){
//                 operators_update(x);
//             } 
//             else if ((x == 'Digit0') || (x == 'Digit1')|| (x == 'Digit2')|| (x == 'Digit3')|| (x == 'Digit4')|| (x == 'Digit5')|| (x == 'Digit6')|| (x == 'Digit7')|| (x == 'Digit8')|| (x == 'Digit9')){
//                 numdigit_update(x);
//             }       
//         });
//     }
// });
// function numdigit_update(number){
//     var monitor = document.getElementById('monitor');
//     switch (number){
//         case 'Digit0' : monitor.value = monitor.value+'0'; break;
//         case 'Digit1' : monitor.value = monitor.value+'1'; break;
//         case 'Digit2' : monitor.value = monitor.value+'2'; break;
//         case 'Digit3' : monitor.value = monitor.value+'3'; break;
//         case 'Digit4' : monitor.value = monitor.value+'4'; break;
//         case 'Digit5' : monitor.value = monitor.value+'5'; break;
//         case 'Digit6' : monitor.value = monitor.value+'6'; break;
//         case 'Digit7' : monitor.value = monitor.value+'7'; break;
//         case 'Digit8' : monitor.value = monitor.value+'8'; break;
//         case 'Digit9' : monitor.value = monitor.value+'9'; break;
//     }
// }