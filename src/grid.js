import * as React from 'react';
import DefinitionColGroup from './rows/definition-row';
import styled from 'astroturf';
// [TODO] [VK] Maybe we need move to zero runtime css in js solution
import './grid.scss';
const Button = styled('button') `
  color: black;
  border: 1px solid black;
  background-color: white;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }

  &.color-green {
    color: green;
  }
`;
class GridComponent extends React.Component {
    render() {
        const { columnIds, columnMap, rows } = this.props;
        return (React.createElement("div", { className: "grid" },
            React.createElement(Button, { color: "green" }, "Button"),
            React.createElement("table", { className: "grid__header-table" },
                React.createElement(DefinitionColGroup, { columnIds: columnIds, columnMap: columnMap }),
                React.createElement("tr", null, columnIds.map((id) => {
                    return (React.createElement("th", null, columnMap[id].title));
                }))),
            React.createElement("div", { className: "grid__body" },
                React.createElement("table", { className: "grid__body-table" },
                    React.createElement(DefinitionColGroup, { columnIds: columnIds, columnMap: columnMap }),
                    rows.map((row, index) => {
                        return (React.createElement("tr", null,
                            React.createElement("td", null, index),
                            columnIds.map((id) => {
                                return (React.createElement("td", null, row.attributes[id]));
                            })));
                    }))),
            React.createElement("table", { className: "grid__footer-table" })));
    }
}
GridComponent.defaultProps = {
    columnIds: [],
    columnMap: {},
    rows: [],
};
export default GridComponent;
// export { IProps };
//# sourceMappingURL=grid.js.map