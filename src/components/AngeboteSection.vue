<template>
    <div class="md:p-10">
        <h1 class="text-4xl font-bold">
            Aktuelle Mietwagen- und Transporter-Angebote
        </h1>
        <div class="w-full flex flex-wrap gap-3 justify-center items-center p-10 mb-10">
            <div class=" flex group/item w-60 h-60 md:w-80 md:h-96 bg-slate-300 relative backimg rounded-lg cursor-pointer">
                <div class="bg-red-700 text-white p-1 rounded-md top-3 left-3 absolute group/edit md:invisible group-hover/item:visible" >-30% Rabat</div>
                <span class="absolute bottom-0 text-white font-bold text-2xl p-3 bg-gradient-to-b from-transparent to-cyan-500 md:opacity-0 group/edit group-hover/item:opacity-100 ">Fahr Electric für sauberes Welt</span>
            </div>
            <div class=" flex group/item w-60 h-60 md:w-80 md:h-96 bg-slate-300 relative backimg1 rounded-lg cursor-pointer">
                <div class="bg-red-700 text-white p-1 rounded-md top-3 left-3 absolute group/edit md:invisible group-hover/item:visible" >-25% Rabat</div>
                <span class="absolute bottom-0 text-white font-bold text-2xl p-3 bg-gradient-to-b from-transparent to-blue-500 md:opacity-0 group/edit group-hover/item:opacity-100 ">Kleine City-Flitzer und wenig Verbrauch</span>
            </div>
            <div class=" flex group/item w-60 h-60 md:w-80 md:h-96 bg-slate-300 relative backimg2 rounded-lg cursor-pointer">
                <div class="bg-red-700 text-white p-1 rounded-md top-3 left-3 absolute group/edit md:invisible group-hover/item:visible" >-10% Rabat</div>
                <span class="absolute bottom-0 text-white font-bold text-2xl p-3 bg-gradient-to-b from-transparent to-gray-900 md:opacity-0 group/edit group-hover/item:opacity-100 ">Immer mit neuesten Modellen unterwegs</span>
            </div>
        </div>
    </div>

    <!-- Burdan asagisi incelemek icin -->

</template>
<style>
.backimg{
    background-image: url(../images/Cars/MercedesA-back.jpeg);
    object-fit: cover;
    object-position: center;
    background-position: center;
}
.backimg1{
    background-image: url(../images/Cars/Corsa.jpeg);
    object-fit: cover;
    object-position: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.backimg2{
    background-image: url(../images/Cars/Clio-front.webp);
    object-fit: cover;
    object-position: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>