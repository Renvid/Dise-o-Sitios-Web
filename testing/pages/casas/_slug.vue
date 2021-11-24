<script>
  export default {
    async asyncData({ $content, params }) {
      const casas = await $content('casa', params.slug).fetch()
      const reyes = await $content('rey').where({ idCasa: params.slug }).fetch()
      const regiones = await $content('region').where({ idCasa: params.slug }).fetch()
       const [prev, next] = await $content('casa')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()
      return {casas, reyes,regiones,prev,next }
    }
  }
</script>

<template>
  <article>
    <Header/>

   <div class="container" style="margin-top:20px;">
      <div class="row">
          <div class="col-12 col-lg-6">
            <img class="card-img-top" :src="'/images/'+casas.image" alt="">
            <hr>
            <label>Nombre de la region: {{ casas.title }}</label><br>
<hr>
                          <h6>Reyes</h6>
	     <h6 v-for="rey of reyes" :key="rey.slug">
	       <NuxtLink :to="{ name: 'reyes-slug', params: { slug: rey.slug } }">{{rey.title}}</NuxtLink>
	     </h6>
<hr>
                          <h6>Regiones</h6>
	     <h6 v-for="region of regiones" :key="region.slug">
	       <NuxtLink :to="{ name: 'regiones-slug', params: { slug: region.slug } }">{{region.title}}</NuxtLink>
	     </h6>
            
          </div>

          <div class="col-lg-6">
                                              <prev-next-casas :prev="prev" :next="next" />
            <nuxt-content :document="casas" />
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