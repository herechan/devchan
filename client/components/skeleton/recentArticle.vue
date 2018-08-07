<template>
    <div class="recent-article">
        <div class="recent-left"></div>
        <div class="recent-right">
            <div class="recent-line"></div>
            <div class="recent-line"></div>
            <div class="recent-line"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .recent-article{
        display: flex;
        justify-content: space-between;
        height: 100px;
        padding: 10px 0;
        .recent-right{
            padding: 5px 0;
            width: calc(100% - 95px);
            display: flex;
            height: 100%;
            flex-direction:column;
            justify-content: space-between;
            .recent-line{
                height: 15px;
                background-color: $page404;
                border-radius: 4px;
                &:first-child{
                    width: 70%;
                }
                &:last-child{
                    width: 50%;
                }
            }
        }
        .recent-left{
            width: 80px;
            height: 80px;
            background-color: $page404;
            border-radius: 4px;
        }
    }
</style>
<script>
export default {
    
}
</script>
