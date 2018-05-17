<template>
    <div class="dropper">
        <input type="file" />
        <span>Drop image here to upload it</span>
    </div>
</template>

<script>
    export default {
        name: "UploadForm"
    }
</script>

<style scoped>
    .dropper {
        height: 30vh;
        border: 2px dashed black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    
    .dropper:hover {
        background-color: #eee;
    }
    
    input {
        width: 100%;
        height: 30vh;
        opacity: 0;
        position: absolute;
    }
</style>