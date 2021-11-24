<script>
  export default {
    data() {
      return {
        searchQuery: '',
        batallas: [],
        casas:[],
        personajes:[],
        regiones:[],
        reyes:[]
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.batallas = []
          this.casas = []
          this.personajes = []
          this.regiones = []
          this.reyes = []
          return
        }
        this.batallas = await this.$content('batalla')
          .limit(6)
          .search(searchQuery)
          .fetch()

        this.casas = await this.$content('casa')
          .limit(6)
          .search(searchQuery)
          .fetch()

        this.personajes = await this.$content('personaje')
          .limit(6)
          .search(searchQuery)
          .fetch()
          
        this.regiones = await this.$content('region')
          .limit(6)
          .search(searchQuery)
          .fetch()
          
        this.reyes = await this.$content('rey')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>
  
<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar"
      class="form-control"
    />
    <ul v-if="batallas.length">
      <li v-for="batalla of batallas" :key="batalla.slug">
        <NuxtLink :to="{ name: 'batallas-slug', params: { slug: batalla.slug } }">
          {{ batalla.title }}
        </NuxtLink>
      </li>
    </ul>
        <ul v-if="casas.length">
      <li v-for="casa of casas" :key="casa.slug">
        <NuxtLink :to="{ name: 'casas-slug', params: { slug: casa.slug } }">
          {{ casa.title }}
        </NuxtLink>
      </li>
    </ul>
                <ul v-if="personajes.length">
      <li v-for="personaje of personajes" :key="personaje.slug">
        <NuxtLink :to="{ name: 'personajes-slug', params: { slug: personaje.slug } }">
          {{ personaje.title }}
        </NuxtLink>
      </li>
    </ul>
                <ul v-if="regiones.length">
      <li v-for="region of regiones" :key="region.slug">
        <NuxtLink :to="{ name: 'regiones-slug', params: { slug: region.slug } }">
          {{ region.title }}
        </NuxtLink>
      </li>
    </ul>
            <ul v-if="reyes.length">
      <li v-for="rey of reyes" :key="rey.slug">
        <NuxtLink :to="{ name: 'reyes-slug', params: { slug: rey.slug } }">
          {{ rey.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

