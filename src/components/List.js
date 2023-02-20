import React from 'react';
import ListItem from './ListItem.js';

class List extends React.Component {

    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: "Apples"},
                {id: 2, title: "Pears"},
                {id: 3, title: "Oranges"},
                {id: 4, title: "Cherries"},
                {id: 5, title: "Bananas"}
            ]
        }
    }

    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`)
    }

    render() {
        let shoppingList = this.state.groceryItems.map((item) => {
            return <ListItem 
                    key={item.id} 
                    item={item}
                    clickItem={() => this.onItemClick(item)}
                    />
        })
        return (
            <div>
                <ul>
                    {shoppingList}
                </ul>
            </div>
        )
    }
}

export default List