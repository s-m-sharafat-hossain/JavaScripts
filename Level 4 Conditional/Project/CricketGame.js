
document.getElementById('b1').onclick= function(){
    
    const userChoice = 'You Have chosen Bat';

    let randomNumber = Math.random()*3
    let computerChoice;
    if(randomNumber>0 && randomNumber<=1){
        computerChoice = 'Bat';
        console.log('Computer choice is Bat');
    }else if(randomNumber>1 && randomNumber<=2){
        computerChoice = 'Ball'
        console.log('Computer Choice is Ball.')
    }else{
        computerChoice='Stump'
        console.log('Computer Choice is Stump.');
    }
    const computerMassage= `Computer Choice ${computerChoice}`;
    
    //now match with user choice
    let resultMassage;
    if(computerChoice=== 'Ball'){
        resultMassage= 'User Won'
    }else if(computerChoice === 'Bat'){
        resultMassage = 'Tie'
    }else if(computerChoice === 'Stump'){
        resultMassage = 'Computer won'
    }

    alert(`${userChoice}\n\n${computerMassage}\n\n${resultMassage}`);
}

//For Ball

document.getElementById('b2').onclick= function(){
    
    const userChoice = 'You Have chosen Ball';

    let randomNumber = Math.random()*3
    let computerChoice;
    if(randomNumber>0 && randomNumber<=1){
        computerChoice = 'Bat';
        console.log('Computer choice is Bat');
    }else if(randomNumber>1 && randomNumber<=2){
        computerChoice = 'Ball'
        console.log('Computer Choice is Ball.')
    }else{
        computerChoice='Stump'
        console.log('Computer Choice is Stump.');
    }
    const computerMassage= `Computer Choice ${computerChoice}`;
    
    //now match with user choice
    let resultMassage;
    if(computerChoice=== 'Bat'){
        resultMassage= 'User Won'
    }else if(computerChoice === 'Ball'){
        resultMassage = 'Tie'
    }else if(computerChoice === 'Stump'){
        resultMassage = 'Computer won'
    }

    alert(`${userChoice}\n\n${computerMassage}\n\n${resultMassage}`);
}
//For Ball

document.getElementById('b3').onclick= function(){
    
    const userChoice = 'You Have chosen Stump';

    let randomNumber = Math.random()*3
    let computerChoice;
    if(randomNumber>0 && randomNumber<=1){
        computerChoice = 'Bat';
        console.log('Computer choice is Bat');
    }else if(randomNumber>1 && randomNumber<=2){
        computerChoice = 'Ball'
        console.log('Computer Choice is Ball.')
    }else{
        computerChoice='Stump'
        console.log('Computer Choice is Stump.');
    }
    const computerMassage= `Computer Choice ${computerChoice}`;
    
    //now match with user choice
    let resultMassage;
    if(computerChoice=== 'Ball'){
        resultMassage= 'User Won'
    }else if(computerChoice === 'Stump'){
        resultMassage = 'Tie'
    }else if(computerChoice === 'Bat'){
        resultMassage = 'Computer won'
    }

    alert(`${userChoice}\n\n${computerMassage}\n\n${resultMassage}`);
}