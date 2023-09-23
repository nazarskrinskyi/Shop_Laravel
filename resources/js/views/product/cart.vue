<template>
  <main class="overflow-hidden ">
    <!--Start Breadcrumb Style2-->
    <section class="breadcrumb-area" style="background-image: url(../../../../public/vue_front/assets/images/814.jpg);">
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
                        <router-link :to="{name: 'product.show', params: {id: product.id}}" class="thumb">
                          <img :src="product.hover_image" alt="">
                        </router-link>
                        <router-link :to="{name: 'product.show', params: {id: product.id}}" class="title">
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
                      {{ (product.discount_price ?? product.price) * productQuantities[product.id] }}
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
              <div class="apply-coupon wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
                <div class="apply-coupon-input-box mt-30 "><input type="text" name="coupon-code" value=""
                                                                  placeholder="Coupon Code"></div>
                <div class="apply-coupon-button mt-30">
                  <button class="btn--primary style2" type="submit">Apply Coupon</button>
                </div>
              </div>
              <div class="cart-button-box-right wow fadeInUp  animated"
                   style="visibility: visible; animation-name: fadeInUp;">
                <router-link to="/products" class="btn--primary mt-30" type="submit">Continue Shopping</router-link>
                <button class="btn--primary mt-30" @click.prevent="updateCart" type="submit">Update Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-120">
          <div class="col-xl-6 col-lg-7 wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
            <div class="cart-total-box">
              <div class="inner-title">
                <h3>Cart Totals</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt--30">
          <div class="col-xl-6 col-lg-7 wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
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
                        <li><input type="checkbox" name="free_shipping" id="option_1" checked=""> <label for="option_1"><span></span>Free
                          Shipping</label></li>
                        <li><input type="checkbox" name="flat_rate" id="option_2"> <label for="option_2"><span></span>Flat
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
          <div class="col-xl-6 col-lg-5 wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
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
                    <button class="btn--primary style2" @click.prevent="storeOrder" type="submit">Checkout</button>
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
export default {
  data() {
    return {
      cartItems: [],
      products: [],
      count: 0,
      cartTotalPrice: 0,  // Total price including discount prices
      productQuantities: {}, // Object to store product quantities by id
    };
  },
  mounted() {
    $(document).trigger('change')
    this.getCartItems();
    this.countProducts()
    // Load the existing product quantities from local storage when the component is mounted
    // ... other code ...
  },
  methods: {
    storeOrder() {
      this.axios
          .post('http://127.0.0.1:8000/api/orders', {
            products: this.products,
            email: 'nazarharosh@gmail.com',
            name: "Nazar",
            address: "Ukraine",
            total_price: this.cartTotalPrice,
          })
          .then(res => {
            console.log(res)
            localStorage.removeItem('cart');
            location.reload();
          })
          .catch(error => {
            console.log(error.response);
          })
          .finally(() => {
            $(document).trigger('change');
          });
    },
    // Update the cart with the new quantities
    updateCart() {
      // Retrieve the existing cart items from local storage
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      let i = 0;
      // Update the quantities of cart items in local storage
      cartItems.forEach(cartItem => {
        console.log(cartItem)
        let qty = $('.qtyValue').map(function() {
          return $(this).val();
        }).get()[i];
        i++;
        cartItem.qty = qty;
      });

      // Save the updated cart items back to local storage
      localStorage.setItem('cart', JSON.stringify(cartItems));
      this.getProducts()
      location.reload();
    },

    countProducts() {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const uniqueProductIds = new Set();

      cartItems.forEach(cartItem => {
        uniqueProductIds.add(cartItem.id);
      });

      const productCount = uniqueProductIds.size;

      console.log(productCount);
      this.count = productCount; // Assuming you want to store the count in a 'count' data property
    },


    calculateCartSummary(products) {
      this.cartTotalPrice = 0; // Initialize cart total price

      this.cartItems.forEach(cartItem => {
        const productId = cartItem.id;

        const product = products.find(p => p.id === productId);
        if (product) {
          const price = product.discount_price || product.price; // Use discount price if available, otherwise regular price
          this.cartTotalPrice += price * cartItem.qty; // Calculate total price
        }
      });
    },
    getProducts() {
      const ids = this.cartItems.map(elem => {
        return elem.id
      });
      this.axios
          .post('http://127.0.0.1:8000/api/products', {
            id: ids,
          })
          .then(res => {
            this.products = res.data.data;
            console.log(this.products)
            this.calculateProductQuantities(); // Calculate product quantities after getting products
            this.calculateCartSummary(this.products)
          })
          .catch(error => {
            console.log(error.response);
          })
          .finally(() => {
            $(document).trigger('change');
          });
    },
    getCartItems() {
      this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      this.getProducts();
      this.countProducts()
    },

    deleteItemsByProductId(productId) {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      // Filter out items that match the specified product id
      const updatedCartItems = cartItems.filter(item => item.id !== productId);

      // Update the local storage with the filtered items
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));

      // Update the cartItems data property to reflect the changes
      this.cartItems = updatedCartItems;

      this.getCartItems();
    },

    calculateProductQuantities() {
      // Reset the product quantities object
      this.productQuantities = {};

      // Loop through cartItems and calculate quantities based on product id
      this.cartItems.forEach(cartItem => {
        const productId = cartItem.id;
        const product = this.products.find(p => p.id === productId);
        if (product) {
          // If the product is found, calculate the quantity
          this.productQuantities[productId] = cartItem.qty;
        }
      });
    },
  },
};
</script>
<style>

</style>
