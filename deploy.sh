#!/usr/bin/env bash
echo "> FE 배포"

echo "> cd /home/ubuntu/chickenmayo"
cd /home/ubuntu/chickenmayo

echo "> node_modules install"
sudo rm -rf node_modules/
sudo npm install

echo "> npm start"
sudo npm start