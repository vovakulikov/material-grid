export function isAddressEqual(first, second) {
    return first.columnId === second.columnId && first.rowKey === second.rowKey;
}
export function isGridRangeEqual(first, second) {
    return isAddressEqual(first.from, second.from) && isAddressEqual(first.to, second.to);
}
export function createColumn(column) {
    const { id, title = '', 
    // TODO [VK] Move this magic number to const service
    width = 100, minWidth = width, maxWidth = width } = column;
    return {
        id,
        title,
        width,
        maxWidth,
        minWidth,
    };
}
export var GridRowType;
(function (GridRowType) {
    GridRowType[GridRowType["group"] = 0] = "group";
    GridRowType[GridRowType["catalog"] = 1] = "catalog";
    GridRowType[GridRowType["regular"] = 2] = "regular";
    GridRowType[GridRowType["creation"] = 3] = "creation";
    GridRowType[GridRowType["total"] = 4] = "total";
})(GridRowType || (GridRowType = {}));
export var GridRowExpansion;
(function (GridRowExpansion) {
    GridRowExpansion[GridRowExpansion["regular"] = 0] = "regular";
    GridRowExpansion[GridRowExpansion["expanded"] = 1] = "expanded";
    GridRowExpansion[GridRowExpansion["collapsed"] = 2] = "collapsed";
})(GridRowExpansion || (GridRowExpansion = {}));
//# sourceMappingURL=grid-props.js.map