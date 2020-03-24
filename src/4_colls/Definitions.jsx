import { uniqueId } from 'lodash';
import React from 'react';

export default class Definition extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) return null;
    return (
      <dl>
        {data.map((item) => {
          const { dt, dd } = item;
          return (
            <React.Fragment key={uniqueId()}>
              <dt>{dt}</dt>
              <dd>{dd}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    );
  }
}