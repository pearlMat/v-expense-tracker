<script setup>
import NavBar from '@/components/nav-bar.vue';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

const state = reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
})

const rules = {
    name: { required },
    email: { required, email },

    password: { required, }

}
const v$ = useVuelidate(rules, state)


</script>

<template>
    <NavBar />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col ">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control" :class="{ error: v$.firstName.$errors.length }">
                        <label class="label">
                            <span class="label-text">First name</span>
                        </label>
                        <input v-model="state.firstName" type="text" placeholder="name" class="input input-bordered" />
                        <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-control" :class="{ error: v$.lastName.$errors.length }">
                        <label class="label">
                            <span class="label-text">Last name</span>
                        </label>
                        <input v-model="state.lastName" type="text" placeholder="Last name" class="input input-bordered" />
                        <div class="input-errors" v-for="error of v$.lastName.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-control" :class="{ error: v$.email.$errors.length }">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input v-model="state.email" type="text" placeholder="email" class="input input-bordered" />
                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-control" :class="{ error: v$.password.$errors.length }">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input v-model="state.password" type="text" placeholder="password" class="input input-bordered" />
                        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style></style>