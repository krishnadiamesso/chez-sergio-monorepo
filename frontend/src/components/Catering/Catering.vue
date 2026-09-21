<template>
  <div class="Catering">
    <div id="contact" class="w3-container container w3-padding-64">
      <h2>Catering</h2>
      <br/>
      <p>
        We offer full-service catering for any event, large or small. We understand your needs and we will cater the
        food to satisfy the biggest criteria of them all, both look and taste. Do not hesitate to contact us.
      </p>
      <p class="w3-text-black w3-large"><b>Chez Sergio, 195 Dundas Street, M5G 1C7 TORONTO, ON</b></p>
      <p>You can also contact us by phone +1.409.553.2323 or email hello@chezsergio.com</p>
      <form action="" target="_blank">
        <p><input class="w3-input w3-padding-16" name="Name" placeholder="Name" required="" type="text"/></p>
        <p><input class="w3-input w3-padding-16" name="Email" placeholder="Email" required="" type="text"/></p>
        <p><input class="w3-input w3-padding-16" name="Address" placeholder="Address" required="" type="text"/></p>
        <p>
          <input class="w3-input w3-padding-16" name="People" placeholder="How many people" required="" type="number"/>
        </p>
        <p>
          <input
            class="w3-input w3-padding-16"
            name="date"
            placeholder="Date and time"
            required=""
            type="datetime-local"
            value="2020-11-16T20:00"
          />
        </p>
        <p>
          <textarea
            class="w3-input w3-padding-16"
            name="Message"
            placeholder="Message \ Special requirements"
          ></textarea>
        </p>
        <p>
          <button class="w3-button w3-light-grey w3-section" type="submit">SUBMIT REQUEST</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catering",
};
</script>
