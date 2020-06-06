const categories = (categories = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCEEDED': 
          return action.categories
        default:
          return categories
    }
}

const category = (product = [], {type, payload}) =>{
    switch (type) {
        case 'FETCH_CATEGORY_SUCCEEDED':
          return payload
        default:
          return products
    }
}
export{
    categories,
    category
}