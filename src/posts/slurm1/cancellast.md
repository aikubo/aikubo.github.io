---
title: "Slurm Shortcuts: One Command to Cancel Last Submitted Job"
date: "2020-08-18"
sourcetype: "log"
imagePath: "src/posts/slurm1"
tags: ["slurm", "linux", "hpc"]
---

TDLR; 
```
scancel $(squeue -u username -h --format="%.15A" | sort -r | head -n1)
```

As I was waiting for some code to compile I decided to help FutureMe out and figure out this handy shortcut. 
One command to cancel the last job submitted to the slurm queue. This is useful to me since I usually submit my postprocessing scripts and sometimes after submitting I realized there was an error in it :/ 

So I wanted a quick command to cancel the last job that I submitted, the solution utilizes the built in slurm commands **squeue** and **scancel** and some simple bash commands. 

First, retrieve all the JOBIDs running under your username. 
```
squeue -u username -h --format="%.15A"
```

From the slurm docs, `-h` hides the header while `--format` allows you to specify the format of the output and *A* is the flag for JOBID. 

Then use pipe that into `sort` (with the `-r` flag so that it goes from high to low) then into `head` ( with `-n1` for only the one entry). 

Then you can add this to your .bashrc file etc. 

```
alias cancellast='scancel $(squeue -u username -h --format="%.15A" | sort -r | head -n1)'
```
*With great power comes great responsibility. Use it well.* 
