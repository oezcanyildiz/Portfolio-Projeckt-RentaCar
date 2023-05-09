<template>
    <div class="flex flex-col justify-center items-center w-full h-full bg-slate-100">
        <div class="w-full flex flex-col justify-center items-center mt-5">
            <h2 class="md:text-4xl text-xl font-bold pt-5">Suchst du dein Wagen nach Modellen ?</h2>
            <div class="autoScrollModellen w-full">
                <div class="tag-list">
                    <div class="loop-slider" style="--duration: 18978ms; --direction: normal;">
                        <div class="inner w-full">
                            <div class="tag"> Cabrio/Roadster</div>
                            <div class="tag"> Kombi</div>
                            <div class="tag"> Sportwagen</div>
                            <div class="tag"> Van</div>
                            <div class="tag"> Kleinwagen</div>
                            <div class="tag"> Limousine</div>
                            <div class="tag"> SUV</div>
                            <div class="tag"> Geländewagen</div>
                            <div class="tag"> Kastenwagen</div>
                            <div class="tag"> Coupe</div>
                            <div class="tag"> Limousine</div>
                            <div class="tag"> SUV</div>
                            <div class="tag"> Geländewagen</div>
                            <div class="tag"> Kastenwagen</div>
                            <div class="tag"> Coupe</div>
                            <div class="tag"> Cabrio/Roadster</div>
                            <div class="tag"> Kombi</div>
                            <div class="tag"> Sportwagen</div>
                            <div class="tag"> Van</div>
                            <div class="tag"> Kleinwagen</div>
                            <div class="tag"> Limousine</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-10">
            <h2 class="md:text-4xl text-xl font-bold">oder suchst dein Wagen nach Marke ?</h2>
            <div class="autoScrollMarken w-full">
                <div class="tag-list1">
                    <div class="loop-slider" style="--duration: 15000ms; --direction: reverse;">
                        <div class="inner1 w-full">
                            <div class="tag1">
                                <img src="../images/logos/Emblem-1.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-2.avif" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-3.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-4.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-5.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-6.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-7.avif" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-8.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-9.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-10.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-11.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Audi-emblem.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/bmw-emblem.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-1.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-2.avif" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-3.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-4.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-5.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-6.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-7.avif" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-8.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-9.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-10.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Emblem-11.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/Audi-emblem.png" alt="">
                            </div>
                            <div class="tag1">
                                <img src="../images/logos/bmw-emblem.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.inner:hover{
    animation-play-state: paused;
}
.inner1:hover{
    animation-play-state: paused;
}
.tag-list {
    width: 100%;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    gap: 1rem 0;
    position: relative;
    padding: 1.5rem 0;
    overflow: hidden;
}

.inner {
    display: flex;
    gap: 2rem;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
}

.tag {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 0.4rem;
    padding: 1.2rem 1.7rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.2rem 1.5rem rgba(0, 0, 0, 0.4);
    color: black;
    font-weight: 800;
    cursor: pointer;
}

.fade {
    pointer-events: none;
    position: absolute;
    inset: 0;
}

.tag-list1 {
    width: 100%;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    gap: 1rem 0;
    position: relative;
    padding: 1.5rem 0;
    overflow: hidden;
}

.inner1 {
    display: flex;
    gap: 2rem;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
}

.tag1 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 10rem;
    min-height: 10rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.2rem 1.5rem rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    cursor: pointer;
}

.fade1 {
    pointer-events: none;
    position: absolute;
    inset: 0;
}

@keyframes loop {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@media only screen and (max-width: 600px) {
    .tag-list {
        gap: 0.5rem 0;
        padding: 1rem 0;
        overflow: hidden;
    }

    .inner {
        display: flex;
        gap: 1rem;
    }

    .tag {
        display: flex;
        align-items: center;
        font-size: 1rem;
        border-radius: 0.4rem;
        padding: 1rem 1.5rem;
        box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.2rem 1.5rem rgba(0, 0, 0, 0.4);
        color: black;
        font-weight: 500;
        cursor: pointer;
    }

    .tag-list1 {
        gap: 0.5rem 0;
        padding: 1rem 0;
        overflow: hidden;
    }

    .inner1 {
        display: flex;
        gap: 1.5rem;
    }

    .tag1 {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 5rem;
        min-height: 5rem;
        box-shadow: none;
        border-radius: 1rem;
        cursor: pointer;
    }
    .fade1 {
    pointer-events: none;
    position: absolute;
    inset: 0;
}
}
</style>