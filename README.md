# Twitch plays chess!

All the code in this repository was written live on stream over at [twitch.tv/ctrlaltcookie](https://twitch.tv/ctrlaltcookie) 😝

## Usage notice

**WARNING**

This code directly controls your mouse and with enough messages could make it extremely difficult to exit, USE AT YOUR OWN RISK.

THIS IS POTENTIALLY DANGEROUS TO RUN.

I will provide absolutely no support and accept absolutely no liability for any damages caused by your running or installing of this code.
By continuing to install or run this code you agree that you do so entirely at your own informed risk, this readme must be distributed with all copies of the code and this warning must be prominently displayed.

## Install

In order to get running with this code you'll need to first install the required dependencies

```bash
$ npm install
```

## Running

After that in order to run the code you simply need to change the channel you wish to listen too on line 6 from `ctrlaltcookie` to yours or whoever, then run the code with

```bash
$ node ./index.js
```

This will then startup the IRC client which will listen to messages from your chat.

You'll need to have a fulslcreen webbrowser open on a 1080x1920 resolution monitor for this to work, chat will be controlling your mouse, in order to exit the program you need to hit ctrl+c with the console window active, this is a dangerous thing to let your chat do, be careful.

Chat need to send messages in the following format in order to control your mouse:

```bash
e2 to e4
e2 takes f3
```

You can change this format by editing the code starting line 111 in the function `processMoves`

## Common problems

### The grid is incorrect

It is possible that the square coordinates defined on line 16 could be incorrect, when the code loads up for the first time it will visually move your cursor over the grid, if this is in the incorrect position you'll need to adjust the grid.

The best way to do this is to comment out all of the current code and uncomment line 11 to line 14, this will spit out the coordinates of your mouse every half second, you can use this to rebuild the grid correctly.
Because chesscom change their grid consistently and because this is a dumb-harness without access to internal state and without any computer vision, this process is unfortunately required, gomenasorry.

### The install didn't work

RIP.

### I wanna support you making weird stuff like this in future

Oh neat, you're great! but to be explicit, you don't have too, however if you'd like to support me, [i have a patreon](https://www.patreon.com/funnuibunnui)
