const Food = ()=>{
    const food1 = "Orange";
    const Food2 = "Apple";
    const Food3 = "Banana";
    return(
        <>
        <div className="food-Item"></div> Items of Food :
        <ol>
            <li> Grapes </li>
            <li> Gauva</li>
            <li>{food1.toUpperCase()}</li>
            <li>{Food2.toLowerCase()}</li>
            <li>{Food3.toUpperCase()}</li>
        </ol>
        <hr />
        <hr />

        </>
    );

}
export default Food;