<template>
    <form-add>
        <input-form>
            <label for="">Nom </label>
            <input type="text" id="text-input" name="resource" v-model="name">
        </input-form>
        <div class="button">
            <button-form @click.prevent="addTag()">Ajouter ce tag</button-form>
        </div>
    </form-add>
</template>

<script>
    import FormAdd from '../components/FormAdd'
    import InputForm from '../components/elements/InputForm'
    import ButtonForm from '../components/elements/ButtonForm'
    import axios from 'axios'
    export default {
        name: 'AddPicture',
        components: {
            FormAdd,
            InputForm,
            ButtonForm
        },
        methods: {
            addTag() {
                if (this.name !== "") {
                    axios({
                        method: "post",
                        url: "https://pwaapikept.cleverapps.io/tags",
                        data: {
                            name: this.name
                        }
                    })
                        .then((res) => {
                            if (res.status == 200) {
                                this.$router.push('/');
                            }
                        })
                        .catch((error) => {
                            console.log('Une erreur a été rencontrée', error)
                        }).finally(() => {
                        });
                }
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
    .button {
        width: 50%;
        display: flex;
        align-items: flex-end;
        margin-top: 30px;
        flex-direction: column;
    }

</style>
