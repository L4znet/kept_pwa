<template>
    <form-add>
        <input-form>
            <label for="">Nom </label>
            <input type="text" id="text-input" name="resource" v-model="name" :placeholder="placeholder">
        </input-form>
        <button-form @click.prevent="addTag()">Ajouter ce tag</button-form>
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
        },
        methods: {
            addTag() {

            }
        },
        data() {
            return {
                name: this.name
            }
        },
    }
</script>

<style lang="scss">


</style>
