# caelus
demo for AA
1. Run `npm install`
2. run `ng serve`
3. open browser and go to `localhost:4200`

To add a new 'tab':
1. create new folder in `src/app/tabs` and add the appropriately named .ts and .html files
2. Add the component name to the `entryComponents` in `tabs.module.ts`
3. Add the component name to the `static dynamicComponentsMap` that is also in `tabs.module.ts`
4. Add a RegistryItem to the array in `dynamic-content-outlet.registry.ts` with the component name. Make sure the module path and module name are the same as the others in the array
