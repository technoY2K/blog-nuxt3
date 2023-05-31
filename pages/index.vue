<template>
    <div class="flex flex-col pt-16 lg:flex-row lg:justify-around">
        <section class="mb-8">
            <h4 class="font-stencil">Hello 👋, I'm</h4>
            <h1 class="whitespace-nowrap font-stencil">Kevia Cloud ☁️</h1>
            <h4 class="mb-8 font-stencil">Software Engineer</h4>
            <h5>Since you're here, why don't you enjoy some TV 📺</h5>
            <h6>
                Press the <span class="text-red-600">RED</span> button to see
                the hidden message
            </h6>
        </section>
        <section
            class="relative aspect-4/3 w-full bg-slate-500 md:h-[500px] lg:aspect-4/3 lg:w-[500px] xl:aspect-video xl:w-[750px]"
        >
            <ul
                class="absolute bottom-0 left-0 flex h-[64px] w-full flex-row justify-start gap-x-4 bg-secondary"
            >
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    13
                </li>
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    42
                </li>
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    66
                </li>
                <li
                    class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 hover:bg-stone-400"
                >
                    84
                </li>
                <li
                    class="ml-auto flex h-[64px] w-[64px] cursor-pointer items-center justify-center border-4 border-stone-400 bg-red-600 hover:bg-stone-400"
                >
                    🕶️
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts" setup></script>
