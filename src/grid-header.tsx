import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell, { SortDirection } from '@material-ui/core/TableCell/TableCell';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

export type GridHeaderProps = {
  orderBy: string;
  order: SortDirection;
  numSelected: number;
  rowCount: number;
  columns: any[];
  onSelectAllClick: React.EventHandler<React.SyntheticEvent>;
  onRequestSort: (property: string) => React.EventHandler<React.SyntheticEvent>;
};

export default function GridHeader(props: GridHeaderProps) {

  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    columns,
    onRequestSort,
  } = props;

  const normilizedOrder = order ? order : undefined;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={ numSelected > 0 && numSelected < rowCount }
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {
          columns.map((row: any) => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={normilizedOrder}
                    onClick={onRequestSort(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          })
        }
      </TableRow>
    </TableHead>
  );
}
