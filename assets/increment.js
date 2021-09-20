
const getID=document.querySelector("#button_container");
const naem=document.querySelector("#naeem");

// const reactHtmld = React.createElement("div",null,[
//    React.createElement("p",null,"hello naeem"),
//    React.createElement("p",null,"hello khan")
//
// ]);
const Reacthtml = () => {
    const [ counter , setCounter ] =React.useState( 10 );

    return (
        <div>
            <div><h1 id="increment">{counter}</h1></div>
            <div>
                <button id="button" onMouseOver={()=>{ setCounter(counter+1)}}>increment+</button>
            </div>
        </div>
    );
}
ReactDOM.render(<div className="container">
<Reacthtml />
<Reacthtml />
<Reacthtml />
</div> ,getID);


ReactDOM.render(<div className="container2">
    <Reacthtml />
    <Reacthtml />
</div> ,naem);

