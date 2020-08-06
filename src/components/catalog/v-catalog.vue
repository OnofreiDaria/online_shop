<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART} }">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>

    <h1>Catalog</h1>
    <vSelect :selected="selected"
             :options="categories"
             @select="sortByCategories"
    />

    <div class="v-catalog__list">
      <vCatalogItem v-for="product in filteredProducts"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import { mapActions, mapGetters } from 'vuex'
import vSelect from '../v-select'

export default {
  name: "vCatalog",
  data() {
    return  {
      categories: [
        { name: 'Все', value: 'all' },
        { name: 'Мужские', value: 'm' },
        { name: 'Женские', value: 'f' }
      ],
      selected: 'All',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
      'CART']),
    filteredProducts() {
      if(this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions ([
      'GET_PRODUCT_FROM_API',
      'ADD_TO_CART'
    ]),
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(item => {
        if(item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCT_FROM_API()
      .then(response => {
        if(response.data) {
          console.log('Data arrived');
        }
      })
  },
  components: {
    vCatalogItem,
    vSelect
  }
}
</script>

<style lang="scss">
.v-catalog {
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border:1px solid #aeaeae;
  }
}
</style>
