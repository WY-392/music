<template>
    <div class="title">
        <div class="title-text">
          <div class="icon" v-if="showIcon">
          </div>
            {{ title }}
            <slot name="min-title"></slot> 
        </div>

                
        <div class="title-btn">
              <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'标题'
            },
            showIcon:{
                type:Boolean,
                default:false
            }
        }
        
    }
</script>

<style   scoped>
    .title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #f44;
    }
    .title-text{
        display: flex;
        align-items: center;
        font-size: 20px;
       flex: 3;
    }
    .title-btn{
        flex: 1;
        display: flex;
        cursor: pointer;
        justify-content: flex-end;
        align-items: center;
    }
    .icon{
        margin-top: 5px;
        width: 33px;
        
        height: 33px;
        background: url('@/assets/index.png');
        background-position: -225px -156px;
    }
    

</style>