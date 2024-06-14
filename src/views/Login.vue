<template>
	<section class="h-screen">
		<div class="container h-full px-6 py-24">
			<div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
				<!-- Left column container with background-->
				<div class="mb-12 md:mb-0 md:w-3/12 lg:w-3/12">
					<img src="https://i.pinimg.com/736x/80/50/98/805098d5cb41699a73b730138d1436e9.jpg" class="w-full"
						alt="Phone image" />
				</div>

				<!-- Right column container with form -->
				<div class="md:w-8/12 lg:ms-6 lg:w-5/12">
					<form @submit.prevent="Login">
						<!-- Email input -->
						<div class="relative mb-6" data-twe-input-wrapper-init>
							<input type="email" v-model="email"
								class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
								id="exampleFormControlInput3" @input="checkInput" />
							<label for="exampleFormControlInput3"
								class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
								Nhập Email </label>
						</div>

						<!-- Password input -->
						<div class="relative mb-6" data-twe-input-wrapper-init>
							<input type="password" v-model="password"
								class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
								id="exampleFormControlInput33" placeholder="Password" @input="checkInput" />
							<label for="exampleFormControlInput33"
								class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">Mật
								khẩu
							</label>
						</div>

						<!-- Remember me checkbox -->
						<div class="mb-6 flex items-center justify-between">
							
							<!-- Forgot password link -->
							<a href="#!" class="text-primary focus:outline-none dark:text-primary-400">Thay đổi mật
								khẩu?</a>
						</div>

						<!-- Submit button -->
						<button type="submit"
							class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
							data-twe-ripple-init data-twe-ripple-color="light">
							Đăng nhập
						</button>

						<!-- Divider -->
						<div
							class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
							<p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-400">
								Bạn chưa có tài khoản 
							</p>
						</div>

						<!-- Social login buttons -->
						<a class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
							style="background-color: #3b5998" href="#!" role="button" data-twe-ripple-init
							data-twe-ripple-color="light">
							<!-- Facebook -->
							<span class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
								<router-link :to="{ name: 'signin' }" style="text-decoration: none;">
									<span class="px-8" style="color:aliceblue; font-size: 20px;">Đăng Ký</span>
								</router-link>
							</span>
						</a>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { ref } from "vue"
import { supabase } from "../supabase"
import router from "@/router";

const email = ref("")
const password = ref("")
async function Login() {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error) {
		alert("Email hoặc mật khẩu không hợp lệ");
		console.log(error);
	} else {
		console.log(data);
		alert("Đăng nhập thành công");
		router.push("/");
	}
}

function checkInput() {
	const emailInput = document.getElementById('exampleFormControlInput3');
	const passwordInput = document.getElementById('exampleFormControlInput33');
	const emailLabel = document.querySelector('[for="exampleFormControlInput3"]');
	const passwordLabel = document.querySelector('[for="exampleFormControlInput33"]');
	
	// Check if email input is empty
	if (email.value !== '') {
		emailLabel.classList.add('active');
	} else {
		emailLabel.classList.remove('active');
	}
	
	// Check if password input is empty
	if (password.value !== '') {
		passwordLabel.classList.add('active');
	} else {
		passwordLabel.classList.remove('active');
	}
}
</script>

<style>
/* CSS cho label khi input không trống */
label.active {
  transform: translateY(-1.15rem) scale(0.8);
  color: #3b82f6; /* Màu của label khi input không trống */
}
</style>
