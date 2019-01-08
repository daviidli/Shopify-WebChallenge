export interface IInfo {
    key: string,
    title: string,
    body: any,
    category: string,
    fav: boolean
}

export interface ILookup {
    /**
     * Load raw data into IInfo object.
     *
     * @return Map <string, IInfo>  Returns Map of all data with keywords as the key.
     */
    loadData(): Map<string, IInfo>;

    /**
     * Search for search string in data (title and keywords). Partial matches are accepted.
     *
     * @param search: string    The search string to search for in data
     *
     * @return IInfo[]          All data that contain matches are returned in array.
     */
    searchItem(search: string): IInfo[];

    /**
     * Adds an entry to the favourites list.
     *
     * @param key: string   The keyword of the entry to be added to the favourites list.
     *
     * @return IInfo[]      Returns the entire favourites list with selected entry added.
     */
    addFavourite(key: string): IInfo[];

    /**
     * Removes an entry from the favourites list.
     *
     * @param key: string   The keyword of the entry to be removed from the favourites list.
     *
     * @return IInfo[]      Returns the entire favourites list with selected entry removed.
     */
    removeFavourite(key: string): IInfo[];
}