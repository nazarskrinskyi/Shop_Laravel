
export function getProducts(axios, tags, prices, categories, colors, page, products, pagination) {
    return new Promise((resolve, reject) => {
        axios.post('/api/products', {
            'tags': tags,
            'discount_prices': prices,
            'categories': categories,
            'colors': colors,
            'page': page,
        })
            .then(res => {
                products = res.data.data;
                pagination = res.data.meta;
                resolve({ products, pagination });
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
            .finally(() => {
                $(document).trigger('change');
            });
    });
}

export function getProduct(axios, popUpProduct, id) {
    return new Promise((resolve, reject) => {
        axios.get(`/api/products/${id}`)
            .then(res => {
                popUpProduct = res.data.data;
                resolve(popUpProduct);
            })
            .catch(error => {
                console.log(error.response);
                reject(error);
            })
            .finally(() => {
                $(document).trigger('change');
            });
    });
}
export function getProductDetails(axios, productId) {
    return axios.get(`/api/products/${productId}`)
        .then(res => {
            return res.data.data;
        })
        .catch(error => {
            console.log(error.response);
            throw error;
        })
        .finally(() => {
            $(document).trigger('change');
        });
}
export function getProductByColor(products, popUpProduct, color_id) {
    return new Promise((resolve) => {
        for (const product of products) {
            for (const color of product.colors) {
                if (color.id === color_id && product) {
                    popUpProduct = product;
                    resolve(popUpProduct);
                }
            }
        }
    });
}

