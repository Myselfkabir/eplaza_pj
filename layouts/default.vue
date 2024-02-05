<template>
    <!-- header section -->
        <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <div>
        <v-app-bar
        color="green-darken-4"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <div>
              <img width="45" src="https://fakeapi.platzi.com/_astro/logo.aa139940.png" /> 
            </div>
          
          
              <span margin="50" class="font-weight-black" >Eplaza Store</span>
          
        <v-spacer></v-spacer>
      
            <v-text-field 
            v-model="searchQuery"
             label="Search" 
             variant="solo-filled"
             prepend-inner-icon="mdi-magnify"
             clearable
             
             hide-details
             
             @change="productStore.filterProduct(searchQuery)">
            </v-text-field>


       <v-toolbar-items>
        <v-btn variant="text" icon="mdi-cart" to="/productcart"></v-btn>
       </v-toolbar-items>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
      </div>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >

        <v-list>
          <v-list-item link 
          v-for="category in categoryStore.categories"
          :key="category"
          :value="category.id"

          @click="productStore.fetchProductByCategory(category.id)"
         >
          {{ category.name }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        
      </v-main>
    </v-layout>
    <!-- main section -->
    <slot />
    <!-- footer section -->
</template>
<script setup>
import { useCategoryStore } from '~/store/categories';
const categoryStore = useCategoryStore();

import { useProductStore } from '~/store/products';
const productStore = useProductStore();

await categoryStore.fetchAllCategories();
await productStore.fetchAllProducts();


  const searchQuery = ref("")
  const drawer = ref(false);
  const group = ref(null);



  watch(group, ()=> {
    drawer.value = false;
  });
  

</script>