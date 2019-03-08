
<template lang="pug">
  .sidecart(v-if="checkout.id")
    h2 Cart
    p(v-if="checkout.lineItems.edges.length < 1") You have no items in your cart
    div(v-else)
      .sidecart-items
        sidecart-line-item(v-for="item in checkout.lineItems.edges", :line-item="item.node", :key="item.id")
      p.sidecart-total
        span Subtotal
        span ${{ checkout.subtotalPrice }}
      p.sidecart-total
        span Tax
        span ${{ checkout.totalTax }}
      p.sidecart-total.sidecart-total--last
        span Total
        span ${{ checkout.totalPrice }}
      a(:href="checkout.webUrl") Checkout
</template>

<script>
  import { mapState } from 'vuex'

  import SidecartLineItem from '@/components/SidecartLineItem.vue'

  export default {
    name: 'Sidecart',
    components: { SidecartLineItem },
    computed: {
      ...mapState({
        checkout: state => state.cart.checkout
      })
    },
    created () {
      this.$store.dispatch('cart/init')
    }
  }
</script>

<style scoped lang="scss">
  .sidecart-total {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;

    &--last {
      font-size: 1.2rem;
    }
  }
</style>