var playname = localStorage.getItem("playerName");

var roomArray = [
	{
		title:'Street',
		text: ' After a long day of doing nothing but relax you start heading back to your hotel. As you walk with the hordes of people who all seem to be rushing to somewhere or other you notice someone gesturing to you from a nearby alleyway, as you make eye contact they start gesturing more frantically for you to come over.',
		choices:[
			{
				text:'Ignore him and keep walking',
				index:2
			},
			{
				text:'Walk over to him',
				index:1
			}
		]
	},
	{
		title:'Alleyway',
		text:"As you start walking towards the man he looks a lot more relaxed. As soon as you're within earshot he starts talking, \"Thank you so much for not ignoring me, I have a message for you...\" he then pauses suddenly as if the weight of the world rests on what he says next, \"My boss wants to meet you and offer you a job...I don't know the details so don't bother asking and just follow me.\"",
		choices:[
			{
				text:'Accept',
				index:8
			},
			{
				text:'Walk away',
				index:2
			}
		]
	},
	{
		title:'Street',
		text:'You remember the last time you tried to help someone as crazy looking as him and that ended with three dead clowns, a horde of genetically modified cats and you getting chased off a planet so you decide to keep walking. As you turn and keep walking you notice out of the corner of your eye the man using his his phone. As you approach your hotel two shady looking men grab you and give you an injection which makes you feel extremely tired and slowly pass out.',
		choices:[
			{
				text:'Wake up',
				index:3
			}
		]
	},
	{
		title:'Basement',
		text:'You wake up in rough looking basement type room with only one door, a small window letting some light in, a larger metal set of drawers and a chair.',
		choices:[
			{
				text:'Investigate window',
				index:4
			},
			{
				text:'Investigate drawers',
				index:5
			},
			{
				text:'Investigate chair',
				index:6
			},
			{
				text:'Investigate door',
				index:7
			},
			{
				text:'Finish looking around',
				index:8
			}
		]
	},
	{
		title:'Basement',
		text:'Looking out of the window you can see that you have gone from the nice area you were staying at to a extremely rough area of Lazdona and you start to wonder how long you were passed out.',
		choices:[
			{
				text:'Look at something else',
				index:3
			}
		]
	},
	{
		title:'Basement',
		text:"The drawers are unlocked so you open them and see that they contain all you would need to torture someone, the items range from rusty blades, hammers, garrote wire and other painful looking items. You weren't wearing anything that would allow you to hide any of them so you decide not to take any also it would help not to anger who ever wanted you here.",
		choices:[
			{
				text:'Look at something else',
				index:3
			}
		]
	},
	{
		title:'Basement',
		text:"The chair is a simple chair but it seems to have blood splatter on it...",
		choices:[
			{
				text:'Look at something else',
				index:3
			}
		]
	},
	{
		title:'Basement',
		text:"The door is solid metal and doesn't seem to have a handle on the side you're on.",
		choices:[
			{
				text:'Look at something else',
				index:3
			}
		]
	},
	{
		title:'Basement',
		text:'"After way too much waiting around the door opens and a well dressed woman with a shaved head and two heavily armed robot bodyguards enter the room. "Now ' + playname + ' lets get right down to business, I want you to kill Aaron Wardson, the current head of the Trini technology company."',
		choices:[
			{
				text:'Accept',
				index:9
			},
			{
				text:'Ask why',
				index:10
			},
			{
				text:'refuse',
				index:11
			}
		]
	},
	{
		title:'Basement',
		text:'"Alright I will do it." you say calmly. "I thought I would have to be more....persuasive." the mysterious woman said menacingly. "Here is his schedule, decide how to take care of it however you want."',
		choices:[
			{
				text:'Leave and plan your attack',
				index:12
			}
		]
	},
	{
		title:'Basement',
		text:'"Why do you want him dead?" you ask hoping that you will get an answer. "Why does anyone do anything..." she responds "For more power. so will you do it or not?"',
		choices:[
			{
				text:'Accept',
				index:9
			},
			{
				text:'refuse',
				index:11
			}
		]
	},
	{
		title:'Basement',
		text:'"No." you say defiantly and starting to walk towards the door. "Fine I will just have to be a bit more persuasive...Restrain him." the two robot bodyguards then spring into action and grab you and move you to the chair where they hold you in place.',
		choices:[
			{
				text:'Torture time',
				index:12
			},
		]
	},
	{
		title:'Basement',
		text:'As the robots hold you in place the mysterious woman shows that she is not afraid to get her hands dirty and starts by hitting you with all her strength in the face and stomach which winds you and starts to make your vision go blurry.Then she grabs the hammer and starts swinging at your ribs trying to break them. "Now then...Want to give me a new answer?" she asks menacingly',
		choices:[
			{
				text:'Accept',
				index:9
			},
			{
				text:'Refuse Again',
				index:13
			},
		]
	},
	{
		title:'Basement',
		text:'"No..." you say weakly but still defiant. "Fine then...You brought this upon yourself" she says bringing the knife out of the set of drawers and in one quick movement slits your throat.',
		choices:[
			{
				text:'Die',
				index:52
			},
		]
	},
	{
		title:'Basement/Hotel',
		text:'As the mysterious woman leaves she leaves the door open for you to leave as well. After you wait for a few minutes to make sure she has gone you step outside into the street and head back your hotel to think about your next move',
		choices:[
			{
				text:'Proceed with the job',
				index:19
			},
			{
				text:'Research the mysterious woman',
				index:16
			},
		]
	},
	{
		title:'Basement/Hotel',
		text:'As the mysterious woman leaves she leaves the door open for you to leave as well. After you wait for a few minutes to make sure she has gone you step outside into the street and head back your hotel to think about your next move',
		choices:[
			{
				text:'Proceed with the job',
				index:19
			},
			{
				text:'Research the mysterious woman',
				index:16
			},
		]
	},
]
