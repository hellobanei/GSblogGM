<template>
    <div class="flex items-center">
        <img src="https://th.bing.com/th/id/OIP.0rWwQK6F-3CNQwU3Mt90pwAAAA?rs=1&pid=ImgDetMain"
            class="w-32 rounded-lg mr-4" alt="Avatar" />
        <div>
            <h5 class="mb-2 text-3xl font-mono leading-tight">Mrs.Jean</h5>
            <p class="text-zinc-950">Với tư cách là Quyền Đại thủ lĩnh của các Hiệp sĩ, Jean luôn tận tâm với nhiệm vụ
                của mình và duy trì hòa bình ở Mondstadt.
                Cô ấy đã đề phòng từ rất lâu trước khi cuộc tấn công của Vực Sâu bắt đầu và cô ấy sẽ luôn bảo vệ
                Mondstadt bằng mạng sống của mình.</p>
        </div>
    </div>
    <p></p>
    <div class="flex items-center">
        <img src="https://avatarfiles.alphacoders.com/280/thumb-280959.png"
            class="w-32 rounded-lg mr-4" alt="Avatar" />
        <div>
            <h5 class="mb-2 text-3xl font-mono leading-tight">Rabbit Amber</h5>
            <p class="text-neutral-500 dark:text-neutral-400">Một cô gái vui tươi, thẳng thắn, đồng thời là Outrider duy nhất của Hiệp sĩ Favonius.
                Khả năng sử dụng phong chi dực thành thạo đáng kinh ngạc của cô đã giúp cô ba lần giành được giải Nhà vô địch bay lượng ở Mondstadt.
            </p>
        </div>
    </div>
    <FirestoreExample />
</template>

<script>
import FirestoreExample from '../components/FirestoreExample.vue';

export default {
  components:{
    FirestoreExample
  }
}
</script>

<style></style>