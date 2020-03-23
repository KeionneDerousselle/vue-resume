<template>
  <div class="card">
    <h3
      v-if="$slots.title || $slots.subtitle"
      class="card__header">
      <span class="card__title">
        <slot name="title" />
      </span>
      <span class="card__subtitle">
        <slot name="subtitle" />
      </span>
    </h3>
    <div
      v-if="$slots.content"
      class="card__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .card {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    padding: 2.5rem;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
    -moz-box-shawdow: 0 0.5rem 1rem rgba(#000, 0.2);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
    border-radius: 0.3rem;
    background-color: $white;

    &__header {
      margin-bottom: 0;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1.5rem;
    }

    &__title {
      display: block;
      color: $green-darkest;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.2rem;
      font-size: 1.7rem;
      margin-bottom: 1.5rem;
    }

    &__subtitle {
      display: block;
      text-align: center;
      color: #5b5b5b;
      text-transform: uppercase;
      font-size: 1.4rem;
    }

    &__content {
      margin-top: 1.5rem
    }
  }

  @include tablet {
    .card {
      &__title {
        text-align: left;
        margin-bottom: 0.5rem;
        font-size: 1.75rem;
      }

      &__subtitle {
        text-align: left;
        font-size: 1.5rem;
      }
    }
  }
</style>
