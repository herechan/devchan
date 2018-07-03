<template>
    <div class="container">
        <div class="filter-wrap">
            <p class="filter-header">
                <span>筛选</span>
                <i class="iconfont">&#xe642;</i>
            </p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.filter-wrap{
    @include cardBorder;
    .filter-header{
        padding: $cardPadding;
        border-bottom: 1px solid $borderColor;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .iconfont{
            color: $mainColor;
            font-size: 18px;
            line-height: 1em;
        }
    }
}
</style>