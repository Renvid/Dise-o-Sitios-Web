<script>
  export default {
    async asyncData({ $content, params }) {
      const reyes = await $content('rey', params.slug).fetch()
      const casas = await $content('casa').where({ idRey: params.slug }).fetch()

      const batallasA = await $content('batalla').where({ idAttackerKing: reyes.id }).fetch()
      const batallasD = await $content('batalla').where({ idDefenderKing: reyes.id }).fetch()

      const [prev, next] = await $content('rey')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

console.log(casas)
      return {reyes, casas,batallasA,batallasD,prev,next }
    }
  }
</script>

<template>
  <article>
    <Header/>

   <div class="container" style="margin-top:20px;">
      <div class="row">
          <div class="col-12 col-lg-6">
            <img class="card-img-top" :src="'/images/'+reyes.image" alt="">
            <label>Nombre del rey: {{ reyes.title }}</label><br>
            <label>Alias: {{ reyes.alias }}</label><br>
                        <label>Edad: {{ reyes.edad }}</label>
<hr>
                          <h6>Casa</h6>
	     <h6 v-for="casa of casas" :key="casa.slug">
	       <NuxtLink :to="{ name: 'casas-slug', params: { slug: casa.slug } }">{{casa.title}}</NuxtLink>
	     </h6>
       <hr>
                          <h6>Batallas</h6>
	     <h6 v-for="batalla of batallasA" :key="batalla.slug">
	       <NuxtLink :to="{ name: 'batallas-slug', params: { slug: batalla.slug } }">{{batalla.title}}</NuxtLink>
	     </h6>
       	     <h6 v-for="batalla of batallasD" :key="batalla.slug">
	       <NuxtLink :to="{ name: 'batallas-slug', params: { slug: batalla.slug } }">{{batalla.title}}</NuxtLink>
	     </h6>

            
          </div>

          <div class="col-lg-6">
             <prev-next-reyes :prev="prev" :next="next" />
            <nuxt-content :document="reyes" />
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