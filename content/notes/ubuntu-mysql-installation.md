---
title: "ubuntu-mysql-installation"
author: "Kelvin"
type: "Technology"
publishDate: 2020-04-21
summary: "Installation of MySql on Ubuntu 18.04 system."
keywords: ["Linux","Ubuntu","Bash","MySql"]
draft: false
---

## 1. install mysql
```shell
 sudo apt-get update
 sudo apt-get install mysql-server
```
## 2. configure mysql
```shell
 sudo mysql_secure_installation
 #1 N
 #2 Enter password
 #3 N
 #4 Y
 #5 Y
 #6 Y
```
## 3. check status
```shell
 sudo service mysql start
 sudo service mysql stop
 sudo service mysql restart
 sudo service mysql status
```
## 4. access mysql
```shell
 sudo mysql -uroot -p
 # Enter password
 > use mysql;
 > update user set host='%' where user='root';
 > grant all privileges on *.* to 'root'@'%' identified by 'admin';
 > flush privileges;
 > quit;
```
## 5. default port
```
 localhost:3306
```