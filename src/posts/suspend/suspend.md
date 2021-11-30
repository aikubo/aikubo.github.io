---
title: "Suspend on Pop_OS!/Ubuntu Razer Blade Stealth"
date: "2020-06-26"
sourcetype: "log"
imagePath: "src/posts/urc"
tags: ["linux", "pop_os!", "ErrorOfTheWeek"]
excerpt: I like many others, I had issues with suspending when my laptop lid was closed...
---

I like many others, I had issues with suspending when my laptop lid was closed. I tried a variety of solutions. But what eventually worked was to edit the logind.conf file. 

First, make a backup.
```
sudo cp /etc/systemd/logind.conf  /etc/systemd/logind.conf.bac
```

Then, edit.   

```
sudo vi /etc/systemd/logind.conf 
```
Uncomment:

```
HandleSuspendKey=suspend
HandleLidSwitch=suspend
HandleLidSwitchDocked=suspend
```

Close the lid to your heart's content.
