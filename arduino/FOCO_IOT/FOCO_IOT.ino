#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "jimena"; 
const char* password = "jimeyger197";
int led = 16;
boolean status;

IPAddress ip(192,168,1,107);
IPAddress local_ip(192,168,1,1);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

ESP8266WebServer server(3001);

void setup() {
  
  Serial.begin(115200);
  pinMode(led, OUTPUT);

  Serial.println("start");

  WiFi.begin(ssid, password);
  WiFi.config(ip, gateway, subnet);
  while (WiFi.status() != WL_CONNECTED) {

    delay(500);

    Serial.print(".");

  }
  Serial.print("IP address: ");

  Serial.println(WiFi.localIP());
  delay(100);

  server.on("/", []() {

    server.send(200, "text/plain", "this works as well");

  });
  
  server.on("/turnOn", handle_OnTurnOn);
  server.on("/turnOff", handle_OnTurnOff);
  server.onNotFound(handle_NotFound);
  server.on("/getStatus", getStatus);
  
  server.begin();
  Serial.println("HTTP server started");
}
void loop() {
  server.handleClient();
}

void handle_OnTurnOn() {
    digitalWrite(led, HIGH);
    Serial.println("ON");
    server.sendHeader("Content-Type", "text/html");
    server.sendHeader("Access-Control-Allow-Origin", "*");
    server.send(200);
    status = true; 
}

void handle_OnTurnOff(){
    digitalWrite(led, LOW);
    Serial.println("OFF");
    server.sendHeader("Content-Type", "text/html");
    server.sendHeader("Access-Control-Allow-Origin", "*");
    server.send(200); 
    status = false;
}

void handle_NotFound(){
  server.sendHeader("Content-Type", "text/html");
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(404, "text/plain", "Not found");
}

void getStatus(){
  server.sendHeader("Content-Type", "text/html");
  server.sendHeader("Access-Control-Allow-Origin", "*");
  if(status){
    server.send(200, "text/json", "{ \"status\" : true}");
  }else{
    server.send(200, "text/json", "{ \"status\" : false}");
   }
}
