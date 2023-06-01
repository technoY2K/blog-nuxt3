<template>
    <section
        class="relative aspect-4/3 w-full bg-white bg-cover bg-center md:h-[500px] lg:aspect-4/3 lg:w-[500px] xl:aspect-video xl:w-[750px]"
        :style="
            theyLive ? {} : { 'background-image': `url(${currentMindControl})` }
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
                v-for="(channel, index) in channels"
                :key="index"
                class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400"
            >
                <button
                    class="h-full w-full bg-stone-900 hover:bg-stone-400 hover:text-primary"
                    :class="{
                        'bg-stone-400 text-primary':
                            currentIndex === Number(index),
                    }"
                    @click="currentIndex = Number(index)"
                >
                    {{ channel }}
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
</template>

<script lang="ts" setup>
    import advert1 from "@/assets/joneses.gif";
    import advert2 from "@/assets/vote.gif";
    import advert3 from "@/assets/mindless.gif";
    import advert4 from "@/assets/home.gif";

    const subMessags = [
        "Keep up with the Jonses and be HAPPY",
        "You have no CHOICE",
        "Stay DISTRACTED, keep scrolling",
        "Good luck buying a HOME",
    ];

    const channels = ["13", "42", "66", "08"];
    const mediaPaths = [advert1, advert2, advert3, advert4];
    const currentIndex = ref(0);
    const currentMindControl = computed(() => mediaPaths[currentIndex.value]);
    const currentMessage = computed(() => subMessags[currentIndex.value]);
    const theyLive = ref(false);
</script>
