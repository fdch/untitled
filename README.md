# UNTITLED

![untitled](https://raw.githubusercontent.com/fdch/untitled/master/img/cover.jpg "untitled")

## To run the thing

If you already have Pd (**32 bit only**, aka **_Pd-0.48-1-i386.app_**)

7. From terminal, go to this repository's directory and run "run":

```
$ cd untitled
$ ./run
```

8. Follow instructions on the "audio" patch.


## Get Pure Data 32 bit (and Gem)

On Mac:

1. Go to [msp.ucsd.edu/software.html](http://msp.ucsd.edu/software.html)

2. Download Pd-0.48-1-i386.app (You can also just click [here](http://msp.ucsd.edu/Software/pd-0.48-1-i386.mac.tar.gz))

3. Move **_Pd-0.48-1-i386.app_** to Applications and open it.

4. Go to Help > Find Externals and type "Gem"

5. Click to download the blue link which contains the following text:

```
Gem/0.93.3 (deken installable file for OSX PowerPC+i386/32bit))
	Uploaded by zmoelnig @ 2016-05-20 09:24:02
```

6. Add path, quit Pd.


## Editing the **run** command 

The run command will first run pd from terminal. 

If the pd installed on terminal is not 32 bit, then run "main-gem.pd" from a 32 bit Pd and you'll be good to go.

Or supply an argument with the path/to/pd, as in:

```
$ ./run "path/to/pd/Contents/Resources/bin/pd"
```

If you want to avoid inputting the same path every time, simply go to line 13 and edit the PDLAUNCH variable so that the path/to/pd matches yours.

```
PDLAUNCH=/Applications/Pd-0.48-1-i386.app/Contents/Resources/bin/pd

```

You can avoid GUI on the video patch, once path is correctly set, by running:

```
$ ./run nogui
```

## fch226 at nyu dot edu

Email me with questions or suggestions or whatever
