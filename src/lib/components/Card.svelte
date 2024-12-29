<script>
  export let title = '';
  export let content = '';
  export let footer = null;
</script>

<div class="card">
  <div class="card-header">
    <h3>{title}</h3>
  </div>

  <div class="card-content">
    <p>{content}</p>
    <slot /> <!-- Allows additional content -->
  </div>

  {#if footer}
    <div class="card-footer">
      <p>{footer}</p>
    </div>
  {/if}
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card-header h3 {
    margin: 0 0 8px;
    font-size: 1.2rem;
    color: #333;
  }

  .card-content p {
    margin: 0;
    color: #666;
  }

  .card-footer {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #eee;
    font-size: 0.9rem;
    color: #999;
  }
</style>
