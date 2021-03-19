<template>
    <form-add>
        <input-form>
            <label for="">Nom </label>
            <input type="text" id="text-input" name="resource" v-model="name">
        </input-form>
        <input-form>
            <label for="">Chemin vers la resource </label>
            <input type="text" b id="text-input" name="resource" v-model="path">
        </input-form>
        <div class="select">
            <label for="">Tag de votre image</label>
            <select name="tags" v-model="tag">
                <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
            </select>
        </div>
        <div class="button">
            <button-form @click.prevent="addPicture()">Poster</button-form>
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
            addPicture() {

                if (this.name !== "" && this.tag !== undefined && this.path !== "") {
                    axios({
                        method: "post",
                        url: `https://pwaapikept.cleverapps.io/tags/${this.tag}/pictures`,
                        data: {
                            name: this.name,
                            path: this.path,
                        }
                    })
                        .then((res) => {
                            if (res.status == 200) {
                                console.log(this)
                                console.log(this.tag)

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
        async mounted() {
            axios({
                method: "get",
                url: "https://pwaapikept.cleverapps.io/tags"
            })
                .then((res) => {
                    this.tags = res.data;
                })
                .catch((error) => {
                    console.log('Une erreur a été rencontrée', error)
                }).finally(() => {
                });
        },
        data() {
            return {
                tags: this.tags,
                tag: this.tag,
                name: this.name,
                path: this.path
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
