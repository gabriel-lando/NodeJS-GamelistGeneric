var express = require('express');
var app = express();

var port = process.env.PORT || 80;

var allGames = [[],[]];
var allChannels = [];

app.use('/', function (req, res) {
	var query = require('url').parse(req.url,true).query;

	var GamesPrint = "Incorrect parameters. Use: game=GAME status=STATUS channel=CHANNEL text=MENSAGEM!";

	if(query.game && query.status && query.channel){
		GamesPrint = query.channel + " isn't streaming right now :( Come back later!";

		//Encontrar o canal:
		var ch = 0;
		if((ch = allChannels.indexOf(query.channel)) == -1){
			allChannels.push(query.channel);
			ch = allChannels.length - 1;
		}

		if(query.status == "offline" || query.game == "ResetAllGames"){
			allGames[channel] = [];
		}

		else if(query.game == "PrintGameList"){
			if(allGames[ch].length > 0){
				GamesPrint = "Games that " + query.channel + " played today: ";
				GamesPrint += allGames[ch].join(' | ');
			}
		}

		else{
			if(allGames[ch].indexOf(query.game) == -1)
				allGames[ch].push(query.game);

			if(query.text)
				GamesPrint = query.text;
			else
				GamesPrint = "";
		}
	}

	res.status(200).send(GamesPrint);
	res.end();

});

app.listen(port, function () {
	console.log('Servidor rodando a todo pau na porta %d!', port);
});