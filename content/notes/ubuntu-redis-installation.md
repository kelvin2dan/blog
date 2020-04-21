---
title: "ubuntu-redis-installation"
author: "Kelvin"
type: "Technology"
publishDate: 2020-04-21
summary: "Installation of RedisDB on Ubuntu 18.04 system."
keywords: ["Linux","Ubuntu","Bash","RedisDB"]
draft: false
---

## 1. install redis
```shell
 sudo apt-get install redis-server
```
## 2. check redis procession
```shell
 ps -agx | grep redis
```
## 3. check redis status
```shell
 netstat -nlt | grep 6379
```
## 4. start service
```shell
 sudo service redis-server start
 sudo service redis-server stop
 sudo service redis-server restart
 sudo service redis-server status
```
## 5. redis cli
```shell
 $ redis-cli
 > set key1 "hi"
 > get key1
```
## 5. default port
```
 localhost:6379
```