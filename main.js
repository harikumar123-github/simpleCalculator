const myCalculator = document.querySelector('.calc');

const myKeys = [
    ['1','2','3','+'],
    ['4','5','6','-'],
    ['7','8','9','*'],
    ['C','0','=','/']
];

const myOper = ['+','-','*','/'];
let myOutput;

document.addEventListener("DOMContentLoaded",function(){
    myOutput = document.createElement('div');
    myCalculator.appendChild(myOutput);
    myOutput.classList.add('output');
    myOutput.innerHTML = '0';

    for(let i=0;i<myKeys.length;++i){
        let newDiv = document.createElement('div');
        newDiv.classList.add('row');
        for(let j=0;j<myKeys[i].length;++j){
            let btn = document.createElement('div');
            newDiv.appendChild(btn);
            btn.classList.add('btn');
            btn.innerHTML = myKeys[i][j];
            btn.addEventListener('click',btnHit);
        }
        myCalculator.appendChild(newDiv);
    }


    function btnHit(e){
        console.log(this.innerText);
        let myValue = this.innerText;
        let myCal = myOutput.innerHTML;

        if(myValue == 'C' || myValue=='='){
            if(myValue=='C')
                myOutput.innerHTML = '0';
            else{
                myCal = eval(myCal);
                myOutput.innerHTML = myCal;
            }
            return;
        }

        if(myCal == '0'){ 
            myCal='';
        }

        let lastChar = myCal.substring(myCal.length-1);
        if(myOper.includes(myValue)){
            if(myOper.includes(lastChar)){
                myCal = myCal.substring(0,myCal.length-1);
            }
            else{
                myCal = eval(myCal);
            }
        }

        myCal += myValue;
        myOutput.innerHTML = myCal;
    }

});



