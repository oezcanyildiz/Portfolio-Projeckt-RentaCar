<template>
    <div class="flex flex-col justify-center items-center bg-slate-100 pb-10">
        <div class="text-3xl font-semibold p-10 flex flex-col justify-center items-center">
            <div class="p-10">
                Wir bieten zurzeit leider nur
            </div>
            <div class="w-full">
                <label for="dauer"
                    class="block text-center md:text-xl mb-2 text-sm font-medium text-gray-900 dark:text-white">Wählen Sie
                    ihre Dauer</label>
                <select id="dauer" v-model="selectedValue"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1" selected>Täglich</option>
                    <option value="7">Wochentlich</option>
                    <option value="31">Monatlich</option>
                    <option value="2">Wochenende</option>
                </select>

            </div>
        </div>
        <div class="flotte grid md:grid-cols-4 grid-cols-2 gap-4">
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img1 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{ 49.99 * selectedValue }}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img2 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">VW Golf</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{ 59.99 * selectedValue }}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img3 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Mercedes A</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>5 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Automatic
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{ 79.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img4 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">VW Polo</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{49.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img5 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Renault Clio</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Automatic
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{59.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img6 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{39.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img7 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{39.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img8 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{39.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img9 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{39.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img10 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{39.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:w-72 md:h-80 w-44 h-56 max-w-sm  border border-gray-200 rounded-lg shadow cursor-pointer">
                <div class="img6 w-full h-full rounded-t-lg">
                </div>
                <div class="info w-full flex justify-between">
                    <div class="flex-1">
                        <h3 class="md:text-xl md:px-1">Opel Corsa</h3>
                        <p class="text-xs opacity-70 p-1 flex justify-between">
                            <span>
                                <i class="fa-solid fa-users"></i>4 Sitze
                                <i class="fa-solid fa-gear pl-1"></i>Manuel
                            </span>
                        </p>
                    </div>
                    <div class="flex-1 text-center items-center w-full h-full flex justify-center">
                        <span class="md:text-2xl font-bold ">{{39.99 * selectedValue}}€</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            opel: 49.99,
            mercedes: 49.99,
            Vw: 49.99,
            VwPolo: 49.99,
            Clio: 49.99,
            selectedValue:1,
        }
    },
}
</script>
<style>
.img1 {
    background-image: url(../images/Cars/Corsa.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}

.img2 {
    background-image: url(../images/Cars/Golf-front.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}

.img3 {
    background-image: url(../images/Cars/MercedesA-front.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}

.img4 {
    background-image: url(../images/Cars/Polo-front.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}

.img5 {
    background-image: url(../images/Cars/Clio-front.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}

.img6 {
    background-image: url(../images/Cars/Corsa.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}
.img7 {
    background-image: url(../images/Cupra-Formentor.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}
.img8 {
    background-image: url(../images/Mercedes.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}
.img9 {
    background-image: url(../images/Corsa.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}
.img10 {
    background-image: url(../images/Golf.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: contain;
}


</style>
