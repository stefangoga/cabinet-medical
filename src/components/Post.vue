<template>
  <article id="articol">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <img :src="post.img" style="width: 30%"  alt="" />
    
  </article>
</template>
<script>
export default {
  props: ["post"]
};
</script>


