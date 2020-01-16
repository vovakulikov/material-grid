import * as React from 'react';
// TODO [VK] Move this value to grid constant
const baseCellWidth = 40;
function DefinitionRow(props) {
    const { columnIds, columnMap } = props;
    return (React.createElement("colgroup", null,
        React.createElement("col", { style: { width: baseCellWidth } }),
        columnIds.forEach(id => (React.createElement("col", { style: { width: columnMap[id].width } })))));
}
export default DefinitionRow;
//# sourceMappingURL=definition-row.js.map