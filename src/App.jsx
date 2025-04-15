import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import './index.css';
import Student from './Student.jsx';

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

      <Footer />
    </>
  )
}
export default App;
