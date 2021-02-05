<template>
  <b-container class="bv-example-row">
    <div class="pet-page-header pt-5">
      <h3 class="mb-2">Find your Dog</h3>
      <p>
        You can create stunning websites with the help of our pet website
        templates. They are free to download and built on a strong foundation of
        HTML. Some of them can also be customized based on your brand image.
      </p>
      <p>
        There are a lot of pet adoption centers that cannot reach animal lovers
        only because they don’t have a website. On the other side, there are
        also so many animal lovers who want an animal friends in their life. If
        you own a pet adoption center, we have some amazing website templates
        for you in our animal website template category.
      </p>
    </div>

    <b-row class="pt-4">
      <b-col v-for="(dog, index) in dogs" :key="index">
       
          <div class="pet-wrapper">
             <router-link :to="`pets/dogs/${index}`">
                <img :src="dog.image" class="w-100" />
            </router-link>
            <div class="pet-box-content">
                <h5>Name: {{dog.name}}</h5>
               <b-row>
                 <b-col><p>Age: {{dog.age}}</p></b-col>
                 <b-col>  <p>Color: {{dog.color}}</p></b-col>
               </b-row>

                <b-row>
                 <b-col>  <p>Weight: {{dog.weight}}</p></b-col>
                 <b-col> <p>Gender: {{dog.gender}}</p> </b-col>
               </b-row>
              
            
             
             
            </div>
          </div>
     
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Dogs",
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>

<style>
/* IMPORT CSS FILE HERE */
@import "./app.scss";
</style>
