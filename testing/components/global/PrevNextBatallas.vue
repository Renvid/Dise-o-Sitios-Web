<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<template>
  <div class="flex justify-between">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <div class="row">
    <div class="col-sm-6">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'batallas-slug', params: { slug: prev.slug } }"
      class="button" 
      
    >
    <i class="fas fa-arrow-left"></i> {{ prev.title }}
    </NuxtLink>
 
    <span v-else>&nbsp;</span>
    </div>
    <div class="col-sm-6">
    <NuxtLink
      v-if="next"
      :to="{ name: 'batallas-slug', params: { slug: next.slug } }"
      class="button"
    >
      {{ next.title }}<span>&nbsp;&nbsp;</span><i class="fas fa-arrow-right"></i>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    </div>
    </div>
  </div>
</template>

<style scoped>
 .button{
   font-size: 12px;
 }
</style>
