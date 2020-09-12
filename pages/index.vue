<template>
  <div class="main-page">
    <header class="header">
      <h1># First task</h1>

      <ul>
        <li>On first page you need to create product catalog.</li>
        <li>You can get data from "/static/productCatalog.json" and parse it.</li>
        <li>
          The best option is to create an array containing higher-level categories,
          which contain a list of middle-level product lines,
          which will accordingly be have the list of lower-level product lines.
          All elements can have multiple parents. You can see it in "all_parents" field.
        </li>
        <li>Use html and scss for show product line tree.</li>
        <li>Design template you can get from "/assets/catalogDesignTemplates/"</li>
        <li>If there are less than 5 children in the lines of blocks, need to hide toggle button</li>
        <li>You can use any libraries for resolve this task.</li>
      </ul>
    </header>

    <main class="main">
      <!--TODO remove me!-->
      <img src="../assets/catalogDesignTemplates/Selection_001.jpg">
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
