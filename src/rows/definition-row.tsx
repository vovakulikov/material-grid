import * as React from 'react';
import { IColumnId, IColumnMap } from '../grid-props';

// TODO [VK] Move this value to grid constant
const baseCellWidth = 40;

export type IProps<T extends IColumnId > = {
  columnIds: Array<T>;
  columnMap: IColumnMap<T>;
};

function DefinitionRow<T extends IColumnId>(props: IProps<T>) {
  const { columnIds, columnMap } = props;

  return (
    <colgroup>
      <col style={{ width: baseCellWidth }} />

      { columnIds.map(id => (
          <col key={id} style={{ width: columnMap[id].width }}/>
      ))}
    </colgroup>
  );
}

export default DefinitionRow;
