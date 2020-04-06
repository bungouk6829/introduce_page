
var cardNum = 10;
var cards = document.getElementsByClassName('card');
var cardPrevValue = 0;
var cardPrev = null;
var cardNext = null;
var SuccessCnt = 0;


function reset(){
  SuccessCnt = 0;
  for(var i=0; i<cardNum; i++){
    cards[i].innerHTML = "<img src='static/resource/back.png'width='200px' height='200px'>";
  }
  var randNums1 = [];
  for(var i=0; i<cardNum/2;i++){
    randNums1[i] = Math.floor(Math.random() * 5) + 1;
    for(var o=0; o<i; o++){
      if(randNums1[i]==randNums1[o]){
        i--;
      }
    }
  }
  var randNums2 = [];
  for(var i=0; i<cardNum/2;i++){
    randNums2[i] = Math.floor(Math.random() * 5) + 1;
    for(var o=0; o<i; o++){
      if(randNums2[i]==randNums2[o]){
        i--;
      }
    }
  }
  for(var i=0; i<cardNum/2;i++){
    cards[i].setAttribute('value',randNums1[i]);
  }
  for(var i=cardNum/2; i<cardNum;i++){
    cards[i].setAttribute('value',randNums2[i-(cardNum/2)]);
  }
}

function isEqual(value){
    if(value==cardPrevValue){
      SuccessCnt+=1;
      cardPrevValue=0;
      cardPrev=null;
      cardNext=null;
      if(SuccessCnt == 5){
        alert('모두 맞추셨습니다!');
      }
    }
    else{
      cardPrevValue= 0;
      cardPrev.innerHTML="<img src='static/resource/back.png'width='200px' height='200px'>";
      cardNext.innerHTML="<img src='static/resource/back.png'width='200px' height='200px'>";
      cardPrev=null;
      cardNext=null;
    }
}

function game(){
  for(var i=0; i<cardNum;i++){
    cards[i].onclick = function(event){
      var value = this.getAttribute('value');
      switch (value) {
        case '1':
          this.innerHTML = "<img src='static/resource/card1.png'width='200px' height='200px'>";
          if(cardPrevValue==0){
            cardPrev = this;
            cardPrevValue = 1;
          }
          else{
            cardNext= this;
            setTimeout(function() {
              isEqual(1);
            }, 500);
          }
          break;
        case '2':
          this.innerHTML = "<img src='static/resource/card2.png'width='200px' height='200px'>";
          if(cardPrevValue==0){
            cardPrev = this;
            cardPrevValue = 2;
          }
          else{
            cardNext= this;
            setTimeout(function() {
              isEqual(2);
            }, 500);
          }
          break;
        case '3':
          this.innerHTML = "<img src='static/resource/card3.png'width='200px' height='200px'>";
          if(cardPrevValue==0){
            cardPrev = this;
            cardPrevValue = 3;
          }
          else{
            cardNext= this;
            setTimeout(function() {
              isEqual(3);
            }, 500);

          }
          break;
        case '4':
          this.innerHTML = "<img src='static/resource/card4.png'width='200px' height='200px'>";
          if(cardPrevValue==0){
            cardPrev = this;
            cardPrevValue = 4;
          }
          else{
            cardNext= this;
            setTimeout(function() {
              isEqual(4);
            }, 500);
          }
          break;
        case '5':
          this.innerHTML = "<img src='static/resource/card5.png'width='200px' height='200px'>";
          if(cardPrevValue==0){
            cardPrev = this;
            cardPrevValue = 5;
          }
          else{
            cardNext= this;
            setTimeout(function() {
              isEqual(5);
            }, 500);
          }
          break;
      }
    }
  }
}



function gameStart(){
  reset();
  game();
}
