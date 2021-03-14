<template>
    <main>
        <slot></slot>
    </main>
</template>
<script>
    export default {
        name: 'Content'
    }
</script>
<style lang="scss">
    main {
        width: 100%;
    }


    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        main {
            margin-top: 50px;
        }
    }

</style>
