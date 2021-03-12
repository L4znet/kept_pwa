<template>
    <label :for="name">{{ label }}</label>
    <slot></slot>
</template>
<script>
    export default {
        name: 'Input',
        props: ['label', 'name']
    }
</script>
<style lang="">

</style>
