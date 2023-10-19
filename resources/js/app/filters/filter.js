


export function filterProducts(prices, getProducts) {
    return new Promise((resolve) => {
        prices = $('#priceRange').val().replaceAll(/[\s]|[£]/g, '').split('-');
        getProducts().then((products) => {
            resolve(products);
        });
    });
}

export function addColor(id, colors) {
    return new Promise((resolve) => {
        const index = colors.indexOf(id);

        if (index === -1) {
            colors.push(id);
        } else {
            colors.splice(index, 1);
        }

        const activeColorIds = [...colors]; // Create a copy of the colors array
        resolve({ colors, activeColorIds });
    });
}

export function addTag(id, tags, activeTagIds) {
    return new Promise((resolve) => {
        const index = activeTagIds.indexOf(id);
        if (index === -1) {
            tags.push(id);
            activeTagIds.push(id);
        } else {
            tags.splice(index, 1);
            activeTagIds.splice(index, 1);
        }
        resolve({ tags, activeTagIds });
    });
}


export function tagsCheck(tags1, tags2) {
    return new Promise((resolve) => {
        let check = null;
        for (const tag1 in tags1) {
            for (const tag2 in tags2) {
                if (tag1.id === tag2.id) {
                    check = true;
                } else {
                    check = false;
                    resolve(check);
                }
            }
        }
        resolve(check);
    });
}
export function getFilters(axios, filters) {
    return new Promise((resolve, reject) => {
        axios.get('/api/products/filters')
            .then(res => {
                filters = res.data;
                if ($("#price-range").length) {
                    $("#price-range").slider({
                        range: true,
                        min: filters.price.min_discount ?? filters.price.min,
                        max: filters.price.max,
                        values: [
                            filters.price.min_discount ?? filters.price.min,
                            filters.price.max
                        ],
                        slide: function (event, ui) {
                            $("#priceRange").val("£" + ui.values[0] + " - £" + ui.values[1]);
                        }
                    });
                    console.log(filters.price.min_discount ?? filters.price.min);
                    console.log(filters.price.min_discount ?? filters.price.min);
                    $("#priceRange").val("£" + $("#price-range").slider("values", 0) + " - £" + $("#price-range").slider("values", 1));
                }
                resolve(filters);
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
