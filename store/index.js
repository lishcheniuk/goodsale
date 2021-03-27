export const actions = {
  async fetchAds(_, page) {
    try {
      const res = await fetch(
        `https://gorest.co.in/public-api/products?page=${page}`
      );
      return await res.json();
    } catch (e) {
      console.log(e);
      return [];
    }
  },
  async fetchAdById(_, id) {
    try {
      const res = await fetch(`https://gorest.co.in/public-api/products/${id}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
};
