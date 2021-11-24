<template>
<div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <a class="navbar-brand" href="/"><h1>Proyecto 2</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <NuxtLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NuxtLink>
      </li>
      <li class="nav-item">
         <NuxtLink class="nav-link" to="/reyes_index">Reyes</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/casas_index">Casas</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/batallas_index">Batallas</NuxtLink>
      </li>
            <li class="nav-item">
        <NuxtLink class="nav-link" to="/personajes_index">Personajes</NuxtLink>
      </li>
            <li class="nav-item">
        <NuxtLink class="nav-link" to="/regiones_index">Regiones</NuxtLink>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <AppSearchInput />
    </form>
  </div>
</nav>

</div>
</template>
