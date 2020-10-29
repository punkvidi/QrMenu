import React from "react";
import { hot } from 'react-hot-loader/root';
import Input from './Menu Form/Input'
import './styles.scss'

class App extends React.Component {
  render() {
    return (
      <div>
         <Input/>
      </div>
    );
  }
}

export default hot(App);
