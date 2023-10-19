"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/show.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/show.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_product_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/product/product */ "./resources/js/app/product/product.js");
/* harmony import */ var _app_cart_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/cart/cart */ "./resources/js/app/cart/cart.js");
 // Make sure to provide the correct path

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getProduct();
  },
  data: function data() {
    return {
      product: []
    };
  },
  methods: {
    addToCart: function addToCart(id) {
      this.product = (0,_app_cart_cart__WEBPACK_IMPORTED_MODULE_1__.addToCart)(id);
    },
    getProduct: function getProduct() {
      var _this = this;
      var productId = this.$route.params.id;
      (0,_app_product_product__WEBPACK_IMPORTED_MODULE_0__.getProductDetails)(this.axios, productId).then(function (product) {
        _this.product = product;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/show.vue?vue&type=template&id=0c4f2bc8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/show.vue?vue&type=template&id=0c4f2bc8 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "shop-details-breadcrumb wow fadeInUp overflow-hidden animated",
  style: {
    "visibility": "visible",
    "animation-name": "fadeInUp"
  }
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-xl-12"
};
var _hoisted_5 = {
  "class": "shop-details-inner"
};
var _hoisted_6 = {
  "class": "shop-details-menu"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Products");
var _hoisted_8 = {
  "class": "active"
};
var _hoisted_9 = {
  "class": "shop-details-top two"
};
var _hoisted_10 = {
  "class": "container"
};
var _hoisted_11 = {
  "class": "row mt--30"
};
var _hoisted_12 = {
  "class": "col-xl-6 col-lg-6 mt-30 wow fadeInUp animated",
  style: {
    "visibility": "visible",
    "animation-name": "fadeInUp"
  }
};
var _hoisted_13 = {
  "class": "single-product-box one"
};
var _hoisted_14 = {
  "class": "big-product single-product-one slider-for slick-initialized slick-slider"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "arrow-back slick-arrow",
  "aria-disabled": "false",
  style: {}
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-arrow-1"
})], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "slick-list draggable"
};
var _hoisted_17 = {
  "class": "slick-track",
  style: {
    "opacity": "1",
    "width": "3480px",
    "transform": "translate3d(-696px, 0px, 0px)"
  }
};
var _hoisted_18 = {
  "class": "slick-slide",
  "data-slick-index": "0",
  "aria-hidden": "true",
  style: {
    "width": "696px"
  },
  tabindex: "-1"
};
var _hoisted_19 = {
  "class": "single-item"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ptag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, "-20% ")], -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "love",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-like"
})], -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "slick-slide slick-current slick-active",
  "data-slick-index": "1",
  "aria-hidden": "false",
  style: {
    "width": "696px"
  },
  tabindex: "0"
};
var _hoisted_25 = {
  "class": "single-item"
};
var _hoisted_26 = ["src"];
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ptag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, "-20% ")], -1 /* HOISTED */);
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "love",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-like"
})], -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "arrow-next slick-arrow",
  style: {},
  "aria-disabled": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next-1"
})], -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "navholder"
};
var _hoisted_32 = {
  "class": "product-slicknav single-product-one-nav slider-nav slick-initialized slick-slider"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "arrow-back slick-arrow",
  "aria-disabled": "false",
  style: {}
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-arrow-1"
})], -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "slick-list draggable"
};
var _hoisted_35 = {
  "class": "slick-track",
  style: {
    "opacity": "1",
    "width": "380px",
    "transform": "translate3d(46px, 0px, 0px)"
  }
};
var _hoisted_36 = {
  "class": "slick-slide",
  "data-slick-index": "0",
  "aria-hidden": "true",
  style: {
    "width": "120px"
  },
  tabindex: "-1"
};
var _hoisted_37 = {
  "class": "single-item"
};
var _hoisted_38 = ["src"];
var _hoisted_39 = {
  "class": "slick-slide slick-active",
  "data-slick-index": "2",
  "aria-hidden": "false",
  style: {
    "width": "120px"
  },
  tabindex: "0"
};
var _hoisted_40 = {
  "class": "single-item"
};
var _hoisted_41 = ["src"];
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "arrow-next slick-arrow",
  style: {},
  "aria-disabled": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next-1"
})], -1 /* HOISTED */);
var _hoisted_43 = {
  "class": "col-xl-6 col-lg-6 mt-30 wow fadeInUp animated",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
};
var _hoisted_44 = {
  "class": "shop-details-top-right"
};
var _hoisted_45 = {
  "class": "shop-details-top-right-content-box"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-top-review-box\"><div class=\"shop-details-top-review\"><ul><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li></ul><p>(2 Reviews)</p></div></div>", 1);
