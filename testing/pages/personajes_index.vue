<template>
 
  <div>
    <Header/>
    
    <div style="padding:2%">
       <h1 style="text-align: center;">Personajes</h1>
       <hr/>
      <div class="container">
      <div class="row"> 
        <div class="card-group col-12 col-lg-4 mt-4"  v-for="personaje of personajes" :key="personaje.slug">
          <div class="card" >
            <nuxt-link :to="{ name: 'personajes-slug', params: { slug: personaje.slug } }">
              <img class="card-img-top" :src="'/images/'+personaje.image" alt="">
            </nuxt-link>
            <div class="card-body"> 
              <h5 class="card-title">{{ personaje.title }}</h5>
              <p class="card-text">{{ personaje.description }}</p>
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
        const personajes=await $content('personaje',params.slug)
        .only(['title','description','image','slug'])
        .sortBy('createdAt','asc')
        .fetch();

        return {
          personajes
        }
    }

}
</script>