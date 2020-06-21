import React, { Component } from 'react';
import { AGENTS } from 'client/app/config';

export default class Agents extends Component {
  onClickEvt = () => {

  };

  render() {
    const names = AGENTS.map((val) => (
      <div>
        { val }
      </div>
    ));
    return (
      <button onClick={this.onClickEvt}>
        {names}
      </button>
    );
  }
}
