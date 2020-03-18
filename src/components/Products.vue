<template>
   <div class="products">
           <img :src="product.imageLink" height="150ppx" width="250px">
    <p>{{product.name}}  </p>
    <p> {{product.price}} </p>
    <b-button href="#" variant="primary"> Buy Now </b-button>  
   </div>
      
</template>
<script>

export default {
    name: 'Products',
    props: ["product"]
}
</script>
<style scoped>
.products{
    padding: 0;
    margin: 0;
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    border-radius: 20px;
}
 

</style>










