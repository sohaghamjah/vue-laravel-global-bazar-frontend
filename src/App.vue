
import AboutVue from './views/pages/About.vue';

<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>
    <div class="header-top">
      <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-5">
                <div class="header-top-welcome">
                  <p>Welcome to Ecomart in Your Dream Online Store!</p>
                </div>
            </div>
            <div class="col-md-5 col-lg-3"></div>
            <div class="col-md-7 col-lg-4">
                <ul class="header-top-list">
                  <li><a href="offer.html">Seller Apply</a></li>
                  <li><a href="faq.html">need help</a></li>
                  <li><a href="contact.html">contact us</a></li>
                </ul>
            </div>
          </div>
      </div>
    </div>
    <header class="header-part">
      <div class="container">
          <div class="header-content">
            <div class="header-media-group">
                <button class="header-user">
                <img src="./assets/images/menu.png" alt="user" /></button><a href="index.html"><img src="./assets/images/logo.png"
                  alt="logo" /></a><button class="header-src"><i class="fas fa-search"></i></button>
            </div>
            <a href="index.html" class="header-logo"><img src="./assets/images/logo.png" alt="logo" /></a>
            <form class="header-form">
                <input type="text" placeholder="Search anything..." /><button>
                <i class="fas fa-search"></i>
                </button>
            </form>
            <div class="header-widget-group">
                <li class="nav-item dropdown">
                  <a class="nav-link header-widget" href="#" data-bs-toggle="dropdown"><i class="fas fa-user"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end">
                      <li><a href="login.html" class="dropdown-item"> Login</a></li>
                      <li>
                        <a href="register.html" class="dropdown-item"> Register</a>
                      </li>
                  </ul>
                </li>
                <a href="wishlist.html" class="header-widget" title="Wishlist"><i
                  class="fas fa-heart"></i><sup>0</sup></a><button class="header-widget header-cart" title="Cartlist">
                <i class="fas fa-shopping-basket"></i><sup>9+</sup><span>total price<small>$345.00</small></span>
                </button>
            </div>
          </div>
      </div>
    </header>
    <nav class="navbar-part">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="navbar-content">
                  <ul class="navbar-list">
                      <li class="navbar-item dropdown">
                        <a class="navbar-link" href="#">home</a>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <a class="navbar-link dropdown-arrow" href="#">Categories</a>
                        <div class="megamenu">
                            <div class="container">
                              <div class="row row-cols-5">
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">vegetables</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">carrot</a></li>
                                          <li><a href="#">broccoli</a></li>
                                          <li><a href="#">asparagus</a></li>
                                          <li><a href="#">cauliflower</a></li>
                                          <li><a href="#">eggplant</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">fruits</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">Apple</a></li>
                                          <li><a href="#">orange</a></li>
                                          <li><a href="#">banana</a></li>
                                          <li><a href="#">strawberrie</a></li>
                                          <li><a href="#">watermelon</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">dairy farms</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">Butter</a></li>
                                          <li><a href="#">Cheese</a></li>
                                          <li><a href="#">Milk</a></li>
                                          <li><a href="#">Eggs</a></li>
                                          <li><a href="#">cream</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">seafoods</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">Lobster</a></li>
                                          <li><a href="#">Octopus</a></li>
                                          <li><a href="#">Shrimp</a></li>
                                          <li><a href="#">Halabos</a></li>
                                          <li><a href="#">Maeuntang</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">diet foods</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">Salmon</a></li>
                                          <li><a href="#">Avocados</a></li>
                                          <li><a href="#">Leafy Greens</a></li>
                                          <li><a href="#">Boiled Potatoes</a></li>
                                          <li><a href="#">Cottage Cheese</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">fast foods</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">burger</a></li>
                                          <li><a href="#">milkshake</a></li>
                                          <li><a href="#">sandwich</a></li>
                                          <li><a href="#">doughnut</a></li>
                                          <li><a href="#">pizza</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">drinks</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">cocktail</a></li>
                                          <li><a href="#">hard soda</a></li>
                                          <li><a href="#">shampain</a></li>
                                          <li><a href="#">Wine</a></li>
                                          <li><a href="#">barley</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">meats</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">Meatball</a></li>
                                          <li><a href="#">Sausage</a></li>
                                          <li><a href="#">Poultry</a></li>
                                          <li><a href="#">chicken</a></li>
                                          <li><a href="#">Cows</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">fishes</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">scads</a></li>
                                          <li><a href="#">pomfret</a></li>
                                          <li><a href="#">groupers</a></li>
                                          <li><a href="#">anchovy</a></li>
                                          <li><a href="#">mackerel</a></li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="megamenu-wrap">
                                        <h5 class="megamenu-title">dry foods</h5>
                                        <ul class="megamenu-list">
                                          <li><a href="#">noodles</a></li>
                                          <li><a href="#">Powdered milk</a></li>
                                          <li><a href="#">nut & yeast</a></li>
                                          <li><a href="#">almonds</a></li>
                                          <li><a href="#">pumpkin</a></li>
                                        </ul>
                                    </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <a class="navbar-link" href="#">shop</a>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <a class="navbar-link" href="#">Seller List</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </nav>
    <aside class="category-sidebar">
      <div class="category-header">
          <h4 class="category-title">
            <i class="fas fa-align-left"></i><span>categories</span>
          </h4>
          <button class="category-close"><i class="icofont-close"></i></button>
      </div>
      <ul class="category-list">
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-vegetable"></i><span>vegetables</span></a>
            <ul class="dropdown-list">
                <li><a href="#">asparagus</a></li>
                <li><a href="#">broccoli</a></li>
                <li><a href="#">carrot</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-groceries"></i><span>groceries</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Grains & Bread</a></li>
                <li><a href="#">Dairy & Eggs</a></li>
                <li><a href="#">Oil & Fat</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-fruit"></i><span>fruits</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Apple</a></li>
                <li><a href="#">Orange</a></li>
                <li><a href="#">Strawberry</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-dairy-products"></i><span>dairy
            farm</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Egg</a></li>
                <li><a href="#">milk</a></li>
                <li><a href="#">butter</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-crab"></i><span>sea foods</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Lobster</a></li>
                <li><a href="#">Octopus</a></li>
                <li><a href="#">Shrimp</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-salad"></i><span>diet foods</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Salmon</a></li>
                <li><a href="#">Potatoes</a></li>
                <li><a href="#">Greens</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-dried-fruit"></i><span>dry foods</span></a>
            <ul class="dropdown-list">
                <li><a href="#">noodles</a></li>
                <li><a href="#">Powdered milk</a></li>
                <li><a href="#">nut & yeast</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-fast-food"></i><span>fast foods</span></a>
            <ul class="dropdown-list">
                <li><a href="#">mango</a></li>
                <li><a href="#">plumsor</a></li>
                <li><a href="#">raisins</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-cheers"></i><span>drinks</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Wine</a></li>
                <li><a href="#">Juice</a></li>
                <li><a href="#">Water</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-beverage"></i><span>coffee</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Cappuchino</a></li>
                <li><a href="#">Espresso</a></li>
                <li><a href="#">Latte</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-barbecue"></i><span>meats</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Meatball</a></li>
                <li><a href="#">Sausage</a></li>
                <li><a href="#">Poultry</a></li>
            </ul>
          </li>
          <li class="category-item">
            <a class="category-link dropdown-link" href="#"><i class="flaticon-fish"></i><span>fishes</span></a>
            <ul class="dropdown-list">
                <li><a href="#">Agujjim</a></li>
                <li><a href="#">saltfish</a></li>
                <li><a href="#">pazza</a></li>
            </ul>
          </li>
      </ul>
      <div class="category-footer">
          <p>All Rights Reserved by <a href="#">W3Coders</a></p>
      </div>
    </aside>
    <aside class="cart-sidebar">
      <div class="cart-header">
          <div class="cart-total">
            <i class="fas fa-shopping-basket"></i><span>total item (5)</span>
          </div>
          <button class="cart-close"><i class="icofont-close"></i></button>
      </div>
      <ul class="cart-list">
          <li class="cart-item">
            <div class="cart-media">
                <a href="#"><img src="./assets/images/product/01.jpg" alt="product" /></a><button class="cart-delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
            <div class="cart-info-group">
                <div class="cart-info">
                  <h6><a href="product-single.html">existing product name</a></h6>
                  <p>Unit Price - $8.75</p>
                </div>
                <div class="cart-action-group">
                  <div class="product-action">
                      <button class="action-minus" title="Quantity Minus">
                      <i class="icofont-minus"></i></button><input class="action-input" title="Quantity Number" type="text"
                        name="quantity" value="1" /><button class="action-plus" title="Quantity Plus">
                      <i class="icofont-plus"></i>
                      </button>
                  </div>
                  <h6>$56.98</h6>
                </div>
            </div>
          </li>
          <li class="cart-item">
            <div class="cart-media">
                <a href="#"><img src="./assets/images/product/02.jpg" alt="product" /></a><button class="cart-delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
            <div class="cart-info-group">
                <div class="cart-info">
                  <h6><a href="product-single.html">existing product name</a></h6>
                  <p>Unit Price - $8.75</p>
                </div>
                <div class="cart-action-group">
                  <div class="product-action">
                      <button class="action-minus" title="Quantity Minus">
                      <i class="icofont-minus"></i></button><input class="action-input" title="Quantity Number" type="text"
                        name="quantity" value="1" /><button class="action-plus" title="Quantity Plus">
                      <i class="icofont-plus"></i>
                      </button>
                  </div>
                  <h6>$56.98</h6>
                </div>
            </div>
          </li>
          <li class="cart-item">
            <div class="cart-media">
                <a href="#"><img src="./assets/images/product/03.jpg" alt="product" /></a><button class="cart-delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
            <div class="cart-info-group">
                <div class="cart-info">
                  <h6><a href="product-single.html">existing product name</a></h6>
                  <p>Unit Price - $8.75</p>
                </div>
                <div class="cart-action-group">
                  <div class="product-action">
                      <button class="action-minus" title="Quantity Minus">
                      <i class="icofont-minus"></i></button><input class="action-input" title="Quantity Number" type="text"
                        name="quantity" value="1" /><button class="action-plus" title="Quantity Plus">
                      <i class="icofont-plus"></i>
                      </button>
                  </div>
                  <h6>$56.98</h6>
                </div>
            </div>
          </li>
          <li class="cart-item">
            <div class="cart-media">
                <a href="#"><img src="./assets/images/product/04.jpg" alt="product" /></a><button class="cart-delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
            <div class="cart-info-group">
                <div class="cart-info">
                  <h6><a href="product-single.html">existing product name</a></h6>
                  <p>Unit Price - $8.75</p>
                </div>
                <div class="cart-action-group">
                  <div class="product-action">
                      <button class="action-minus" title="Quantity Minus">
                      <i class="icofont-minus"></i></button><input class="action-input" title="Quantity Number" type="text"
                        name="quantity" value="1" /><button class="action-plus" title="Quantity Plus">
                      <i class="icofont-plus"></i>
                      </button>
                  </div>
                  <h6>$56.98</h6>
                </div>
            </div>
          </li>
          <li class="cart-item">
            <div class="cart-media">
                <a href="#"><img src="./assets/images/product/05.jpg" alt="product" /></a><button class="cart-delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
            <div class="cart-info-group">
                <div class="cart-info">
                  <h6><a href="product-single.html">existing product name</a></h6>
                  <p>Unit Price - $8.75</p>
                </div>
                <div class="cart-action-group">
                  <div class="product-action">
                      <button class="action-minus" title="Quantity Minus">
                      <i class="icofont-minus"></i></button><input class="action-input" title="Quantity Number" type="text"
                        name="quantity" value="1" /><button class="action-plus" title="Quantity Plus">
                      <i class="icofont-plus"></i>
                      </button>
                  </div>
                  <h6>$56.98</h6>
                </div>
            </div>
          </li>
      </ul>
      <div class="cart-footer">
          <button class="coupon-btn">Do you have a coupon code?</button>
          <form class="coupon-form">
            <input type="text" placeholder="Enter your coupon code" /><button type="submit">
            <span>apply</span>
            </button>
          </form>
          <a class="cart-checkout-btn" href="checkout.html"><span class="checkout-label">Proceed to Checkout</span><span
            class="checkout-price">$369.78</span></a>
      </div>
    </aside>
    <aside class="nav-sidebar">
      <div class="nav-header">
          <a href="#"><img src="./assets/images/logo.png" alt="logo" /></a><button class="nav-close"><i
            class="icofont-close"></i></button>
      </div>
      <div class="nav-content">
          <ul class="nav-list">
            <li>
                <a href="#" class="nav-link"><i class="icofont-home"></i>Home</a>
            </li>
            <li>
                <a class="nav-link" href="contact.html"><i class="icofont-contacts"></i>contact us</a>
            </li>
            <li>
                <a class="nav-link" href="login.html"><i class="icofont-logout"></i>logout</a>
            </li>
          </ul>
          <div class="nav-info-group">
            <div class="nav-info">
                <i class="icofont-ui-touch-phone"></i>
                <p><small>call us</small><span>(+880) 183 8288 389</span></p>
            </div>
            <div class="nav-info">
                <i class="icofont-ui-email"></i>
                <p><small>email us</small><span>support@greeny.com</span></p>
            </div>
          </div>
      </div>
    </aside>
    <!-- mobile footer menu  -->
    <div class="mobile-menu">
      <a href="/" class="active router-link-exact-active" title="Home Page" aria-current="page"><i
          class="fas fa-home"></i><span>Home</span></a>
      <button class="cate-btn" title="Category List">
      <i class="fas fa-list"></i><span>category</span>
      </button>
      <button class="cart-btn" title="Cartlist">
      <i class="fas fa-shopping-basket"></i><span>Cart</span><sup>2</sup>
      </button>
      <a href="/my-wishist" class="" title="Wishlist"><i
          class="fas fa-bell"></i><span>Notifications</span><sup>0</sup></a>
      <a href="/user/profile" class="" title="My Account"><i class="fas fa-user"></i><span>My Account</span></a>
    </div>
    <div class="modal fade" id="product-view">
      <div class="modal-dialog">
          <div class="modal-content">
            <button class="modal-close icofont-close" data-bs-dismiss="modal"></button>
            <div class="product-view">
                <div class="row">
                  <div class="col-md-6 col-lg-6">
                      <div class="view-gallery">
                        <div class="view-label-group">
                            <label class="view-label new">new</label><label class="view-label off">-10%</label>
                        </div>
                        <ul class="preview-slider slider-arrow">
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                        </ul>
                        <ul class="thumb-slider">
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                            <li><img src="./assets/images/product/01.jpg" alt="product" /></li>
                        </ul>
                      </div>
                  </div>
                  <div class="col-md-6 col-lg-6">
                      <div class="view-details">
                        <h3 class="view-name">
                            <a href="product-video.html">existing product name</a>
                        </h3>
                        <div class="view-meta">
                            <p>SKU:<span>1234567</span></p>
                            <p>BRAND:<a href="#">radhuni</a></p>
                        </div>
                        <div class="view-rating">
                            <i class="active icofont-star"></i><i class="active icofont-star"></i><i
                              class="active icofont-star"></i><i class="active icofont-star"></i><i class="icofont-star"></i><a
                              href="product-video.html">(3 reviews)</a>
                        </div>
                        <h3 class="view-price">
                            <del>$38.00</del><span>$24.00<small>/per kilo</small></span>
                        </h3>
                        <p class="view-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit non
                            tempora magni repudiandae sint suscipit tempore quis maxime
                            explicabo veniam eos reprehenderit fuga
                        </p>
                        <div class="view-list-group">
                            <label class="view-list-title">tags:</label>
                            <ul class="view-tag-list">
                              <li><a href="#">organic</a></li>
                              <li><a href="#">vegetable</a></li>
                              <li><a href="#">chilis</a></li>
                            </ul>
                        </div>
                        <div class="view-list-group">
                            <label class="view-list-title">Share:</label>
                            <ul class="view-share-list">
                              <li>
                                  <a href="#" class="icofont-facebook" title="Facebook"></a>
                              </li>
                              <li>
                                  <a href="#" class="icofont-twitter" title="Twitter"></a>
                              </li>
                              <li>
                                  <a href="#" class="icofont-linkedin" title="Linkedin"></a>
                              </li>
                              <li>
                                  <a href="#" class="icofont-instagram" title="Instagram"></a>
                              </li>
                            </ul>
                        </div>
                        <div class="view-add-group">
                            <button class="product-add" title="Add to Cart">
                            <i class="fas fa-shopping-basket"></i><span>add to cart</span>
                            </button>
                            <div class="product-action">
                              <button class="action-minus" title="Quantity Minus">
                              <i class="icofont-minus"></i></button><input class="action-input" title="Quantity Number"
                                  type="text" name="quantity" value="1" /><button class="action-plus" title="Quantity Plus">
                              <i class="icofont-plus"></i>
                              </button>
                            </div>
                        </div>
                        <div class="view-action-group">
                            <a class="view-wish wish" href="#" title="Add Your Wishlist"><i class="icofont-heart"></i><span>add to
                            wish</span></a><a class="view-compare" href="compare.html" title="Compare This Item"><i
                              class="fas fa-random"></i><span>Compare This</span></a>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>


    <router-view></router-view>


    <section class="news-part" style="background: url(images/newsletter.jpg) no-repeat center">
      <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-6 col-xl-7">
                <div class="news-text">
                  <h2>Get 20% Discount for Subscriber</h2>
                  <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
                </div>
            </div>
            <div class="col-md-7 col-lg-6 col-xl-5">
                <form class="news-form">
                  <input type="text" placeholder="Enter Your Email Address" /><button>
                  <span><i class="icofont-ui-email"></i>Subscribe</span>
                  </button>
                </form>
            </div>
          </div>
      </div>
    </section>
    <section class="intro-part">
      <div class="container">
          <div class="row intro-content">
            <div class="col-sm-6 col-lg-3">
                <div class="intro-wrap">
                  <div class="intro-icon"><i class="fas fa-truck"></i></div>
                  <div class="intro-content">
                      <h5>free home delivery</h5>
                      <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                  </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="intro-wrap">
                  <div class="intro-icon"><i class="fas fa-sync-alt"></i></div>
                  <div class="intro-content">
                      <h5>instant return policy</h5>
                      <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                  </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="intro-wrap">
                  <div class="intro-icon"><i class="fas fa-headset"></i></div>
                  <div class="intro-content">
                      <h5>quick support system</h5>
                      <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                  </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="intro-wrap">
                  <div class="intro-icon"><i class="fas fa-lock"></i></div>
                  <div class="intro-content">
                      <h5>secure payment way</h5>
                      <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>


    

    <footer class="footer-part">
      <div class="container">
          <div class="row">
            <div class="col-sm-6 col-xl-3">
                <div class="footer-widget">
                  <a class="footer-logo" href="#"><img src="./assets/images/logo.png" alt="logo" /></a>
                  <p class="footer-desc">
                      Adipisci asperiores ipsum ipsa repellat consequatur repudiandae
                      quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
                  </p>
                  <ul class="footer-social">
                      <li><a class="icofont-facebook" href="#"></a></li>
                      <li><a class="icofont-twitter" href="#"></a></li>
                      <li><a class="icofont-linkedin" href="#"></a></li>
                      <li><a class="icofont-instagram" href="#"></a></li>
                      <li><a class="icofont-pinterest" href="#"></a></li>
                  </ul>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="footer-widget contact">
                  <h3 class="footer-title">contact us</h3>
                  <ul class="footer-contact">
                      <li>
                        <i class="icofont-ui-email"></i>
                        <p>
                            <span>support@globalbazar.com</span><span>globalbazar@gmail.com</span>
                        </p>
                      </li>
                      <li>
                        <i class="icofont-ui-touch-phone"></i>
                        <p><span>+8801722260010</span><span>+8801xxxxxxxx</span></p>
                      </li>
                      <li>
                        <i class="icofont-location-pin"></i>
                        <p>1Hd- 50, 010 Rangpur,Bangladesh</p>
                      </li>
                  </ul>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="footer-widget">
                  <h3 class="footer-title">quick Links</h3>
                  <div class="footer-links">
                      <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Best Seller</a></li>
                        <li><a href="#">New Arrivals</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Carrer</a></li>
                        <li><a href="#">Faq</a></li>
                      </ul>
                  </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="footer-widget">
                  <h3 class="footer-title">Download App</h3>
                  <p class="footer-desc">
                      Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                      autem obcaecati minus ducimus totam reprehenderit
                      exercitationem!
                  </p>
                  <div class="footer-app">
                      <a href="#"><img src="./assets/images/google-store.png" alt="google" /></a><a href="#"><img
                        src="./assets/images/app-store.png" alt="app" /></a>
                  </div>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
                <div class="footer-bottom">
                  <p class="footer-copytext">
                      &copy; All Copyrights Reserved by
                      <a target="_blank" href="https://w3coders.net">W3 Coders</a>
                  </p>
                  <div class="footer-card">
                      <a href="#"><img src="./assets/images/payment/jpg/01.jpg" alt="payment" /></a><a href="#"><img
                        src="images/payment/jpg/02.jpg" alt="payment" /></a><a href="#"><img src="./assets/images/payment/jpg/03.jpg"
                        alt="payment" /></a><a href="#"><img src="images/payment/jpg/04.jpg" alt="payment" /></a>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </footer>
  </div>
</template>