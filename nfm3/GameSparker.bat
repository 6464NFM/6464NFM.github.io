@echo off
REM you may be here to solve the secure context issue...
REM please download mkcert and use command [mkcert -pkcs12 192.168.XX.XX]
REM and install on your LOCAL target device,
REM and also keep a copy in the local server root.
REM Remember, this is NOT a secure solution! Any browser you use will likely still give security warnings!

REM start /min simple-http-server -p 6464 --cert 192.168.XX.XX.p12 --certpass changeit
start /min simple-http-server -p 6464

timeout /t 1 /nobreak>nul
start http://localhost:6464/index.html
exit