class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Your Answer Here ... ");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option = createElement('h4');

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide();
    this.option.hide();
    this.input2.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //Create html() and position() for each question, input and answers.

    var message1 = `
    Question: What can travel around the world while staying in a corner?`
    this.question.html(message1);
    this.question.position(200,height-350);

    var message2 = `
    1. An envelope
    </br> 2. A plane
    </br> 3. A stamp
    </br> 4. A map`
    this.option.html(message2);
    this.option.position(350,height-300);

    this.input2.position(400,230);

    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

      var message3 = `
      Thank you, your answer has been submitted!`
      this.message.html(message3);
      this.message.position(240,300);
    })


  }
}
