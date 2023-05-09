 <div id="default-carousel" class="relative w-full h-full mobileHidden" data-carousel="slide">
<!-- Carousel wrapper -->
<div class="relative overflow-hidden rounded-lg md:h-96 object-cover h-56">
    <!-- Item 1 -->
    <div class="hidden duration-1000 ease-in-out grad1" data-carousel-item>
        <img src="../images/Cupra-Formentor.jpeg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
    </div>
    <!-- Item 2 -->
    <div class="hidden duration-1000 ease-in-out grad1" data-carousel-item>
        <img src="../images/Ford.webp"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
    </div>
    <!-- Item 3 -->
    <div class="hidden duration-1000 ease-in-out grad1" data-carousel-item>
        <img src="../images/Golf.jpeg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
    </div>
    <div class="hidden duration-1000 ease-in-out grad1" data-carousel-item>
        <img src="../images/Mercedes.jpeg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
    </div>
</div>
</div> -->
-->
<template>
    <div class="flex md:absolute top-20 z-40 w-full mobileForm">
        <form class="md:border md:flex-1 md:m-5 md:p-5 w-full m-10">
            <h2 class="justify-center text-center text-2xl text-white mb-2 opacity-1 uppercase">Finde dein passendes Fahrzeug</h2>
            <!-- <div class="grid mb-4 md:grid-cols-2 place-items-center w-full">
                <div class="mb-2">
                    <label for="large-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Abholstation oder
                        Postleitzahl</label>
                    <input type="text" id="large-input"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
            </div> -->
            <div class="flex flex-col items-center mb-4 justify-center">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Postleitzahl oder
                    Abholstation</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        class="min-w-full block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..." required>
                </div>

            </div>
            <div date-rangepicker class="flex items-center mb-4 justify-center">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input name="start" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date start">
                </div>
                <span class="mx-4 text-gray-500">to</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input name="end" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date end">
                </div>
            </div>
            <div class="ml-10 mr-10">
                <button type="submit" class="min-w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suchen</button>
            </div>
        </form>
        <div class="leerSection flex-1"></div>
    </div>
</template>
<style>
.grad1 {
    -webkit-mask-image: -webkit-gradient(linear, right top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.5)))
}
.formClass{
    -webkit-mask-image: -webkit-gradient(linear, right top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.9)))
}
@media only screen and (max-width: 600px) {
  .mobileHidden {
    display: none;
  }
  .mobileForm{
    box-sizing: border-box;
    background-image: url(../images/Golf.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
  }
}
</style>
