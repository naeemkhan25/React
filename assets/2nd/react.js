const roots=document.getElementById("roots");
const roots1=document.getElementById("roots2");

const Menu=()=>{
    const [fruit,setFruit]=React.useState("");
    const [fruits,setFruits]=React.useState(["mango","apple","orange"]);
    return (
        <div className="container">
            <ul id="fruits">
                {fruits.sort().map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <input type="text" value={fruit} id="input_data" onChange={(e)=>setFruit(  e.target.value)}/>
            <button id="button_click" onClick={()=> setFruits([...fruits,fruit])}>add item</button>
        </div>
    );
};
ReactDOM.render(<Menu />,roots);
ReactDOM.render(<Menu />,roots1);
