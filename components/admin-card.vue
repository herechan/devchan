<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="diverder"></div>
        <div class="card-article">
            <slot name="article"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .card{
        background-color: @card-bg;
        // .card-border;
        box-shadow: 0 5px 8px -4px rgba(0, 0, 0, 0.2);
        padding: 10px 0;
        margin-bottom: 20px;
        .card-header{
            font-size: 16px;
            padding: 0 20px;
            padding-top: 5px;
            margin-bottom: 15px;
        }
        .diverder{
            height: 1px;
            background-color: #eee;
            margin-bottom: 5px;
        }
        .card-article{
            padding: 10px 20px;
        }
    }
</style>