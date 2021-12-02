---
title: "Multithreading for ImageMagick"
date: "2021-12-01"
sourcetype: "log"
imagePath: "src/posts/imagemagick_mp"
tags: ["linux", "ErrorOfTheWeek", "imageprocessing"]
excerpt: "Benchmarking, trying to improve making gits"
---
Today, I investigate ImageMagick multithreading using OpenMP.

My machine has 4 cores, each of which has two threads for the equivlant of 8 cores. 
(Intel i7-1065G7 (8) at 3.900GHz)

Running the benchmark test yields:
```
$ convert logo: -resize 500% -bench 10 logo.png
Performance[1]: 10i 1.570ips 1.000000e 6.350000u 0:06.370
Performance[2]: 10i 1.905ips 0.548193e 6.630000u 0:05.250
Performance[3]: 10i 2.008ips 0.561233e 7.200000u 0:04.980
Performance[4]: 10i 2.053ips 0.566726e 7.890000u 0:04.870
Performance[5]: 10i 2.004ips 0.560739e 9.400000u 0:04.990
Performance[6]: 10i 2.066ips 0.568243e 9.410000u 0:04.840
Performance[7]: 10i 2.092ips 0.571300e 9.850000u 0:04.780
Performance[8]: 10i 2.033ips 0.564216e 10.780000u 0:04.920

```
So it is properly accessing the multhreading, there are 8 detected cores. But if we note the 3rd column - ips (iterations per second)- it doesn't increase much after 3 cores. So under these circumstanses using 8 cores doesn't help at all, in fact it just uses them unneccesarily. 

I want to try and optimize it but for now I will just set the thread limit to 2. 


```
$ cat /etc/environment
MAGICK_THREAD_LIMIT=2 # add this line

```

So I didn't really make any progress on making the image processing faster :(
The end.
 
