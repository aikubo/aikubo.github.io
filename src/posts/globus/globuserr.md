---
title: "Globus tcllib not found Error"
date: "2020-07-2"
sourcetype: "log"
imagePath: "src/posts/globus"
tags: ["linux", "ErrorOfTheWeek", "globus"]
---

## Error of the Week
When I was trying to install globus connect using the downloaded script I was getting this error:

```
>>> Tcllib not found.
The Globus Connect Personal GUI requires Tcllib.
Please install Tcllib using your distributions package management system.
On Debian based systems (e.g. Ubunutu):
  apt-get install tcllib
On Redhat based systems (e.g. CentOS, Fedora):
  yum install tcllib
 Note: if you encounter an error about tcllib not being
 available, it can be found here and installed manually:
 http://www.tcl.tk/software/tcllib/
You may also run Globus Connect Personal in CLI mode.
Please use the -help option or visit http://globus.org/globus-connect-personal/
for more information.

```
Okay simple enough slap an ` apt install ` on that bad boy. 

```
sudo apt install tcllib tcl tk
```
But I kept getting:

```
>>> Tcllib not found
```

## Solution

Turns out it is an issue with the conda environment. The work around is to specify the path to tcllib then run globus connect. 

### Step 1 

Not sure if this is necessary for everyone but I had to do it. Open up and change the interpereter for the python script gc.py and gc-ctrl.py

The first line for me was 
```
#!/usr/bin/env python
```
I replaced it with 

```
#!/usr/bin/python2.7
```

### Step 2

Specify the path when running globus. I found this vis [this StackExchange](https://askubuntu.com/questions/1115411/globus-personal-connect-tcllib-installed-but-keeps-showing-tcllib-not-found). Credit to @N0bert. 


```
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games" ./globusconnect
```

I added this as a alias in my `.bashrc` file for ease with this line:

```
alias globus='PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games" PATH_TO_SCRIPT/globusconnect'

```


## Diagnosing this issue 

Check tcllib is installed :


```
>>> dpkg -l | grep tcl
ii  libtcl8.6:amd64                                  8.6.10+dfsg-1                                        amd64        Tcl (the Tool Command Language) v8.6 - run-time library files
ii  partclone                                        0.3.13+dfsg-4                                        amd64        Utility to clone and restore a partition
ii  tcl                                              8.6.9+1                                              amd64        Tool Command Language (default version) - shell
ii  tcl8.6                                           8.6.10+dfsg-1                                        amd64        Tcl (the Tool Command Language) v8.6 - shell
ii  tcllib                                           1.20+dfsg-1                                          all          Standard Tcl Library

```

So it is installed. But where is it ?


```
>>> whereis tcllib
tcllib:
```

Test out this command to see if you can use parts of tcllib

```
>>> echo 'puts $auto_path; package req csv' | tclsh
/home/usr/anaconda3/lib/tcl8.6 /home/usr/anaconda3/lib
can't find package csv
```

If you get somepath with anaconda then you know it might be an environments/conda issue. 

## Why does this solution work? 

For some reason the conda environments mess with globus' use of tcllib so we have to avoid them completely. Maybe if you are more conda savvy than me you can figure out how to conda magic it so this isn't an issue. I did try several `conda env` commands with no luck. 

The `env` of **Step 1** is a command that looks for the default version of a program. 

The results of `env` command:
```
>>> env | grep "PATH"
PATH=/home/usr/anaconda3/bin:/home/usr/anaconda3/condabin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
```

My default is anaconda's python version which I couldn't get working so the changed it to just plain `python` skirts this issue. Then you also have to tell it the correct path to the library. 

Hopefully I will have time soon to dive into conda environments so I don't have this issue again. 