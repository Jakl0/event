let event = {
    title:"Koncert Team X2",
    date:"2024-04-01",
    location:"Białystok",

}
let participant = {}
participant.name = "Jakub";
participant.email = "kubaloj222@gmail.com";
console.log(participant.name);
console.log(participant.email);
wydarzenia = [
    {
        title:"Koncert zespołu Y",
        date:"2024-07-20",
        location:"Kraków",
    },
    {
    title:"Festiwal Filmowy",
        date:"2024-08-05",
    location:"Gdańsk",
    },
    {
    title:"Wystawa Sztuki",
        date:"2024-09-10",
    location:"Wrocław",
    }
]
let nowe = {

    title:"Seminarium o JavaScript",
    date:"2024-10-15",
    location:"Łódź",
}
wydarzenia.push(nowe);
let nowe_wydarzenia = wydarzenia.slice(2);
wydarzenia.shift();
console.log(wydarzenia.length);
console.log(wydarzenia[0].title);
console.log(wydarzenia[1].title);
console.log(wydarzenia[2].title);
for(let p=0;p<3;p++){
    console.log(wydarzenia[p].date);
}