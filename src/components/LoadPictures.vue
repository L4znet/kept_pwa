<template>
    <article v-for="picture in pictures" :key="picture">
        <div class="picture">
            <img :src="pictures.path">
        </div>
        <h2>{{ pictures.name }}</h2>
    </article>
</template>
<script>
    export default {
        name: 'LoadPictures',
        props: ['pictures'],
    }
</script>
<style lang="scss">
    article {
        width: 300px;
        height: 300px;
        background-color: #FFF;
        border: 1px solid rgb(218, 218, 218);
        display: flex;
        flex-direction: column;
        margin: 10px;

        .picture {
            height: 100%;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        h2 {
            min-height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 300;
        }
    }

</style>
