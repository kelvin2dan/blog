---
title: "ubuntu-mongodb-installation"
author: "Kelvin"
type: "Technology"
publishDate: 2020-04-21
summary: "Installation of MongoDB on Ubuntu 18.04 system."
keywords: ["Linux","Ubuntu","Bash","MongoDB"]
draft: false
---

## 1. install mongodb
```shell
 sudo apt-get install mongodb
 locate mongo
```
## 2. check status
```shell
 sudo service mongodb start
 sudo service mongodb stop
 sudo service mongodb restart
 pgrep mongo -l
 sudo service mongodb status
```
## 3. mongo cli
```shell
 mongo
 > use admin
 > db.createUser(
... {
...   user: "root",
...   pwd: "admin",
...   roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
...  }
... )
Successfully added user: {
    "user" : "root",
    "roles" : [
        {
            "role" : "userAdminAnyDatabase",
            "db" : "admin"
        }
    ]
}
 > db.auth("root", "admin")
 > quit()
```
## 4. default port
```
 localhost:27017
```