  <template>

    <comment :id="$route.params.id"></comment>
  </div>
</template>

<script>

import comment from '../subcomponents/comment.vue'

export default {
components: {
    // 注册 评论子组件
     comment
  }

};
</script>

<style lang="scss" scoped>

</style>
