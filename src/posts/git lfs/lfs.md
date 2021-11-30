---
title: "Git LFS for Pop OS"
date: "2021-06-03"
sourcetype: "log"
imagePath: "src/posts/gitlfs"
tags: ["linux", "ErrorOfTheWeek", "git"]
excerpt: "When I was trying to install git lfs, I kept getting this error"
---

How to install GitLFS on Pop_OS! (20.04)

```
>>> curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh > gitlfs.sh
>>> chmod 775 gitlfs.sh 
>>> sudo os=ubuntu dist=focal ./gitlfs.sh 
>>> sudo apt-get install git-lfs
```

Now the command `git lfs install` should work. 