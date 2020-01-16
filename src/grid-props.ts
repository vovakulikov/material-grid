
export type IColumnId = string | number;
export type IRowKey = string;

export type IGridColumn = {
  id: IColumnId;
  title: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
};

export type IGridRange = {
  from: IGridAddress,
  to: IGridAddress,
};

export function isAddressEqual(first: IGridAddress, second: IGridAddress) {
  return first.columnId === second.columnId && first.rowKey === second.rowKey;
}

export function isGridRangeEqual(first: IGridRange, second: IGridRange) {
  return isAddressEqual(first.from, second.from) && isAddressEqual(first.to, second.to);
}

export function createColumn(column: IGridColumn): IGridColumn {
  const {
    id,
    title = '',
    // TODO [VK] Move this magic number to const service
    width = 100,
    minWidth = width,
    maxWidth = width } = column;

  return {
    id,
    title,
    width,
    maxWidth,
    minWidth,
  };
}

export type IGridAddress = {
  rowKey: IRowKey,
  columnId: IColumnId,
};

export type IColumnMap<T extends IColumnId> = Record<T, IGridColumn>;
export type IExpansionMap = Record<IColumnId, boolean>;

export type IGridProps<T extends IColumnId> = {
  // masterId: IColumnId,
  // creationId: IColumnId;
  // totalId: IColumnId;
  // groupingIds: Array<IColumnId>,
  // expansionMap: IExpansionMap,
  // focus: IGridAddress,
  // highlight: IGridAddress,

  columnIds: Array<T>;
  columnMap: IColumnMap<T>;
  rows: Array<IGridRow<T>>
};

export enum GridRowType {
  group,
  catalog,
  regular,
  creation,
  total,
}

export enum GridRowExpansion {
  regular,
  expanded,
  collapsed,
}

export type IGridRow<K extends IColumnId, V = IGridAttributeValue> = {
  attributes: Record<K, V>,
  children?: Array<IGridRow<K, V>>,
};

export type IGridAttributeValue = string | number;
