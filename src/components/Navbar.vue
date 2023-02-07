<template>
    <nav class="navbar-part">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="navbar-content">
                  <ul class="navbar-list">
                      <li class="navbar-item dropdown">
                        <router-link :to="{name: 'home'}" class="navbar-link">Home</router-link>
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
                        <router-link class="navbar-link" :to="{name: 'shop'}">Shop</router-link>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <router-link class="navbar-link" :to="{name: 'seller'}">Seller List</router-link>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </nav> 
</template>