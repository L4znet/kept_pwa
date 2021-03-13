<template>
    <form-add>
        <input-form>
            <label for="">Nom </label>
            <input type="text" @change="uploadImage($event)" id="text-input" name="resource" :placeholder="placeholder">
        </input-form>
        <input-form>
            <label for="">Chemin vers la resource </label>
            <input type="text" @change="uploadImage($event)" id="text-input" name="resource" :placeholder="placeholder">
        </input-form>
        <select-form>
            <option>fsdfsdfsdfsd</option>
            <option>fsdfsdfsdfsd</option>
            <option>fsdfsdfsdfsd</option>
            <option>fsdfsdfsdfsd</option>
            <option>fsdfsdfsdfsd</option>
        </select-form>

        <button-form>Poster</button-form>
    </form-add>
</template>

<script>
    import FormAdd from '../components/FormAdd'
    import InputForm from '../components/elements/InputForm'
    import SelectForm from '../components/elements/SelectForm'
    import ButtonForm from '../components/elements/ButtonForm'
    export default {
        name: 'AddPicture',
        components: {
            FormAdd,
            InputForm,
            SelectForm,
            ButtonForm
        }
    }
</script>

<style lang="scss">


</style>
