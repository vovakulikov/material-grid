import * as React from 'react';
import memoizeOne from 'memoize-one';

import DefinitionColGroup from './rows/definition-row';
import { IColumnId, IColumnMap, IGridProps } from './grid-props';

import styles from './grid.scss';

console.log(styles);
class GridComponent<T extends IColumnId> extends React.Component<IGridProps<T>> {

  static defaultProps = {
    columnIds: [],
    columnMap: {},
    rows: [],
  };

  getTotalWidth = memoizeOne((columnId: Array<T>, columnMap: IColumnMap<T>) =>
    columnId.reduce(
        (width, columnId) => {
          const columnWidth = columnMap[columnId] !== undefined ? columnMap[columnId].width : 0;
          return width + columnWidth;
        },
        0,
    ),
  );

  render() {
    const { columnIds, columnMap, rows } = this.props;
    const totalWidth = this.getTotalWidth(columnIds, columnMap);

    return (
      <div className={styles.grid}>

        <div className={styles.grid__header}>

          <table className={styles.grid__headerTable} style={{ width: totalWidth }}>

            <DefinitionColGroup
              columnIds={columnIds}
              columnMap={columnMap}
            />
            <thead>
            <tr>
              {/*TODO: Add a settings component here*/}
              <th></th>

              { columnIds.map((id) => {
                return (<th key={id}>{columnMap[id].title}</th>);
              }) }
            </tr>
            </thead>
          </table>
        </div>

        <div className={styles.grid__body}>

          <table className={styles.grid__bodyTable} style={{ width: totalWidth }}>

            <DefinitionColGroup
              columnIds={columnIds}
              columnMap={columnMap}
            />

            <tbody>
              {
                rows.map((row, index) => {
                  return (
                    <tr key={row.id}>
                      <td>{index}</td>
                      {
                        columnIds.map((id) => {
                          return (
                            <td key={id}>{ row.attributes[id] }</td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
        <table className="grid__footer-table"></table>
      </div>
    );
  }
}

export default GridComponent;
