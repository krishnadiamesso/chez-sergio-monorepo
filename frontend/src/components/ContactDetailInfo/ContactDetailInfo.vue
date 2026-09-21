<template>
  <div class="ContactDetailInfo">
    <section>
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h5>Visit</h5>
            <span data-testid="address">
              195 Dundas Street,
              <br/>M5G 1C7 Toronto, ON
            </span>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h5>Email</h5>
            <p data-testid="email">hello@chezsergio.com</p>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h5>Call</h5>
            <span data-testid="phone"> +1.409.553.2323 </span>
            <div class="text-small text-muted">Mon - Fri, 10am - 10pm</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactDetailInfo",
};
</script>

<style lang="scss">
@import "ContactDetailInfo";
</style>
