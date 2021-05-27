<template>
  <div class="Dump_map">
    <h1>Карта незаконных свалок Севастополя</h1>
    <div class="Dump_map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.221831972883!2d33.48212351539939!3d44.592488079100335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40953cab3513b37d%3A0x87f735258b51d1e!2z0YPQuy4g0JzQtdC90YzRiNC40LrQvtCy0LAsIDg4LCDQodC10LLQsNGB0YLQvtC_0L7Qu9GM!5e0!3m2!1sru!2sua!4v1620218047656!5m2!1sru!2sua" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "DumpMap"
}
</script>

<style lang="scss" scoped>
.Dump_map {
  margin-bottom: 70px;
}
@media (max-width: 500px) {
  .Dump_map {
    .Dump_map-container {
      iframe {
        height: 300px;
      }
    }
  }
}
</style>
