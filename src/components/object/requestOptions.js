const RequestOptions = {
  post(props) {
    const request = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: props,
    };
    return request;
  },
};

export default RequestOptions;
