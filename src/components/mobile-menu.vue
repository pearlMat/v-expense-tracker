<script setup >
import { ref } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};


</script>

<template>
    <header class="border-b border-gray-400/50 md:hidden">
        <div class="
				
				py-4
				px-4
				container
				mx-auto
				flex
				justify-between
				
			">
            <div>
                <router-link :to="{ name: 'home' }">
                    <div class="font-bold lg:text-xl md:text-lg text-md text-primary">AkongNkap</div>
                </router-link>
            </div>

            <div class=''>
                <button @click="toggleMenu" type='submit'
                    class="flex items-center  rounded text-black-500 hover:text-black-400">
                    <svg class="fill-current h-5 w-5 text-primary " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        v-if="!isOpen">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg class="fill-current h-5 w-5 text-primary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-if="isOpen">
                        <path
                            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>

            </div>

        </div>

    </header>
    <nav class="
				py-4
                pl-4
                md:hidden
				flex " :class="[isOpen ? 'block' : 'hidden']">
        <ul class=" flex flex-col items-center space-y-5 h-full">
           
            <router-link :to="{ name: 'home' }">
                <div class="font-bold lg:text-xl md:text-lg text-md text-primary">About</div>
            </router-link>
            <router-link :to="{ name: 'home' }">
                <div class="font-bold lg:text-xl md:text-lg text-md text-primary">Register</div>
            </router-link>
            <router-link :to="{ name: 'home' }">
                <div class="font-bold lg:text-xl md:text-lg text-md text-primary">Contact</div>
            </router-link>

        </ul>
    </nav>
</template>

<style scoped></style>
