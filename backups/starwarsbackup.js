var game = {
	// characters
	"obiwan": {
		"name": "Obiwan Kenobi",
		"health":120,
		"attack":8,
		"counter":16,
	},
	"luke": {
		"name": "Luke Skywalker",
		"health":100,
		"attack":16,
		"counter":5,
	},
	"sidious": {
		"name": "Darth Sidious",
		"health":150,
		"attack":5,
		"counter":20,
	},
	"maul": {
		"name": "Darth Maul",
		"health":180,
		"attack":3,
		"counter":25,
	},
	"previousAttack": 0,
	"currentAttack": 0,
	"pc": "",
	"npc":"",
	"hasChoosenNPC":false,
	"winCounter": 0,
	"attacker": function() {		
			//character selection
		$("#sky").click(function() {
			if ($("#sky").hasClass("box1")) {
				$("#sky").detach().prependTo("#pcDis").removeClass("box1").addClass("box2");
				$(".box1").siblings().detach().prependTo("#npcDis").removeClass("box1").addClass("box3");
				game.pc = game.luke;
				game.clickCounter++;
			} else if ($("#sky").hasClass("box3") && game.hasChoosenNPC === false) {
				$("#sky").detach().prependTo("#npcDefenderDis").removeClass("box3").addClass("box4");
				game.npc = game.luke;
				game.clickCounter++;
				game.hasChoosenNPC = true;
				$("#gameText").text("");
			}
		});
		$("#ken").click(function() {
			if ($("#ken").hasClass("box1")) {
				$("#ken").detach().prependTo("#pcDis").removeClass("box1").addClass("box2");
				$(".box1").siblings().detach().prependTo("#npcDis").removeClass("box1").addClass("box3");
				game.pc = game.obiwan;
				game.clickCounter++;
			} else if ($("#ken").hasClass("box3") && game.hasChoosenNPC === false) {
				$("#ken").detach().prependTo("#npcDefenderDis").removeClass("box3").addClass("box4");
				game.npc = game.obiwan;
				game.clickCounter++;
				game.hasChoosenNPC = true;
				$("#gameText").text("");
			}
		});
		$("#sid").click(function() {			
			if ($("#sid").hasClass("box1")) {
				$("#sid").detach().prependTo("#pcDis").removeClass("box1").addClass("box2");
				$(".box1").siblings().detach().prependTo("#npcDis").removeClass("box1").addClass("box3");
				game.pc = game.sidious;
				game.clickCounter++;
			} else if ($("#sid").hasClass("box3") && game.hasChoosenNPC === false) {
				$("#sid").detach().prependTo("#npcDefenderDis").removeClass("box3").addClass("box4");
				game.npc = game.sidious;
				game.clickCounter++;
				game.hasChoosenNPC = true;
				$("#gameText").text("");
			}
		});
		$("#maul").click(function() {
			if ($("#maul").hasClass("box1")) {
				$("#maul").detach().prependTo("#pcDis").removeClass("box1").addClass("box2");
				$(".box1").siblings().detach().prependTo("#npcDis").removeClass("box1").addClass("box3");
				game.pc = game.maul;
				game.clickCounter++;
			} else if ($("#maul").hasClass("box3") && game.hasChoosenNPC === false) {
				$("#maul").detach().prependTo("#npcDefenderDis").removeClass("box3").addClass("box4");
				game.npc = game.maul;
				game.clickCounter++;
				game.hasChoosenNPC = true;
				$("#gameText").text("");
			}
		});
	},
	
	"fight": function() {
		$("#attackButton").click(function() {
			if (game.hasChoosenNPC === true) {
				game.currentAttack = game.pc.attack + game.previousAttack;
				game.previousAttack = game.currentAttack;
				if(game.pc.health > 0 && game.npc.health > 0) {
					game.npc.health = game.npc.health - game.currentAttack;
					if(game.npc.health > 0) {
						game.pc.health = game.pc.health - game.npc.counter;
					}
					$("#gameText").html("You attacked " + game.npc.name + "for " + game.currentAttack + "damage. <br>" + game.npc.name + " attacks you back for " + game.npc.counter + " damage.");
					$(".sidiousLifeDis").text(game.sidious.health);
					$(".lukeLifeDis").text(game.luke.health);
					$(".maulLifeDis").text(game.maul.health);
					$(".kenobiLifeDis").text(game.obiwan.health);
					$(".vadLifeDis").text(game.maul.health);
					$(".yodaLifeDis").text(game.obiwan.health);
				}
			}
		var npcDeath = function () {
			if (game.npc === game.luke) {
				$("#sky").addClass("hidden box1").removeClass("box4");
			} else if (game.npc === game.obiwan) {
				$("#ken").addClass("hidden box1").removeClass("box4");
			} else if (game.npc === game.sidious) {
				$("#sid").addClass("hidden box1").removeClass("box4");
			} else if (game.npc === game.maul) {
				$("#maul").addClass("hidden box1").removeClass("box4");
			}
			game.npc = undefined;
			game.hasChoosenNPC = false;
		};
		var pcDeath = function () {
			$("#restart").removeClass('hidden');
			$("#gameText").text("You've been defeated... GAME OVER!!!");
			game.hasChoosenNPC = false;
		}
		if (game.pc.health <= 0) {			
			pcDeath();
		} else if (game.pc.health <= 0 && game.npc.health <= 0) {
			npcDeath();
			pcDeath();
		} else if (game.npc.health <= 0 && game.npc !== undefined) {
			$("#gameText").html("You have defeated " + game.npc.name + ", you can choose to fight another.");
			npcDeath();
			game.winCounter++;	
		}
		if (game.winCounter === 3) {
			$("#gameText").html("You Won!!! GAME OVER!!!");
			$("#restart").removeClass("hidden");
		}
		});
	},
	'restart': function () {
		$("#restart").on("click", function () {
			game.obiwan.health = 120;
			game.luke.health = 100;
			game.sidious.health = 150;
			game.maul.health = 180;
			game.previousAttack = 0;
			game.currentAttack = 0;
		 	game.pc = "";
			game.npc ="";
			game.hasChoosenNPC = false;
			game.winCounter = 0;
			$("#gameText").text("");
			$("#ken").detach().removeClass("box2 box3 box4 hidden").addClass("box1").appendTo("#characters");
			$("#sky").detach().removeClass("box2 box3 box4 hidden").addClass("box1").appendTo("#characters");
			$("#sid").detach().removeClass("box2 box3 box4 hidden").addClass("box1").appendTo("#characters");
			$("#maul").detach().removeClass("box2 box3 box4 hidden").addClass("box1").appendTo("#characters");
			$("#restart").addClass("hidden");
			$(".sidiousLifeDis").text(game.sidious.health);
			$(".lukeLifeDis").text(game.luke.health);
			$(".maulLifeDis").text(game.maul.health);
			$(".kenobiLifeDis").text(game.obiwan.health);
		});

	},
}
game.attacker();
game.fight();
game.restart();