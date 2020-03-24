<template>
    <div>
        <div  v-for="product in products" :key="product.id">
          <p>{{ product.name }}</p>
          <img :src="product.imageLink" alt="productTitle">
        </div>
    </div>
</template>
<script>

 export default {
    name: 'products',
    data () {
    return {
      products:[
      {
        id: 1,
        imageLink: require('../assets/exint.jpg'),
        name: "Range",
        Price: ""
      },
      {
          id: 3,
        name:"Range",
        imageLink : require('../assets/side.jpg'),
        Price: ""
      }
      ],
    }
}
}
</script>