var _hoisted_47 = {
  "class": "shop-details-top-title"
};
var _hoisted_48 = {
  "class": "shop-details-top-info"
};
var _hoisted_49 = {
  "class": "shop-details-top-price-box"
};
var _hoisted_50 = {
  "class": "d-flex"
};
var _hoisted_51 = {
  key: 0,
  style: {
    "margin-right": "5px"
  }
};
var _hoisted_52 = {
  key: 1
};
var _hoisted_53 = {
  key: 2
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"shop-details-top-product-sale\"><span>20</span> Products sold in last 12 hours </p><div class=\"shop-details-top-size-box\"><h4>Size: (XS)</h4><div class=\"shop-details-top-size-list-box\"><ul class=\"shop-details-top-size-list\"><li><a href=\"#0\">XS</a></li><li><a href=\"#0\">S</a></li><li><a href=\"#0\">M</a></li><li><a href=\"#0\">XL</a></li></ul><p class=\"shop-details-top-size-guide\"><a href=\"#0\">Size Guide</a></p></div></div>", 2);
var _hoisted_56 = {
  "class": "shop-details-top-color-sky-box"
};
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Colors:", -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "varients"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0"
}, null, -1 /* HOISTED */);
var _hoisted_60 = [_hoisted_59];
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"shop-details-top-ask-question\"><li><a href=\"#0\"><div class=\"icon\"><i class=\"flaticon-left-and-right-arrows\"></i></div><div class=\"text\"><p>Add to Compare</p></div></a></li><li><a href=\"#0\"><div class=\"icon\"><i class=\"flaticon-chat-bubble\"></i></div><div class=\"text\"><p>Ask Question</p></div></a></li></ul><div class=\"timer-box\"><h4>Running Offer</h4><div class=\"countdown-timer\"><div class=\"default-coundown\"><div class=\"box\"><div class=\"countdown time-countdown-two\" data-countdown-time=\"2022/03/12\"><li><div class=\"box\"><span class=\"days\">00</span> <span class=\"timeRef\">days</span></div></li> <li><div class=\"box\"><span class=\"hours\">00</span> <span class=\"timeRef clr-1\">hours</span></div></li> <li><div class=\"box\"><span class=\"minutes\">00</span> <span class=\"timeRef clr-2\">min</span></div></li> <li><div class=\"box\"><span class=\"seconds\">00</span> <span class=\"timeRef clr-3\">sec</span></div></li></div></div></div></div></div><p class=\"shop-details-top-product-sale\"><span>20</span> Persons looking for this product</p><div class=\"product-quantity\"><h4>Quantity</h4><div class=\"product-quantity-box d-flex align-items-center flex-wrap\"><div class=\"qty mr-2\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"> <span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div></div><div class=\"product-quantity-check\"><i class=\"flaticon-select\"></i><p>In Stock</p></div></div></div><div class=\"shop-details-top-order-now\"><i class=\"flaticon-point\"></i><p>Order Now, Only 10 Left !</p></div>", 5);
var _hoisted_66 = {
  "class": "shop-details-top-cart-box-btn"
};
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-top-free-shipping\"><i class=\"flaticon-shipping\"></i><p>SPENT <span>$399.00</span> MORE FOR FREE SHIPPING</p></div><div class=\"shop-details-top-social-box\"><p>Share:</p><ul class=\"ps-1 social_link d-flex align-items-center\"><li><a href=\"https://www.facebook.com/\" class=\"active\" target=\"_blank\"><i class=\"flaticon-facebook-app-symbol\"></i></a></li><li><a href=\"https://www.youtube.com/\" target=\"_blank\"><i class=\"flaticon-youtube\"></i></a></li><li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"flaticon-twitter\"></i></a></li><li><a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"flaticon-instagram\"></i></a></li></ul></div><div class=\"checked-box\"><form><div class=\"form-group\"><input type=\"checkbox\" id=\"html\"> <label for=\"html\">I agree with all company terms &amp; condition</label></div></form></div><div class=\"shop-details-top-buy-now-btn\"><a href=\"#\" class=\"btn--primary\">Buy It Now</a></div><div class=\"shop-details-top-safe-checkout\"><h4>Guranteed Safe Checkout</h4><ul class=\"shop-details-top-safe-checkout-list\"><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"vue_front/assets/images/shop/shop-details-top-safe-checkout-img-1.jpg\" alt=\"\"></a></div></li></ul></div><p class=\"shop-details-top-product-delivery\">This product estimated delivery between <span>Wednesday 27 October</span> <br> <span>Tuesday 02 November</span></p>", 6);
var _hoisted_73 = {
  "class": "shop-details-top-category-tags"
};
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Category: ");
var _hoisted_75 = {
  key: 0
};
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tags: ");
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"shop-details-top-feature\"><li><div class=\"icon\"><i class=\"flaticon-portfolio\"></i></div><div class=\"text\"><p>Money back guarantee</p></div></li><li><div class=\"icon\"><i class=\"flaticon-truck\"></i></div><div class=\"text\"><p>Free Shipping &amp; Return</p></div></li><li><div class=\"icon\"><i class=\"flaticon-security\"></i></div><div class=\"text\"><p>Comportable Support</p></div></li></ul>", 1);
var _hoisted_78 = {
  "class": "product pt-60 pb-60 wow fadeInUp overflow-hidden",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
};
var _hoisted_79 = {
  "class": "container"
};
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row wow fadeInUp animated",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav product-details-nav nav-one nav-pills justify-content-center",
  id: "pills-tab-two",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-description-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-description",
  type: "button",
  role: "tab",
  "aria-controls": "pills-description",
  "aria-selected": "true"
}, " Description ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-sizechart-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-sizechart",
  type: "button",
  role: "tab",
  "aria-controls": "pills-sizechart",
  "aria-selected": "false"
}, " Size Chart ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-review-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-review",
  type: "button",
  role: "tab",
  "aria-controls": "pills-review",
  "aria-selected": "false"
}, " Review ")])])])], -1 /* HOISTED */);
var _hoisted_81 = {
  "class": "row wow fadeInUp animated",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
};
var _hoisted_82 = {
  "class": "tab-content",
  id: "pills-tabContent-two"
};
var _hoisted_83 = {
  "class": "tab-pane fade show active",
  id: "pills-description",
  role: "tabpanel",
  "aria-labelledby": "pills-description-tab"
};
var _hoisted_84 = {
  "class": "product-drescription"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, " Product Details:", -1 /* HOISTED */);
