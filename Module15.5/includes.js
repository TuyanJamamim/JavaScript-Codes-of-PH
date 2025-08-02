const friends = ['Tuan','Shanto' , 'Nadim', 'Sajid','Mahin'];
console.log(friends.includes('Tuan'));//Determines whether an array includes a certain element, returning true or false as appropriate...And this is case sensitive

if(friends.includes('Tuan')) {
    console.log('party');
}
else {
    console.log('No party')
}

