<script setup>
import NavBar from '@/components/nav-bar.vue';
import { notify } from "notiwind";
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const passwordLength = 6;
const state = reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

})

const rules = {
    firstName: { required },
    lastName: { required },
    email: { required, email },

    password: { required, }

}
const v$ = useVuelidate(rules, state)


const successful = ref(false);
const loading = ref(false);
const message = ref("");

const onSubmit = async () => {
    const result = await v$.value.$validate()
    if (!result) {
        return
    }

    message.value = "";
    successful.value = false;
    loading.value = true;

    store.dispatch("auth/register", state).then(
        (data) => {
            console.log(data)
            message.value = data.message;
            successful.value = true;
            loading.value = false;
            notify({
                group: "foo",
                title: "Success",
                text: "Your account was registered!"
            }, 4000)
            router.push('/');
        },
        (error) => {
            message.value =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                notify({
                group: "error",
                title: "Error",
                text:   error.message
            }, 4000)
            successful.value = false;
            loading.value = false;
        })

}




</script>

<template>
    <NavBar />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col ">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form @submit.prevent="() => onSubmit()">
                        <div class="form-control" :class="{ error: v$.firstName?.$errors?.length }">
                            <label class="label">
                                <span class="label-text">First name</span>
                            </label>
                            <input v-model="state.firstName" type="text" placeholder="name" class="input input-bordered" />
                            <div class="input-errors" v-for="error of v$.firstName?.$errors" :key="error.$uid">
                                <div class="error-msg text-error">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="form-control" :class="{ error: v$.lastName?.$errors?.length }">
                            <label class="label">
                                <span class="label-text">Last name</span>
                            </label>
                            <input v-model="state.lastName" type="text" placeholder="Last name"
                                class="input input-bordered" />
                            <div class="input-errors" v-for="error of v$.lastName?.$errors" :key="error.$uid">
                                <div class="error-msg text-error">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="form-control" :class="{ error: v$.email?.$errors?.length }">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input v-model="state.email" type="text" placeholder="email" class="input input-bordered" />
                            <div class="input-errors" v-for="error of v$.email?.$errors" :key="error.$uid">
                                <div class="error-msg text-error">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="form-control" :class="{ error: v$.password?.$errors?.length }">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input v-model="state.password" type="text" placeholder="password"
                                class="input input-bordered" />
                            <div class="input-errors" v-for="error of v$.password?.$errors" :key="error.$uid">
                                <div class="error-msg text-error">{{ error.$message }}</div>
                            </div>
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <span v-if="loading" class="loading loading-ring loading-lg"></span>
                            <button v-else class="btn btn-primary" type="submit">Signup</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>