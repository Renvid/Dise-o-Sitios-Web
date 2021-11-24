<script>
  export default {
    async asyncData({ $content, params }) {
      const batallas = await $content('batalla', params.slug).fetch()
      const [prev, next] = await $content('batalla')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {batallas,prev,next }
    }
  }
</script>

<template>
  <article>
    <Header/>

   <div class="container" style="margin-top:20px;">
      <div class="row">
          <div class="col-12 col-lg-6">
            <img class="card-img-top" :src="'/images/'+batallas.image" alt="">
            <hr>
            <h1>{{ batallas.title }}</h1><br>
<hr>
                          <h6>Rey Atacante</h6>
	     <h6 >
	       <NuxtLink :to="{ name: 'reyes-slug', params: { slug: batallas.idAttackerKing } }">{{batallas.attackerKing}}</NuxtLink>
	     </h6>
       <hr>
                          <h6>Rey Defensor</h6>
	     <h6 >
	       <NuxtLink :to="{ name: 'reyes-slug', params: { slug: batallas.idDefenderKing } }">{{batallas.defenderKing}}</NuxtLink>
	     </h6>
              <hr>
                          <h6>Atacante</h6>
	     <h6 >
	       <NuxtLink :to="{ name: 'personajes-slug', params: { slug: batallas.idAttacker } }">{{batallas.attaker}}</NuxtLink>
	     </h6>

       <hr>
                          <h6>Defensor</h6>
	     <h6 >
	       <NuxtLink :to="{ name: 'personajes-slug', params: { slug: batallas.idDefender } }">{{batallas.defender}}</NuxtLink>
	     </h6>


            
          </div>

          <div class="col-lg-6">
             <prev-next-batallas :prev="prev" :next="next" />
            <nuxt-content :document="batallas" />
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