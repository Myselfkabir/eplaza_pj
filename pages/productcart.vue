<template>
    <div>
      <v-btn to="/">Back</v-btn>
        <v-card>
          
        </v-card>

        <v-btn>BuyNow </v-btn>
        <v-btn>Add to cart</v-btn>
    </div>
</template>

<script setup>
import { useProductStore } from '~/store/products';
const productStore = useProductStore();

</script>