// for add item to cart

export const addItem = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};
// for delete item from cart

export const delItem = (product) => {
    return {
        type: 'DELITEM',
        payload: product,
    };
};

// Увеличение количества товара в корзине
export const increaseItemQuantity = (itemId) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: {
            id: itemId,
        },
    };
};

// Уменьшение количества товара в корзине
export const decreaseItemQuantity = (itemId) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: {
            id: itemId,
        },
    };
};
