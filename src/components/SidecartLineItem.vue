
<template lang="pug">
  .sidecart__line-item
    h4.sidecart__line-item__title {{ lineItem.title }}
    button.sidecart__line-item__close(@click="remove") &times;
    .sidecart__line-item__controls
      div
        button(@click="decrement") -
        span.sidecart__line-item__quantity {{ lineItem.quantity }}
        button(@click="increment") +
      p.sidecart__line-item__price ${{ price }}
</template>

<script>
  export default {
    name: 'ComponentName',
    props: {
      lineItem: Object
    },
    computed: {
      price () {
        return parseFloat(this.lineItem.variant.price) * this.lineItem.quantity
      }
    },
    methods: {
      decrement () {
        console.log('decrement')
        if (this.lineItem.quantity > 1) {
          let updatedItem = {
            id: this.lineItem.id,
            quantity: this.lineItem.quantity - 1
          }
  
          this.$store.dispatch('cart/updateItem', updatedItem)
        } else {
          this.$store.dispatch('cart/removeItem', this.lineItem.id)
        }
      },
      increment () {
        console.log('increment')
        let updatedItem = {
          id: this.lineItem.id,
          quantity: this.lineItem.quantity + 1
        }

        this.$store.dispatch('cart/updateItem', updatedItem)
      },
      remove () {
        this.$store.dispatch('cart/removeItem', this.lineItem.id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .sidecart__line-item {
    position: relative;
    padding: 20px 0;

    &:not(:last-child) {
      border-bottom: 1px solid #aaa;
    }

    &__title {
      padding-right: 10px;
      margin-top: 0;
    }

    &__close {
      position: absolute;
      top: 22px;
      right: 0;
    }

    &__quantity {
      text-align: center;
      width: 20px;
      padding: 0 4px;
      display: inline-block;
    }

    &__price {
      margin: 0;
    }

    &__controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>