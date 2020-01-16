import React from 'react';
import { hot } from 'react-hot-loader';
import Grid from '../src/grid';
import styles from './app.scss';
import Counter from './counter';
export var TableColumn;
(function (TableColumn) {
    TableColumn["title"] = "title";
    TableColumn["status"] = "status";
})(TableColumn || (TableColumn = {}));
const a = {
    [TableColumn.title]: 1,
    [TableColumn.status]: 1,
};
console.log(a);
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
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
    }
    render() {
        const { rows, columnIds, columnMap } = this.state;
        return (React.createElement("div", { className: styles.gridBlock },
            React.createElement(Grid, { rows: rows, columnIds: columnIds, columnMap: columnMap }),
            React.createElement("h1", null, "HELLO WORLD"),
            React.createElement(Counter, null)));
    }
}
export default hot(module)(App);
//# sourceMappingURL=app.js.map
