# GameList Test for Twitch.tv

This script was made in Node.js.

To test, you need to install Node.js on your machine and run this commands:

```bash
git clone https://github.com/gabriel-lando/gamelist-generic.git
npm start
```

This will start a WebServer on port 80;

To test, open browser and access:

[localhost/?channel=CHANNEL&status=STATUS&game=GAME](localhost/?channel=CHANNEL&status=STATUS&game=GAME)

## Parameters

- channel= Twitch Channel
- status= Current Channel Status
- game= Current Game
- text= (Optional) Text to be returned to Bot

## How to use on Twitch.tv

1) Host this application in some Web Service (i.e. AWS, Azure, OpenShift).
2) In NightBot Control Pannel, add a Timer to 5 or 6 minutes with this command: <br/>
`$(customapi https://_LINK_FROM_WS_/?status=$(twitch $(channel) "{{status}}")&channel=$(channel)&game=$(twitch game $(channel)))` <br/>
changing `_LINK_FROM_WS_` to created link in Step 1;

This will send to API the current status, game and channel name every 5 or 6 minutes. This is necessary because NightBot does not allow you to edit the `!game` command to do this automatically.

3) Still in NightBot Control Pannel, create a Custom command !gamelist with: <br/>
`$(customapi https://_LINK_FROM_WS_/?status=$(twitch $(channel) "{{status}}")&channel=$(channel)&game=PrintGameList )` <br/>
The difference is in `game` parameter. The text `PrintGameList` will print the entire gamelist from this channel when is called.

FYI: The following parameters are automatically completed by the NightBot:
- `status=$(twitch $(channel) "{{status}}")`
- `channel=$(channel)`
- `game=$(twitch game $(channel))`

An example API that can be used:
[gamelist-ganelist.a3c1.starter-us-west-1.openshiftapps.com/](http://gamelist-ganelist.a3c1.starter-us-west-1.openshiftapps.com/)

NOTE: This website may become unstable if there is high traffic.