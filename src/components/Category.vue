<template>
<b-container class="cat">
 <b-row>
<b-list-group>
  <b-list-group-item > {{ category.name }}</b-list-group-item>
</b-list-group>
</b-row>
</b-container> 
</template>

<script>
export default {
  props: ['category']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cat{
  margin-top: 5px;
  flex: auto;
}

</style>