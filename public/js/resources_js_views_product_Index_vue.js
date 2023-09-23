(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wait_on_exampleConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wait-on/exampleConfig */ "./node_modules/wait-on/exampleConfig.js");
/* harmony import */ var wait_on_exampleConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wait_on_exampleConfig__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    $(document).trigger('change');
    this.getProducts();
    this.getFilters();
  },
  data: function data() {
    return {
      isSidebarActive: false,
      products: [],
      tags: [],
      prices: [],
      categories: [],
      colors: [],
      popUpProduct: [],
      filters: [],
      pagination: null
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
      $(document).trigger('change');
    },
    toggleSidebar: function toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive; // Toggle the class
    },
    filterProducts: function filterProducts() {
      var prices = $('#priceRange').val();
      this.prices = prices.replaceAll(/[\s]|[£]/g, '').split('-');
      this.getProducts();
      console.log(this.products);
    },
    addColor: function addColor(id) {
      if (!this.colors.includes(id)) {
        this.colors.push(id);
      } else {
        this.colors = this.colors.filter(function (elem) {
          return elem !== id;
        });
      }
    },
    addTag: function addTag(id) {
      if (!this.tags.includes(id)) {
        this.tags.push(id);
      } else {
        this.tags = this.tags.filter(function (elem) {
          return elem !== id;
        });
      }
    },
    tagsCheck: function tagsCheck(tags1, tags2) {
      var check = null;
      for (var tag1 in tags1) {
        for (var tag2 in tags2) {
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
    getProducts: function getProducts() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.axios.post('http://127.0.0.1:8000/api/products', {
        'tags': this.tags,
        'discount_prices': this.prices,
        'categories': this.categories,
        'colors': this.colors,
        'page': page
      }).then(function (res) {
        _this.products = res.data.data;
        _this.pagination = res.data.meta;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function (fin) {
        $(document).trigger('change');
      });
    },
    getProduct: function getProduct(id) {
      var _this2 = this;
      this.axios.get("http://127.0.0.1:8000/api/products/".concat(id)).then(function (res) {
        _this2.popUpProduct = res.data.data;
      })["catch"](function (error) {
        console.log(error.response);
      })["finally"](function (fin) {
        $(document).trigger('change');
      });
    },
    getProductByColor: function getProductByColor(color_id) {
      var _iterator = _createForOfIteratorHelper(this.products),
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
                this.popUpProduct = product;
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
    },
    getFilters: function getFilters() {
      var _this3 = this;
      this.axios.get('http://127.0.0.1:8000/api/products/filters').then(function (res) {
        _this3.filters = res.data;
        //  Price Filter
        if ($("#price-range").length) {
          var _this3$filters$price$, _this3$filters$price$2, _this3$filters$price$3, _this3$filters$price$4;
          $("#price-range").slider({
            range: true,
            min: (_this3$filters$price$ = _this3.filters.price.min_discount) !== null && _this3$filters$price$ !== void 0 ? _this3$filters$price$ : _this3.filters.price.min,
            max: _this3.filters.price.max,
            values: [(_this3$filters$price$2 = _this3.filters.price.min_discount) !== null && _this3$filters$price$2 !== void 0 ? _this3$filters$price$2 : _this3.filters.price.min, _this3.filters.price.max],
            slide: function slide(event, ui) {
              $("#priceRange").val("£" + ui.values[0] + " - £" + ui.values[1]);
            }
          });
          console.log((_this3$filters$price$3 = _this3.filters.price.min_discount) !== null && _this3$filters$price$3 !== void 0 ? _this3$filters$price$3 : _this3.filters.price.min);
          console.log((_this3$filters$price$4 = _this3.filters.price.min_discount) !== null && _this3$filters$price$4 !== void 0 ? _this3$filters$price$4 : _this3.filters.price.min);
          $("#priceRange").val("£" + $("#price-range").slider("values", 0) + " - £" + $("#price-range").slider("values", 1));
        }
        ;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function (fin) {
        $(document).trigger('change');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "overflow-hidden"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"breadcrumb-area\" style=\"background-image:url(vue_front/assets/images/814.jpg);\"><div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"breadcrumb-content pb-60 text-center wow fadeInUp animated\"><h2>Products</h2><div class=\"breadcrumb-menu\"><ul><li><a href=\"/\"><i class=\"flaticon-home pe-2\"></i>Home</a></li><li><i class=\"flaticon-next\"></i></li><li class=\"active\">Main page</li></ul></div></div></div></div></div></div>", 1);
var _hoisted_3 = {
  "class": "product-categories-one pb-60"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "row wow fadeInUp animated"
};
var _hoisted_6 = {
  "class": "col-xl-12"
};
var _hoisted_7 = {
  "class": "product-categories-one__inner"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "img-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "vue_front/assets/images/shop/product-categories-v1-img1.png",
  alt: ""
})])], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "title"
};
var _hoisted_10 = {
  href: "#0"
};
var _hoisted_11 = {
  "class": "product-grid pt-60 pb-120"
};
var _hoisted_12 = {
  "class": "container"
};
var _hoisted_13 = {
  "class": "row gx-4"
};
var _hoisted_14 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cross"
}, null, -1 /* HOISTED */);
var _hoisted_16 = [_hoisted_15];
var _hoisted_17 = {
  "class": "sidebar-holder"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form action=\"#0\" class=\"footer-default__subscrib-form m-0 p-0 wow fadeInUp animated\"><div class=\"footer-input-box p-0\"><input type=\"email\" placeholder=\"Email address\" name=\"email\"><button type=\"submit\" class=\"subscribe_btn\"><i class=\"flaticon-magnifying-glass\"></i></button></div></form>", 1);
