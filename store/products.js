import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useProductStore = defineStore('product', {
    //state
        state: ()=>({
            products: null,
            loading:false
        }),
    //getter

    //action
    actions:{
        //1
        async fetchAllProducts(){
            try{
                this.loading = true;
                const response = await axiosApi.get("products");
                if (response.status == 200) {
                    this.products = response.data
                }
            }
            catch(e){
                console.warn('e');
            }
            finally{
                this.loading = false;
            }
        },

        //2
        async fetchProductByCategory(categoryId){
            try{
                this.loading = true;
                const response = await axiosApi.get(`categories/${categoryId}/products`);
                if (response.status == 200) {
                    this.products = response.data
                }
            }
            catch(e){
                console.warn('e');
            }
            finally{
                this.loading = false;
            }
        },

        //3
        async filterProduct(title){
            try{
                this.loading = true;
                const response = await axiosApi.get(`products/?title=${title}`);
                if (response.status == 200) {
                    this.products = response.data
                }
            }
            catch(e){
                console.warn('e');
            }
            finally{
                this.loading = false;
            }
        },


        //4

      
    }
});