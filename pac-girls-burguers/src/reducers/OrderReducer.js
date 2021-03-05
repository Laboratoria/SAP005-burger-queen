const initialState = {
  products: [],
  menu: [],
};

export default (state = initialState, action) => {
  let products = [...state.products];
  let menu = [...state.menu];

  switch (action.type) {
    case "ADD_PRODUCT":
      let id = action.payload.data.id;
      let index = products.findIndex((item) => item.id === id);
      if (index > -1) {
        products[index].qt += action.payload.qt;
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.qt,
        });
      }
      console.log(products);
      return { ...state, products };

    case "ADD_ORDER":
      const addProducts = products.map((item) => {
        return {
          id: item.id,
          qtd: 1,
        };
      });

      const qtdProducts = addProducts.reduce((idItem, qtdItem) => {
        idItem[qtdItem.id] = idItem[qtdItem.id] || [];
        idItem[qtdItem.id].push(qtdItem);
        return idItem;
      }, Object.create(null));

      for (const [key, value] of Object.entries(qtdProducts)) {
        menu.push({
          id: key,
          qtd: value.length,
        });
      }
      return { ...state, menu };

    case "CHANGE_PRODUCT":
      if (products[action.payload.key]) {
        switch (action.payload.type) {
          case "-":
            products[action.payload.key].qt--;

            if (products[action.payload.key].qt <= 0) {
              products = products.filter(
                (item, index) => index !== action.payload.key
              );
            }
            break;
          case "+":
            products[action.payload.key].qt++;

            break;
          default:
            break;
        }
      }
      return { ...state, products };

    default:
      break;
  }
  return state;
};
