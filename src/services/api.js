export const CallAPI = async (url,method) => {
  try { 
    const response = await fetch(url,method);
    const data = await response.json();
    return data;
  } catch (err) {
      console.log(err);
  }
}