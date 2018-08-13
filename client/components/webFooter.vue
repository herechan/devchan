<template>
    <footer>
        <p>Powered by Nuxt © {{new Date().getFullYear()}} Chan</p>
    </footer>
</template>
<style lang="scss" scoped>
footer{
    display: flex;
    height: 83px;
    border-top: 1px solid $borderColor;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
</style>
