#!/bin/bash
cd /home/ec2-user/server
sudo npm start
sudo pm2 start npm --name "dufrontent" -- start
sudo pm2 startup
sudo pm2 save
sudo pm2 restart all