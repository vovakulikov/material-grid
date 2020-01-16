import * as React from 'react';
import { hot } from 'react-hot-loader';

import Grid from '../src/grid';
import { IGridRow, IColumnMap } from '../src/grid-props';

import styles from './app.scss';
import Counter from './counter';

type IState = {
  rows: Array<IGridRow<TableColumn>>;
  columnIds: Array<TableColumn>;
  columnMap: IColumnMap<TableColumn>;
};

export enum TableColumn {
  title = 'title',
  status = 'status',
}

const a: Record<keyof typeof TableColumn, number> = {
  [TableColumn.title]: 1,
  [TableColumn.status]: 1,
};

console.log(a);

class App extends React.Component<Object, IState> {

  state = {
    columnIds: [TableColumn.title, TableColumn.status],
    columnMap: {
      [TableColumn.title]: {
        id: TableColumn.title,
        title: 'Title of the task project of folder',
        width: 200,
      },
      [TableColumn.status]: {
        id: TableColumn.status,
        title: 'Status of the task project of folder',
        width: 300,
      },
    },
    rows: [
      {
        attributes: {
          [TableColumn.title]: 'Task 1',
          [TableColumn.status]: 'New',
          hello: 2,
        },
      },
      {
        attributes: {
          [TableColumn.title]: 'Task 2',
          [TableColumn.status]: 'In develop',
        },
      },
      {
        attributes: {
          [TableColumn.title]: 'Task 3',
          [TableColumn.status]: 'Postpone',
        },
      },
    ],
  };

  render() {
    const { rows, columnIds, columnMap } = this.state;
    return (
      <div className={styles.gridBlock}>
        <Grid
          rows={rows}
          columnIds={columnIds}
          columnMap={columnMap}
        />

        <h1>HELLO WORLD</h1>

        <Counter />
      </div>
    );
  }
}

export default hot(module)(App);