var _hoisted_19 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select Categories", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "checkbox-item"
};
var _hoisted_22 = {
  "class": "form-group"
};
var _hoisted_23 = ["id", "value"];
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_25 = ["for"];
var _hoisted_26 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Color Option ", -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "color-option"
};
var _hoisted_29 = ["onClick"];
var _hoisted_30 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Filter By Price", -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "slider-box"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "price-range",
  "class": "slider"
}, null, -1 /* HOISTED */);
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "output-price"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "priceRange"
}, "Price:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "priceRange",
  readonly: ""
})], -1 /* HOISTED */);
var _hoisted_35 = {
  "class": "single-sidebar-box mt-10 wow fadeInUp animated pb-0 border-bottom-0",
  style: {
    "margin-bottom": "50px",
    "margin-left": "10px"
  }
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Tags ", -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "popular-tag"
};
var _hoisted_38 = ["onClick"];
var _hoisted_39 = {
  "class": "col-xl-9 col-lg-8"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left-box wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Showing 1–12 of 50 Results")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "right-box justify-content-md-between justify-content-center wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "short-by"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "select-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
  "class": "wide"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  "data-display": "Short by latest"
}, "Featured"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "Best selling"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "2"
}, "Alphabetically, A-Z")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-view-style d-flex justify-content-md-between justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills",
  id: "pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-grid-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-grid",
  type: "button",
  role: "tab",
  "aria-selected": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-grid"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-list-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-list",
  type: "button",
  role: "tab",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-list"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "slidebarfilter d-lg-none d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-edit"
})])])])])])], -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "col-12"
};
var _hoisted_43 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_44 = {
  "class": "tab-pane fade show active",
  id: "pills-grid",
  role: "tabpanel",
  "aria-labelledby": "pills-grid-tab"
};
var _hoisted_45 = {
  "class": "row"
};
var _hoisted_46 = {
  "class": "col-xl-4 col-lg-6 col-6"
};
var _hoisted_47 = {
  "class": "products-three-single w-100 h-100 mt-30"
};
var _hoisted_48 = {
  "class": "products-three-single-img"
};
var _hoisted_49 = ["src"];
var _hoisted_50 = ["src"];
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "products-grid-one__badge-box"
}, null, -1 /* HOISTED */);
var _hoisted_52 = ["onClick"];
var _hoisted_53 = {
  "class": "products-grid__usefull-links"
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "wishlist.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-heart"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " wishlist")])], -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "compare.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-and-right-arrows"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " compare")])], -1 /* HOISTED */);
var _hoisted_56 = ["onClick", "href"];
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-visibility"
}, null, -1 /* HOISTED */);
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " quick view", -1 /* HOISTED */);
var _hoisted_59 = [_hoisted_57, _hoisted_58];
var _hoisted_60 = ["id"];
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tabb1\"><img src=\"vue_front/assets/images/shop/products-v6-img5.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tabb2\"><img src=\"vue_front/assets/images/shop/products-v6-img6.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tabb3\"><img src=\"vue_front/assets/images/shop/products-v6-img7.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tabb1\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"vue_front/assets/images/shop/products-v6-img5.jpg\" alt=\"\"></div></div><button class=\"prev\"><i class=\"flaticon-back\"></i></button><button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Brown Office Shoe</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(112)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $42 USD <del> $65 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a><a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div><button class=\"btn--primary\"> Add to Cart </button></div></div></div></div></div></div>", 1);
var _hoisted_62 = [_hoisted_61];
var _hoisted_63 = {
  "class": "products-three-single-content text-center"
};
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1 /* HOISTED */);
var _hoisted_65 = {
  "class": "d-flex"
};
var _hoisted_66 = {
  key: 0,
  style: {
    "margin-right": "5px"
  }
};
var _hoisted_67 = {
  key: 1
};
var _hoisted_68 = {
  key: 2
};
var _hoisted_69 = {
  "class": "tab-pane fade",
  id: "pills-list",
  role: "tabpanel",
  "aria-labelledby": "pills-list-tab"
};
var _hoisted_70 = {
  "class": "row"
};
var _hoisted_71 = {
  "class": "col-12"
};
var _hoisted_72 = {
  "class": "product-grid-two list mt-30"
};
var _hoisted_73 = {
  "class": "product-grid-two__img"
};
var _hoisted_74 = ["src"];
var _hoisted_75 = ["src"];
var _hoisted_76 = ["id"];
var _hoisted_77 = {
  "class": "container"
};
var _hoisted_78 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_79 = {
  "class": "col-lg-6"
};
var _hoisted_80 = {
  "class": "quick-view__left-content"
};
var _hoisted_81 = {
  "class": "tabs ui-tabs ui-corner-all ui-widget ui-widget-content"
};
var _hoisted_82 = {
  "class": "popup-product-thumb-box"
};
var _hoisted_83 = {
  role: "tablist",
  "class": "ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
};
var _hoisted_84 = {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active",
  role: "tab",
  tabindex: "0",
  "aria-controls": "tabb11",
  "aria-labelledby": "ui-id-64",
  "aria-selected": "true",
  "aria-expanded": "true"
};
var _hoisted_85 = {
  href: "#tabb11",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-64"
};
var _hoisted_86 = ["src"];
var _hoisted_87 = {
  "class": "tab-nav popup-product-thumb ui-tabs-tab ui-corner-top ui-state-default ui-tab",
  role: "tab",
  tabindex: "-1",
  "aria-controls": "tabb22",
  "aria-labelledby": "ui-id-65",
  "aria-selected": "false",
  "aria-expanded": "false"
};
var _hoisted_88 = {
  href: "#tabb22",
  tabindex: "-1",
  "class": "ui-tabs-anchor",
  id: "ui-id-65"
};
var _hoisted_89 = ["src"];
var _hoisted_90 = {
  "class": "popup-product-main-image-box"
};
var _hoisted_91 = {
  id: "tabb11",
  "class": "tab-item popup-product-image"
};
var _hoisted_92 = {
  "class": "popup-product-single-image"
};
var _hoisted_93 = ["src"];
var _hoisted_94 = {
  id: "tabb22",
  "class": "tab-item popup-product-image"
};
var _hoisted_95 = {
  "class": "popup-product-single-image"
};
var _hoisted_96 = ["src"];
var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})], -1 /* HOISTED */);
var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})], -1 /* HOISTED */);
var _hoisted_99 = {
  "class": "col-lg-6"
};
var _hoisted_100 = {
  "class": "popup-right-content"
};
var _hoisted_101 = {
  "class": "ratting"
};
var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i>", 9);
var _hoisted_111 = {
  key: 0,
  "class": "text"
};
var _hoisted_112 = {
  "class": "price"
};
var _hoisted_113 = {
  "class": "d-flex"
};
var _hoisted_114 = {
  key: 0,
  style: {
    "margin-right": "5px"
  }
};
var _hoisted_115 = {
  key: 1
};
var _hoisted_116 = {
  key: 2
};
var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, " In stuck", -1 /* HOISTED */);
var _hoisted_118 = {
  "class": "color-varient"
};
var _hoisted_119 = ["onClick"];
var _hoisted_120 = {
  "class": "add-product"
};
var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_122 = {
  "class": "button-group"
};
var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div>", 1);
var _hoisted_124 = ["onClick"];
var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\"><img src=\"vue_front/assets/images/payment_method/method_1.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"vue_front/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"vue_front/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"vue_front/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_126 = {
  key: 1,
  "class": "product-grid-two-content text-center"
};
var _hoisted_127 = {
  "class": "d-flex"
};
var _hoisted_128 = {
  key: 0,
  style: {
    "margin-right": "5px"
  }
};
var _hoisted_129 = {
  key: 1
};
var _hoisted_130 = {
  key: 2
};
var _hoisted_131 = {
  "class": "text"
};
var _hoisted_132 = {
  "class": "product-grid-two__overlay-box"
};
var _hoisted_133 = {
  "class": "title"
};
var _hoisted_134 = ["onClick"];
var _hoisted_135 = {
  "class": "icon"
};
var _hoisted_136 = ["href"];
var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-eye"
}, null, -1 /* HOISTED */);
var _hoisted_138 = [_hoisted_137];
var _hoisted_139 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "wishlist.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-heart"
})])], -1 /* HOISTED */);
var _hoisted_140 = {
  "class": "row"
};
var _hoisted_141 = {
  "class": "col-12 d-flex justify-content-center wow fadeInUp animated"
};
var _hoisted_142 = {
  key: 0,
  "class": "pagination text-center"
};
var _hoisted_143 = {
  key: 0,
  "class": "previous"
};
var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-arrow-1",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_145 = [_hoisted_144];
var _hoisted_146 = ["onClick"];
var _hoisted_147 = {
  key: 0
};
var _hoisted_148 = {
  key: 1,
  "class": "next"
};
var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next-1",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_150 = [_hoisted_149];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Breadcrumb Style2"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Breadcrumb Style2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Product Categories One"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filters.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 1 /* TEXT */)])])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Product Categories One"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start product-grid"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["shop-grid-sidebar", {
      'active': $data.isSidebarActive
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "remove-sidebar d-lg-none d-block",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.toggleSidebar && $options.toggleSidebar.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filters.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      id: category.id,
      value: category.id,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return $data.categories = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.categories]]), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 9 /* TEXT, PROPS */, _hoisted_25)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filters.colors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#0",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addColor(color.id);
      }, ["prevent"]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background: #".concat(color.title)),
      "class": "color-option-single"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.title), 1 /* TEXT */)], 12 /* STYLE, PROPS */, _hoisted_29)]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "filterbtn",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.filterProducts && $options.filterProducts.apply($options, arguments);
    }, ["prevent"])),
    type: "submit"
  }, " Filter ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_37, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filters.tags, function (tag) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addTag(tag.id);
      }, ["prevent"]),
      href: "#0"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.title), 9 /* TEXT, PROPS */, _hoisted_38)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'product.show',
        params: {
          id: product.id
        }
      },
      "class": "d-block"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: product.preview_image,
          "class": "first-img",
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_49), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: product.hover_image,
          alt: "",
          "class": "hover-img"
        }, null, 8 /* PROPS */, _hoisted_50)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]), _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "cart.html",
      "class": "addcart btn--primary style2",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product.id);
      }, ["prevent"])
    }, " Add To Cart ", 8 /* PROPS */, _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [_hoisted_54, _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $options.getProduct(product.id);
      },
      href: "#popup".concat(product.id),
      "class": "popup_link"
    }, _hoisted_59, 8 /* PROPS */, _hoisted_56)])])])]), $data.popUpProduct ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      id: "#popup".concat(product.id),
      "class": "product-gird__quick-view-popup mfp-hide"
    }, _hoisted_62, 8 /* PROPS */, _hoisted_60)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'product.show',
        params: {
          id: product.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_65, [product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("del", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.discount_price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [$data.products ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'product.show',
        params: {
          id: product.id
        }
      },
      "class": "d-block"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: product.preview_image,
          "class": "first-img",
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_74), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: product.hover_image,
          alt: "",
          "class": "hover-img"
        }, null, 8 /* PROPS */, _hoisted_75)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), $data.popUpProduct ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      id: "popup".concat(product.id),
      "class": "product-gird__quick-view-popup mfp-hide"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $data.popUpProduct.preview_image,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_86)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $data.popUpProduct.hover_image,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_89)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $data.popUpProduct.preview_image,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_93)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $data.popUpProduct.hover_image,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_96)])]), _hoisted_97, _hoisted_98])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popUpProduct.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [_hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popUpProduct.quantity) + ")", 1 /* TEXT */)]), $data.popUpProduct.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popUpProduct.category.title), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_113, [$data.popUpProduct.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("del", _hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popUpProduct.price) + "£ ", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.popUpProduct.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popUpProduct.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.popUpProduct.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popUpProduct.discount_price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_117]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [$data.popUpProduct.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (color_product) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$options.tagsCheck(color_product.tags, $data.popUpProduct.tags) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [$data.popUpProduct.id !== color_product.id && $data.popUpProduct.category.id === color_product.category.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(color_product.colors, function (color) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.getProductByColor(color.id);
          }, ["prevent"]),
          href: "#",
          "class": "color-name",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background: #".concat(color.title))
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.title), 1 /* TEXT */)], 12 /* STYLE, PROPS */, _hoisted_119);
      }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [_hoisted_121, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [_hoisted_123, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn--primary",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product.id);
      }, ["prevent"])
    }, " Add to Cart ", 8 /* PROPS */, _hoisted_124)])]), _hoisted_125])])])])], 8 /* PROPS */, _hoisted_76)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.category.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'product.show',
        params: {
          id: product.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_127, [product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("del", _hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), product.discount_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.discount_price) + "£", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_131, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product.id);
      }, ["prevent"])
    }, "Add To Cart", 8 /* PROPS */, _hoisted_134)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#popup".concat(product.id),
      "class": "popup_link"
    }, _hoisted_138, 8 /* PROPS */, _hoisted_136)]), _hoisted_139])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [$data.pagination ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_142, [$data.pagination.current_page !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getProducts($data.pagination.current_page - 1);
    }, ["prevent"])),
    href: "#"
  }, _hoisted_145)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pagination.links, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [Number(link.label) === 1 || Number(link.label) === $data.pagination.last_page || Math.abs($data.pagination.current_page - link.label) < 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [Number(link.label) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: "#",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.getProducts(link.label);
      }, ["prevent"]),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(link.active ? 'active' : '')
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_146)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : Number(link.label) !== 1 && Number(link.label) !== $data.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, [Math.abs($data.pagination.current_page - link.label) === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_147, "...")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256 /* UNKEYED_FRAGMENT */)), $data.pagination.current_page !== $data.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getProducts($data.pagination.current_page + 1);
    }, ["prevent"]))
  }, _hoisted_150)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End product-grid")]);
}

/***/ }),

/***/ "./resources/js/views/product/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/product/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=06cfffba */ "./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/views/product/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/product/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba":
/*!****************************************************************************!*\
  !*** ./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=06cfffba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba");


/***/ }),

/***/ "./node_modules/wait-on/exampleConfig.js":
/*!***********************************************!*\
  !*** ./node_modules/wait-on/exampleConfig.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = {
  // specify additional options here, especially http(s)
  // see https://nodejs.org/api/tls.html#tls_tls_connect_options_callback for specifics
  ca: [
    /* strings or binaries */
  ],
  cert: [
    /* strings or binaries */
  ],
  key: [
    /* strings or binaries */
  ],
  passphrase: 'yourpassphrase',
  auth: {
    user: 'yourusername',
    pass: 'yourpassword'
  },
  strictSSL: false,
  followRedirect: false,
  headers: {
    'x-custom': 'headers'
  },
  // optional default resources if not specified in command args
  resources: ['http://foo/bar', 'http://cat/dog']
};


/***/ })

}]);