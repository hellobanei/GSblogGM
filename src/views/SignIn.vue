<template>
	<div class="w-full flex justify-center items-center">
		<div class="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
			<h1 class="text-2xl font-bold text-center">Đăng Ký</h1>
			<form class="space-y-6" @submit.prevent="createAccount" method="POST">
				<div class="space-y-1 text-sm">
					<label for="username" class="block dark:text-gray-600">Tài khoản</label>
					<input type="email" v-model="email" name="username" id="username" placeholder="Nhập tên tài khoản"
						class="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600">
				</div>
				<div class="space-y-1 text-sm">
					<label for="password" class="block dark:text-gray-600">Mật khẩu</label>
					<input type="password" name="password" id="password" placeholder="Nhập mật khẩu" v-model="password"
						class="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600">
					<label for="passwordConfirm" class="block dark:text-gray-600">Nhập lại mật khẩu</label>
					<input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Nhập lại mật khẩu"
						v-model="passwordConfirm"
						class="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600">
					<div class="flex justify-end text-xs dark:text-gray-600">
						<a rel="noopener noreferrer" href="#">Quên mật khẩu?</a>
					</div>
				</div> 
				<button type="submit" class="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Đăng ký</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

let email = ref("");
let password = ref("");
let passwordConfirm = ref("");

async function createAccount() {
	if (password.value !== passwordConfirm.value) {
		alert("Mật khẩu và mật khẩu xác nhận phải khớp nhau!");
		return;
	}

	// Xử lý khi nút đăng ký được nhấn và mật khẩu khớp
	alert("Đăng ký thành công!");
	router.push("/login");
}
</script>
