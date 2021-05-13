//Milestone 1:
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.


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



//Milestone 2 Coloriamo le icone per tipo

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
});
console.log(animal, vegetable, user);




//cicla nell'array di oggetti e forma l'icona correttametne

let nuovoOggetto = oggetti.forEach((oggetto) => {
    console.log(oggetto.name); //dammi il nome dell'oggetto
    document.getElementById('container').insertAdjacentHTML('beforeend', `
    <div class="oggetto">
        <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.coloreScelto}"></i>
        <h5>${oggetto.name}</h5>
    </div>`)
    console.log(oggetto.family, oggetto.prefix + oggetto.name, ); //aggiungi prima della fine dell'elemento "div class ecc ecc"

}); 


//Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
/* let userSelect = oggetti.filter((element, index, oggetto) => {
    if (userSelect === 'all'){
        document.getElementById('container').insertAdjacentHTML('beforeend', `
        <div class="oggetto">
            <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.coloreScelto}"></i>
            <h5>${oggetto.name}</h5>
        </div>`)
    }else if (userSelect === 'animal'){
        document.getElementById('container').insertAdjacentHTML('beforeend', `
        <div class="oggetto">
            <i class="${animal.family} ${animal.prefix}${animal.name}" style="color: ${oggetto.coloreScelto}"></i>
            <h5>${animal.name}</h5>
        </div>`)
    }
})*/


document.getElementById('categorie').addEventListener('change', function () {
    let userSelect = document.getElementById('categorie').value;
    console.log(userSelect);
    let oggettoFiltrato = oggetti.filter((element)=>{
        return element.type == userSelect
    })
    console.log(oggettoFiltrato);
    document.getElementById('container').innerHTML = "";
    if (oggettoFiltrato.length > 0){
        oggettoFiltrato.forEach((oggetto) => {
            console.log(oggetto.name); //dammi il nome dell'oggetto
            document.getElementById('container').insertAdjacentHTML('beforeend', `
            <div class="oggetto">
                <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.coloreScelto}"></i>
                <h5>${oggetto.name}</h5>
            </div>`)
            console.log(oggetto.family, oggetto.prefix + oggetto.name, ); //aggiungi prima della fine dell'elemento "div class ecc ecc"
        
        }); 
    }else{
        oggetti.forEach((oggetto) => {
            console.log(oggetto.name); //dammi il nome dell'oggetto
            document.getElementById('container').insertAdjacentHTML('beforeend', `
            <div class="oggetto">
                <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.coloreScelto}"></i>
                <h5>${oggetto.name}</h5>
            </div>`)
            console.log(oggetto.family, oggetto.prefix + oggetto.name, ); //aggiungi prima della fine dell'elemento "div class ecc ecc"
        
        }); 
    }
}); 
