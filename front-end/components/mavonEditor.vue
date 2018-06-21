<template>
    <div id="editor">
        <mavonEditor style="height: 100%"></mavonEditor>
    </div>
</template>
    <script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "editor",
  components: {
    mavonEditor
    // or 'mavon-editor': mavonEditor
  }
};
</script>
    <style lang="scss" scoped>
#editor {
  margin: auto;
  width: 100%;
  height: 580px;
}
</style>