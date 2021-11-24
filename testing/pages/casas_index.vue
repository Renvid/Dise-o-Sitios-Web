<template>
 
  <div>
    <Header/>
    
    <div style="padding:2%">
       <h1 style="text-align: center;">Casas</h1>
       <hr/>
                   <div class="container"> 
      <div class="row"> 
        <div class="card-group col-12 col-lg-4 mt-4"  v-for="casa of casas" :key="casa.slug">
          <div class="card" >
            <nuxt-link :to="{ name: 'casas-slug', params: { slug: casa.slug } }">
              <img class="card-img-top" :src="'/images/'+ casa.image" alt="">
            </nuxt-link>
            <div class="card-body"> 
              <h5 class="card-title">{{ casa.title }}</h5>
              <p class="card-text">{{ casa.description }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({$content,params}){
        const casas=await $content('casa',params.slug)
        .only(['title','description','image','slug'])
        .sortBy('createdAt','asc')
        .fetch();

        return {
          casas
        }
    }

}
</script>