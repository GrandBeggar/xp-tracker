<script>
  export let text;
</script>

<div class="header">
  <h1>{text}</h1>
</div>

<style>
  .header {
    height: 5em;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #414165;
  }
  .header > h1 {
    text-align: center;
    width: 100%;
    font-family: 'Open Sans';
    font-size: 3em;
    color: #A7A7BA;
    font-weight: 500;
  }
</style>