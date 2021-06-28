import React, {useState} from 'react';
import './App.css';
import {YoutubeEmbed} from './components/YoutubeEmbed';
import {TimeInput} from './components/TimeInput';
import {Button} from './components/ui-elements/Button';

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
        <YoutubeEmbed start={urlTimeOne} end={urlTimeTwo} videoId={`rokGy0huYEA`} />
        <TimeInput setTime={setTimeOne} time={timeOne} />
        <TimeInput setTime={setTimeTwo} time={timeTwo} />
        <Button onClick={onSubmit} />
    </div>
  );
}

export default App;
