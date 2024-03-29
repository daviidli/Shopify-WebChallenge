[daviidli.github.io/Shopify-WebChallenge](http://daviidli.github.io/Shopify-WebChallenge)

## desgin

_written in Typescript with ReactJS and [Material-UI](https://material-ui.com/)_

interface for storing and searching data:
```typescript
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
```

info object interface:
```typescript
export interface IInfo {
    key: string,
    title: string,
    body: any,
    category: string,
    fav: boolean
}
```

I chose to use a `Map<string, IInfo[]>` for storing the data because it would have faster
lookup times with a key than an array. 
This only decreases the lookup time for adding and removing from favourites, 
as searching for a particular item still requires us to loop through each element to compare 
the title & keywords with the search term.

### behaviour

- clicking on the star, regardless of which panel (search results or favourites panel) will result in:
    - removing the item from favourites if it was already favourited
    - add the item to favourites if it was not already favourited

- when search bar is cleared:
    - results panel is also cleared
    - favourites panel is made larger for easier viewing 


## _Specifications_

### Web Engineer Challenge - Summer 2019

Build a web app to search for waste items using the Toronto Waste Wizard database, and save frequently used ones.

#### Instructions
- Reproduce the design as provided in the screenshot, which displays example search results.
- The data must be taken from the [Waste Wizard Lookup data (JSON)](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#5ed40494-a290-7807-d5da-09ab6a56fca2).
- Typing in the search field should *NOT* perform an API call.
- A search must be performed when hitting enter or clicking the search button.
- When the search input field is cleared, the list of results should also be cleared. 
- Performing a search should render a list of potential matching items based on keywords. Each item should:
   - Render the title and description of the item.
   - Render a grey star button *if the item is not already favourited*.
   - Render a green star icon *if the item is already favourited*.
   - Clicking the star button should add the item to the favourites list.
- When the number of favourites is more than one, the app should render a list of items. Each saved item should:
   - Render the title and description of the item.
   - Render a green star button *if the item has been favourited*.
   - Clicking the green star button should remove the item from the saved list.

#### Design

![Design](http://cdn.shopify.com/static/web-eng-challenge-summer-2019/design.png)

#### Submission

In your application, please include: 

1. A link to your codebase, for review.
2. A link to a hosted version, for testing.