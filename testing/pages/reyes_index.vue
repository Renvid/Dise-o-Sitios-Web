<template>
 
  <div>
    <Header/>
    
    <div style="padding:2%">
       <h1 style="text-align: center;">Reyes</h1>
       <hr/>
            <div class="container"> 
      <div class="row"> 
        <div class="card-group col-12 col-lg-4 mt-4"  v-for="rey of reyes" :key="rey.slug">
          <div class="card" >
            <nuxt-link :to="{ name: 'reyes-slug', params: { slug: rey.slug } }">
              <img class="card-img-top" :src="'/images/'+rey.image" alt="">
            </nuxt-link>
            <div class="card-body"> 
              <h5 class="card-title">{{ rey.title }}</h5>
              <p class="card-text">{{ rey.description }}</p>
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
        const reyes=await $content('rey',params.slug)
        .only(['title','description','image','slug'])
        .sortBy('createdAt','asc')
        .fetch();
        
        return {
          reyes
        }
    }

}
</script>