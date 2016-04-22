import * as types from './actionTypes';
import * as Jsondata  from '../reducers/testJsonData';

export function CellDefaultStyle() {
    return {
        type:types.LIST_CELL_DEFAULT_STYLE,
        data:Jsondata.JsonData,
    };
}

export function CellCustomStyle() {
    return {
        type:types.LIST_CELL_COSTOM_STYLE,
        data:Jsondata.JsonData,
    };
}
