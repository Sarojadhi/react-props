import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import './index.css';
import Student from './Student.jsx';
import List from './List.jsx';
import Btn from './Btn'
function App() {

  return (
    <>
      <Navbar />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />  
      <Card />  
      <Card />  
      <Student  name ="Saroj" age = {21} city ="bharatpur" isstudent={true} />
      <hr />
      <hr />
      <Student  name ="Sanjaya" age = {22} city ="Narayanghat" isstudent={false} />
      <hr />
      <hr />
      <Student />
    <List />
    <hr />
    <hr />
    <Btn />
    <hr />
    <hr />
      <Footer />
    </>
  )
}
export default App;
