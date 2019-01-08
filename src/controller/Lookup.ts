import {data} from "../data/data";
import {IInfo, ILookup} from "./ILookup";

export default class Lookup implements ILookup {
    private readonly data: Map<string, IInfo>;
    private fav: Map<string, IInfo>;

    constructor() {
        this.data = new Map<string, IInfo>();
        this.fav = new Map<string, IInfo>();
    }

    public loadData(): Map<string, IInfo> {
        data.forEach((entry: any) => {
            const parser = new DOMParser();
            const body = parser.parseFromString(entry.body, "text/html");

            this.data.set(entry.keywords, {
                key: entry.keywords,
                title: entry.title,
                body: body.body.innerText,
                category: entry.category,
                fav: false
            });
        });

        return this.data;
    }

    public searchItem(search: string): IInfo[] {
        const results: IInfo[] = [];

        this.data.forEach((value: IInfo, key: string) => {
            if (key.indexOf(search) > -1 || value.title.indexOf(search) > -1) {
                results.push(value);
            }
        });

        return results;
    }

    public addFavourite(key: string): IInfo[] {
        this.fav.set(key, this.flipFav(key));
        return Array.from(this.fav.values());
    }

    public removeFavourite(key: string): IInfo[] {
        this.flipFav(key);
        this.fav.delete(key);
        return Array.from(this.fav.values());
    }

    private flipFav(key: string): IInfo {
        const entry = this.data.get(key);

        if (entry == undefined) {
            throw Error("entry doesn't exist")
        }

        entry.fav = !entry.fav;
        this.data.set(key, entry);

        return entry;
    }
}