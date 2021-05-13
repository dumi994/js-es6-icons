const oggetti = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
console.log(oggetti);



// COLORA LE ICONE PER TIPO


let animal = [], vegetable = [], user = [] ;
oggetti.forEach((oggetto) => { 
    oggetto.color
     if (oggetto.type === 'animal'){ 
         oggetto.coloreScelto = 'blue';
         animal.push(oggetto);
    }else if(oggetto.type === 'vegetable'){ 
         oggetto.coloreScelto = 'orange'
         animal.push(oggetto);
    }else {
        oggetto.coloreScelto = 'purple'
    }
}) 
console.log(animal, vegetable, user);




//cicla nell'array di oggetti e forma l'icona correttametne

let nuovoOggetto = oggetti.forEach((oggetto) => {
    console.log(oggetto.name); //dammi il nome dell'oggetto
    document.getElementById('container').insertAdjacentHTML('beforeend', `
    <div class="oggetto">
        <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.coloreScelto}"></i>
        <h4>${oggetto.name}</h4>
    </div>`)
    console.log(oggetto.family, oggetto.prefix + oggetto.name, ); //aggiungi prima della fine dell'elemento "div class ecc ecc"
}); 

