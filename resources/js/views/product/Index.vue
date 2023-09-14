<template>

  <main class="overflow-hidden ">
    <!--Start Breadcrumb Style2-->
    <div class="breadcrumb-area" style="background-image: url(src/assets/images/814.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
              <h2>Products</h2>
              <div class="breadcrumb-menu">
                <ul>
                  <li><a href="/"><i class="flaticon-home pe-2"></i>Home</a></li>
                  <li><i class="flaticon-next"></i></li>
                  <li class="active">Main page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Breadcrumb Style2-->
    <!--Start Product Categories One-->
    <section class="product-categories-one pb-60">
      <div class="container">
        <div class="row wow fadeInUp animated">
          <div class="col-xl-12">
            <div class="product-categories-one__inner">
              <ul>
                <li v-for="category in filters.categories">
                  <a href="#0" class="img-box">
                    <div class="inner"><img src="src/assets/images/shop/product-categories-v1-img1.png" alt=""/></div>
                  </a>
                  <div class="title"><a href="#0">
                    <h6>{{ category.title }}</h6>
                  </a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Product Categories One-->
    <!--Start product-grid-->
    <div class="product-grid pt-60 pb-120">
      <div class="container">
        <div class="row gx-4">
          <div class="col-xl-3 col-lg-4">
            <div class="shop-grid-sidebar" :class="{ 'active': isSidebarActive }">
              <button class="remove-sidebar d-lg-none d-block" @click.prevent="toggleSidebar"><i
                  class="flaticon-cross"> </i></button>
              <div class="sidebar-holder">
                <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
                  <div class="footer-input-box p-0 "><input type="email" placeholder="Email address"
                                                            name="email">
                    <button type="submit" class="subscribe_btn"><i
                        class="flaticon-magnifying-glass"></i></button>
                  </div>
                </form>
                <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
                  <h4>Select Categories</h4>
                  <div class="checkbox-item">
                    <form>
                      <div class="form-group" v-for="category in filters.categories">
                        <input type="checkbox" :id="category.id" :value="category.id" v-model="categories"> <label
                          :for="category.id">{{ category.title }}</label>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="single-sidebar-box mt-30 wow fadeInUp animated">
                  <h4>Color Option </h4>
                  <ul class="color-option">
                    <li v-for="color in filters.colors">
                      <a href="#0" @click.prevent="addColor(color.id)" :style="`background: #${color.title}`"
                         class="color-option-single">
                        <span>{{ color.title }}</span>
                      </a></li>
                  </ul>
                </div>
                <div class="single-sidebar-box mt-30 wow fadeInUp animated">
                  <h4>Filter By Price</h4>
                  <div class="slider-box">
                    <div id="price-range" class="slider"></div>
                    <div class="output-price"><label for="priceRange">Price:</label>
                      <input type="text" id="priceRange" readonly></div>
                    <button class="filterbtn" @click.prevent="filterProducts"
                            type="submit"> Filter
                    </button>
                  </div>
                </div>
                <div class="single-sidebar-box mt-10 wow fadeInUp animated pb-0 border-bottom-0 "
                     style="margin-bottom: 50px; margin-left: 10px">
                  <h4>Tags </h4>
                  <ul class="popular-tag">
                    <li v-for="tag in filters.tags"><a @click.prevent="addTag(tag.id)" href="#0">{{ tag.title }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="row">
              <div class="col-xl-12">
                <div
                    class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                  <div class="left-box wow fadeInUp animated">
                    <p>Showing 1–12 of 50 Results</p>
                  </div>
                  <div
                      class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                    <div class="short-by">
                      <div class="select-box">
                        <select class="wide">
                          <option data-display="Short by latest">Featured</option>
                          <option value="1">Best selling</option>
                          <option value="2">Alphabetically, A-Z</option>
                        </select>
                      </div>
                    </div>
                    <div class="product-view-style d-flex justify-content-md-between justify-content-center">
                      <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-grid-tab"
                                  data-bs-toggle="pill" data-bs-target="#pills-grid" type="button"
                                  role="tab" aria-selected="true">
                            <i class="flaticon-grid"></i>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-list-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-list" type="button" role="tab"
                                  aria-selected="false">
                            <i class="flaticon-list"></i>
                          </button>
                        </li>
                      </ul>
                      <button class="slidebarfilter d-lg-none d-flex"><i class="flaticon-edit"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="tab-content" id="pills-tabContent">


                  <div class="tab-pane fade show active" id="pills-grid" role="tabpanel"
                       aria-labelledby="pills-grid-tab">
                    <div class="row">
                      <div class="col-xl-4 col-lg-6 col-6 " v-for="product in products">
                        <div class="products-three-single w-100 h-100 mt-30">
                          <div class="products-three-single-img">
                            <router-link :to="{name: 'product.show', params: {id: product.id}}" class="d-block">
                              <img :src="product.preview_image" class="first-img" alt=""/>
                              <img :src="product.hover_image"
                                   alt="" class="hover-img"/>
                            </router-link>
                            <div class="products-grid-one__badge-box">
                            </div>
                            <a href="cart.html" class="addcart btn--primary style2" @click.prevent="addToCart(product.id)">
                              Add To Cart </a>
                            <div class="products-grid__usefull-links">
                              <ul>
                                <li><a href="wishlist.html"> <i class="flaticon-heart">
                                </i> <span>
                                                                            wishlist</span> </a></li>
                                <li><a href="compare.html"> <i
                                    class="flaticon-left-and-right-arrows"></i>
                                  <span>
                                                                            compare</span> </a></li>
                                <li><a @click="getProduct(product.id)" :href="`#popup${product.id}`" class="popup_link">
                                  <i
                                      class="flaticon-visibility"></i>
                                  <span> quick view</span>
                                </a></li>
                              </ul>
                            </div>
                          </div>


                          <div :id="`#popup${product.id}`" v-if="popUpProduct"
                               class="product-gird__quick-view-popup mfp-hide">
                            <div class="container">
                              <div class="row justify-content-between align-items-center">
                                <div class="col-lg-6">
                                  <div class="quick-view__left-content">
                                    <div class="tabs">
                                      <div class="popup-product-thumb-box">
                                        <ul>
                                          <li
                                              class="tab-nav popup-product-thumb">
                                            <a href="#tabb1">
                                              <img src="src/assets/images/shop/products-v6-img5.jpg"
                                                   alt=""/> </a></li>
                                          <li
                                              class="tab-nav popup-product-thumb ">
                                            <a href="#tabb2">
                                              <img src="src/assets/images/shop/products-v6-img6.jpg"
                                                   alt=""/> </a></li>
                                          <li
                                              class="tab-nav popup-product-thumb ">
                                            <a href="#tabb3">
                                              <img src="src/assets/images/shop/products-v6-img7.jpg"
                                                   alt=""/> </a></li>
                                        </ul>
                                      </div>
                                      <div class="popup-product-main-image-box">
                                        <div id="tabb1"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/products-v6-img5.jpg"
                                                 alt=""/></div>
                                        </div>

                                        <button class="prev"><i
                                            class="flaticon-back"></i>
                                        </button>
                                        <button class="next"><i
                                            class="flaticon-next"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="popup-right-content">
                                    <h3>Brown Office Shoe</h3>
                                    <div class="ratting"><i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i>
                                      <i class="flaticon-star"></i> <i
                                          class="flaticon-star"></i>
                                      <span>(112)</span></div>
                                    <p class="text"> Hydrating Plumping Intense
                                      Shine Lip Colour
                                    </p>
                                    <div class="price">
                                      <h2> $42 USD
                                        <del> $65 USD</del>
                                      </h2>
                                      <h6> In stuck</h6>
                                    </div>
                                    <div class="color-varient"><a href="#0"
                                                                  class="color-name pink">
                                      <span>Pink</span> </a> <a href="#0"
                                                                class="color-name red">
                                      <span>Red</span> </a>
                                      <a href="#0"
                                         class="color-name yellow"><span>Yellow</span>
                                      </a> <a href="#0" class="color-name blue">
                                        <span>Blue</span>
                                      </a> <a href="#0" class="color-name black">
                                        <span>Black</span> </a></div>
                                    <div class="add-product">
                                      <h6>Qty:</h6>
                                      <div class="button-group">
                                        <div class="qtySelector text-center">
                                                                                    <span class="decreaseQty"><i
                                                                                        class="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                                   class="qtyValue"
                                                                                                   value="1"/>
                                          <span class="increaseQty"> <i
                                              class="flaticon-plus"></i>
                                                                                    </span></div>
                                        <button class="btn--primary "> Add to
                                          Cart
                                        </button>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="products-three-single-content text-center">
                            <span></span>
                            <h5><router-link :to="{name: 'product.show', params: {id: product.id}}"> {{ product.title }} </router-link>
                            </h5>
                            <p class="d-flex">
                              <del v-if="product.discount_price" style="margin-right: 5px">{{ product.price }}£</del>
                              <div v-if="!product.discount_price">{{ product.price }}£</div>
                              <div v-if="product.discount_price">{{ product.discount_price }}£</div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="tab-pane fade" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab">
                    <div class="row ">
                      <div class="col-12">
                        <div class="product-grid-two list mt-30 " v-for="product in products" v-if="products">
                          <div class="product-grid-two__img">
                            <router-link :to="{name: 'product.show', params: {id: product.id}}" class="d-block">
                              <img :src="product.preview_image" class="first-img" alt=""/>
                              <img :src="product.hover_image"
                                   alt="" class="hover-img"/>
                            </router-link>
                          </div>


                          <div :id="`popup${product.id}`" v-if="popUpProduct"
                               class="product-gird__quick-view-popup mfp-hide">
                            <div class="container">
                              <div class="row justify-content-between align-items-center">
                                <div class="col-lg-6">
                                  <div class="quick-view__left-content">
                                    <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                                      <div class="popup-product-thumb-box">
                                        <ul role="tablist"
                                            class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                          <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
                                              role="tab" tabindex="0" aria-controls="tabb11" aria-labelledby="ui-id-64"
                                              aria-selected="true" aria-expanded="true">
                                            <a href="#tabb11" tabindex="-1" class="ui-tabs-anchor" id="ui-id-64"> <img
                                                :src="popUpProduct.preview_image" alt=""> </a></li>
                                          <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                              role="tab" tabindex="-1" aria-controls="tabb22" aria-labelledby="ui-id-65"
                                              aria-selected="false" aria-expanded="false">
                                            <a href="#tabb22" tabindex="-1" class="ui-tabs-anchor" id="ui-id-65"> <img
                                                :src="popUpProduct.hover_image" alt=""> </a></li>
                                        </ul>
                                      </div>
                                      <div class="popup-product-main-image-box">
                                        <div id="tabb11" class="tab-item popup-product-image">
                                          <div class="popup-product-single-image">
                                            <img :src="popUpProduct.preview_image" alt=""></div>
                                        </div>
                                        <div id="tabb22" class="tab-item popup-product-image">
                                          <div class="popup-product-single-image">
                                            <img :src="popUpProduct.hover_image" alt=""></div>
                                        </div>
                                        <button class="prev"><i class="flaticon-back"></i>
                                        </button>
                                        <button class="next"><i class="flaticon-next"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="popup-right-content">
                                    <h3>{{ popUpProduct.title }}</h3>
                                    <div class="ratting"><i class="flaticon-star"></i> <i class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i class="flaticon-star"></i> <i
                                        class="flaticon-star"></i>
                                      <span>({{ popUpProduct.quantity }})</span></div>
                                    <p class="text" v-if="popUpProduct.category">{{ popUpProduct.category.title }}</p>
                                    <div class="price">
                                      <h2 class="d-flex">
                                        <del v-if="popUpProduct.discount_price" style="margin-right: 5px">
                                          {{ popUpProduct.price }}£
                                        </del>
                                        <div v-if="!popUpProduct.discount_price">{{ popUpProduct.price }}£</div>
                                        <div v-if="popUpProduct.discount_price">{{ popUpProduct.discount_price }}£</div>
                                      </h2>
                                      <h6> In stuck</h6>
                                    </div>
                                    <div class="color-varient">
                                      <template v-for="color_product in products" v-if="popUpProduct.category">
                                        <template v-if="tagsCheck(color_product.tags, popUpProduct.tags)">
                                          <a v-if="popUpProduct.id !== color_product.id && popUpProduct.category.id === color_product.category.id"
                                             v-for="color in color_product.colors"
                                             @click.prevent="getProductByColor(color.id)" href='#' class="color-name"
                                             :style="`background: #${color.title}`">
                                            <span>{{ color.title }}</span>
                                          </a>
                                        </template>
                                      </template>
                                    </div>

                                    <div class="add-product">
                                      <h6>Qty:</h6>
                                      <div class="button-group">
                                        <div class="qtySelector text-center">
                                                                                    <span class="decreaseQty"><i
                                                                                        class="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                                   class="qtyValue"
                                                                                                   value="1">
                                          <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                                                    </span></div>
                                        <button class="btn--primary " @click.prevent="addToCart(product.id)"> Add to Cart
                                        </button>
                                      </div>
                                    </div>
                                    <div class="payment-method"><a href="#0"> <img
                                        src="src/assets/images/payment_method/method_1.png" alt=""> </a> <a href="#0">
                                      <img src="src/assets/images/payment_method/method_2.png" alt=""> </a> <a
                                        href="#0"> <img src="src/assets/images/payment_method/method_3.png" alt=""> </a>
                                      <a href="#0"> <img src="src/assets/images/payment_method/method_4.png" alt="">
                                      </a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="product-grid-two-content text-center" v-if="product">
                            <span>{{ product.category.title }}</span>
                            <h5>
                              <router-link :to="{name: 'product.show', params: {id: product.id}}"> {{ product.title }} </router-link>
                            </h5>
                            <p class="d-flex">
                              <del v-if="product.discount_price" style="margin-right: 5px">{{ product.price }}£</del>
                              <div v-if="!product.discount_price">{{ product.price }}£</div>
                              <div v-if="product.discount_price">{{ product.discount_price }}£</div>
                            </p>
                            <p class="text">{{ product.description }}</p>
                            <div class="product-grid-two__overlay-box">
                              <div class="title">
                                <h6><a href="#" @click.prevent="addToCart(product.id)">Add To Cart</a></h6>
                              </div>
                              <div class="icon">
                                <ul>
                                  <li><a :href="`#popup${product.id}`" class="popup_link"><i
                                      class="flaticon-eye"></i></a></li>
                                  <li><a href="wishlist.html"><i
                                      class="flaticon-heart"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
                <ul class="pagination text-center" v-if="pagination">
                  <li class="previous" v-if="pagination.current_page !== 1">
                    <a @click.prevent="getProducts(pagination.current_page - 1)" href="#">
                      <i class="flaticon-left-arrow-1" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li v-for="link in pagination.links">
                    <template v-if="Number(link.label) === 1 || Number(link.label) === pagination.last_page || Math.abs(pagination.current_page - link.label) < 2">
                      <a href="#" v-if="Number(link.label)" @click.prevent="getProducts(link.label)" :class="link.active ? 'active' : ''">{{ link.label }}</a>
                    </template>
                    <template v-else-if="Number(link.label) !== 1 && Number(link.label) !== pagination.last_page">
                      <a v-if="Math.abs(pagination.current_page - link.label) === 2">...</a>
                    </template>
                  </li>

                  <li class="next" v-if="pagination.current_page !== pagination.last_page">
                    <a @click.prevent="getProducts(pagination.current_page + 1)">
                      <i class="flaticon-next-1" aria-hidden="true"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End product-grid-->
  </main>
</template>

<script>


import {ca} from "wait-on/exampleConfig";

export default {
  mounted() {
    $(document).trigger('change')
    this.getProducts()
    this.getFilters()
  },
  data() {
    return {
      isSidebarActive: false,
      products: [],
      tags: [],
      prices: [],
      categories: [],
      colors: [],
      popUpProduct: [],
      filters: [],
      pagination: null,
    }
  },

  methods: {
    addToCart(id) {
      // Get the current cart from local storage or create a new empty cart
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let qty = $('.qtyValue').val() ?? 1;
      console.log(qty)
      // Check if the product with the given ID is already in the cart
      let productIndex = cart.findIndex(item => item.id === id);

      if (productIndex !== -1) {
        // If the product is already in the cart, increment its quantity
        cart[productIndex].qty += Number(qty);
      } else {
        // If the product is not in the cart, add it as a new item
        cart.push({
          id: id,
          qty: Number(qty)
        });
      }

      // Save the updated cart back to local storage
      localStorage.setItem('cart', JSON.stringify(cart));

    },

    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive; // Toggle the class
    },

    filterProducts() {
      let prices = $('#priceRange').val()
      this.prices = prices.replaceAll(/[\s]|[£]/g, '').split('-')
      this.getProducts()
    },

    addColor(id) {
      if (!this.colors.includes(id)) {
        this.colors.push(id)
      } else {
        this.colors = this.colors.filter(elem => {
          return elem !== id;
        })
      }
    },

    addTag(id) {
      if (!this.tags.includes(id)) {
        this.tags.push(id)
      } else {
        this.tags = this.tags.filter(elem => {
          return elem !== id;
        })
      }
    },

    tagsCheck(tags1, tags2) {
      let check = null;
      for (const tag1 in tags1) {
        for (const tag2 in tags2) {
          if (tag1.id === tag2.id) {
            check = true;
          } else {
            check = false;
            return check;
          }
        }
      }
      return check;
    },
    getProducts(page = 1) {
      this.axios.post('/api/products', {
        'tags': this.tags,
        'discount_prices': this.prices,
        'categories': this.categories,
        'colors': this.colors,
        'page': page,
      })
          .then(res => {
            this.products = res.data.data;
            this.pagination = res.data.meta;
            console.log(res)
          })
          .catch(error => {
            console.log(error.response.response)
          })
          .finally(fin => {
            $(document).trigger('change')
          })
    },


    getProduct(id) {
      this.axios.get(`/api/products/${id}`)
          .then(res => {
            this.popUpProduct = res.data.data;
          })
          .catch(error => {
            console.log(error.response)
          })
          .finally(fin => {
            $(document).trigger('change')
          })
    },

    getProductByColor(color_id) {

      for (const product of this.products) {

        for (const color of product.colors) {

          if (color.id === color_id && product) {
            this.popUpProduct = product;
          }
        }
      }
    },


    getFilters() {
      this.axios.get('/api/products/filters')
          .then(res => {
            this.filters = res.data;
            //  Price Filter
            if ($("#price-range").length) {
              $("#price-range").slider({
                range: true,
                min: this.filters.price.min_discount ?? this.filters.price.min,
                max: this.filters.price.max_discount ?? this.filters.price.max,
                values: [
                  this.filters.price.min_discount ?? this.filters.price.min,
                  this.filters.price.max
                ],
                slide: function (event, ui) {
                  $("#priceRange").val("£" + ui.values[0] + " - £" + ui.values[1]);
                }
              });
              $("#priceRange").val("£" + $("#price-range").slider("values", 0) + " - £" + $("#price-range").slider("values", 1));
            }
            ;

          })
          .catch(error => {
            console.log(error)
          })
          .finally(fin => {
            $(document).trigger('change')
          })
    }
  }


}
</script>

<style>

</style>
