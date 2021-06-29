<template>
<div class="footer">
<footer class="main-footer">
  <ul class="main-footer__primary-list">
  <li class="main-footer__primary-list__list-item"><a class="main-footer__primary-list__list-item__home-link" href="index.html"></a></li>
 <li class="main-footer__primary-list__list-item">Daniel Clifton Powell's Hiking and Travel Website</li>
 <li class="main-footer__primary-list__list-item">&copy; 2021</li>
 <li class="main-footer__primary-list__list-item">Web Design by Dan</li>
</ul>

</footer>
</div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
.main-footer {
  padding-left:0rem;
  &__primary-list {
    margin-left:-2rem;
  }
}
</style>
<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>
