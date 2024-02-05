<template>
    <div>
        <!-- product section -->
    
        <v-container>
            <v-row v-if="productStore.loading">
                <v-col>
                    <v-progress-linear indeterminate></v-progress-linear>
                </v-col>
            </v-row>
           <v-row v-else>
            <v-col cols="lg-4" v-for="product in productStore.products" :key="product">
                <product-card :product="product" />    
            </v-col>
           </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { useProductStore } from '~/store/products';
import { useCategoryStore } from '~/store/categories';
const productStore = useProductStore();
const categoryStore = useCategoryStore();
</script>