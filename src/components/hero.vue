<script>
import userIcon from '@/assets/img/group.png';
</script>

<template>
  <div class="hero mt-24">

    <div class="hero-content text-center">
      <div class="flex flex-col">
        <h1 class="mb-7 text-6xl text-primary">Simple way</h1>
        <span class="mb-7 text-6xl font-light ">to manage <span class="text-primary text-6xl font-normal">personal
            finances</span></span>

        <div class=" space-x-2 space-y-2">
          <button class="btn btn-outline btn-primary ">Get Started</button>
          <button class="btn btn-primary ">Read More</button>
        </div>

      </div>

    </div>
  </div>
  <section>
    <div class="grid grid-cols-4 gap-4">
    <div class="bg-amber-100">
      <img :src="userIcon" />

    </div>

    <div class="bg-amber-100">
     

    </div>
    <div class="bg-amber-100">
     

    </div>
    


  </div>
  </section>
</template>