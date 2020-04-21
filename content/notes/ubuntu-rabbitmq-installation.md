---
title: "ubuntu-rabbitmq-installation"
author: "Kelvin"
type: "Technology"
publishDate: 2020-04-21
summary: "Installation of RabbitMQ on Ubuntu 18.04 system."
keywords: ["Linux","Ubuntu","Bash","RabbitMQ"]
draft: false
---

## 1. install erlang
```bash
 sudo apt-get install erlang-nox
```
## 2. install rabbitmq
```shell
 sudo apt-get udpate
 sudo apt-get install rabbitmq-server
```
## 3. start rabbitmq
```shell
 sudo rabbitmq-server start
 sudo service rabbitmq-server start
 sudo rabbitmq-server stop
 sudo service rabbitmq-server stop
 sudo rabbitmq-server restart
 sudo service rabbitmq-server restart
 sudo rabbitmqctl status
 sudo service rabbitmq-server status
```
## 4. add user & grant permission
```shell
 sudo rabbitmqctl add_user rabbit admin
 sudo rabbitmqctl set_user_tags rabbit administrator
 sudo rabbitmqctl set_permissions -p / rabbit '.*' '.*' '.*'
```
## 5. enable plugins
```shell 
 sudo rabbitmq-plugins enable rabbitmq_management
```
## 6. access website
[RabbitMQ Management](http://localhost:15672)
## 7. default port
```
 localhost:15672
```