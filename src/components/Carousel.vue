<template>
    
        <carousel :perpage= 1 :mousedrag= "true" :autoplay= true>

            <slide v-for="image in carouselImage" :key="image.id"> 
                <img style="width: 100%; height: 350px;" :src="image.imageUrl" />
            </slide>
        </carousel>
    
</template>
<script>

export default {
    name: "jubrin",
    data(){
        return{
            carouselImage:[
          {id: 1,
         imageUrl: require("../assets/maize.jpg")  
          },
          {id: 2,
         imageUrl: require("../assets/vegetables.jpg")  
          }
        ],
        }
    }
    


}
</script>