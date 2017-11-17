var game = {
	"obiwan": {
		"name": "Obiwan Kenobi",
		"health":120,
		"attack":8,
		"counter":12,
	},
	"luke": {
		"name": "Luke Skywalker",
		"health":100,
		"attack":12,
		"counter":5,
	},
	"sidious": {
		"name": "Darth Sidious",
		"health":150,
		"attack":20,
		"counter":20,
	},
	"maul": {
		"name": "Darth Maul",
		"health":180,
		"attack":15,
		"counter":25,
	},
	"liveCharacters": ["game.luke", "game.obiwan", "game.sidious", "game.maul"],
	"previousAttack": 0,
	"currentAttack": 0,
	"pc": "",
	"npc":"",
	"attacker": function() {
		//character selection
		$("#sky1").click(function() {
			$("#sky1").addClass("hidden");
			$("#ken1").addClass("hidden");
			$("#sid1").addClass("hidden");
			$("#maul1").addClass("hidden");
			$("#ken2").addClass("hidden");
			$("#sid2").addClass("hidden");
			$("#maul2").addClass("hidden");
			$("#sky2").removeClass("hidden");
			$("#ken3").removeClass("hidden");
			$("#sid3").removeClass("hidden");
			$("#maul3").removeClass("hidden");
			game.pc = game.luke;
		});
		$("#ken1").click(function() {
			$("#sky1").addClass("hidden");
			$("#ken1").addClass("hidden");
			$("#sid1").addClass("hidden");
			$("#maul1").addClass("hidden");
			$("#sky2").addClass("hidden");
			$("#sid2").addClass("hidden");
			$("#maul2").addClass("hidden");
			$("#ken2").removeClass("hidden");
			$("#sky3").removeClass("hidden");
			$("#sid3").removeClass("hidden");
			$("#maul3").removeClass("hidden");
			game.pc = game.obiwan;
		});
		$("#sid1").click(function() {
			$("#sky1").addClass("hidden");
			$("#ken1").addClass("hidden");
			$("#sid1").addClass("hidden");
			$("#maul1").addClass("hidden");
			$("#ken2").addClass("hidden");
			$("#sky2").addClass("hidden");
			$("#maul2").addClass("hidden");
			$("#sid2").removeClass("hidden");
			$("#ken3").removeClass("hidden");
			$("#sky3").removeClass("hidden");
			$("#maul3").removeClass("hidden");
			game.pc = game.sidious;
		});
		$("#maul1").click(function() {
			$("#sky1").addClass("hidden");
			$("#ken1").addClass("hidden");
			$("#sid1").addClass("hidden");
			$("#maul1").addClass("hidden");
			$("#ken2").addClass("hidden");
			$("#sid2").addClass("hidden");
			$("#sky2").addClass("hidden");
			$("#maul2").removeClass("hidden");
			$("#ken3").removeClass("hidden");
			$("#sid3").removeClass("hidden");
			$("#sky3").removeClass("hidden");
			game.pc = game.maul;
		});
	},
	"defender": function() {
		//enemy selection
		$("#sky3").click(function() {
			game.npc = game.luke;
			$("#sky3").addClass("hidden");
			$("#ken3").addClass("hidden");
			$("#sid3").addClass("hidden");
			$("#maul3").addClass("hidden");
			$("#sky4").removeClass("hidden");
			if (game.pc === game.obiwan) {
				$("#sidPH").removeClass("hidden");
				$("#maulPH").removeClass("hidden");
			} else if (game.pc === game.sidious) {
				$("#kenPH").removeClass("hidden");
				$("#maulPH").removeClass("hidden");
			} else {
				$("#sidPH").removeClass("hidden");
				$("#skyPH").removeClass("hidden");
			}
		});
		$("#ken3").click(function() {
			game.npc = game.obiwan;
			$("#sky3").addClass("hidden");
			$("#ken3").addClass("hidden");
			$("#sid3").addClass("hidden");
			$("#maul3").addClass("hidden");
			$("#ken4").removeClass("hidden");
			if (game.pc === game.luke) {
				$("#sidPH").removeClass("hidden");
				$("#maulPH").removeClass("hidden");
			} else if (game.pc === game.sidious) {
				$("#skyPH").removeClass("hidden");
				$("#maulPH").removeClass("hidden");
			} else {
				$("#sidPH").removeClass("hidden");
				$("#skyPH").removeClass("hidden");
			}
		});
		$("#sid3").click(function() {
			game.npc = game.sidious;
			$("#sky3").addClass("hidden");
			$("#ken3").addClass("hidden");
			$("#sid3").addClass("hidden");
			$("#maul3").addClass("hidden");
			$("#sid4").removeClass("hidden");
			if (game.pc === game.obiwan) {
				$("#skyPH").removeClass("hidden");
				$("#maulPH").removeClass("hidden");
			} else if (game.pc === game.luke) {
				$("#kenPH").removeClass("hidden");
				$("#maulPH").removeClass("hidden");
			} else {
				$("#kenPH").removeClass("hidden");
				$("#skyPH").removeClass("hidden");
			}
		});
		$("#maul3").click(function() {
			game.npc = game.maul;
			$("#sky3").addClass("hidden");
			$("#ken3").addClass("hidden");
			$("#sid3").addClass("hidden");
			$("#maul3").addClass("hidden");
			$("#maul4").removeClass("hidden");
			if (game.pc === game.obiwan) {
				$("#sidPH").removeClass("hidden");
				$("#skyPH").removeClass("hidden");
			} else if (game.pc === game.sidious) {
				$("#kenPH").removeClass("hidden");
				$("#skyPH").removeClass("hidden");
			} else {
				$("#sidPH").removeClass("hidden");
				$("#kenPH").removeClass("hidden");
			}
		});
	},
	"fight": function() {
		$("#attackButton").click(function() {
			game.currentAttack = game.pc.attack + game.previousAttack;
			game.previousAttack = game.currentAttack;
			game.pc.health = game.pc.health - game.npc.counter;
			game.npc.health = game.npc.health - game.currentAttack;
			$(".sidiousLifeDis").text(game.sidious.health);
			$(".lukeLifeDis").text(game.luke.health);
			$(".maulLifeDis").text(game.maul.health);
			$(".kenobiLifeDis").text(game.obiwan.health);
		});
	},
	// "checkDeath": function() {
	// 	if (game.pc.health <= 0) {

	// 	} else if (game.npc.health <= 0) {
	// 		if (game.npc === 'luke') {
	// 			$("#sky4").addClass("hidden");
	// 			if(game.pc === "sidious") {
	// 				$("#ken3").removeClass("hidden");
	// 				$("#maul3").removeClass("hidden");
	// 				$("#kenPH").addClass("hidden");
	// 				$("#maulPH").addClass("hidden");
	// 			} else if (game.pc === "maul") {
	// 				$("#ken3").removeClass("hidden");
	// 				$("#sid3").removeClass("hidden");
	// 				$("#kenPH").addClass("hidden");
	// 				$("#sidPH").addClass("hidden");
	// 			}

					




	// 				}
	// 		} else if (game.npc === 'obiwan') {
	// 			$("ken4").addClass("hidden");
	// 		} else if (game.npc === 'sidious') {
	// 			$("#sid").addClass("hidden");
	// 		} else {
	// 			$("#maul4").addClass("hidden");
	// 		}
	// 		game.npc = "";
	// 	}
	// }
}
game.attacker();
game.defender();
game.fight();