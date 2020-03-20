import React, { Component } from 'react';
import { render } from 'react-dom';

import { Feed, Button} from '../../src/index';

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>act-component Demo</h1>
        <Feed />
        <Button />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
