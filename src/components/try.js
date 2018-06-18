var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

function response() {
switch (randomNumber) {
  case 0:
    eightBall = 'IT IS DECIDEDLY SO'
  break;
  case 1:
    eightBall = 'REPLY HAZY, TRY AGAIN'
  break;
  case 2:
    eightBall = "CANNOT PREDICT NOW"
  break;
  case 3:
    eightBall = "DON'T COUNT ON IT"
  break;
  case 4:
    eightBall = "MY SOURCES SAY NO"
  break;
  case 5:
    eightBall = 'Outlook not so good'
  break;
  case 6:
    eightBall = 'SIGNS POINT TO YES'
  break
  case 7:
    eightBall = "IT IS CERTAIN"
  break;
}
return eightBall;
}

console.log(response());