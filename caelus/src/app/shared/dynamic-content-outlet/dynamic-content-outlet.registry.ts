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
      {componentName: 'HomeComponent', modulePath: 'src/app/shared/tabs/tabs.module', moduleName: 'MySpecialDynamicContentModule'},
      {componentName: 'AboutComponent', modulePath: 'src/app/shared/tabs/tabs.module', moduleName: 'MySpecialDynamicContentModule'},
      {componentName: 'DynamicContentOutletErrorComponent', modulePath: 'src/app/shared/dynamic-content-outlet/dynamic-content-outlet.module', moduleName:'DynamicContentOutletModule'},
      {componentName: 'ScheduleComponent', modulePath: 'src/app/shared/tabs/tabs.module', moduleName: 'MySpecialDynamicContentModule'}
    ];