var _hoisted_86 = ["innerHTML"];
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row align-items-center\"><div class=\"col-lg-4 mt-30\"><div class=\"thumb\"><img src=\"vue_front/assets/images/shop/shop-details-tab-content-specification-img-1.jpg\" alt=\"\"></div></div><div class=\"col-lg-8 mt-30\"><h4>Specification:</h4><ul class=\"drescription-list\"><li> 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis fermentum. </li><li> 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat. </li><li> 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. </li><li> 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. </li><li> 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor </li></ul></div></div>", 1);
var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-sizechart",
  role: "tabpanel",
  "aria-labelledby": "pills-sizechart-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-chirt"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Size Guide"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pt-0"
}, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-tabble"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Size"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XXS - XS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XS - S"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "S - M"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "M - L"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "L - XL"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XL - XXL")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "ARGENTINA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "7"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "9"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "11"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "BOLIVIA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "9"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "11"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "13")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "COLOMBIA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "26"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "28"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "30"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "China"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "MEXICO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "JAMAICA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "46"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "48"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "50")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "MEXICO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Australia"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "16")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "USA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "33"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "55"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "66"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "77"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "88")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "UK"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "16")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Pant")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "22-23 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "24-25"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "26-27"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "28-29"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "30-31"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32-33")])])])])])])], -1 /* HOISTED */);
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-review",
  role: "tabpanel",
  "aria-labelledby": "pills-review-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single pt-0 hed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ps-2"
}, "BASED ON 100 REVIEW")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Vary Good quality Theme "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Raul Bates on January 28, 2022")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "right-box"
}, " Report this Comments ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Amazing Theme "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Kurt Morgan on January 28, 2022")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "right-box"
}, "Report this Comments ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-from-box mt-30"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Write a Review"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  action: "#",
  "class": "review-from"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " RATING "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, "NAME"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "name",
  "class": "form-control",
  placeholder: "David Warner"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "number"
}, "Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "number",
  "class": "form-control",
  placeholder: "Phone Number"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, " Email "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "email",
  "class": "form-control",
  placeholder: "support@gmail.com"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "namee"
}, " REVIEW TITLE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "namee",
  "class": "form-control",
  placeholder: "Give your review title"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "BODY OF REVIEW (1500) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  placeholder: "Write Your Comments Here"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn--primary style2"
}, "Submit Review ")])])])], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Shop Details Breadcrumb"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'product.index'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.title), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Shop Details Breadcrumb"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Shop Details Top"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.product.preview_image,
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_20), _hoisted_21, _hoisted_22, _hoisted_23])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.product.hover_image,
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_26), _hoisted_27, _hoisted_28, _hoisted_29])])])]), _hoisted_30]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.product.preview_image,
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_38)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.product.hover_image,
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_41)])])])]), _hoisted_42])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_50, [$data.product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("del", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.discount_price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_58, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.colors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
        "border-radius": "10px",
        "border": "1px black solid",
        "width": "50px",
        "height": "50px"
      }, "background: #".concat(color.title)]),
      "class": "color-name"
    }, _hoisted_60, 4 /* STYLE */);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary style2",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    type: "submit"
  }, "Add to Cart")]), _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_74, $data.product.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.category.title), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_76, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.tags, function (tag) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.title + " "), 1 /* TEXT */);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _hoisted_77])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Shop Details Top"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tabStart "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $data.product.content
  }, null, 8 /* PROPS */, _hoisted_86), _hoisted_87])]), _hoisted_88, _hoisted_89])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tab End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" recent-products Start ")]);
}

