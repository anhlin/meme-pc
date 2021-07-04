import React, {useState} from 'react';
import './App.css';
import {MPC} from './components/MPC'

const App: React.FC = () => {

  const [timeOne, setTimeOne] = useState<string>()
  const [timeTwo, setTimeTwo] = useState<string>()

  const [urlTimeOne, setUrlTimeOne] = useState<number>()
  const [urlTimeTwo, setUrlTimeTwo] = useState<number>()

  const onSubmit = () => {
    if (timeOne && timeTwo) {
        setUrlTimeOne(parseInt(timeOne))
        setUrlTimeTwo(parseInt(timeTwo))
    }
  }

  return (
    <div className="App">
        <h1>Meme PC</h1>
        <MPC />
    </div>
  );
}

export default App;
