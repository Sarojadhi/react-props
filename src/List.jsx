const List = () => {
    const fruit = [{ id: 1, name: "Apple", calorie: 99 },
    { id : 2, name: "Banana", calorie: 75 },
    { id : 3, name: "orange", calorie: 45 },
    { id : 4, name: "Mango", calorie: 40 }];

    // this will short array in A to z.
    //fruit.sort((a, b) => a.name.localeCompare(b.name)); 

 //   this will sort array in Z TO A . 
// fruit.sort((a, b) => b.name.localeCompare(a.name));

// sort for calories MIN TO Max
// fruit.sort((a, b) => a.calorie - b.calorie);
 
// sort for callories MAX TO MIN 
// fruit.sort((a,b ) => b.calorie - a.calorie);

// U sing filter property to filter calories
const lowcalFruit = fruit.filter (fruit => fruit.calorie < 50 ); 




   // const FruitItem = fruit.map(fruit => <li key = {fruit.id }>
    //                                                {fruit.name} : &nbsp;
    //                                                {fruit.calorie}
   //                                                 </li>);





const FruitItem = lowcalFruit.map(fruit => <li key = {fruit.id }>
    {fruit.name} : &nbsp;
    {fruit.calorie}
    </li>);


    return (<ol> {FruitItem} </ol>

    );
}
export default List; 