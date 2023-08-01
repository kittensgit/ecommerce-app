const addItem = [];
const addItems = (state = addItem, action) => {
    switch (action.type) {
        case 'ADDITEM':
            const existingItemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingItemIndex !== -1) {
                // Если товар уже есть в корзине, то увеличиваем его количество
                const updatedState = [...state];
                updatedState[existingItemIndex] = {
                    ...updatedState[existingItemIndex],
                    quantity: updatedState[existingItemIndex].quantity + 1,
                };
                return updatedState;
            } else {
                // Иначе, добавляем новый товар в корзину
                return [...state, { ...action.payload, quantity: 1 }];
            }

        case 'DELITEM':
            return (state = state.filter((x) => {
                return x.id !== action.payload.id;
            }));

        case 'INCREASE_QUANTITY':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

        case 'DECREASE_QUANTITY':
            return state.map((item) => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

        default:
            return state;
    }
};

export default addItems;
