'use strict'

var instance = {
	_items: [],
	set items(value){
		this._items.concat(value);
	},
	reset: function(value) {
		this._items = value;
	},
	get items(){ // reference as instance.items
		return this._items;
	},
	set item(value) {
		this._items.push(value);
	}
};


var firstItemSet = instance.items;

var pokedex = [
					{
						name: 'charmander',
						type: 'fire'
					},
					{
						name: 'squirtle',
						type: 'water'
					}
];

instance.reset(pokedex);

pokedex.forEach(function(pokemon){

	Object.defineProperty(pokemon, 'caught', {
		get: function(){
			this._caught = this._caught || '';
			return this._caught;
		},
		set: function(value){
			this._caught = value;
			return this.caught;
		}
	});

});

var abra = {
	name: 'abra',
	type: 'psychic'
};

instance.item = abra;

console.log(instance.items.length === 3);
