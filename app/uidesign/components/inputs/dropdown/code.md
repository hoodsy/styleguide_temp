```
<script>
	angular.module('app', [
		'duiDropdown',
		...
	]);
</script>

<dui-dropdown class="dev-demo"
  model="{}"
  get-options="vm.getOptions"
  option-property="formatted_address"
  icon="exclamation"
  placeholder="Enter an address">
</dui-dropdown>
```