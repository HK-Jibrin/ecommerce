<template>
 <div>
  <div class="container">
    <div class="pro" v-for = "product in products" :key="product.productId" >
     <div v-if="productId == product.productId">
         <div>
          <img :src="product.imageLink" height="300">
        <h1>{{product.name}}</h1>
        <p>{{product.Description}}</p>
     <button class="btn btn-whitesmoke">Add to cart</button>
     </div>
     </div>
    </div>
   </div>
  </div>
</template>
<script>
 export default{
      props: ['proDetails'],

  data(){
   return{

    productId:this.$route.params.id,
     
   products: [
        {
        productId: 1,
        imageLink: require("../assets/Suv.jpg") ,
        name: 'G-wagon',
        price: '200 million'
        },
         {
         productId: 2,
         imageLink: require("../assets/brabus850.jpg") ,
         Description: 'Brabus850',
        name: 'G-wagon',
       
         }
    ]
     
   }
  }
 }
</script>
<style scoped>
.pro{
     display: inline-block;
    margin: 5px;
}
</style>