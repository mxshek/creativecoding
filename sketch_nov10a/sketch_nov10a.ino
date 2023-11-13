//goal: use elbow to light up light and cause blinking
//used button and blink example for reference

const int LEDPin = 13;
const int ledPin = 12;

void setup() {
  // put your setup code here, to run once:
  //this is the output or effect we want
  pinMode(LEDPin, OUTPUT);
  //we will achieve this through the switch we are creating
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

  //state of switch

  //check if elbow is on pad, if it is it should be HIGH, if not it is just nothing. 
    //turn bluegreen LED on
    digitalWrite(LEDPin, HIGH);
    delay(500);
    digitalWrite(LEDPin, LOW);
    delay(500);

    //turn orange LED on
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
    delay(1000);
  
}
