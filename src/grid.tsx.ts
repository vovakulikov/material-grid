import * as React from 'react';

export type GridOwnProps = {
  columns: any[];
};

export class Grid extends React.Component<GridOwnProps> {
  constructor(props: GridOwnProps) {
    super(props);
  }
}
