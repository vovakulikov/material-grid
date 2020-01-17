import React from 'react';
import { render } from 'react-dom';

import App from './app';

import './index.scss';

export type Hellp = {
  key: string;
};

render(<App />, document.querySelector('#root'));
