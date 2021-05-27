<template>
  <div class="main_container">
    <div class="contacts">
      <h1>Контакты</h1>
      <p>Общественное движение "ЧИСТОКРЫМ" (Севсвалки.нет) основано <b>Олегом Николаевым.</b></p>
      <p>Региональная общественная организация города Севастополя "Движение за чистый Севастополь" <br>
        Президент РОО ГС "ДЗЧС" - <b>Олег Николаев</b></p>
      <p>Куратор движения <b>Павел Савченков</b></p>
      <p><b>Телефон куратора:</b> +7 000 000 00 00 <br>
        Мессенджеры: Telegram, Viber, Whatsapp.</p>
      <p>E-mail: ЧИСТОКРЫМ.net</p>
      <p>Наши социальные сети:</p>
      <div>
        <div>
          <a href="https://www.facebook.com/sevsvalki/" target="_blank">Facebook</a>
        </div>
        <div><a href="https://vk.com/sevsvalki" target="_blank">ВКонтакте</a></div>
        <div><a href="https://www.instagram.com/sevasvalkin/" target="_blank">Instagram</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style lang="scss" scoped>
.contacts {
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1000;
  margin-bottom: 50px;

  div {
    padding: 10px 0;

    a {
      display: block;
      color: red;
      font-size: 16px;
      font-weight: 600;
      transition: all 0.5s;

      &:hover {
        color: blue;
      }
    }
  }
}
</style>
