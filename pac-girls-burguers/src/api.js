let baseUrl = "https://lab-api-bq.herokuapp.com";

export default {
  getCategories: () => {
    const data = [
      {
        id: 1,
        category: 1,
        name: "breakfast",
        title: "Café da manhã",
        image: "/assets/food-and-restaurant.png",
      },
      {
        id: 2,
        category: 2,
        name: "hamburguer",
        title: "Lanches",
        image: "/assets/food-and-restaurant.png",
      },
      {
        id: 3,
        category: 3,
        name: "side",
        title: "Acompanhamentos",
        image: "/assets/food-and-restaurant.png",
      },
      {
        id: 4,
        category: 4,
        name: "drinks",
        title: "Bebidas",
        image: "/assets/food-and-restaurant.png",
      },
    ];
    return data;
  },

  register: async (email, password, role, name) => {
    const res = await fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}&role=${role}&restaurant=PacBurguer&name=${name}`,
    });
    const data = await res.json();

    console.log(data);
    return data;
  },

  login: async (email, password) => {
    const res = await fetch(baseUrl + "/auth", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}`,
    });
    const data = res.json();
    console.log(data);
    return data;
  },

  getProducts: async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(baseUrl + "/products", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();
    return data;
  },

  postOrders: async (menu) => {
    const token = localStorage.getItem("token");

    const res = await fetch(baseUrl + "/orders", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: menu,
    });
    const data = await res.json();
    console.log(data);
    return data;
  },

  getOrders: async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(baseUrl + "/orders", {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  },
};
