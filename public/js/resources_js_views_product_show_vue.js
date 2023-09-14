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
      var _$$val;
      // Get the current cart from local storage or create a new empty cart
      var cart = JSON.parse(localStorage.getItem('cart')) || [];
      var qty = (_$$val = $('.qtyValue').val()) !== null && _$$val !== void 0 ? _$$val : 1;
      console.log(qty);
      // Check if the product with the given ID is already in the cart
      var productIndex = cart.findIndex(function (item) {
        return item.id === id;
      });
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
    getProduct: function getProduct() {
      var _this = this;
      console.log(this.$route.params.id);
      this.axios.get("http://127.0.0.1:8000/api/products/".concat(this.$route.params.id)).then(function (res) {
        _this.product = res.data.data;
        console.log(res);
      })["catch"](function (error) {
        console.log(error.response);
      })["finally"](function (fin) {
        $(document).trigger('change');
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
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-top-free-shipping\"><i class=\"flaticon-shipping\"></i><p>SPENT <span>$399.00</span> MORE FOR FREE SHIPPING</p></div><div class=\"shop-details-top-social-box\"><p>Share:</p><ul class=\"ps-1 social_link d-flex align-items-center\"><li><a href=\"https://www.facebook.com/\" class=\"active\" target=\"_blank\"><i class=\"flaticon-facebook-app-symbol\"></i></a></li><li><a href=\"https://www.youtube.com/\" target=\"_blank\"><i class=\"flaticon-youtube\"></i></a></li><li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"flaticon-twitter\"></i></a></li><li><a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"flaticon-instagram\"></i></a></li></ul></div><div class=\"checked-box\"><form><div class=\"form-group\"><input type=\"checkbox\" id=\"html\"> <label for=\"html\">I agree with all company terms &amp; condition</label></div></form></div><div class=\"shop-details-top-buy-now-btn\"><a href=\"#\" class=\"btn--primary\">Buy It Now</a></div><div class=\"shop-details-top-safe-checkout\"><h4>Guranteed Safe Checkout</h4><ul class=\"shop-details-top-safe-checkout-list\"><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-top-safe-checkout-img-1.jpg\" alt=\"\"></a></div></li></ul></div><p class=\"shop-details-top-product-delivery\">This product estimated delivery between <span>Wednesday 27 October</span> <br> <span>Tuesday 02 November</span></p>", 6);
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
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row align-items-center\"><div class=\"col-lg-4 mt-30\"><div class=\"thumb\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-tab-content-specification-img-1.jpg\" alt=\"\"></div></div><div class=\"col-lg-8 mt-30\"><h4>Specification:</h4><ul class=\"drescription-list\"><li> 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis fermentum. </li><li> 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat. </li><li> 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. </li><li> 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. </li><li> 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor </li></ul></div></div>", 1);
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
var _hoisted_90 = {
  "class": "recent-products pt-60 pb-120 overflow-hidden wow fadeInUp",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
};
var _hoisted_91 = {
  "class": "container"
};
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 wow fadeInUp animated",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "section-head text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Recent Products ")])])], -1 /* HOISTED */);
var _hoisted_93 = {
  "class": "row mt-30 wow fadeInUp animated",
  style: {
    "visibility": "hidden",
    "animation-name": "none"
  }
};
var _hoisted_94 = {
  "class": "catagory-slider slick-initialized slick-slider"
};
var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "arrow-back slick-arrow",
  "aria-disabled": "false",
  style: {}
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})], -1 /* HOISTED */);
var _hoisted_96 = {
  "class": "slick-list draggable"
};
var _hoisted_97 = {
  "class": "slick-track",
  style: {
    "opacity": "1",
    "width": "1392px",
    "transform": "translate3d(-696px, 0px, 0px)"
  }
};
var _hoisted_98 = {
  "class": "products-grid-one slick-slide",
  style: {
    "width": "204px"
  },
  "data-slick-index": "0",
  "aria-hidden": "true",
  tabindex: "-1"
};
var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/shop/products-img1.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\" tabindex=\"-1\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\" tabindex=\"-1\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup1\" class=\"popup_link\" tabindex=\"-1\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div>", 1);
var _hoisted_100 = {
  id: "view-popup1",
  "class": "product-gird__quick-view-popup mfp-hide"
};
var _hoisted_101 = {
  "class": "container"
};
var _hoisted_102 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quick-view__left-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-thumb-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "tab7",
  "aria-labelledby": "ui-id-1",
  "aria-selected": "true",
  "aria-expanded": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab7",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img1.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab8",
  "aria-labelledby": "ui-id-2",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab8",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img2.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab9",
  "aria-labelledby": "ui-id-3",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab9",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img3.jpg",
  alt: "img"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-main-image-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab7",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-1",
  role: "tabpanel",
  "aria-hidden": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img1.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab8",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-2",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img2.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab9",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-3",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img3.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})])])])])], -1 /* HOISTED */);
