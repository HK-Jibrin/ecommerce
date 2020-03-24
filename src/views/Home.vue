<template>
  <div class="home">
    <Header/>
<b-container class="bv-example-row" fluid>
  
  <b-row>
    <b-col cols><category v-for="cat in categories" :key="cat.id" :category="cat"/></b-col>
    <b-col cols ="9 "><div id="cal"><Carousel /></div></b-col>
    </b-row>
</b-container>
      <div class="down"><Products v-for="item in products" :key="item.id" :product="item" /></div>
      <div>
        <Footer/>
      </div>
</div>
</template>

<script>
// @ is an alias to /src
import Category from '../components/Category.vue'
import Header from '../components/Header.vue'
import Products from '../components/Products.vue'
import Carousel from '../components/Carousel.vue'
import Footer from  '../components/Footer.vue'
//import productDetails from '.../views/productDetails.vue'

export default {
  name: 'Home',
 components :{
    Category, 
    Header,
    Products,
    Carousel,
    Footer
   
  },
  data(){
      return{

        categories: [
          {
            id : 1,
        name: 'G-wagon',
        
          
        },
        {
            id : 2,
        name: "Made in Nigeria Cars  ",
        
        },
        {
            id : 3,
        name: 'Sports Cars made in Nigeria',
        
          
        },
    {
            id : 4,
        name: 'Power Bike',
        
          
        },
        {
            id : 5,
        name: "SUV",
        
           },
            {
            id : 6,
        name: "Range Rover",
            }
        ],

    products: [
        {
        id: 1,
        imageLink: require("../assets/Gwogon.jpg") ,
        name: 'G-wagon',
        price: '200 million'
        },
         {
         id: 2,
         imageLink: require("../assets/made1.jpg") ,
        name: 'Made in Nigeria',
        price: 800000
         },
        {
        id: 3,
        imageLink: require("../assets/made2.jpg") ,
        name: 'Sport car made in Nigeria',
        price: '3.6 million'
        },
        {
        id: 4,
        imageLink: require("../assets/Suv.jpg") ,
        name: 'SUV',
        price: '20 million'
        },
        {
        id: 6,
        imageLink: require("../assets/made4_640.jpg") ,
        name: 'Toyota Mirai',
        price: '120 million'
        },
        {
        id: 7,
        imageLink: require("../assets/range.jpg") ,
        name: 'Range Rover',
        price: '150 million'
        },
        {
        id: 8,
        imageLink: require("../assets/powerbike.jpg") ,
        name: 'Power Bike',
        price: '15 million'
        },
        {
        id: 9,
        imageLink: require("../assets/flying.jpg") ,
        name: 'Flying Spur',
        price: '350 million'  
        },
         {
        id: 10,
        imageLink: require("../assets/benz.jpg"),
        name: 'Mercedees benz c300',
        price: '75.7 million'
        },{
        id: 11,
        imageLink: require("../assets/suzukibrezza.jpg") ,
        name: 'Suzuki Brezza',
        price: '25.9 million'
        },
    ]

    }
  }

  }
</script>

<style>

.down{
  margin: 0px;
}
.bv-example-row{
 margin-top: 10px;
}

</style>
