int option;
// suponemos conectado el led al pin 12
int led = 16;
void setup(){
    Serial.begin(9600);
    pinMode(led, OUTPUT);
}

//un polo al com y el otro al nc

void loop(){
  //si existe datos disponibles los leemos
  if(Serial.available()>0){
    //leemos la opcion enviada
    option=Serial.read();
    if(option=='f') {
        digitalWrite(led, LOW);
        Serial.println("OFF");
    }
    if(option=='t') {
        digitalWrite(led, HIGH);
        Serial.println("ON");
    }
  }
}
