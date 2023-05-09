<template>
  <div>
    <div class="sticky top-0 bg-white z-50">
      <header class="flex justify-between items-center md:px-20 px-10 h-20">
        <router-link to="/">
          <h1 class="text-2xl font-semibold">Planet Car®</h1>
        </router-link>
        <nav class="flex">
          <ul class="md:flex gap-5 hidden md:visible text-xl">
            <li >
              <router-link to="/">
                <a href="#">Home</a>
              </router-link>
            </li>
            <li>
              <router-link to="Flotte">
                <a href="#">Flotte</a>
              </router-link>
            </li>
            <li class="text-blue-700 font-semibold">
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
          <i class="fa-solid fa-bars hover:bg-slate-300 p-2 rounded-md" @click="showMenu = !showMenu"></i>
        </div>
      </header>
      <div class="w-full bg-slate-100 p-5 text-center" v-show="showMenu">
        <ul class=" flex flex-col text-lg gap-3">
          <li class=" text-black font-semibold py-2 rounded-lg">
            <router-link to="/">
              <a href="#">Home</a>

            </router-link>
          </li>
          <li class=" text-black font-semibold py-2 rounded-lg">
            <router-link to="/Flotte">
              <a href="#">Flotte</a>

            </router-link>
          </li>
          <li class=" bg-blue-700 text-white  font-semibold py-2 rounded-lg">
            <router-link to="/Kontakt">
              <a href="#">Kontakt</a>

            </router-link>
          </li>
          <li class=" text-black font-semibold py-2 rounded-lg">
            <router-link to="/Login">
              <a href="#">
                <i class="fa-solid fa-user"></i>
                Login</a>

            </router-link>
          </li>

        </ul>

      </div>
    </div>
    <div class="bg-slate-100 w-full md:flex justify-center items-center p-10">
      <div class="md:flex-1">
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_swnrn2oy.json" mode="bounce"
          background="transparent" speed="1" loop autoplay
          class="md:w-96 md:h-96 w-56 h-56 hidden md:block"></lottie-player>
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_swnrn2oy.json" background="transparent"
          speed="1" loop autoplay class="w-56 h-56 md:hidden"></lottie-player>
      </div>
      <div class="flex-1">
        <div class="name-group">
          <form>
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre Name</label>
              <input type="name" id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre email</label>
              <input type="email" id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com" required>
            </div>
            <div class="mb-6">
              <label for="Kundennummer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                Kundennummer</label>
              <input type="Kundennummer" id="Kundennummer"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="PC12345">
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                Nachricht</label>
              <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="..."></textarea>

            </div>

            <button type="submit"
              class=" w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Senden</button>

          </form>
        </div>
      </div>
    </div>
    <FooterApp></FooterApp>
  </div>
</template>
<script>
import FooterApp from "@/components/FooterApp.vue"
export default {
  components:{
    FooterApp,
  },
  data() {
    return {
      showMenu: false
    }
  },
}
</script>
