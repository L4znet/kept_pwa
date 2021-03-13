<template>
    <div class="input">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'InputForm'
    }
</script>
<style lang="scss">
    .input {
        width: 50%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        flex-direction: column;

        label {
            margin-right: 20px;
            font-size: 22px;
            font-weight: 300;
        }

        input {
            width: 100%;
            height: 50px;
            border: none;
            font-size: 22px;
            padding-left: 20px;
            margin-top: 10px;
        }
    }

</style>
