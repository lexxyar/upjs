import {QueryFilterSign} from "@lexxsoft/odata-query";

export interface IUpTableHeader {
    sortable?: boolean
    filterable?: boolean
    filterComparator?: QueryFilterSign
    from?: string[]
    css?: string
}