var _hoisted_104 = {
  "class": "col-lg-6"
};
var _hoisted_105 = {
  "class": "popup-right-content"
};
var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Blacked Neckles Set</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $45 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\" tabindex=\"-1\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\" tabindex=\"-1\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\" tabindex=\"-1\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\" tabindex=\"-1\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\" tabindex=\"-1\"><span>Black</span></a></div>", 5);
var _hoisted_111 = {
  "class": "add-product"
};
var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_113 = {
  "class": "button-group"
};
var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\" tabindex=\"-1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> ", 2);
var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_117 = {
  "class": "products-grid__content"
};
var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, " Add to Cart ", -1 /* HOISTED */);
var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-shopping-cart"
})], -1 /* HOISTED */);
var _hoisted_120 = [_hoisted_118, _hoisted_119];
var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\" tabindex=\"-1\">Diamond Bracelet </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$2909</p></div>", 3);
var _hoisted_124 = {
  "class": "products-grid-one slick-slide",
  style: {
    "width": "204px"
  },
  "data-slick-index": "1",
  "aria-hidden": "true",
  tabindex: "-1"
};
var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_black badge discount\">-20%</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\" tabindex=\"-1\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img3.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img4.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\" tabindex=\"-1\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\" tabindex=\"-1\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup2\" class=\"popup_link\" tabindex=\"-1\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div>", 1);
var _hoisted_126 = {
  id: "view-popup2",
  "class": "product-gird__quick-view-popup mfp-hide"
};
var _hoisted_127 = {
  "class": "container"
};
var _hoisted_128 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quick-view__left-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-thumb-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "tab777",
  "aria-labelledby": "ui-id-4",
  "aria-selected": "true",
  "aria-expanded": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab777",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img3.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab888",
  "aria-labelledby": "ui-id-5",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab888",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img4.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab999",
  "aria-labelledby": "ui-id-6",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab999",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img5.jpg",
  alt: "img"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-main-image-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab777",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-4",
  role: "tabpanel",
  "aria-hidden": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img3.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab888",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-5",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img5.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab999",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-6",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img6.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})])])])])], -1 /* HOISTED */);
var _hoisted_130 = {
  "class": "col-lg-6"
};
var _hoisted_131 = {
  "class": "popup-right-content"
};
var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Girl Diamond Ring </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $45 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\" tabindex=\"-1\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\" tabindex=\"-1\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\" tabindex=\"-1\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\" tabindex=\"-1\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\" tabindex=\"-1\"><span>Black</span></a></div>", 5);
var _hoisted_137 = {
  "class": "add-product"
};
var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_139 = {
  "class": "button-group"
};
var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\" tabindex=\"-1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> ", 2);
var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_143 = {
  "class": "products-grid__content"
};
var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, " Add to Cart ", -1 /* HOISTED */);
var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-shopping-cart"
})], -1 /* HOISTED */);
var _hoisted_146 = [_hoisted_144, _hoisted_145];
var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\" tabindex=\"-1\"> Girl Diamond Ring </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$250</p></div>", 3);
var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img3.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> blue </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img4.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Black </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></p></div>", 1);
var _hoisted_151 = {
  "class": "products-grid-one slick-slide",
  style: {
    "width": "204px"
  },
  "data-slick-index": "2",
  "aria-hidden": "true",
  tabindex: "-1"
};
var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span><span class=\"bg_black badge discount\">-30%</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\" tabindex=\"-1\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img4.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\" tabindex=\"-1\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\" tabindex=\"-1\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup3\" class=\"popup_link\" tabindex=\"-1\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div>", 1);
var _hoisted_153 = {
  id: "view-popup3",
  "class": "product-gird__quick-view-popup mfp-hide"
};
var _hoisted_154 = {
  "class": "container"
};
var _hoisted_155 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quick-view__left-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-thumb-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "tab7777",
  "aria-labelledby": "ui-id-7",
  "aria-selected": "true",
  "aria-expanded": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab7777",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img4.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab8888",
  "aria-labelledby": "ui-id-8",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab8888",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img5.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab9999",
  "aria-labelledby": "ui-id-9",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab9999",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-9"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img6.jpg",
  alt: "img"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-main-image-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab7777",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-7",
  role: "tabpanel",
  "aria-hidden": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img4.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab8888",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-8",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img5.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab9999",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-9",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img6.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next",
  tabindex: "-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})])])])])], -1 /* HOISTED */);
