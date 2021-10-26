#define ESP_AT_DEBUG_OUTPUT Serial
#define ESP_AT_DEBUG    true
#if !( defined(ARDUINO_AVR_MEGA) || defined(ARDUINO_AVR_MEGA2560) )
#endif

// ยังอยู่ในขั้นตอนการเทสเพราะโค้ดwifimanagerเพราะโค้ดwifimanagerของบอร์ดmegeยังมีน้อยมากๆในการใช้โค้ดบางตัวจึงยังมีการลองผิดถูกและปรับแก้อยู่
#define EspSerial Serial3
#if defined(ARDUINO_AVR_MEGA2560)
#define BOARD_TYPE      "AVR Mega2560"
#else
#define BOARD_TYPE      "AVR Mega"
#endif

// ไม่มีแผ่นร้อนจึงทดลองไม่ได้_ของได้วันพฤหัสนี้ค่า_
int resetwifi = 8;
int pat1 = __;
//int pat2 = __;

void setup() 
{
// Open serial communications and wait for port to open:
  Serial.begin(9600);
  
  pinMode(resetwifi,INPUT_PULLUP);
  WiFiManager wifiManager

  for (int i= 1; i> 0 ; i--){
    delay (1000);
  }
    if (digitalRead(resetwifi) == LOW){
      Serial.println("Reset WiFi"); // printlnเป็นการแสดงผลหน้าโยที่จะขึ้นบรรทัดใหม่ให้(เห็นได้ชัดหากได้แสดงผลในSerialmonitor)
      wifiManager.resetSettings (); // กรณีที่อยากเซ็ตWiFiใหม่เข้าไปคล้ายกับการที่เราจะเปลี่ยนWiFiจากอีกอันไปใช้อีกอันอันนี้ก็จะคล้ายกันเพื่อในกรณีที่ขณะใช้แล้วมีการเปลี่ยนWiFiมันก็จะสามารถทำการเปลี่ยนได้เลยแต่ทั้งนี้ก็ยังได้การทดลองอยู่
    }
    wifiManager.autoConnect ("Test Pass"); // ต่อเมื่อได้มีการเชื่อมต่อเรียบร้อย
  pinMode(pat1, OUTPUT); //กำหนดโหมดให้เป็น Output
  digitalWrite(pat1, LOW);
}
void loop() // run over and over
{
  if (Serial.available()) // ตรวจสอบว่ามีข้อมูลเข้ามาหรือไม่
    test = Serial.read();
  else if (test == '0') //ถ้าข้อมูลที่เข้ามาคือให้ทำงานตามที่กำหนด
  {
    digitalWrite(pat1, LOW);
    Serial.print("OFF");
    Serial.println(test);
  }
  else if (test == '1')
  {
    digitalWrite(pat1, HIGH);
    Serial.print("ON");
    Serial.println(test);
  }
}
