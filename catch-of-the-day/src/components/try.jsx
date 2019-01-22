const House ="Apartment"; 
const people ="Mom & Children";
const Resident = <span>Dad & {people}</span>
const Answer = <div>this {House} live with {Resident}, there hobbies are + hobbyList.hobby1 </div>
function name(hobbyList) {
    return hobbyList.hobby1;
}
// function hobby(params) {
//     <p>{}</p>
// }
const hobbyList = {
    hobby1: "Reading books",
    hobby2: "Swimming"
}
ReactDOM.render(Answer,document.getElementById('root'))



const family = {
    count : "4",
    contact : "22366585"
};

function Home (family){
    return <div>total member is {family.count}</div>
};

const output = (
    <div>{Home(family)}</div> 
);
ReactDOM.render(output,document.getElementById('root'))