var _hoisted_157 = {
  "class": "col-lg-6"
};
var _hoisted_158 = {
  "class": "popup-right-content"
};
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Women Earring Erl</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $45 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\" tabindex=\"-1\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\" tabindex=\"-1\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\" tabindex=\"-1\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\" tabindex=\"-1\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\" tabindex=\"-1\"><span>Black</span></a></div>", 5);
var _hoisted_164 = {
  "class": "add-product"
};
var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_166 = {
  "class": "button-group"
};
var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\" tabindex=\"-1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> ", 2);
var _hoisted_169 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"-1\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_170 = {
  "class": "products-grid__content"
};
var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, " Add to Cart ", -1 /* HOISTED */);
var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-shopping-cart"
})], -1 /* HOISTED */);
var _hoisted_173 = [_hoisted_171, _hoisted_172];
var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\" tabindex=\"-1\"> Women Earring Erl </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><span class=\"pe-1\"><del> $200.00</del></span><p>$160</p></div>", 3);
var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img4.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> blue </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></p></div>", 1);
var _hoisted_178 = {
  "class": "products-grid-one slick-slide slick-current slick-active",
  style: {
    "width": "204px"
  },
  "data-slick-index": "3",
  "aria-hidden": "false",
  tabindex: "0"
};
var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\" tabindex=\"0\"><img class=\"products-grid-one__hover-img now-main\" src=\"http://localhost:5173/src/assets/images/shop/products-img6.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\" tabindex=\"0\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\" tabindex=\"0\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup4\" class=\"popup_link\" tabindex=\"0\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div>", 1);
var _hoisted_180 = {
  id: "view-popup4",
  "class": "product-gird__quick-view-popup mfp-hide"
};
var _hoisted_181 = {
  "class": "container"
};
var _hoisted_182 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_183 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quick-view__left-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-thumb-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "tab77777",
  "aria-labelledby": "ui-id-10",
  "aria-selected": "true",
  "aria-expanded": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab77777",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img5.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab88888",
  "aria-labelledby": "ui-id-11",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab88888",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-11"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img6.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tab99999",
  "aria-labelledby": "ui-id-12",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tab99999",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img7.jpg",
  alt: "img"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-main-image-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab77777",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-10",
  role: "tabpanel",
  "aria-hidden": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img5.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab88888",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-11",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img6.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "tab99999",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-12",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img7.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})])])])])], -1 /* HOISTED */);
