// console.log('file connected')
// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);
// for ( const section of sections){
//     console.log(section)
//     section.style.color = "blue";
//     section.style.backgroundColor = "lightblue";
//     section.style.margin = "5px";
//     section.style.border = "3px solid green";
//     section.style.borderRadius = "10px";
//     section.style.padding = "5px";
    
// }//.style and .classList.add these will ve appropiate to ve applied on single elements like id and Tagname(for loop elements)


//dynamic Class
for(const section of sections) {
    section.classList.add('section-card')//here a class is added to all sections and that class is declared in styles file 
}