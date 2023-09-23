
<template>
  <main>
    <!--Start Shop Details Breadcrumb-->
    <div class="shop-details-breadcrumb wow fadeInUp  overflow-hidden  animated" style="visibility: visible; animation-name: fadeInUp;">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="shop-details-inner">
              <ul class="shop-details-menu">
                <li><router-link :to="{name: 'product.index'}">Products</router-link></li>
                <li class="active">{{ product.title }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Shop Details Breadcrumb-->
    <!--Start Shop Details Top-->
    <section class="shop-details-top two ">
      <div class="container">
        <div class="row mt--30">
          <div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp  animated" style="visibility: visible; animation-name: fadeInUp;">
            <div class="single-product-box one">
              <div class="big-product single-product-one slider-for slick-initialized slick-slider"><button class="arrow-back slick-arrow" aria-disabled="false" style=""><i class="flaticon-left-arrow-1"></i> </button>
                <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 3480px; transform: translate3d(-696px, 0px, 0px);"><div class="slick-slide" data-slick-index="0" aria-hidden="true" style="width: 696px;" tabindex="-1">
                  <div class="single-item"> <img :src="product.preview_image" alt="">
                    <div class="ptag"> <span class="one">-20% </span> </div> <a href="#0" class="love" tabindex="-1"> <i class="flaticon-like"></i> </a>
                  </div>
                </div><div class="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style="width: 696px;" tabindex="0">
                  <div class="single-item"> <img :src="product.hover_image" alt="">
                    <div class="ptag"> <span class="one">-20% </span> </div> <a href="#0" class="love" tabindex="0"> <i class="flaticon-like"></i> </a>
                  </div>
                </div>

                </div></div>

                <button class="arrow-next slick-arrow" style="" aria-disabled="false"><i class="flaticon-next-1"></i></button></div>
              <div class="navholder">
                <div class="product-slicknav single-product-one-nav slider-nav slick-initialized slick-slider"><button class="arrow-back slick-arrow" aria-disabled="false" style=""><i class="flaticon-left-arrow-1"></i> </button>
                  <div class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 380px; transform: translate3d(46px, 0px, 0px);">
                      <div class="slick-slide" data-slick-index="0" aria-hidden="true" style="width: 120px;" tabindex="-1"> <span class="single-item"> <img :src="product.preview_image" alt=""> </span></div>
                      <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 120px;" tabindex="0"> <span class="single-item"> <img :src="product.hover_image" alt=""> </span></div>
                    </div>
                  </div>

                  <button class="arrow-next slick-arrow" style="" aria-disabled="false"><i class="flaticon-next-1"></i></button></div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated" style="visibility: hidden; animation-name: none;">
            <div class="shop-details-top-right ">
              <div class="shop-details-top-right-content-box">
                <div class="shop-details-top-review-box">
                  <div class="shop-details-top-review">
                    <ul>
                      <li><i class="flaticon-star-1"></i></li>
                      <li><i class="flaticon-star-1"></i></li>
                      <li><i class="flaticon-star-1"></i></li>
                      <li><i class="flaticon-star-1"></i></li>
                      <li><i class="flaticon-star-1"></i></li>
                    </ul>
                    <p>(2 Reviews)</p>
                  </div>
                </div>
                <div class="shop-details-top-title">
                  <h3>{{ product.title }}</h3>
                </div>
                <ul class="shop-details-top-info">
                  <li>{{ product.description}}</li>
                </ul>
                <div class="shop-details-top-price-box">
                  <h3 class="d-flex">
                    <del v-if="product.discount_price" style="margin-right: 5px">{{ product.price }}£</del>
                    <div v-if="!product.discount_price">{{ product.price }}£</div>
                    <div v-if="product.discount_price">{{ product.discount_price }}£</div>
                  </h3>
                </div>
                <p class="shop-details-top-product-sale"><span>20</span> Products sold in last 12 hours
                </p>
                <div class="shop-details-top-size-box">
                  <h4>Size: (XS)</h4>
                  <div class="shop-details-top-size-list-box">
                    <ul class="shop-details-top-size-list">
                      <li><a href="#0">XS</a></li>
                      <li><a href="#0">S</a></li>
                      <li><a href="#0">M</a></li>
                      <li><a href="#0">XL</a></li>
                    </ul>
                    <p class="shop-details-top-size-guide"><a href="#0">Size Guide</a></p>
                  </div>
                </div>
                <div class="shop-details-top-color-sky-box">
                  <h4>Colors:</h4>
                  <ul class="varients">
                    <li v-for="color in product.colors" style="border-radius:10px; border: 1px black solid;width: 50px;height: 50px" :style="`background: #${color.title}`" class="color-name">
                      <a href="#0"></a>
                    </li>
                  </ul>
                </div>
                <ul class="shop-details-top-ask-question">
                  <li> <a href="#0">
                    <div class="icon"> <i class="flaticon-left-and-right-arrows"></i> </div>
                    <div class="text">
                      <p>Add to Compare</p>
                    </div>
                  </a> </li>
                  <li> <a href="#0">
                    <div class="icon"> <i class="flaticon-chat-bubble"></i> </div>
                    <div class="text">
                      <p>Ask Question</p>
                    </div>
                  </a> </li>
                </ul>
                <div class="timer-box">
                  <h4>Running Offer</h4>
                  <div class="countdown-timer">
                    <div class="default-coundown">
                      <div class="box">
                        <div class="countdown time-countdown-two" data-countdown-time="2022/03/12"><li> <div class="box"> <span class="days">00</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">00</span> <span class="timeRef clr-1">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">00</span> <span class="timeRef clr-2">min</span> </div> </li> <li> <div class="box"> <span class="seconds">00</span> <span class="timeRef clr-3">sec</span> </div> </li></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="shop-details-top-product-sale"><span>20</span> Persons looking for this
                  product</p>
                <div class="product-quantity">
                  <h4>Quantity</h4>
                  <div class="product-quantity-box d-flex align-items-center flex-wrap">
                    <div class="qty mr-2">
                      <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i> </span> <input type="number" class="qtyValue" value="1"> <span class="increaseQty"> <i class="flaticon-plus"></i> </span> </div>
                    </div>
                    <div class="product-quantity-check"> <i class="flaticon-select"></i>
                      <p>In Stock</p>
                    </div>
                  </div>
                </div>
                <div class="shop-details-top-order-now"> <i class="flaticon-point"></i>
                  <p>Order Now, Only 10 Left !</p>
                </div>
                <div class="shop-details-top-cart-box-btn"> <button class="btn--primary style2 " @click.prevent="addToCart(product.id)" type="submit">Add to Cart</button> </div>
                <div class="shop-details-top-free-shipping"> <i class="flaticon-shipping"></i>
                  <p>SPENT <span>$399.00</span> MORE FOR FREE SHIPPING</p>
                </div>
                <div class="shop-details-top-social-box">
                  <p>Share:</p>
                  <ul class="ps-1 social_link d-flex align-items-center">
                    <li><a href="https://www.facebook.com/" class="active" target="_blank"><i class="flaticon-facebook-app-symbol"></i></a> </li>
                    <li> <a href="https://www.youtube.com/" target="_blank"><i class="flaticon-youtube"></i></a> </li>
                    <li> <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a> </li>
                    <li> <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a> </li>
                  </ul>
                </div>
                <div class="checked-box">
                  <form>
                    <div class="form-group"> <input type="checkbox" id="html"> <label for="html">I
                      agree with all company terms &amp; condition</label> </div>
                  </form>
                </div>
                <div class="shop-details-top-buy-now-btn"> <a href="#" class="btn--primary">Buy It
                  Now</a> </div>
                <div class="shop-details-top-safe-checkout">
                  <h4>Guranteed Safe Checkout</h4>
                  <ul class="shop-details-top-safe-checkout-list">
                    <li>
                      <div class="shop-details-top-safe-checkout-img"> <a href="#0"><img src="vue_front/assets/images/shop/shop-details-top-safe-checkout-img-1.jpg" alt=""></a> </div>
                    </li>

                  </ul>
                </div>
                <p class="shop-details-top-product-delivery">This product estimated delivery between
                  <span>Wednesday 27 October</span> <br> <span>Tuesday 02 November</span></p>
                <ul class="shop-details-top-category-tags">
                  <li>Category: <span v-if="product.category">{{ product.category.title }}</span></li>
                  <li>Tags: <span v-for="tag in product.tags">{{ tag.title + " "}}</span></li>
                </ul>
                <ul class="shop-details-top-feature">
                  <li>
                    <div class="icon"> <i class="flaticon-portfolio"></i> </div>
                    <div class="text">
                      <p>Money back guarantee</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon"> <i class="flaticon-truck"></i> </div>
                    <div class="text">
                      <p>Free Shipping &amp; Return</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon"> <i class="flaticon-security"></i> </div>
                    <div class="text">
                      <p>Comportable Support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Shop Details Top-->
    <!-- productdrescription-tabStart -->
    <section class="product pt-60 pb-60 wow fadeInUp overflow-hidden " style="visibility: hidden; animation-name: none;">
      <div class="container">
        <div class="row wow fadeInUp animated" style="visibility: hidden; animation-name: none;">
          <div class="col-12">
            <ul class="nav product-details-nav nav-one nav-pills justify-content-center" id="pills-tab-two" role="tablist">
              <li class="nav-item" role="presentation"> <button class="nav-link active" id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description" type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                Description </button> </li>
              <li class="nav-item" role="presentation"> <button class="nav-link" id="pills-sizechart-tab" data-bs-toggle="pill" data-bs-target="#pills-sizechart" type="button" role="tab" aria-controls="pills-sizechart" aria-selected="false"> Size Chart </button> </li>
              <li class="nav-item" role="presentation"> <button class="nav-link" id="pills-review-tab" data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab" aria-controls="pills-review" aria-selected="false"> Review </button> </li>
            </ul>
          </div>
        </div>
        <div class="row wow fadeInUp animated" style="visibility: hidden; animation-name: none;">
          <div class="tab-content" id="pills-tabContent-two">
            <div class="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
              <div class="product-drescription">
                <h4> Product Details:</h4>
                <div v-html="product.content"></div>
                <div class="row align-items-center">
                  <div class="col-lg-4 mt-30 ">
                    <div class="thumb"> <img src="vue_front/assets/images/shop/shop-details-tab-content-specification-img-1.jpg" alt=""> </div>
                  </div>
                  <div class="col-lg-8 mt-30">
                    <h4>Specification:</h4>
                    <ul class="drescription-list">
                      <li> 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus
                        lobortis fermentum. </li>
                      <li> 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi
                        feugiat. </li>
                      <li> 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis
                        gravida porttitor turpis. </li>
                      <li> 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida
                        porttitor turpis. </li>
                      <li> 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida
                        porttitor </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-sizechart" role="tabpanel" aria-labelledby="pills-sizechart-tab">
              <div class="product-drescription">
                <div class="size-chirt">
                  <h4>Size Guide</h4>
                  <p class="pt-0"> Assertively conceptualize parallel process improvements through
                    user friendly colighue to action items. </p>
                  <div class="size-tabble">
                    <table>
                      <thead>
                      <tr>
                        <th>Size</th>
                        <th>XXS - XS</th>
                        <th>XS - S</th>
                        <th>S - M</th>
                        <th>M - L</th>
                        <th>L - XL</th>
                        <th>XL - XXL</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>ARGENTINA</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>BOLIVIA</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>COLOMBIA</td>
                        <td>26</td>
                        <td>28</td>
                        <td>30</td>
                        <td>32</td>
                        <td>34</td>
                        <td>36</td>
                      </tr>
                      <tr>
                        <td>China</td>
                        <td>34</td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td>MEXICO</td>
                        <td>32</td>
                        <td>34</td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                      </tr>
                      <tr>
                        <td>JAMAICA</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>MEXICO</td>
                        <td>32</td>
                        <td>34</td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                      </tr>
                      <tr>
                        <td>Australia</td>
                        <td>6</td>
                        <td>8</td>
                        <td>10</td>
                        <td>12</td>
                        <td>14</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>USA</td>
                        <td>33</td>
                        <td>44</td>
                        <td>55</td>
                        <td>66</td>
                        <td>77</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>UK</td>
                        <td>6</td>
                        <td>8</td>
                        <td>10</td>
                        <td>12</td>
                        <td>14</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td><strong>Pant</strong></td>
                        <td>22-23 </td>
                        <td>24-25</td>
                        <td>26-27</td>
                        <td>28-29</td>
                        <td>30-31</td>
                        <td>32-33</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
              <div class="product-drescription">
                <div class="review-single pt-0 hed">
                  <div class="ratting"> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <span class="ps-2">BASED ON 100 REVIEW</span> </div>
                </div>
                <div class="review-single">
                  <div class="left">
                    <div class="ratting"> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> </div>
                    <h6>Vary Good quality Theme <span>Raul Bates on January 28, 2022</span> </h6>
                    <p> Assertively conceptualize parallel process improvements through user
                      friendly colighue to action items. Interactively antidos cultivate
                      interdependent customer service without clicks-and-mortar e-services. </p>
                  </div> <a href="#0" class="right-box"> Report this Comments </a>
                </div>
                <div class="review-single">
                  <div class="left">
                    <div class="ratting"> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> </div>
                    <h6> Amazing Theme <span>Kurt Morgan on January 28, 2022</span> </h6>
                    <p> Assertively conceptualize parallel process improvements through user
                      friendly colighue to action items. Interactively antidos cultivate
                      interdependent customer service without clicks-and-mortar e-services. </p>
                  </div> <a href="#0" class="right-box">Report this Comments </a>
                </div>
                <div class="review-from-box mt-30">
                  <h6>Write a Review</h6>
                  <form action="#" class="review-from">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="ratting-box">
                          <p> RATING </p>
                          <div class="ratting"> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i>
                            <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group"> <label for="name">NAME</label> <input type="text" id="name" class="form-control" placeholder="David Warner"> </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group"> <label for="number">Number</label> <input type="text" id="number" class="form-control" placeholder="Phone Number"> </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group"> <label for="email"> Email </label> <input type="text" id="email" class="form-control" placeholder="support@gmail.com"> </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group"> <label for="namee"> REVIEW TITLE</label> <input type="text" id="namee" class="form-control" placeholder="Give your review title"> </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group m-0"> <label for="email">BODY OF REVIEW (1500)
                        </label> <textarea placeholder="Write Your Comments Here"></textarea> </div>
                      </div>
                    </div> <button type="submit" class="btn--primary style2 ">Submit Review
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <!-- productdrescription-tab End -->
    <!-- recent-products Start -->
    <section class="recent-products pt-60 pb-120 overflow-hidden wow fadeInUp" style="visibility: hidden; animation-name: none;">
      <div class="container ">
        <div class="row">
          <div class="col-12 wow fadeInUp animated" style="visibility: hidden; animation-name: none;">
            <div class="section-head text-center">
              <h2>Recent Products </h2>
            </div>
          </div>
        </div>
        <div class="row mt-30 wow fadeInUp animated" style="visibility: hidden; animation-name: none;">
          <div class="catagory-slider slick-initialized slick-slider"><button class="arrow-back slick-arrow" aria-disabled="false" style=""><i class="flaticon-back"></i> </button>






            <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 1392px; transform: translate3d(-696px, 0px, 0px);"><div class="products-grid-one slick-slide" style="width: 204px;" data-slick-index="0" aria-hidden="true" tabindex="-1">
              <div class="products-grid-one__product-image">
                <div class="products-grid-one__badge-box"> <span class="bg_base badge new ">New</span>
                </div> <a href="shop-details-1.html" class="d-block products-grid__image_holder" tabindex="-1"> <img src="vue_front/assets/images/shop/products-img1.jpg" alt="Alt"> </a>
                <div class="products-grid__usefull-links">
                  <ul>
                    <li><a href="wishlist.html" tabindex="-1"> <i class="flaticon-heart"> </i> <span>
                                                    wishlist</span> </a> </li>
                    <li><a href="compare.html" tabindex="-1"> <i class="flaticon-left-and-right-arrows"></i>
                      <span> compare</span> </a> </li>
                    <li><a href="#view-popup1" class="popup_link" tabindex="-1"> <i class="flaticon-visibility"></i> <span> quick view</span> </a> </li>
                  </ul>
                </div>
              </div>
              <div id="view-popup1" class="product-gird__quick-view-popup mfp-hide">
                <div class="container">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                      <div class="quick-view__left-content">
                        <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                          <div class="popup-product-thumb-box">
                            <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tab7" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true"> <a href="#tab7" tabindex="-1" class="ui-tabs-anchor" id="ui-id-1">
                                <img src="vue_front/assets/images/shop/products-img1.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab8" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"> <a href="#tab8" tabindex="-1" class="ui-tabs-anchor" id="ui-id-2">
                                <img src="vue_front/assets/images/shop/products-img2.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab9" aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false"> <a href="#tab9" tabindex="-1" class="ui-tabs-anchor" id="ui-id-3">
                                <img src="vue_front/assets/images/shop/products-img3.jpg" alt="img"> </a> </li>
                            </ul>
                          </div>
                          <div class="popup-product-main-image-box">
                            <div id="tab7" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="false">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img1.jpg" alt="img"> </div>
                            </div>
                            <div id="tab8" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-2" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img2.jpg" alt="img"> </div>
                            </div>
                            <div id="tab9" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-3" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img3.jpg" alt="img"> </div>
                            </div> <button class="prev" tabindex="-1"> <i class="flaticon-back"></i>
                          </button> <button class="next" tabindex="-1"> <i class="flaticon-next"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="popup-right-content">
                        <h3>Blacked Neckles Set</h3>
                        <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                          <span>(100)</span> </div>
                        <p class="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                        <div class="price">
                          <h2> $45 USD <del> $50 USD</del></h2>
                          <h6> In stuck</h6>
                        </div>
                        <div class="color-varient"> <a href="#0" class="color-name pink" tabindex="-1">
                          <span>Pink</span> </a> <a href="#0" class="color-name red" tabindex="-1">
                          <span>Red</span> </a> <a href="#0" class="color-name yellow" tabindex="-1"><span>Yellow</span> </a> <a href="#0" class="color-name blue" tabindex="-1"> <span>Blue</span> </a> <a href="#0" class="color-name black" tabindex="-1"> <span>Black</span> </a> </div>
                        <div class="add-product">
                          <h6>Qty:</h6>
                          <div class="button-group">
                            <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i>
                                                            </span> <input type="number" class="qtyValue" value="1" tabindex="-1">
                              <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                            </span> </div> <button class="btn--primary " @click.prevent="addToCart(product.id)" tabindex="-1"> Add to Cart
                          </button>
                          </div>
                        </div>
                        <div class="payment-method"> <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_1.png" alt=""> </a>
                          <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_2.png" alt=""> </a> <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_3.png" alt=""> </a>
                          <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_4.png" alt=""> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-grid__content"> <a href="cart.html" @click.prevent="addToCart(product.id)" class="products-grid__cart-btn btn--primary" tabindex="-1"> <span class="one"> Add to Cart </span>
                <span class="two"> <i class="flaticon-shopping-cart"> </i> </span> </a>
                <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> </div>
                <h5 class="product_name"><a href="shop-details-1.html" tabindex="-1">Diamond Bracelet </a></h5>
                <div class="price d-flex align-content-center justify-content-center">
                  <p>$2909</p>
                </div>
              </div>
            </div><div class="products-grid-one slick-slide" style="width: 204px;" data-slick-index="1" aria-hidden="true" tabindex="-1">
              <div class="products-grid-one__product-image">
                <div class="products-grid-one__badge-box"> <span class="bg_black badge discount">-20%</span> </div> <a href="shop-details-1.html" class="d-block products-grid__image_holder" tabindex="-1"> <img class="products-grid-one__mainimage products-grid-one__first-img" src="vue_front/assets/images/shop/products-img3.jpg" alt="Alt"> <img class="products-grid-one__hover-img" src="vue_front/assets/images/shop/products-img4.jpg" alt="Alt"> </a>
                <div class="products-grid__usefull-links">
                  <ul>
                    <li><a href="wishlist.html" tabindex="-1"> <i class="flaticon-heart"> </i> <span>
                                                    wishlist</span> </a> </li>
                    <li><a href="compare.html" tabindex="-1"> <i class="flaticon-left-and-right-arrows"></i>
                      <span> compare</span> </a> </li>
                    <li><a href="#view-popup2" class="popup_link" tabindex="-1"> <i class="flaticon-visibility"></i> <span> quick view</span> </a> </li>
                  </ul>
                </div>
              </div>
              <div id="view-popup2" class="product-gird__quick-view-popup mfp-hide">
                <div class="container">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                      <div class="quick-view__left-content">
                        <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                          <div class="popup-product-thumb-box">
                            <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tab777" aria-labelledby="ui-id-4" aria-selected="true" aria-expanded="true"> <a href="#tab777" tabindex="-1" class="ui-tabs-anchor" id="ui-id-4">
                                <img src="vue_front/assets/images/shop/products-img3.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab888" aria-labelledby="ui-id-5" aria-selected="false" aria-expanded="false"> <a href="#tab888" tabindex="-1" class="ui-tabs-anchor" id="ui-id-5">
                                <img src="vue_front/assets/images/shop/products-img4.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab999" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false"> <a href="#tab999" tabindex="-1" class="ui-tabs-anchor" id="ui-id-6">
                                <img src="vue_front/assets/images/shop/products-img5.jpg" alt="img"> </a> </li>
                            </ul>
                          </div>
                          <div class="popup-product-main-image-box">
                            <div id="tab777" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-4" role="tabpanel" aria-hidden="false">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img3.jpg" alt="img"> </div>
                            </div>
                            <div id="tab888" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-5" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="img"> </div>
                            </div>
                            <div id="tab999" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-6" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="img"> </div>
                            </div> <button class="prev" tabindex="-1"> <i class="flaticon-back"></i>
                          </button> <button class="next" tabindex="-1"> <i class="flaticon-next"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="popup-right-content">
                        <h3>Girl Diamond Ring </h3>
                        <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                          <span>(100)</span> </div>
                        <p class="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                        <div class="price">
                          <h2> $45 USD <del> $50 USD</del></h2>
                          <h6> In stuck</h6>
                        </div>
                        <div class="color-varient"> <a href="#0" class="color-name pink" tabindex="-1">
                          <span>Pink</span> </a> <a href="#0" class="color-name red" tabindex="-1">
                          <span>Red</span> </a> <a href="#0" class="color-name yellow" tabindex="-1"><span>Yellow</span> </a> <a href="#0" class="color-name blue" tabindex="-1"> <span>Blue</span> </a> <a href="#0" class="color-name black" tabindex="-1"> <span>Black</span> </a> </div>
                        <div class="add-product">
                          <h6>Qty:</h6>
                          <div class="button-group">
                            <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i>
                                                            </span> <input type="number" class="qtyValue" value="1" tabindex="-1">
                              <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                            </span> </div> <button class="btn--primary " @click.prevent="addToCart(product.id)" tabindex="-1"> Add to Cart
                          </button>
                          </div>
                        </div>
                        <div class="payment-method"> <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_1.png" alt=""> </a>
                          <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_2.png" alt=""> </a> <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_3.png" alt=""> </a>
                          <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_4.png" alt=""> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-grid__content"> <a href="cart.html" @click.prevent="addToCart(product.id)" class="products-grid__cart-btn btn--primary" tabindex="-1"> <span class="one"> Add to Cart </span>
                <span class="two"> <i class="flaticon-shopping-cart"> </i> </span> </a>
                <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> </div>
                <h5 class="product_name"><a href="shop-details-1.html" tabindex="-1"> Girl Diamond Ring </a></h5>
                <div class="price d-flex align-content-center justify-content-center">
                  <p>$250</p>
                </div>
              </div>
              <div class="products-grid-one__thumb-box">
                <p class="products-grid-one__product-varient"> <span class="color"> Yellow </span> <img src="vue_front/assets/images/shop/products-img3.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> blue </span> <img src="vue_front/assets/images/shop/products-img4.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> Black </span> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="Alt"> </p>
              </div>
            </div><div class="products-grid-one slick-slide" style="width: 204px;" data-slick-index="2" aria-hidden="true" tabindex="-1">
              <div class="products-grid-one__product-image">
                <div class="products-grid-one__badge-box"> <span class="bg_base badge new ">New</span>
                  <span class="bg_black badge discount">-30%</span> </div> <a href="shop-details-1.html" class="d-block products-grid__image_holder" tabindex="-1"> <img class="products-grid-one__mainimage products-grid-one__first-img" src="vue_front/assets/images/shop/products-img4.jpg" alt="Alt"> <img class="products-grid-one__hover-img" src="vue_front/assets/images/shop/products-img5.jpg" alt="Alt"> </a>
                <div class="products-grid__usefull-links">
                  <ul>
                    <li><a href="wishlist.html" tabindex="-1"> <i class="flaticon-heart"> </i> <span>
                                                    wishlist</span> </a> </li>
                    <li><a href="compare.html" tabindex="-1"> <i class="flaticon-left-and-right-arrows"></i>
                      <span> compare</span> </a> </li>
                    <li><a href="#view-popup3" class="popup_link" tabindex="-1"> <i class="flaticon-visibility"></i> <span> quick view</span> </a></li>
                  </ul>
                </div>
              </div>
              <div id="view-popup3" class="product-gird__quick-view-popup mfp-hide">
                <div class="container">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                      <div class="quick-view__left-content">
                        <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                          <div class="popup-product-thumb-box">
                            <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tab7777" aria-labelledby="ui-id-7" aria-selected="true" aria-expanded="true"> <a href="#tab7777" tabindex="-1" class="ui-tabs-anchor" id="ui-id-7">
                                <img src="vue_front/assets/images/shop/products-img4.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab8888" aria-labelledby="ui-id-8" aria-selected="false" aria-expanded="false"> <a href="#tab8888" tabindex="-1" class="ui-tabs-anchor" id="ui-id-8"> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab9999" aria-labelledby="ui-id-9" aria-selected="false" aria-expanded="false"> <a href="#tab9999" tabindex="-1" class="ui-tabs-anchor" id="ui-id-9"> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="img"> </a> </li>
                            </ul>
                          </div>
                          <div class="popup-product-main-image-box">
                            <div id="tab7777" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-7" role="tabpanel" aria-hidden="false">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img4.jpg" alt="img"> </div>
                            </div>
                            <div id="tab8888" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-8" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="img"> </div>
                            </div>
                            <div id="tab9999" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-9" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="img"> </div>
                            </div> <button class="prev" tabindex="-1"> <i class="flaticon-back"></i>
                          </button> <button class="next" tabindex="-1"> <i class="flaticon-next"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="popup-right-content">
                        <h3>Women Earring Erl</h3>
                        <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                          <span>(100)</span> </div>
                        <p class="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                        <div class="price">
                          <h2> $45 USD <del> $50 USD</del></h2>
                          <h6> In stuck</h6>
                        </div>
                        <div class="color-varient"> <a href="#0" class="color-name pink" tabindex="-1">
                          <span>Pink</span> </a> <a href="#0" class="color-name red" tabindex="-1">
                          <span>Red</span> </a> <a href="#0" class="color-name yellow" tabindex="-1"><span>Yellow</span> </a> <a href="#0" class="color-name blue" tabindex="-1"> <span>Blue</span> </a> <a href="#0" class="color-name black" tabindex="-1"> <span>Black</span> </a> </div>
                        <div class="add-product">
                          <h6>Qty:</h6>
                          <div class="button-group">
                            <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i>
                                                            </span> <input type="number" class="qtyValue" value="1" tabindex="-1">
                              <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                            </span> </div> <button class="btn--primary " @click.prevent="addToCart(product.id)" tabindex="-1"> Add to Cart
                          </button>
                          </div>
                        </div>
                        <div class="payment-method"> <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_1.png" alt=""> </a>
                          <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_2.png" alt=""> </a> <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_3.png" alt=""> </a>
                          <a href="#0" tabindex="-1"> <img src="vue_front/assets/images/payment_method/method_4.png" alt=""> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-grid__content"> <a href="cart.html" class="products-grid__cart-btn btn--primary" tabindex="-1" @click.prevent="addToCart(product.id)"> <span class="one"> Add to Cart </span>
                <span class="two"> <i class="flaticon-shopping-cart"> </i> </span> </a>
                <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> </div>
                <h5 class="product_name"><a href="shop-details-1.html" tabindex="-1"> Women Earring Erl </a></h5>
                <div class="price d-flex align-content-center justify-content-center"> <span class="pe-1"><del> $200.00</del></span>
                  <p>$160</p>
                </div>
              </div>
              <div class="products-grid-one__thumb-box">
                <p class="products-grid-one__product-varient"> <span class="color"> Yellow </span> <img src="vue_front/assets/images/shop/products-img4.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> blue </span> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="Alt"> </p>
              </div>
            </div><div class="products-grid-one slick-slide slick-current slick-active" style="width: 204px;" data-slick-index="3" aria-hidden="false" tabindex="0">
              <div class="products-grid-one__product-image">
                <div class="products-grid-one__badge-box"> <span class="bg_base badge new ">New</span>
                </div> <a href="shop-details-1.html" class="d-block products-grid__image_holder" tabindex="0"> <img class="products-grid-one__hover-img now-main" src="vue_front/assets/images/shop/products-img6.jpg" alt="Alt"> </a>
                <div class="products-grid__usefull-links">
                  <ul>
                    <li><a href="wishlist.html" tabindex="0"> <i class="flaticon-heart"> </i> <span>
                                                    wishlist</span> </a> </li>
                    <li><a href="compare.html" tabindex="0"> <i class="flaticon-left-and-right-arrows"></i>
                      <span> compare</span> </a> </li>
                    <li><a href="#view-popup4" class="popup_link" tabindex="0"> <i class="flaticon-visibility"></i> <span> quick view</span> </a> </li>
                  </ul>
                </div>
              </div>
              <div id="view-popup4" class="product-gird__quick-view-popup mfp-hide">
                <div class="container">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                      <div class="quick-view__left-content">
                        <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                          <div class="popup-product-thumb-box">
                            <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tab77777" aria-labelledby="ui-id-10" aria-selected="true" aria-expanded="true"> <a href="#tab77777" tabindex="0" class="ui-tabs-anchor" id="ui-id-10"> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab88888" aria-labelledby="ui-id-11" aria-selected="false" aria-expanded="false"> <a href="#tab88888" tabindex="0" class="ui-tabs-anchor" id="ui-id-11"> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="tab99999" aria-labelledby="ui-id-12" aria-selected="false" aria-expanded="false"> <a href="#tab99999" tabindex="0" class="ui-tabs-anchor" id="ui-id-12"> <img src="vue_front/assets/images/shop/products-img7.jpg" alt="img"> </a> </li>
                            </ul>
                          </div>
                          <div class="popup-product-main-image-box">
                            <div id="tab77777" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-10" role="tabpanel" aria-hidden="false">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="img"> </div>
                            </div>
                            <div id="tab88888" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-11" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="img"> </div>
                            </div>
                            <div id="tab99999" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-12" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img7.jpg" alt="img"> </div>
                            </div> <button class="prev" tabindex="0"> <i class="flaticon-back"></i>
                          </button> <button class="next" tabindex="0"> <i class="flaticon-next"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="popup-right-content">
                        <h3>Wedding Ring Men</h3>
                        <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                          <span>(100)</span> </div>
                        <p class="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                        <div class="price">
                          <h2> $35 USD <del> $50 USD</del></h2>
                          <h6> In stuck</h6>
                        </div>
                        <div class="color-varient"> <a href="#0" class="color-name pink" tabindex="0">
                          <span>Pink</span> </a> <a href="#0" class="color-name red" tabindex="0">
                          <span>Red</span> </a> <a href="#0" class="color-name yellow" tabindex="0"><span>Yellow</span> </a> <a href="#0" class="color-name blue" tabindex="0"> <span>Blue</span> </a> <a href="#0" class="color-name black" tabindex="0"> <span>Black</span> </a> </div>
                        <div class="add-product">
                          <h6>Qty:</h6>
                          <div class="button-group">
                            <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i>
                                                            </span> <input type="number" class="qtyValue" value="1" tabindex="0">
                              <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                            </span> </div> <button class="btn--primary " @click.prevent="addToCart(product.id)" tabindex="0"> Add to Cart
                          </button>
                          </div>
                        </div>
                        <div class="payment-method"> <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_1.png" alt=""> </a>
                          <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_2.png" alt=""> </a> <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_3.png" alt=""> </a>
                          <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_4.png" alt=""> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-grid__content"> <a href="cart.html" class="products-grid__cart-btn btn--primary" @click.prevent="addToCart(product.id)" tabindex="0"> <span class="one"> Add to Cart </span>
                <span class="two"> <i class="flaticon-shopping-cart"> </i> </span> </a>
                <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> </div>
                <h5 class="product_name"><a href="shop-details-1.html" tabindex="0"> Wedding Ring Men </a></h5>
                <div class="price d-flex align-content-center justify-content-center">
                  <p>$200</p>
                </div>
              </div>
              <div class="products-grid-one__thumb-box">
                <p class="products-grid-one__product-varient"> <span class="color"> blue </span> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> Yellow </span> <img src="vue_front/assets/images/shop/products-img5.jpg" alt="Alt"> </p>
              </div>
            </div><div class="products-grid-one slick-slide slick-active" style="width: 204px;" data-slick-index="4" aria-hidden="false" tabindex="0">
              <div class="products-grid-one__product-image">
                <div class="products-grid-one__badge-box"> <span class="bg_base badge new ">New</span>
                </div> <a href="shop-details-1.html" class="d-block products-grid__image_holder" tabindex="0"> <img class="products-grid-one__mainimage products-grid-one__first-img" src="vue_front/assets/images/shop/products-img6.jpg" alt="Alt"> <img class="products-grid-one__hover-img" src="vue_front/assets/images/shop/products-img2.jpg" alt="Alt"> </a>
                <div class="products-grid__usefull-links">
                  <ul>
                    <li><a href="wishlist.html" tabindex="0"> <i class="flaticon-heart"> </i> <span>
                                                    wishlist</span> </a> </li>
                    <li><a href="compare.html" tabindex="0"> <i class="flaticon-left-and-right-arrows"></i>
                      <span> compare</span> </a> </li>
                    <li><a href="#view-popup5" class="popup_link" tabindex="0"> <i class="flaticon-visibility"></i> <span> quick view</span></a> </li>
                  </ul>
                </div>
              </div>
              <div id="view-popup5" class="product-gird__quick-view-popup mfp-hide">
                <div class="container">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                      <div class="quick-view__left-content">
                        <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                          <div class="popup-product-thumb-box">
                            <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="stab1" aria-labelledby="ui-id-13" aria-selected="true" aria-expanded="true"> <a href="#stab1" tabindex="0" class="ui-tabs-anchor" id="ui-id-13">
                                <img src="vue_front/assets/images/shop/products-img1.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="stab2" aria-labelledby="ui-id-14" aria-selected="false" aria-expanded="false"> <a href="#stab2" tabindex="0" class="ui-tabs-anchor" id="ui-id-14">
                                <img src="vue_front/assets/images/shop/products-img2.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="stab3" aria-labelledby="ui-id-15" aria-selected="false" aria-expanded="false"> <a href="#stab3" tabindex="0" class="ui-tabs-anchor" id="ui-id-15">
                                <img src="vue_front/assets/images/shop/products-img3.jpg" alt="img"> </a> </li>
                            </ul>
                          </div>
                          <div class="popup-product-main-image-box">
                            <div id="stab1" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-13" role="tabpanel" aria-hidden="false">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img1.jpg" alt="img"> </div>
                            </div>
                            <div id="stab2" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-14" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img2.jpg" alt="img"> </div>
                            </div>
                            <div id="stab3" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-15" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img3.jpg" alt="img"> </div>
                            </div> <button class="prev" tabindex="0"> <i class="flaticon-back"></i>
                          </button> <button class="next" tabindex="0"> <i class="flaticon-next"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="popup-right-content">
                        <h3>Titan Locket Women</h3>
                        <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                          <span>(100)</span> </div>
                        <p class="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                        <div class="price">
                          <h2> $55 USD <del> $50 USD</del></h2>
                          <h6> In stuck</h6>
                        </div>
                        <div class="color-varient"> <a href="#0" class="color-name pink" tabindex="0">
                          <span>Pink</span> </a> <a href="#0" class="color-name red" tabindex="0">
                          <span>Red</span> </a> <a href="#0" class="color-name yellow" tabindex="0"><span>Yellow</span> </a> <a href="#0" class="color-name blue" tabindex="0"> <span>Blue</span> </a> <a href="#0" class="color-name black" tabindex="0"> <span>Black</span> </a> </div>
                        <div class="add-product">
                          <h6>Qty:</h6>
                          <div class="button-group">
                            <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i>
                                                            </span> <input type="number" class="qtyValue" value="1" tabindex="0">
                              <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                            </span> </div> <button class="btn--primary " @click.prevent="addToCart(product.id)" tabindex="0"> Add to Cart
                          </button>
                          </div>
                        </div>
                        <div class="payment-method"> <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_1.png" alt=""> </a>
                          <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_2.png" alt=""> </a> <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_3.png" alt=""> </a>
                          <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_4.png" alt=""> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-grid__content"> <a href="cart.html" @click.prevent="addToCart(product.id)" class="products-grid__cart-btn btn--primary" tabindex="0"> <span class="one"> Add to Cart </span>
                <span class="two"> <i class="flaticon-shopping-cart"> </i> </span> </a>
                <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> </div>
                <h5 class="product_name"><a href="shop-details-1.html" tabindex="0"> Titan Locket Women </a></h5>
                <div class="price d-flex align-content-center justify-content-center">
                  <p>$250</p>
                </div>
              </div>
              <div class="products-grid-one__thumb-box">
                <p class="products-grid-one__product-varient"> <span class="color"> Blue </span> <img src="vue_front/assets/images/shop/products-img6.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> Yellow </span> <img src="vue_front/assets/images/shop/products-img7.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> green </span> <img src="vue_front/assets/images/shop/products-img8.jpg" alt="Alt"> </p>
              </div>
            </div><div class="products-grid-one slick-slide slick-active" style="width: 204px;" data-slick-index="5" aria-hidden="false" tabindex="0">
              <div class="products-grid-one__product-image"> <a href="shop-details-1.html" class="d-block products-grid__image_holder" tabindex="0"> <img class="products-grid-one__mainimage products-grid-one__first-img" src="vue_front/assets/images/shop/products-img12.jpg" alt="Alt"> <img class="products-grid-one__hover-img" src="vue_front/assets/images/shop/products-img11.jpg" alt="Alt"> </a>
                <div class="products-grid__usefull-links">
                  <ul>
                    <li><a href="wishlist.html" tabindex="0"> <i class="flaticon-heart"> </i> <span>
                                                    wishlist</span> </a> </li>
                    <li><a href="compare.html" tabindex="0"> <i class="flaticon-left-and-right-arrows"></i>
                      <span> compare</span> </a> </li>
                    <li><a href="#view-popup6" class="popup_link" tabindex="0"> <i class="flaticon-visibility"></i><span> quick view</span> </a> </li>
                  </ul>
                </div>
              </div>
              <div id="view-popup6" class="product-gird__quick-view-popup mfp-hide">
                <div class="container">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                      <div class="quick-view__left-content">
                        <div class="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                          <div class="popup-product-thumb-box">
                            <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="ttab111" aria-labelledby="ui-id-16" aria-selected="true" aria-expanded="true"> <a href="#ttab111" tabindex="0" class="ui-tabs-anchor" id="ui-id-16">
                                <img src="vue_front/assets/images/shop/products-img9.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="ttab222" aria-labelledby="ui-id-17" aria-selected="false" aria-expanded="false"> <a href="#ttab222" tabindex="0" class="ui-tabs-anchor" id="ui-id-17"> <img src="vue_front/assets/images/shop/products-img10.jpg" alt="img"> </a> </li>
                              <li class="tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab" role="tab" tabindex="-1" aria-controls="ttab333" aria-labelledby="ui-id-18" aria-selected="false" aria-expanded="false"> <a href="#ttab333" tabindex="0" class="ui-tabs-anchor" id="ui-id-18"> <img src="vue_front/assets/images/shop/products-img11.jpg" alt="img"> </a> </li>
                            </ul>
                          </div>
                          <div class="popup-product-main-image-box">
                            <div id="ttab111" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-16" role="tabpanel" aria-hidden="false">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img9.jpg" alt="img"> </div>
                            </div>
                            <div id="ttab222" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-17" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img10.jpg" alt="img"> </div>
                            </div>
                            <div id="ttab333" class="tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-18" role="tabpanel" style="display: none;" aria-hidden="true">
                              <div class="popup-product-single-image"> <img src="vue_front/assets/images/shop/products-img11.jpg" alt="img"> </div>
                            </div> <button class="prev" tabindex="0"> <i class="flaticon-back"></i>
                          </button> <button class="next" tabindex="0"> <i class="flaticon-next"></i>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="popup-right-content">
                        <h3>Gold Bracelet Girl </h3>
                        <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                          <span>(100)</span> </div>
                        <p class="text"> Hydrating Plumping Intense Shine Lip Colour </p>
                        <div class="price">
                          <h2> $65 USD <del> $50 USD</del></h2>
                          <h6> In stuck</h6>
                        </div>
                        <div class="color-varient"> <a href="#0" class="color-name pink" tabindex="0">
                          <span>Pink</span> </a> <a href="#0" class="color-name red" tabindex="0">
                          <span>Red</span> </a> <a href="#0" class="color-name yellow" tabindex="0"><span>Yellow</span> </a> <a href="#0" class="color-name blue" tabindex="0"> <span>Blue</span> </a> <a href="#0" class="color-name black" tabindex="0"> <span>Black</span> </a> </div>
                        <div class="add-product">
                          <h6>Qty:</h6>
                          <div class="button-group">
                            <div class="qtySelector text-center"> <span class="decreaseQty"><i class="flaticon-minus"></i>
                                                            </span> <input type="number" class="qtyValue" value="1" tabindex="0">
                              <span class="increaseQty"> <i class="flaticon-plus"></i>
                                                            </span> </div> <button class="btn--primary " @click.prevent="addToCart(product.id)"  tabindex="0"> Add to Cart
                          </button>
                          </div>
                        </div>
                        <div class="payment-method"> <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_1.png" alt=""> </a>
                          <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_2.png" alt=""> </a> <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_3.png" alt=""> </a>
                          <a href="#0" tabindex="0"> <img src="vue_front/assets/images/payment_method/method_4.png" alt=""> </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-grid__content"> <a href="cart.html" class="products-grid__cart-btn btn--primary" @click.prevent="addToCart(product.id)" tabindex="0"> <span class="one"> Add to Cart </span>
                <span class="two"> <i class="flaticon-shopping-cart"> </i> </span> </a>
                <div class="ratting"> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i> </div>
                <h5 class="product_name"><a href="shop-details-1.html" tabindex="0">Gold Bracelet Girl </a></h5>
                <div class="price d-flex align-content-center justify-content-center">
                  <p>$150</p>
                </div>
              </div>
              <div class="products-grid-one__thumb-box">
                <p class="products-grid-one__product-varient"> <span class="color"> Blue </span> <img src="vue_front/assets/images/shop/products-img12.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> Green </span> <img src="vue_front/assets/images/shop/products-img11.jpg" alt="Alt"> </p>
                <p class="products-grid-one__product-varient"> <span class="color"> Black </span> <img src="vue_front/assets/images/shop/products-img10.jpg" alt="Alt"> </p>
              </div>
            </div></div></div><button class="arrow-next slick-arrow slick-disabled" style="" aria-disabled="true"><i class="flaticon-next"></i></button></div>
        </div>
      </div>
    </section> <!-- recent-products End -->
  </main>
</template>

<script>
export default {
  mounted() {

    this.getProduct()
  },
  data() {
    return {
      product: [],
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

    getProduct() {
      console.log(this.$route.params.id)
      this.axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`)
          .then(res => {
            this.product = res.data.data;
            console.log(res);
          })
          .catch(error => {
            console.log(error.response)
          })
          .finally(fin => {
            $(document).trigger('change')
          })
    },
  }
}
</script>


<style scoped>

</style>
