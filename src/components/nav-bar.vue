<script setup >
import MobileMenu from './mobile-menu.vue';

</script>

<template>
	<header class="hidden md:block">
		<nav class="
				
				dark:bg-gray-800 dark:text-white
				py-4
				px-8
				w-4/5
				container
				mx-auto
				flex
				justify-between
				
			">
			<div>
				<router-link :to="{ name: 'home' }">
				<div class="font-bold lg:text-xl md:text-lg text-md text-indigo-800">AkongNkap</div>
			</router-link>
			</div>
			<ul class=" flex items-center space-x-10 h-full">
				<router-link :to="{ name: 'home' }">
					<div class="font-bold lg:text-xl md:text-lg text-md text-indigo-800">Home</div>
				</router-link>
				<router-link :to="{ name: 'home' }">
					<div class="font-bold lg:text-xl md:text-lg text-md text-indigo-800">About</div>
				</router-link>
				<router-link :to="{ name: 'home' }">
					<div class="font-bold lg:text-xl md:text-lg text-md text-indigo-800">Blog</div>
				</router-link>
				

			</ul>
		</nav>
	</header>
	<MobileMenu />
</template>

<style scoped></style>
