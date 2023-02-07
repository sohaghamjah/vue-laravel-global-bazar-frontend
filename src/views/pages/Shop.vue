<template>
  <div>
      <section class="inner-section single-banner" style="background: url(@/images/single-banner.jpg) no-repeat center">
          <div class="container">
              <h2>Shop Page</h2>
          </div>
      </section>
      <section class="inner-section shop-part">
          <div class="container">
              <div class="row content-reverse">
                  <div class="col-lg-3">
                      <!-- <div class="shop-widget-promo">
            <a href="#"><img src="@/images/promo/shop/01.jpg" alt="promo" /></a>
          </div> -->
                      <div class="shop-widget">
                          <h6 class="shop-widget-title">Filter by Price</h6>
                          <form>
                              <div class="shop-widget-group">
                                  <input type="text" placeholder="Min - 00" /><input type="text"
                                      placeholder="Max - 5k" />
                              </div>
                              <button class="shop-widget-btn">
                                  <i class="fas fa-search"></i><span>search</span>
                              </button>
                          </form>
                      </div>

                      <div class="shop-widget">
                          <h6 class="shop-widget-title">Filter by Brand</h6>
                          <form>
                              <input class="shop-widget-search" type="text" placeholder="Search..." />
                              <ul class="shop-widget-list shop-widget-scroll">
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand1" /><label for="brand1">mari gold</label>
                                      </div>
                                      <span class="shop-widget-number">(13)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand2" /><label for="brand2">tredar</label>
                                      </div>
                                      <span class="shop-widget-number">(28)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand3" /><label for="brand3">keya</label>
                                      </div>
                                      <span class="shop-widget-number">(35)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand4" /><label for="brand4">diamond</label>
                                      </div>
                                      <span class="shop-widget-number">(47)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand5" /><label for="brand5">lilly's</label>
                                      </div>
                                      <span class="shop-widget-number">(59)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand6" /><label for="brand6">fremant</label>
                                      </div>
                                      <span class="shop-widget-number">(64)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand7" /><label for="brand7">avocads</label>
                                      </div>
                                      <span class="shop-widget-number">(77)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand8" /><label for="brand8">boroclas</label>
                                      </div>
                                      <span class="shop-widget-number">(85)</span>
                                  </li>
                              </ul>
                              <button class="shop-widget-btn">
                                  <i class="far fa-trash-alt"></i><span>clear filter</span>
                              </button>
                          </form>
                      </div>
                      <div class="shop-widget">
                          <h6 class="shop-widget-title">Filter by Category</h6>
                          <form>
                              <input class="shop-widget-search" type="text" placeholder="Search..." />
                              <ul class="shop-widget-list shop-widget-scroll">
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate1" /><label for="cate1">vegetables</label>
                                      </div>
                                      <span class="shop-widget-number">(13)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate2" /><label for="cate2">groceries</label>
                                      </div>
                                      <span class="shop-widget-number">(28)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate3" /><label for="cate3">fruits</label>
                                      </div>
                                      <span class="shop-widget-number">(35)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate4" /><label for="cate4">dairy farm</label>
                                      </div>
                                      <span class="shop-widget-number">(47)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate5" /><label for="cate5">sea foods</label>
                                      </div>
                                      <span class="shop-widget-number">(59)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate6" /><label for="cate6">diet foods</label>
                                      </div>
                                      <span class="shop-widget-number">(64)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate7" /><label for="cate7">dry foods</label>
                                      </div>
                                      <span class="shop-widget-number">(77)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate8" /><label for="cate8">fast foods</label>
                                      </div>
                                      <span class="shop-widget-number">(85)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate9" /><label for="cate9">drinks</label>
                                      </div>
                                      <span class="shop-widget-number">(92)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate10" /><label for="cate10">coffee</label>
                                      </div>
                                      <span class="shop-widget-number">(21)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate11" /><label for="cate11">meats</label>
                                      </div>
                                      <span class="shop-widget-number">(14)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate12" /><label for="cate12">fishes</label>
                                      </div>
                                      <span class="shop-widget-number">(56)</span>
                                  </li>
                              </ul>
                              <button class="shop-widget-btn">
                                  <i class="far fa-trash-alt"></i><span>clear filter</span>
                              </button>
                          </form>
                      </div>
                  </div>
                  <div class="col-lg-9">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="top-filter">
                                  <div class="filter-show">
                                      <label class="filter-label">Show :</label><select
                                          class="form-select filter-select">
                                          <option value="1">12</option>
                                          <option value="2">24</option>
                                          <option value="3">36</option>
                                      </select>
                                  </div>
                                  <div class="filter-short">
                                      <label class="filter-label">Short by :</label><select
                                          class="form-select filter-select">
                                          <option selected>default</option>
                                          <option value="3">trending</option>
                                          <option value="1">featured</option>
                                          <option value="2">recommend</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                          <div class="col">
                              <div class="product-card product-disable">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/06.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/13.png"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/12.png"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/09.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/07.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/03.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/04.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/02.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/01.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="col">
                              <div class="product-card">
                                  <div class="product-media">
                                      <div class="product-label">
                                          <label class="label-text rate">Popular</label>
                                          <label class="view-label off">-2%</label>
                                      </div>
                                      <button class="product-wish wish">
                                          <i class="fas fa-heart"></i></button><a class="product-image"
                                          href="product-video.html"><img src="@/images/product/05.jpg"
                                              alt="product" /></a>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="product-name">
                                          <a href="product-video.html">Products Name</a>
                                      </h6>
                                      <h6 class="product-price">
                                          <del>$34</del><span>$28<small></small></span>
                                      </h6>
                                      <button class="product-add" title="Add to Cart">
                                          <i class="fas fa-shopping-basket"></i><span>Add</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="bottom-paginate">
                                  <p class="page-info">Showing 12 of 60 Results</p>
                                  <ul class="pagination">
                                      <li class="page-item">
                                          <a class="page-link" href="#"><i class="fas fa-long-arrow-alt-left"></i></a>
                                      </li>
                                      <li class="page-item">
                                          <a class="page-link active" href="#">1</a>
                                      </li>
                                      <li class="page-item">
                                          <a class="page-link" href="#">2</a>
                                      </li>
                                      <li class="page-item">
                                          <a class="page-link" href="#">3</a>
                                      </li>
                                      <li class="page-item">...</li>
                                      <li class="page-item">
                                          <a class="page-link" href="#">60</a>
                                      </li>
                                      <li class="page-item">
                                          <a class="page-link" href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>