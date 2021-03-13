<template>
    <div class="button">
        <button type="submit">
            <slot></slot>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'ButtonForm'
    }
</script>
<style lang="scss">
    .button {
        width: 50%;
        display: flex;
        align-items: flex-end;
        margin-top: 30px;
        flex-direction: column;

        button {
            width: 200px;
            height: 50px;
            background-color: rgb(226, 135, 75);
            border: none;
            outline: none;
            border-radius: 5px;
            color: #FFF;
            font-size: 20px;
            font-weight: 300;

            &:hover {
                background-color: darken(rgb(226, 135, 75), 10);
                cursor: pointer;
            }
        }
    }

</style>
