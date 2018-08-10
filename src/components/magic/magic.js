import React, {Component} from 'react';
import './magic.css';

class Magic extends Component {
       
    constructor() {
            super()
    this.state = {
            userQuestion: '',
            submitedQuestion: [],
            eightBall: ''
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

        handleAnswer() {
            var randomNumber = Math.floor(Math.random() * 8);
            var eightBall = '';
        
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

             this.setState({
                 eightBall
             })
            
        }

    render() {

        const questionsList = this.state.submitedQuestion.map((questions, i) => {
            return (
                <div key={i}><ul><li>{questions}</li></ul></div>
            )
        })

        return (

            <div>
                <div className="centerMagic"> 
                    <div className='title'>Magic 8 Ball</div>
                    <section className="stage">
                        <figure className="ball">
                            <span className="shadow"></span>
                            <span className="eight">
                                <span className="animated">
                                    <span id="triangle"><div className="response">{this.state.eightBall}</div></span>           
                                </span>
                            </span>
                        </figure>
                    </section>
                </div>

            <div className="questionParent">
                <div className="centerList">
                    <form onSubmit = {(e) => {this.handleSubmit(e, this.state.userQuestion); this.setState({userQuestion: ''}); this.handleAnswer(this.state.eightBall)}}>
                            <input className = "input"
                                placeholder = "Ask a Yes or No question to Witness the MAGIC!"
                                type = 'Text'
                                value = {this.state.userQuestion}
                                onChange = {(e) => {this.handleInput(e.target.value)}}>
                            </input>
                    </form>
                </div>
                <div>
                    <div className="btn"
                            onClick = {(e) => this.handleSubmit(e, this.state.userQuestion, this.handleAnswer(this.state.eightBall))}> SUBMIT
                    </div>
                </div>
            </div>
            <div className="askedParent">
                <div className="questionsAsked">
                                    <div className="questionsParent">
                                        <div className="questions">Your Questions:</div>
                                        <li className="elem">{questionsList}</li>
                                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Magic;