<template>
    <form-add>
        <input-form>
            <label for="">Nom </label>
            <input type="text" @change="uploadImage($event)" id="text-input" name="resource" :placeholder="placeholder">
        </input-form>
        <button-form>Ajouter ce tag</button-form>
    </form-add>
</template>

<script>
    import FormAdd from '../components/FormAdd'
    import InputForm from '../components/elements/InputForm'
    import ButtonForm from '../components/elements/ButtonForm'
    export default {
        name: 'AddPicture',
        components: {
            FormAdd,
            InputForm,
            ButtonForm
        }
    }
</script>

<style lang="scss">


</style>
