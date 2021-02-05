<template>
  <div class="pt-5 pet-details-information">
    <img :src="petDetails.image" width="150" />
    <h2 class="mt-3">
      Pet Name: {{ petDetails.name }} ({{ $route.params.pet }})
    </h2>
    <p>Age: {{ petDetails.age }} Years old</p>
    <p>Breed: {{ petDetails.breed }}</p>
    <p>Gender: {{ petDetails.gender }} Years old</p>
    <p>Color: {{ petDetails.color }}</p>
    <p>Weight: {{ petDetails.weight }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Pet",
  computed: {
    ...mapState(["dogs", "cats"]),
  },
  data() {
    return {
      petDetails: {},
    };
  },
  methods: {
    getPet() {
      let animal = this[this.$route.params.pet];
      this.petDetails = animal[this.$route.params.id];
    },
  },
  mounted() {
    this.getPet();
  },
};
</script>


<style>
/* IMPORT CSS FILE HERE */
@import "./app.scss";
</style>