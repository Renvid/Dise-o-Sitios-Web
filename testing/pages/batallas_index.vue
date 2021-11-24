<template>
 
  <div>
    <Header/>
    
    <div style="padding:2%">
       <h1 style="text-align: center;">Batallas</h1>
       <hr/>
       <div class="container">
      <div class="row"> 
        <div class="card-group col-12 col-lg-6 mt-4"  v-for="batalla of batallas" :key="batalla.slug">
          <div class="card" >
            <nuxt-link :to="{ name: 'batallas-slug', params: { slug: batalla.slug } }">
              <img class="card-img-top" :src="'/images/'+batalla.image" alt="">
            </nuxt-link>
            <div class="card-body"> 
              <h5 class="card-title">{{ batalla.title }}</h5>
              <p class="card-text">{{ batalla.description }}</p>
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
        const batallas=await $content('batalla',params.slug)
        .only(['title','description','image','slug'])
        .sortBy('createdAt','asc')
        .fetch();

        return {
          batallas
        }
    }

}
</script>