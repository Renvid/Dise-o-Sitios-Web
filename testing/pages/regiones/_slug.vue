<script>
  export default {
    async asyncData({ $content, params }) {
      const regiones = await $content('region', params.slug).fetch()
      const casas = await $content('casa').where({ idRegion: params.slug }).fetch()
      const [prev, next] = await $content('region')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

console.log(casas)
      return {regiones, casas,prev,next }
    }
  }
</script>

<template>
  <article>
    <Header/>

   <div class="container" style="margin-top:20px;">
      <div class="row">
          <div class="col-12 col-lg-6">
            <img class="card-img-top" :src="'/images/'+regiones.image" alt="">
            <hr>
            <label>Nombre de la region: {{ regiones.title }}</label><br>
<hr>
                          <h6>Casa</h6>
	     <h6 v-for="casa of casas" :key="casa.slug">
	       <NuxtLink :to="{ name: 'casas-slug', params: { slug: casa.slug } }">{{casa.title}}</NuxtLink>
	     </h6>

            
          </div>

          <div class="col-lg-6">
             <prev-next-regiones :prev="prev" :next="next" />
            <nuxt-content :document="regiones" />
          </div>
      </div>
    </div> 
  </article>
</template>

<style>

.nuxt-content h2 {
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
  }

  .nuxt-content h1 {
    font-weight: bold;
    font-style: italic;
    font-size: 25px;
  }

   .nuxt-content h3 {
    font-weight: bold;
    font-style: italic;
    font-size: 15px;
  }

  .nuxt-content{
     margin-top: 20px;
   }

   .nuxt-content p{
     font-size: 14px;
     margin-bottom: 10px;
     
   }
  
</style>