interface RegistryItem {
    componentName: string;
    modulePath: string;
    moduleName: string;
  }
  /**
  * A registry array of Component Name to details
  * that must be updated with each new component
  * that you wish to load dynamically.
  */
  export const DynamicContentOutletRegistry: RegistryItem[] = [
      {componentName: 'HomeComponent', modulePath: 'src/app/tabs/tabs.module', moduleName: 'MySpecialDynamicContentModule'}
    ];