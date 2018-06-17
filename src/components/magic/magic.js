import React, {Component} from 'react';
import './magic.css';

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

class Magic extends Component {
       
    constructor() {
            super()
    this.state = {
            userQuestion: '',
            submitedQuestion: []
    }
            
        this.handleSubmit = this.handleSubmit.bind( this );
    }

        handleInput(userQuestion) {
            this.setState({
                userQuestion
            })
        }

        handleSubmit(e) {
            e.preventDefault();
            this.setState({
               userQuestion: '', 
               submitedQuestion: [...this.state.submitedQuestion, this.state.userQuestion]
            })
        }
        
    
    
    render() {

        return(

            <div>
                <div className="centerMagic">
                    <section className="stage">
                        <figure className="ball">
                            <span className="shadow"></span>
                            <span className="eight">
                                <span className="animated">
                                    {
                                            this.state.submitedQuestion.map(() => {
                                            return <span id="triangle"><div className="response">{response()}</div></span>           
                                        })
                                    }
                                </span>
                            </span>
                        </figure>
                    </section>
                </div>

            <div className="questionParent">
                <div className="centerList">
                    <form onSubmit = {(e) => {this.handleSubmit(e, this.state.userQuestion); this.setState({userQuestion: ''})}}>
                            <input className = "input"
                                placeholder = "Ask the Magic 8 Ball"
                                type = 'Text'
                                value = {this.state.userQuestion}
                                onChange = {(e) => {this.handleInput(e.target.value)}}>
                            </input>
                    </form>
                </div>

                <div>
                    <div className="btn"
                            onClick = {(e) => this.handleSubmit(e, this.state.userQuestion, response())}> SUBMIT
                    </div>
                </div>
            </div>
            <div className="askedParent">
                <div className="questionsAsked">
                                    {
                                            this.state.submitedQuestion.map((elem) => {
                                            return <div className="elem"><div>{elem}</div></div>        
                                        })
                                    }
                </div>
            </div>
            
        </div>
        )
    }
}

export default Magic;