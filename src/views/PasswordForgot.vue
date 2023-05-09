<template>
    <div>
        <div class="sticky top-0 bg-white z-50">
            <header class="flex justify-between items-center md:px-20 px-10 h-20">
                <router-link to="/">
                    <h1 class="text-2xl font-semibold">Planet Car®</h1>
                </router-link>
                <nav class="flex">
                    <ul class="md:flex gap-5 hidden md:visible text-xl">
                        <li>
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
                    <li class="text-black font-semibold py-2 rounded-lg">
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
        <main class="bg-slate-100">
            <div class="flex flex-col p-10 gap-5 text-center justify-center items-center">
                <h2 class=" text-5xl font-semibold text-center pt-10">FORGOT YOUR PASSWORD?</h2>
                <div class="flex gap-2">
                    <p>
                        Please enter your email-address and we will send you an email to reset your password.
                        In case you have any questions please contact
                        <strong>
                            info@planetcar.com
                        </strong>
                    </p>

                    <p>Bitte geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen eine E-Mail zum Zurücksetzen Ihres
                        Passworts.
                        Bei Fragen wenden Sie sich bitte an<strong> info@planetcar.com
                        </strong></p>
                </div>

                <div class="bg-slate-100">
                    <form action="newPassword">
                        <label for="email"></label>
                        <input type="email" class="w-96 text-center" placeholder="Ihre Email" required>
                    </form>
                </div>
                <button type="submit"
                    class=" w-96 text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-3 text-center">Senden</button>

            </div>
        </main>
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
