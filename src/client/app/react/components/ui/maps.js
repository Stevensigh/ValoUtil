import React, { Component } from 'react';
import { MAPS } from 'client/app/config';

export default class Maps extends Component {
  onClickEvt = () => {

  };

  render() {
    const mapList = MAPS.map((val) => (
      <button >
        { val }
      </button>
    ));
    return (
      <div>
        {mapList}
      </div>
    );
  }
}
