<template>
  <div class="home">
    <div class="banner"></div>

    <b-container class="container mt-2 pt-5">
      <h3>Meet your best friend</h3>
      <p>
        Pet blogs can be a huge hit with the internet audience. There are
        several blogs on “how to take care of your dog” and the likes, which
        bring in tons of revenue. This generation especially is very far away
        from the knowledge of pet and animal care. You can reach millions of
        people with your blog on pet training, healthy habits, pet care and much
        more. We have got amazing free animal website templates that will suit a
        blog kind of site structure as well.
      </p>
    </b-container>
  </div>
</template>

<script>
import Cats from "./Cats.vue";

export default {
  name: "Home",
  components: {
    Cats,
  },
};
</script>


<style>
.banner {
  height: 400px;
  background: url("https://preview.colorlib.com/theme/petsitting/images/bg_1.jpg")
    no-repeat;
  background-size: cover;
  background-position: 0 -22px;
}

h3 {
  text-align: left;
  color: #282f4e;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 26px;
}

p {
  text-align: left;
  line-height: 28px;
}
</style>
