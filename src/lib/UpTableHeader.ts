import {QueryFilterSign} from "@lexxsoft/odata-query";
import {IUpTableHeader} from "./interfaces/IUpTableHeader";

export class UpTableHeader {
    protected _sortable: boolean = true
    protected _filterable: boolean = true
    protected _filterComparator: QueryFilterSign = QueryFilterSign.SUBSTRINGOF
    public from: string[]
    public css: string

    public static make(key: string, title: string | null = null, options: IUpTableHeader = {}): UpTableHeader {
        return new UpTableHeader(key, title, options)
    }

    constructor(public key: string, public title: string | null = null, {
        sortable = false,
        filterable = false,
        filterComparator = QueryFilterSign.SUBSTRINGOF,
        from = [],
        css = ''
    }: IUpTableHeader = {}) {
        this.title = title === null ? key : title
        this.sortable(sortable)
            .filterable(filterable)
            .filterComparator(filterComparator)
        this.from = from
        if (from?.length === 0) {
            this.from.push(this.key)
        }
        this.css = css
    }

    public sortable(value: boolean = true): UpTableHeader {
        this._sortable = value
        return this
    }

    public isSortable(): boolean {
        return this._sortable
    }

    public filterable(value: boolean = true): UpTableHeader {
        this._filterable = value
        return this
    }

    public filterComparator(value: QueryFilterSign = QueryFilterSign.SUBSTRINGOF): UpTableHeader {
        this._filterComparator = value
        return this
    }
}
