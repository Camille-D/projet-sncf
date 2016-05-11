app.controller('myCtrl', function($scope) {

		$scope.services = [
			{ "image": "image/10vin.png",
			"title": "D.Vine",
			"texte": "Découvrez D‑VINE,la première machine de dégustation de vin au verre qui aère et met à température le vin de vos flacons. Vivez une expérience inédite avec ce sommelier connecté, testé et approuvé par des passionnés, amateurs et professionnels.",
			"produit": "image/sevenhugs.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "http://www.10-vins.com/d-vine"
			},

			{ "image": "image/bellabeat.png",
			"title": "Bellebeat",
			"texte": "We believe that every woman has the potential to achieve greatness. To achieve greatness, our bodies need to work to their full potential and our minds need to be clear and productive. The LEAF was built to help you discover your hidden potential.",
			"produit": "image/feeltact.jpg",
			"texte_produit" : "The health-tracking technology connects your body and mind, allowing you to reach your full potential. Track your daily activity, sleep, mindfulness and menstrual cycles. With the LEAF, important and essential information about your health is always available.",
			"url" : "https://www.bellabeat.com"
		},
			{ "image": "image/bragi.png",
			"title": "Bragi",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/dash.jpg",
			"texte_produit" : "The Dash is a wireless smart earphone that combines 3 essential features in 1 product.",
			"url" : "http://www.bragi.com/"
		},

			{ "image": "image/chipolo.png",
			"title": "Chipolo",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/chipolo.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "https://chipolo.net/"
		},
			{ "image": "image/devialet.png",
			"title": "Devialet",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/phantom.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "http://phantom.devialet.com/"
		},

			{ "image": "image/dodow.png",
			"title": "Dodow",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/dodow.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "https://www.mydodow.com/"
		},
			{ "image": "image/dualo.png",
			"title": "Dualo",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/dualo.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "https://dualo.org/"
		},

			{ "image": "image/kyon.png",
			"title": "Kyon",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/kyon.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "http://www.kyon.ch/"
		},
			{ "image": "image/makeblock.png",
			"title": "Makeblock",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/codeybot.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "http://www.makeblock.cc/"
		},

			{ "image": "image/mimo.png",
			"title": "Mimo",
			"texte": "Mimo uses the best sensor technology available to tell you how your baby is breathing as well as their body position. It’s the first product to provide alerts and send nightly reports little one’s sleep, and it uses your smartphone to connect all your caregivers and keep you connected. Mimo helps everyone in the family get more quality sleep.",
			"produit": "image/feeltact.jpg",
			"texte_produit" : "The nursery just got smarter: Mimo now works with select Nest products to provide you with additional peace of mind. If the baby is too warm, adjust the nursery temperature with your Nest Learning Thermostat. Are they moving? Check in on them with your NestCam. Better ways to stay connected and live smarter, all from one place.",
			"url" : "http://www.scoop.it"
		},
			{ "image": "image/mybiody.png",
			"title": "My Biody",
			"texte": "	Vous voulez un appareil pour toute la famille. MYBIODY est multi-utilisateur, il peut être utilisé par toute la famille et vous permet de tester tout votre entourage.",
			"produit": "image/152587-MBB fond blanc-4dbec6-original-1420022548.jpg",
			"texte_produit" : "MYBIODY est une technologie française et exclusive qui permet d’analyser immédiatement notre santé corporelle. A chaque checkup, MYBIODY délivre un bilan corporel, une analyse personnalisée et des conseils pour améliorer votre forme et notre santé.",
			"url" : "http://www.mybiody.com/"
		},

			{ "image": "image/netatmo.png",
			"title": "Netatmo",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit":  "image/sevenhugs.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "https://www.netatmo.com/"
		},
			{ "image": "image/novitact.png",
			"title": "Novitact",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/feeltact.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "https://www.novitact.com"
		},

			{ "image": "image/optinvent.png",
			"title": "Optinvent",
			"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
			"produit": "image/152587-MBB fond blanc-4dbec6-original-1420022548.jpg",
			"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"url" : "http://www.optinvent.com/"
		},
		{ "image": "image/petnet.png",
		"title": "Petnet",
		"texte": "Manage feeding times, portion sizes, food supply and have your pet’s food delivered to your doorstep.",
		"produit": "image/152587-MBB fond blanc-4dbec6-original-1420022548.jpg",
		"texte_produit" : "Manage feeding times, portion sizes, food supply and have your pet’s food delivered to your doorstep.",
		"url" : "http://www.petnet.io/"
	},

		{ "image": "image/prynt.png",
		"title": "Prynt",
		"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
		"produit": "image/prynt.jpg",
		"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"url" : "https://www.prynt.co/"
	},
		{ "image": "image/ripple.png",
		"title": "Ripple",
		"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
		"produit": "image/152587-MBB fond blanc-4dbec6-original-1420022548.jpg",
		"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"url" : "https://ripple.com/"
	},

		{ "image": "image/scribble.png",
		"title": "Scribble",
		"texte": "The Dash is a wireless smart earphone that combines 3 essential features in 1 product. Listen. A one-touch standalone music player. ",
		"produit": "image/dash.jpg",
		"texte_produit" : "Experience the world’s first wireless smart earphones.",
		"url" : "https://thescribblepen.com/"
	},
		{ "image": "image/sensorwake.png",
		"title": "Sensorwake",
		"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
		"produit": "image/152587-MBB fond blanc-4dbec6-original-1420022548.jpg",
		"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"url" : "https://sensorwake.com"
	},

		{ "image": "image/sevenhugs.png",
		"title": "Sevenhugs",
		"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
		"produit": "image/sevenhugs.jpg",
		"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"url" : "http://sevenhugs.com/fr/"
	}
		]
});
