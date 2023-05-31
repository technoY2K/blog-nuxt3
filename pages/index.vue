<template>
    <div class="flex flex-col pt-4 md:pt-16 lg:flex-row lg:justify-around">
        <section class="mb-8">
            <h4 class="font-stencil">Hello 👋, I'm</h4>
            <h1 class="whitespace-nowrap font-stencil">Kevia Cloud ☁️</h1>
            <h4 class="mb-8 font-stencil">Software Engineer</h4>
            <h5>Since you're here...</h5>
            <h5>Why don't you enjoy some TV 📺</h5>
            <h6 class="mt-4">
                Press the <span class="text-red-600">RED</span> button to see
                the hidden message
            </h6>
        </section>
        <section
            class="relative aspect-4/3 w-full bg-white bg-cover bg-center md:h-[500px] lg:aspect-4/3 lg:w-[500px] xl:aspect-video xl:w-[750px]"
            :style="
                theyLive
                    ? {}
                    : { backgroundImage: `url(${currentMindControl})` }
            "
        >
            <div
                v-show="theyLive"
                class="h-full w-full sm:grid sm:place-items-center"
            >
                <h1 class="text-center font-bold text-black">
                    {{ currentMessage }}
                </h1>
            </div>
            <ul
                class="absolute bottom-0 left-0 flex h-[64px] w-full flex-row justify-start gap-x-4 bg-secondary"
            >
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    <button class="h-full w-full" @click="currentIndex = 0">
                        13
                    </button>
                </li>
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    <button class="h-full w-full" @click="currentIndex = 1">
                        42
                    </button>
                </li>
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    <button class="h-full w-full" @click="currentIndex = 2">
                        66
                    </button>
                </li>
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    <button class="h-full w-full" @click="currentIndex = 3">
                        08
                    </button>
                </li>
                <li
                    class="ml-auto flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 bg-red-600 hover:bg-stone-400"
                >
                    <button class="h-full w-full" @click="theyLive = !theyLive">
                        😎
                    </button>
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts" setup>
    import advert1 from "@/assets/joneses.gif";
    import advert2 from "@/assets/vote.gif";
    import advert3 from "@/assets/mindless.gif";
    import advert4 from "@/assets/home.gif";

    const subMessags = [
        "Keep up with the Jonses and be HAPPY",
        "You have no CHOICE",
        "OBEY and scroll mindlessly",
        "Good luck buying a HOME",
    ];

    const mediaPaths = [advert1, advert2, advert3, advert4];
    const currentIndex = ref(0);
    const currentMindControl = computed(() => mediaPaths[currentIndex.value]);
    const currentMessage = computed(() => subMessags[currentIndex.value]);
    const theyLive = ref(false);
</script>
