<template>
    <footer class="w-4/5 mx-auto  mt-24">
        <div class="grid lg:grid-cols-2 p-4 lg:w-4/5 mx-auto items-center justify-center ">

            <div class="flex">
                <span>
                    © 2023 Pearlite Designs Co., Ltd. All rights reserved.
                </span>

            </div>

            <div class="">
                <ul class=" flex items-center space-x-10 ">
				<router-link :to="{ name: 'home' }">
					<div class="">About</div>
				</router-link>
				
                <router-link :to="{ name: 'register' }">
					<div class="">Blog</div>
				</router-link>

                <router-link :to="{ name: 'register' }">
					<div class="">Register</div>
				</router-link>

                <router-link :to="{ name: 'register' }">
					<div class="">Terms</div>
				</router-link>
				

			</ul>

            </div>

        </div>
    </footer>
</template>