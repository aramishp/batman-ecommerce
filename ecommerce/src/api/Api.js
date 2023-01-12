import axios from "axios";

export default class Api {
    #url ;

    constructor() {
        this.#url = "http://localhost:1234";
    }

    updatePassword(password, id, token) {
        return axios.post(`${this.#url}/resetpassword/${id}/${token}`, {
            password
        });
    }

    getChangePasswordPageVerified(id, token) {
        return axios.get(`${this.#url}/resetpassword/${id}/${token}`);
    }

    changePasswordEmail(email) {
        return axios.post(`${this.#url}/forgotpassword`, {
            email
        });
    }

    getNProducts() {
        return axios.get(`${this.#url}/quantity`);
    }

    getNSales() {
        return axios.get(`${this.#url}/sales/quantity`);
    }

    getNProductsCategory(category) {
        return axios.get(`${this.#url}/categories/quantity?category=${category}`);
    }

    getNSalesCategory(category) {
        return axios.get(`${this.#url}/sales/${category}/quantity`);
    }

    postDeleteProductFromTable(product, table) {
        return axios.post(`${this.#url}/delete`, {
            product,
            table
        })
    }

    postCartProduct(product) {
        return axios.post(`${this.#url}/cart`, {
            product
        })
    }

    getIsLogin() {
        return axios.get(`${this.#url}/login`);
    }

    getFavoritesById() {
        return axios.get(`${this.#url}/favorites/products`);
    }

    postDeleteWishlistProduct(product) {
        return axios.post(`${this.#url}/favorites/delete`, {
            product
        })
    }

    postWishlistProduct(product) {
        return axios.post(`${this.#url}/favorites`, {
            product
        });
    }

    getSearchedProduct(product) {
        return axios.get(`${this.#url}/search/${product}`);
    }

    getHomeProducts(minId, limit = 12) {
        return axios.get(`${this.#url}?limit=${limit}&min=${minId}`);
    }

    postLogin(email, password) {
        return axios.post(`${this.#url}/login`, {
            email, password
        });
    }

    postSign(firstname, lastname, email, password) {
        return axios.post(`${this.#url}/sign`, {
            firstname, lastname, email, password
        });
    }

    getCategoryProducts(category, minId, limit = 12) {
        return axios.get(`${this.#url}/categories/${category}?limit=${limit}&min=${minId}`);
    }

    getAllSales() {
        return axios.get(`${this.#url}/sales/all-sales`);
    }

    getCategorySales(category, minId, limit = 12) {
        return axios.get(`${this.#url}/sales/${category}?limit=${limit}&min=${minId}`)
    }

    getFavorites() {
        return axios.get(`${this.#url}/favorites`);
    }

    getCart() {
        return axios.get(`${this.#url}/cart`);
    }

    getProfile() {
        return axios.get(`${this.#url}/profile`);
    }

    getHistory() {
        return axios.get(`${this.#url}/history`);
    }
    
    getPurchases() {
        return axios.get(`${this.#url}/purchases`);
    }
}