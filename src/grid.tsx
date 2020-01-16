import * as React from 'react';

import DefinitionColGroup from './rows/definition-row';
import { IColumnId, IGridProps } from './grid-props';
// [TODO] [VK] Maybe we need move to zero runtime css in js solution
import './grid.scss';

class GridComponent<T extends IColumnId> extends React.Component<IGridProps<T>> {

  static defaultProps = {
    columnIds: [],
    columnMap: {},
    rows: [],
  };

  render() {
    const { columnIds, columnMap, rows } = this.props;

    return (
      <div className="grid">
        <table className="grid__header-table">

          <DefinitionColGroup
            columnIds={columnIds}
            columnMap={columnMap}
          />

          <tr>
            <td></td>

            { columnIds.map((id) => {
              return (<th>{columnMap[id].title}</th>);
            }) }
          </tr>
        </table>
        <div className="grid__body">

          <table className="grid__body-table">

            <DefinitionColGroup
              columnIds={columnIds}
              columnMap={columnMap}
            />

            {
              rows.map((row, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    {
                      columnIds.map((id) => {
                        return (
                          <td>{ row.attributes[id] }</td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </table>
        </div>
        <table className="grid__footer-table"></table>
      </div>
    );
  }
}

export default GridComponent;
// export { IProps };
