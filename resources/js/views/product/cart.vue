<template>
    <main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url(vue_front/assets/images/814.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp  animated"
                             style="visibility: visible; animation-name: fadeInUp;">
                            <h2>Cart</h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li>
                                        <router-link to="/"><i class="flaticon-home pe-2"></i>Home</router-link>
                                    </li>
                                    <li><i class="flaticon-next"></i></li>
                                    <li class="active">Cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Breadcrumb Style2-->
        <!--Start cart area-->
        <section class="cart-area pt-120 pb-120">
            <div class="container">
                <div class="row wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="cart-table-box">
                            <div class="table-outer">
                                <table class="cart-table">
                                    <thead class="cart-header">
                                    <tr>
                                        <th class="">Product Name</th>
                                        <th class="price">Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th class="hide-me"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="product in products" :key="product.id">
                                        <td>
                                            <div class="thumb-box">
                                                <router-link :to="{name: 'product.show', params: {id: product.id}}"
                                                             class="thumb">
                                                    <img :src="product.hover_image" alt="">
                                                </router-link>
                                                <router-link :to="{name: 'product.show', params: {id: product.id}}"
                                                             class="title">
                                                    <h5> {{ product.title }} </h5>
                                                </router-link>
                                            </div>
                                        </td>
                                        <td>{{ product.discount_price ?? product.price }}</td>
                                        <td class="qty">
                                            <div class="qtySelector text-center"><span class="decreaseQty"
                                            ><i
                                                class="flaticon-minus"></i> </span> <input type="number"
                                                                                           v-model="productQuantities[product.id]"
                                                                                           class="qtyValue"> <span
                                                class="increaseQty"> <i class="flaticon-plus"></i> </span>
                                            </div>
                                        </td>
                                        <td class="sub-total">
                                            {{
                                                (product.discount_price ?? product.price) * productQuantities[product.id]
                                            }}
                                        </td>
                                        <td>
                                            <div class="remove" @click.prevent="deleteItemsByProductId(product.id)"><i
                                                class="flaticon-cross"></i></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="cart-button-box">

                            <div class="cart-button-box-right wow fadeInUp  animated"
                                 style="visibility: visible; animation-name: fadeInUp;">
                                <router-link to="/products" class="btn--primary mt-30" type="submit">Continue Shopping
                                </router-link>
                                <button class="btn--primary mt-30" @click.prevent="updateCart" type="submit">Update
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-120">
                    <div class="col-xl-6 col-lg-7 wow fadeInUp  animated"
                         style="visibility: visible; animation-name: fadeInUp;">
                        <div class="cart-total-box">
                            <div class="inner-title">
                                <h3>Cart Totals</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-xl-6 col-lg-7 wow fadeInUp  animated"
                         style="visibility: visible; animation-name: fadeInUp;">
                        <div class="cart-total-box mt-30">
                            <div class="table-outer">
                                <table class="cart-table2">
                                    <thead class="cart-header clearfix">
                                    <tr>
                                        <th colspan="1" class="shipping-title">Shipping</th>
                                        <th class="price">{{ cartTotalPrice }}£</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="shipping"> Shipping</td>
                                        <td class="selact-box1">
                                            <ul class="shop-select-option-box-1">
                                                <li><input type="checkbox" name="free_shipping" id="option_1"
                                                           checked=""> <label for="option_1"><span></span>Free
                                                    Shipping</label></li>
                                                <li><input type="checkbox" name="flat_rate" id="option_2"> <label
                                                    for="option_2"><span></span>Flat
                                                    Rate</label></li>
                                                <li><input type="checkbox" name="local_pickup" id="option_3">
                                                    <label for="option_3"><span></span>Local Pickup</label></li>
                                            </ul>
                                            <div class="inner-text">
                                                <p>Shipping options will be updated during checkout</p>
                                            </div>
                                            <h4>Calculate Shipping</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 class="total">Total</h4>
                                        </td>
                                        <td class="subtotal">{{ cartTotalPrice }}£</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 wow fadeInUp  animated"
                         style="visibility: visible; animation-name: fadeInUp;">
                        <div class="cart-check-out mt-30">
                            <h3>Check Out</h3>
                            <ul class="cart-check-out-list">
                                <li>
                                    <div class="left">
                                        <p>Subtotal</p>
                                    </div>
                                    <div class="right">
                                        <p>{{ cartTotalPrice }}£</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <p>Shipping</p>
                                    </div>
                                    <div class="right">
                                        <p><span>Flat rate:</span> $50.00</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <p>Total Price:</p>
                                    </div>
                                    <div class="center">
                                        <button class="btn--primary style2" @click.prevent="storeOrder" type="submit"
                                                v-if="user !== null && cartTotalPrice > 0">Checkout
                                        </button>
                                        <template v-else-if="cartTotalPrice === 0">
                                        <button class="btn--primary style2" @click.prevent="storeOrder" type="submit">
                                            Checkout
                                        </button>
                                        <p class="text-danger text-center">{{error}}</p>
                                        </template>

                                        <template v-else>
                                            <button class="btn--primary style2" @click.prevent="storeOrder" type="submit" disabled>Checkout</button>
                                            <p class="text-danger text-center">login first!</p>
                                        </template>
                                    </div>
                                    <div class="right">
                                        <p>{{ cartTotalPrice + Number(50) }}£</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End cart area-->
    </main>
</template>

<script>
import {
    storeOrder,
    updateCart,
    countProducts,
    calculateCartSummary,
    getProducts,
    deleteItemsByProductId,
    calculateProductQuantities,
} from '../../app/cart/cart';

export default {
    data() {
        return {
            cartItems: [],
            products: [],
            count: 0,
            user: null,
            cartTotalPrice: 0,
            productQuantities: {},
            error: null
        };
    },
    mounted() {
        $(document).trigger('change');
        this.getCartItems();
        this.countProducts();
        this.user = window.authUser;
    },
    methods: {
        storeOrder() {
            if (this.cartTotalPrice === 0) this.error = 'Your cart is empty!'
            else {
                this.error = null;
                storeOrder(this.axios, this.products, this.cartTotalPrice, this.user)
            }
        },

        updateCart() {
            updateCart(this.cartItems);
            this.getProducts();
            location.reload();
        },

        countProducts() {
            this.count = countProducts(this.cartItems);
        },

        calculateCartSummary() {
            this.cartTotalPrice = calculateCartSummary(this.cartItems, this.products);
        },

        async getProducts() {
            this.products = await getProducts(this.axios, this.cartItems);
            this.calculateProductQuantities();
            this.calculateCartSummary();
        },

        getCartItems() {
            this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            this.getProducts();
            this.countProducts();
        },

        deleteItemsByProductId(productId) {
            this.cartItems = deleteItemsByProductId(productId, this.cartItems);
            this.getCartItems();
        },

        calculateProductQuantities() {
            this.productQuantities = calculateProductQuantities(this.cartItems, this.products);
        },
    },
};
</script>
<style>

</style>
