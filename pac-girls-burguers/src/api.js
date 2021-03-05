let baseUrl = "https://lab-api-bq.herokuapp.com";

export default {
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
