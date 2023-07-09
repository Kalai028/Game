'use scrict'
let secret=Math.trunc(Math.random()*20)+1;
let score=8;


document.querySelector('.check').addEventListener('click', function(){
  const num=Number(document.querySelector('.number').value);

  if(num===secret){
    let abc=document.querySelector('.sname').value;
    document.querySelector('.secretnum').textContent=secret;
    document.querySelector('.message').textContent='Yes! It\'s Correct Number 🎉';
    document.querySelector('body').style.backgroundColor='#4bcffa';
    document.querySelector('.heading').textContent=`Hey ${abc} , take this 🤌🏻💙`;
    console.log(`hellow ${abc}`);
    document.querySelector('.heading').style.backgroundColor='white';
    document.querySelector('.heading').style.borderRadius='6px';
    document.querySelector('.heading').style.boxShadow='0 0 6px black';
    document.querySelector('.heading').style.padding='18px 0';
    document.querySelector('.heading').style.color='black';
  }else if(num>secret){
    if(score>1){
        document.querySelector('.message').textContent='Not Correct, Too High';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='You Lost the game';
    }
  }
  else if(num<secret){
    if(score>1){
        document.querySelector('.message').textContent='Not Correct, Too Low';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='You Lost the game';
    }
  }
})

document.querySelector('.again').addEventListener('click', function(){
    score=8;
    secret=Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent='Start guessing';
    document.querySelector('.score').textContent=score;
    document.querySelector('.secretnum').textContent='?';
    document.querySelector('.number').value='';
    document.querySelector('.sname').value='';
    document.querySelector('body').style.backgroundColor='#34495e';
    document.querySelector('.heading').textContent='GUESS THE NUMBER IN THE BOX';

})