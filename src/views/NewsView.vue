<template>
  <div class="sticky top-0 bg-white z-50">
    <header class="flex justify-between items-center md:px-20 px-10 h-20">
      <router-link to="/">
        <h1 class="text-2xl font-semibold">Planet Car®</h1>
      </router-link>
      <nav class="flex">
        <ul class="md:flex gap-5 hidden md:visible text-xl">
          <li class="text-blue-700 font-semibold">
            <router-link to="/">
              <a href="#">Home</a>
            </router-link>
          </li>
          <li>
            <router-link to="Flotte">
              <a href="#">Flotte</a>
            </router-link>
          </li>
          <li>
            <router-link to="/Kontakt">
              <a href="#">Kontakt</a>
            </router-link>
          </li>
          <li>
            <router-link to="/Login">
              <a href="#">
                <i class="fa-solid fa-user"></i>
                Login</a>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="md:hidden text-2xl">
        <i class="fa-solid fa-bars hover:bg-slate-300 p-2 rounded-md" @click="showMenu =!showMenu"></i>
      </div>
    </header>
    <div class="w-full bg-slate-100 p-5 text-center" v-show="showMenu" >
     <ul class=" flex flex-col text-lg gap-3">
       <li class="bg-blue-700 text-white  font-semibold py-2 rounded-lg">
         <a href="#">Home</a>
       </li>
       <li class=" text-black font-semibold py-2 rounded-lg">
         <a href="#">Flotte</a>
       </li>
       <li class=" text-black font-semibold py-2 rounded-lg">
         <a href="#">Kontakt</a>
       </li>
       <li class=" text-black font-semibold py-2 rounded-lg">
         <a href="#">
           <i class="fa-solid fa-user"></i>
           Login</a>
       </li>

      </ul>
      
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      showMenu: false
    }
  },
}
</script>