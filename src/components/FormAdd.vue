<template>
    <form action="">
        <slot></slot>
    </form>
</template>
<script>


    export default {
        name: 'FormAdd',
        components: {

        },
        props: ['placeholder']
    }
</script>
<style lang="scss">
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
