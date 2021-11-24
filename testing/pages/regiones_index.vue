<template>
 
  <div>
    <Header/>
    
    <div style="padding:2%">
       <h1 style="text-align: center;">Regiones</h1>
       <hr/>
            <div class="container">
      <div class="row"> 
        <div class="card-group col-12 col-lg-6 mt-4"  v-for="region of regiones" :key="region.slug">
          <div class="card" >
            <nuxt-link :to="{ name: 'regiones-slug', params: { slug: region.slug } }">
              <img class="card-img-top" :src="'/images/'+region.image" alt="">
            </nuxt-link>
            <div class="card-body"> 
              <h5 class="card-title">{{ region.title }}</h5>
              <p class="card-text">{{ region.description }}</p>
            </div>
          </div>
        </div>
      </div>
            </div>
    </div>
  </div>
</template>
<style>
   img{
       max-height: 300px;
   }
</style>

<script>
export default {
    async asyncData({$content,params}){
        const regiones=await $content('region',params.slug)
        .only(['title','description','image','slug'])
        .sortBy('createdAt','asc')
        .fetch();
        
        return {
          regiones
        }
    }

}
</script>