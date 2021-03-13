<template lang="">
    <div class="select">
        <label for="">Tag de votre image</label>
        <select name="tags">
            <slot></slot>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'SelectForm'
    }
</script>
<style lang="scss">
    .select {
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

        select {
            width: 100%;
            height: 50px;
            border: none;
            font-size: 22px;
            padding-left: 20px;
            margin-top: 10px;
            font-weight: 300;
        }
    }

</style>