var _hoisted_184 = {
  "class": "col-lg-6"
};
var _hoisted_185 = {
  "class": "popup-right-content"
};
var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Wedding Ring Men</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $35 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\" tabindex=\"0\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\" tabindex=\"0\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\" tabindex=\"0\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\" tabindex=\"0\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\" tabindex=\"0\"><span>Black</span></a></div>", 5);
var _hoisted_191 = {
  "class": "add-product"
};
var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_193 = {
  "class": "button-group"
};
var _hoisted_194 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\" tabindex=\"0\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> ", 2);
var _hoisted_196 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_197 = {
  "class": "products-grid__content"
};
var _hoisted_198 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, " Add to Cart ", -1 /* HOISTED */);
var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-shopping-cart"
})], -1 /* HOISTED */);
var _hoisted_200 = [_hoisted_198, _hoisted_199];
var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\" tabindex=\"0\"> Wedding Ring Men </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$200</p></div>", 3);
var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> blue </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img6.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></p></div>", 1);
var _hoisted_205 = {
  "class": "products-grid-one slick-slide slick-active",
  style: {
    "width": "204px"
  },
  "data-slick-index": "4",
  "aria-hidden": "false",
  tabindex: "0"
};
var _hoisted_206 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\" tabindex=\"0\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img6.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img2.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\" tabindex=\"0\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\" tabindex=\"0\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup5\" class=\"popup_link\" tabindex=\"0\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div>", 1);
var _hoisted_207 = {
  id: "view-popup5",
  "class": "product-gird__quick-view-popup mfp-hide"
};
var _hoisted_208 = {
  "class": "container"
};
var _hoisted_209 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_210 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quick-view__left-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-thumb-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "stab1",
  "aria-labelledby": "ui-id-13",
  "aria-selected": "true",
  "aria-expanded": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#stab1",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img1.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "stab2",
  "aria-labelledby": "ui-id-14",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#stab2",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img2.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "stab3",
  "aria-labelledby": "ui-id-15",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#stab3",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-15"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img3.jpg",
  alt: "img"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-main-image-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "stab1",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-13",
  role: "tabpanel",
  "aria-hidden": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img1.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "stab2",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-14",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img2.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "stab3",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-15",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img3.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})])])])])], -1 /* HOISTED */);
var _hoisted_211 = {
  "class": "col-lg-6"
};
var _hoisted_212 = {
  "class": "popup-right-content"
};
var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Titan Locket Women</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $55 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\" tabindex=\"0\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\" tabindex=\"0\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\" tabindex=\"0\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\" tabindex=\"0\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\" tabindex=\"0\"><span>Black</span></a></div>", 5);
var _hoisted_218 = {
  "class": "add-product"
};
var _hoisted_219 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_220 = {
  "class": "button-group"
};
var _hoisted_221 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\" tabindex=\"0\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> ", 2);
var _hoisted_223 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_224 = {
  "class": "products-grid__content"
};
var _hoisted_225 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, " Add to Cart ", -1 /* HOISTED */);
var _hoisted_226 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-shopping-cart"
})], -1 /* HOISTED */);
var _hoisted_227 = [_hoisted_225, _hoisted_226];
var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\" tabindex=\"0\"> Titan Locket Women </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$250</p></div>", 3);
var _hoisted_231 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Blue </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img6.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img7.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> green </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img8.jpg\" alt=\"Alt\"></p></div>", 1);
var _hoisted_232 = {
  "class": "products-grid-one slick-slide slick-active",
  style: {
    "width": "204px"
  },
  "data-slick-index": "5",
  "aria-hidden": "false",
  tabindex: "0"
};
var _hoisted_233 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__product-image\"><a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\" tabindex=\"0\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img12.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"http://localhost:5173/src/assets/images/shop/products-img11.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\" tabindex=\"0\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\" tabindex=\"0\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup6\" class=\"popup_link\" tabindex=\"0\"><i class=\"flaticon-visibility\"></i><span> quick view</span></a></li></ul></div></div>", 1);
var _hoisted_234 = {
  id: "view-popup6",
  "class": "product-gird__quick-view-popup mfp-hide"
};
var _hoisted_235 = {
  "class": "container"
};
var _hoisted_236 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_237 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "quick-view__left-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-thumb-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "ttab111",
  "aria-labelledby": "ui-id-16",
  "aria-selected": "true",
  "aria-expanded": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#ttab111",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img9.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "ttab222",
  "aria-labelledby": "ui-id-17",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#ttab222",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-17"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img10.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "ttab333",
  "aria-labelledby": "ui-id-18",
  "aria-selected": "false",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#ttab333",
  tabindex: "0",
  "class": "ui-tabs-anchor",
  id: "ui-id-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img11.jpg",
  alt: "img"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-main-image-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "ttab111",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-16",
  role: "tabpanel",
  "aria-hidden": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img9.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "ttab222",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-17",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img10.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "ttab333",
  "class": "tab-item popup-product-image ui-tabs-panel ui-corner-bottom ui-widget-content",
  "aria-labelledby": "ui-id-18",
  role: "tabpanel",
  style: {
    "display": "none"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-product-single-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/products-img11.jpg",
  alt: "img"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next",
  tabindex: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})])])])])], -1 /* HOISTED */);
