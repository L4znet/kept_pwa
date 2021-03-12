<template>
    <form action="">
        <Input-form :name="picture">
            <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input" name="picture">
        </Input-form>
    </form>
</template>
<script>
    import InputForm from './elements/Input';

    export default {
        name: 'FormAdd',
        components: {
            InputForm
        }
    }
</script>
<style lang="">

</style>
