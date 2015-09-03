'use strict'

var instance = {
	_items: [],
	set items(value){
		this._items.concat(value);
	},
	reset: function(value) {
		this._items = value;
	},
	get items(){
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

// this will not make a change in _items, need to do it with getters and setters
var squirtle = instance.items[1].caught = true;

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

})
