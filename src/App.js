import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { CounterUp } from './components/CounterUp';
// import {useSpring, animated } from 'react-spring'

// function Number({n}){
//   const {number} = useSpring({
//     from: {number: 0},
//     number : n,
//     delay : 200,
//     config: { mass: 1 , tension: 20, friction: 10}
//   })
//   return <animated.div>
//     {number.to((n)=> n.toFixed(0))}
//   </animated.div>
// }

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      {/* <CounterUp /> */}
    </>
  );
}

export default App;