var _hoisted_238 = {
  "class": "col-lg-6"
};
var _hoisted_239 = {
  "class": "popup-right-content"
};
var _hoisted_240 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Gold Bracelet Girl </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $65 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\" tabindex=\"0\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\" tabindex=\"0\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\" tabindex=\"0\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\" tabindex=\"0\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\" tabindex=\"0\"><span>Black</span></a></div>", 5);
var _hoisted_245 = {
  "class": "add-product"
};
var _hoisted_246 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_247 = {
  "class": "button-group"
};
var _hoisted_248 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\" tabindex=\"0\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> ", 2);
var _hoisted_250 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\" tabindex=\"0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_251 = {
  "class": "products-grid__content"
};
var _hoisted_252 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, " Add to Cart ", -1 /* HOISTED */);
var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-shopping-cart"
})], -1 /* HOISTED */);
var _hoisted_254 = [_hoisted_252, _hoisted_253];
var _hoisted_255 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\" tabindex=\"0\">Gold Bracelet Girl </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$150</p></div>", 3);
var _hoisted_258 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Blue </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img12.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Green </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img11.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Black </span> <img src=\"http://localhost:5173/src/assets/images/shop/products-img10.jpg\" alt=\"Alt\"></p></div>", 1);
var _hoisted_259 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "arrow-next slick-arrow slick-disabled",
  style: {},
  "aria-disabled": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})], -1 /* HOISTED */);

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
  }, null, 8 /* PROPS */, _hoisted_86), _hoisted_87])]), _hoisted_88, _hoisted_89])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tab End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" recent-products Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [_hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [_hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [_hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "-1"
  }, " Add to Cart ")])]), _hoisted_116])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "cart.html",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    "class": "products-grid__cart-btn btn--primary",
    tabindex: "-1"
  }, _hoisted_120), _hoisted_121])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [_hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [_hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [_hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "-1"
  }, " Add to Cart ")])]), _hoisted_142])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "cart.html",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    "class": "products-grid__cart-btn btn--primary",
    tabindex: "-1"
  }, _hoisted_146), _hoisted_147]), _hoisted_150]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [_hoisted_152, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [_hoisted_156, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [_hoisted_159, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [_hoisted_167, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "-1"
  }, " Add to Cart ")])]), _hoisted_169])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_170, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "cart.html",
    "class": "products-grid__cart-btn btn--primary",
    tabindex: "-1",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"]))
  }, _hoisted_173), _hoisted_174]), _hoisted_177]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [_hoisted_179, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [_hoisted_183, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [_hoisted_192, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [_hoisted_194, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary",
    onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "0"
  }, " Add to Cart ")])]), _hoisted_196])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "cart.html",
    "class": "products-grid__cart-btn btn--primary",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "0"
  }, _hoisted_200), _hoisted_201]), _hoisted_204]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [_hoisted_206, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [_hoisted_210, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [_hoisted_213, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_218, [_hoisted_219, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_220, [_hoisted_221, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary",
    onClick: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "0"
  }, " Add to Cart ")])]), _hoisted_223])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "cart.html",
    onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    "class": "products-grid__cart-btn btn--primary",
    tabindex: "0"
  }, _hoisted_227), _hoisted_228]), _hoisted_231]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_232, [_hoisted_233, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_235, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_236, [_hoisted_237, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_239, [_hoisted_240, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_245, [_hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_247, [_hoisted_248, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn--primary",
    onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "0"
  }, " Add to Cart ")])]), _hoisted_250])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_251, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "cart.html",
    "class": "products-grid__cart-btn btn--primary",
    onClick: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($data.product.id);
    }, ["prevent"])),
    tabindex: "0"
  }, _hoisted_254), _hoisted_255]), _hoisted_258])])]), _hoisted_259])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" recent-products End ")]);
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