/***/ }),

/***/ "./resources/js/app/product/product.js":
/*!*********************************************!*\
  !*** ./resources/js/app/product/product.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProduct: () => (/* binding */ getProduct),
/* harmony export */   getProductByColor: () => (/* binding */ getProductByColor),
/* harmony export */   getProductDetails: () => (/* binding */ getProductDetails),
/* harmony export */   getProducts: () => (/* binding */ getProducts)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getProducts(axios, tags, prices, categories, colors, page, products, pagination) {
  return new Promise(function (resolve, reject) {
    axios.post('/api/products', {
      'tags': tags,
      'discount_prices': prices,
      'categories': categories,
      'colors': colors,
      'page': page
    }).then(function (res) {
      products = res.data.data;
      pagination = res.data.meta;
      resolve({
        products: products,
        pagination: pagination
      });
    })["catch"](function (error) {
      console.log(error);
      reject(error);
    })["finally"](function () {
      $(document).trigger('change');
    });
  });
}
function getProduct(axios, popUpProduct, id) {
  return new Promise(function (resolve, reject) {
    axios.get("/api/products/".concat(id)).then(function (res) {
      popUpProduct = res.data.data;
      resolve(popUpProduct);
    })["catch"](function (error) {
      console.log(error.response);
      reject(error);
    })["finally"](function () {
      $(document).trigger('change');
    });
  });
}
function getProductDetails(axios, productId) {
  return axios.get("/api/products/".concat(productId)).then(function (res) {
    return res.data.data;
  })["catch"](function (error) {
    console.log(error.response);
    throw error;
  })["finally"](function () {
    $(document).trigger('change');
  });
}
function getProductByColor(products, popUpProduct, color_id) {
  return new Promise(function (resolve) {
    var _iterator = _createForOfIteratorHelper(products),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var product = _step.value;
        var _iterator2 = _createForOfIteratorHelper(product.colors),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var color = _step2.value;
            if (color.id === color_id && product) {
              popUpProduct = product;
              resolve(popUpProduct);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}

/***/ }),

/***/ "./resources/js/views/product/show.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/product/show.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_0c4f2bc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=0c4f2bc8 */ "./resources/js/views/product/show.vue?vue&type=template&id=0c4f2bc8");
/* harmony import */ var _show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js */ "./resources/js/views/product/show.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_show_vue_vue_type_template_id_0c4f2bc8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/show.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/views/product/show.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/product/show.vue?vue&type=template&id=0c4f2bc8":
/*!***************************************************************************!*\
  !*** ./resources/js/views/product/show.vue?vue&type=template&id=0c4f2bc8 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_template_id_0c4f2bc8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_template_id_0c4f2bc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./show.vue?vue&type=template&id=0c4f2bc8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/show.vue?vue&type=template&id=0c4f2bc8");


/***/ })

}]);