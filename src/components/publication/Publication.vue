<template>
  <div class="container__publication">
    <icon-base
      icon-name="icon"
      viewBox="0 0 500 500"
      width="100%"
      height="100%"
    >
      <icon-publicationP>
        <div class="publication__title">
          hduakshdkusahdukhaskduhusakuhdkuashdksauhdkasuhd
        </div>
      </icon-publicationP>
    </icon-base>
  </div>
</template>

<script>
import IconBase from '@/components/icons/IconBase'
import IconPublicationP from '@/components/icons/IconPublicationP'

export default {
  components: { IconBase, IconPublicationP }
}
</script>
<style scoped>
.container__publication {
  width: 75%;
  margin-left: auto;
  margin-right: 14px;
  margin-bottom: -80px;
}

.publication__title {
  font-family: var(--font-family-title);
  width: 320px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  text-align: start;
  padding-left: 0.5rem;
}
</style>
