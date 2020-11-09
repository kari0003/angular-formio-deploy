// @ts-nocheck
import { Components, Utils as FormioUtils } from 'formiojs';
import { clone, isNil, isArray } from 'lodash';
const BaseInputComponent = Components.components.input;
const TextfieldComponent = Components.components.textfield;
export function createCustomFormioComponent(customComponentOptions) {
    var _a;
    return _a = class CustomComponent extends BaseInputComponent {
            constructor(component, options, data) {
                super(component, Object.assign(Object.assign({}, options), { sanitizeConfig: {
                        addTags: [customComponentOptions.selector],
                    } }), data);
                this.component = component;
                this.id = FormioUtils.getRandomComponentId();
                this.type = customComponentOptions.type;
                if (customComponentOptions.extraValidators) {
                    this.validators = this.validators.concat(customComponentOptions.extraValidators);
                }
            }
            static schema() {
                return BaseInputComponent.schema(Object.assign(Object.assign({}, customComponentOptions.schema), { type: customComponentOptions.type }));
            }
            get defaultSchema() {
                return CustomComponent.schema();
            }
            get emptyValue() {
                return customComponentOptions.emptyValue || null;
            }
            static get builderInfo() {
                return {
                    title: customComponentOptions.title,
                    group: customComponentOptions.group,
                    icon: customComponentOptions.icon,
                    weight: customComponentOptions.weight,
                    documentation: customComponentOptions.documentation,
                    schema: CustomComponent.schema(),
                };
            }
            elementInfo() {
                const info = super.elementInfo();
                info.type = customComponentOptions.selector;
                info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
                info.attr = Object.assign(Object.assign({}, info.attr), { class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
                 });
                return info;
            }
            get inputInfo() {
                const info = Object.assign({ id: this.key }, this.elementInfo());
                return info;
            }
            renderElement(value, index) {
                const info = this.inputInfo;
                return this.renderTemplate(customComponentOptions.template || 'input', {
                    input: info,
                    value,
                    index
                });
            }
            attach(element) {
                let superAttach = super.attach(element);
                this._customAngularElement = element.querySelector(customComponentOptions.selector);
                // Bind the custom options and the validations to the Angular component's inputs (flattened)
                if (this._customAngularElement) {
                    // To make sure we have working input in IE...
                    // IE doesn't render it properly if it's not visible on the screen
                    // due to the whole structure applied via innerHTML to the parent
                    // so we need to use appendChild
                    if (!this._customAngularElement.getAttribute('ng-version')) {
                        this._customAngularElement.removeAttribute('ref');
                        const newCustomElement = document.createElement(customComponentOptions.selector);
                        newCustomElement.setAttribute('ref', 'input');
                        Object.keys(this.inputInfo.attr).forEach((attr) => {
                            newCustomElement.setAttribute(attr, this.inputInfo.attr[attr]);
                        });
                        this._customAngularElement.appendChild(newCustomElement);
                        this._customAngularElement = newCustomElement;
                        superAttach = super.attach(element);
                    }
                    // Bind customOptions
                    for (const key in this.component.customOptions) {
                        if (this.component.customOptions.hasOwnProperty(key)) {
                            this._customAngularElement[key] = this.component.customOptions[key];
                        }
                    }
                    // Bind validate options
                    for (const key in this.component.validate) {
                        if (this.component.validate.hasOwnProperty(key)) {
                            this._customAngularElement[key] = this.component.validate[key];
                        }
                    }
                    // Bind options explicitly set
                    const fieldOptions = customComponentOptions.fieldOptions;
                    if (isArray(fieldOptions) && fieldOptions.length > 0) {
                        for (const key in fieldOptions) {
                            if (fieldOptions.hasOwnProperty(key)) {
                                this._customAngularElement[fieldOptions[key]] = this.component[fieldOptions[key]];
                            }
                        }
                    }
                    // Attach event listener for emit event
                    this._customAngularElement.addEventListener('formioEvent', (event) => {
                        this.emit(event.detail.eventName, Object.assign(Object.assign({}, event.detail.data), { component: this.component }));
                    });
                    // Ensure we bind the value (if it isn't a multiple-value component with no wrapper)
                    if (!this._customAngularElement.value && !this.component.disableMultiValueWrapper) {
                        this.restoreValue();
                    }
                }
                return superAttach;
            }
            // Add extra option to support multiple value (e.g. datagrid) with single angular component (disableMultiValueWrapper)
            useWrapper() {
                return this.component.hasOwnProperty('multiple') && this.component.multiple && !this.component.disableMultiValueWrapper;
            }
            get defaultValue() {
                let defaultValue = this.emptyValue;
                // handle falsy default value
                if (!isNil(this.component.defaultValue)) {
                    defaultValue = this.component.defaultValue;
                }
                if (this.component.customDefaultValue && !this.options.preview) {
                    defaultValue = this.evaluate(this.component.customDefaultValue, { value: '' }, 'value');
                }
                return clone(defaultValue);
            }
        },
        _a.editForm = customComponentOptions.editForm || TextfieldComponent.editForm,
        _a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWN1c3RvbS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImN1c3RvbS1jb21wb25lbnQvY3JlYXRlLWN1c3RvbS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkLE9BQU8sRUFBZSxVQUFVLEVBQTJCLEtBQUssSUFBSSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEcsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9DLE1BQU0sa0JBQWtCLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztBQUUzRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsc0JBQWlEOztJQUMzRixZQUFPLE1BQU0sZUFBZ0IsU0FBUSxrQkFBa0I7WUFnQ3JELFlBQW1CLFNBQWtDLEVBQUUsT0FBWSxFQUFFLElBQVM7Z0JBQzVFLEtBQUssQ0FBQyxTQUFTLGtDQUNWLE9BQU8sS0FDVixjQUFjLEVBQUU7d0JBQ2QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO3FCQUMzQyxLQUNBLElBQUksQ0FBQyxDQUFDO2dCQU5RLGNBQVMsR0FBVCxTQUFTLENBQXlCO2dCQTlCckQsT0FBRSxHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUN4QyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDO2dCQXFDakMsSUFBSSxzQkFBc0IsQ0FBQyxlQUFlLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQ2xGO1lBQ0gsQ0FBQztZQXJDRCxNQUFNLENBQUMsTUFBTTtnQkFDWCxPQUFPLGtCQUFrQixDQUFDLE1BQU0saUNBQzNCLHNCQUFzQixDQUFDLE1BQU0sS0FDaEMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLElBQUksSUFDakMsQ0FBQztZQUNMLENBQUM7WUFFRCxJQUFJLGFBQWE7Z0JBQ2YsT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEMsQ0FBQztZQUVELElBQUksVUFBVTtnQkFDWixPQUFPLHNCQUFzQixDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7WUFDbkQsQ0FBQztZQUVELE1BQU0sS0FBSyxXQUFXO2dCQUNwQixPQUFPO29CQUNMLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxLQUFLO29CQUNuQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsS0FBSztvQkFDbkMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLElBQUk7b0JBQ2pDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxNQUFNO29CQUNyQyxhQUFhLEVBQUUsc0JBQXNCLENBQUMsYUFBYTtvQkFDbkQsTUFBTSxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUU7aUJBQ2pDLENBQUM7WUFDSixDQUFDO1lBZUQsV0FBVztnQkFDVCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFzQixDQUFDLFdBQVcsSUFBSSxhQUFhLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxJQUFJLG1DQUNKLElBQUksQ0FBQyxJQUFJLEtBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxtRkFBbUY7bUJBQ2hLLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBSSxTQUFTO2dCQUNYLE1BQU0sSUFBSSxtQkFDUixFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQ3RCLENBQUE7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsYUFBYSxDQUFDLEtBQVUsRUFBRSxLQUFhO2dCQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM1QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsUUFBUSxJQUFJLE9BQU8sRUFBRTtvQkFDckUsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSztvQkFDTCxLQUFLO2lCQUNOLENBQUMsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsT0FBb0I7Z0JBQ3pCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXhDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVwRiw0RkFBNEY7Z0JBQzVGLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO29CQUM5Qiw4Q0FBOEM7b0JBQzlDLGtFQUFrRTtvQkFDbEUsaUVBQWlFO29CQUNqRSxnQ0FBZ0M7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUMxRCxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUVsRCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUF3QixDQUFDO3dCQUV4RyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7NEJBQ3hELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakUsQ0FBQyxDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUN6RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUM7d0JBRTlDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNyQztvQkFFRCxxQkFBcUI7b0JBQ3JCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7d0JBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNwRCxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3JFO3FCQUNGO29CQUNELHdCQUF3QjtvQkFDeEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDekMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDaEU7cUJBQ0Y7b0JBQ0QsOEJBQThCO29CQUM5QixNQUFNLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7b0JBQ3pELElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNwRCxLQUFLLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRTs0QkFDOUIsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dDQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDbkY7eUJBQ0Y7cUJBQ0Y7b0JBRUQsdUNBQXVDO29CQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBK0IsRUFBRSxFQUFFO3dCQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxrQ0FDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQ3BCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUN6QixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILG9GQUFvRjtvQkFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFO3dCQUNqRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3JCO2lCQUVGO2dCQUNELE9BQU8sV0FBVyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxzSEFBc0g7WUFDdEgsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUMxSCxDQUFDO1lBRUQsSUFBSSxZQUFZO2dCQUNkLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRW5DLDZCQUE2QjtnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUN2QyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7aUJBQzVDO2dCQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO29CQUM5RCxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFDakMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQ2IsT0FBTyxDQUNSLENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0IsQ0FBQztTQUNGO1FBaktRLFdBQVEsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLElBQUksa0JBQWtCLENBQUMsUUFBUztXQWlLakY7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IEJ1aWxkZXJJbmZvLCBDb21wb25lbnRzLCBFeHRlbmRlZENvbXBvbmVudFNjaGVtYSwgVXRpbHMgYXMgRm9ybWlvVXRpbHMgfSBmcm9tICdmb3JtaW9qcyc7XG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvLCBGb3JtaW9DdXN0b21FbGVtZW50LCBGb3JtaW9FdmVudCB9IGZyb20gJy4uL2VsZW1lbnRzLmNvbW1vbic7XG5pbXBvcnQgeyBjbG9uZSwgaXNOaWwsIGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBCYXNlSW5wdXRDb21wb25lbnQgPSBDb21wb25lbnRzLmNvbXBvbmVudHMuaW5wdXQ7XG5jb25zdCBUZXh0ZmllbGRDb21wb25lbnQgPSBDb21wb25lbnRzLmNvbXBvbmVudHMudGV4dGZpZWxkO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRm9ybWlvQ29tcG9uZW50KGN1c3RvbUNvbXBvbmVudE9wdGlvbnM6IEZvcm1pb0N1c3RvbUNvbXBvbmVudEluZm8pIHtcbiAgcmV0dXJuIGNsYXNzIEN1c3RvbUNvbXBvbmVudCBleHRlbmRzIEJhc2VJbnB1dENvbXBvbmVudCB7XG4gICAgc3RhdGljIGVkaXRGb3JtID0gY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5lZGl0Rm9ybSB8fCBUZXh0ZmllbGRDb21wb25lbnQuZWRpdEZvcm07XG4gICAgaWQgPSBGb3JtaW9VdGlscy5nZXRSYW5kb21Db21wb25lbnRJZCgpO1xuICAgIHR5cGUgPSBjdXN0b21Db21wb25lbnRPcHRpb25zLnR5cGU7XG4gICAgX2N1c3RvbUFuZ3VsYXJFbGVtZW50OiBGb3JtaW9DdXN0b21FbGVtZW50O1xuXG4gICAgc3RhdGljIHNjaGVtYSgpIHtcbiAgICAgIHJldHVybiBCYXNlSW5wdXRDb21wb25lbnQuc2NoZW1hKHtcbiAgICAgICAgLi4uY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5zY2hlbWEsXG4gICAgICAgIHR5cGU6IGN1c3RvbUNvbXBvbmVudE9wdGlvbnMudHlwZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0U2NoZW1hKCkge1xuICAgICAgcmV0dXJuIEN1c3RvbUNvbXBvbmVudC5zY2hlbWEoKTtcbiAgICB9XG5cbiAgICBnZXQgZW1wdHlWYWx1ZSgpIHtcbiAgICAgIHJldHVybiBjdXN0b21Db21wb25lbnRPcHRpb25zLmVtcHR5VmFsdWUgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGJ1aWxkZXJJbmZvKCk6IEJ1aWxkZXJJbmZvIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiBjdXN0b21Db21wb25lbnRPcHRpb25zLnRpdGxlLFxuICAgICAgICBncm91cDogY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5ncm91cCxcbiAgICAgICAgaWNvbjogY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5pY29uLFxuICAgICAgICB3ZWlnaHQ6IGN1c3RvbUNvbXBvbmVudE9wdGlvbnMud2VpZ2h0LFxuICAgICAgICBkb2N1bWVudGF0aW9uOiBjdXN0b21Db21wb25lbnRPcHRpb25zLmRvY3VtZW50YXRpb24sXG4gICAgICAgIHNjaGVtYTogQ3VzdG9tQ29tcG9uZW50LnNjaGVtYSgpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBFeHRlbmRlZENvbXBvbmVudFNjaGVtYSwgb3B0aW9uczogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAgIHN1cGVyKGNvbXBvbmVudCwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzYW5pdGl6ZUNvbmZpZzoge1xuICAgICAgICAgIGFkZFRhZ3M6IFtjdXN0b21Db21wb25lbnRPcHRpb25zLnNlbGVjdG9yXSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGRhdGEpO1xuXG4gICAgICBpZiAoY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5leHRyYVZhbGlkYXRvcnMpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gdGhpcy52YWxpZGF0b3JzLmNvbmNhdChjdXN0b21Db21wb25lbnRPcHRpb25zLmV4dHJhVmFsaWRhdG9ycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudEluZm8oKSB7XG4gICAgICBjb25zdCBpbmZvID0gc3VwZXIuZWxlbWVudEluZm8oKTtcbiAgICAgIGluZm8udHlwZSA9IGN1c3RvbUNvbXBvbmVudE9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICBpbmZvLmNoYW5nZUV2ZW50ID0gY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5jaGFuZ2VFdmVudCB8fCAndmFsdWVDaGFuZ2UnO1xuICAgICAgaW5mby5hdHRyID0ge1xuICAgICAgICAuLi5pbmZvLmF0dHIsXG4gICAgICAgIGNsYXNzOiBpbmZvLmF0dHIuY2xhc3MucmVwbGFjZSgnZm9ybS1jb250cm9sJywgJ2Zvcm0tY29udHJvbC1jdXN0b20tZmllbGQnKSAvLyByZW1vdmUgdGhlIGZvcm0tY29udHJvbCBjbGFzcyBhcyB0aGUgY3VzdG9tIGFuZ3VsYXIgY29tcG9uZW50IG1heSBsb29rIGRpZmZlcmVudFxuICAgICAgfTtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIGdldCBpbnB1dEluZm8oKSB7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBpZDogdGhpcy5rZXksXG4gICAgICAgIC4uLnRoaXMuZWxlbWVudEluZm8oKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgcmVuZGVyRWxlbWVudCh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBpbmZvID0gdGhpcy5pbnB1dEluZm87XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZShjdXN0b21Db21wb25lbnRPcHRpb25zLnRlbXBsYXRlIHx8ICdpbnB1dCcsIHtcbiAgICAgICAgaW5wdXQ6IGluZm8sXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBpbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXR0YWNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICBsZXQgc3VwZXJBdHRhY2ggPSBzdXBlci5hdHRhY2goZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2N1c3RvbUFuZ3VsYXJFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGN1c3RvbUNvbXBvbmVudE9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgICAvLyBCaW5kIHRoZSBjdXN0b20gb3B0aW9ucyBhbmQgdGhlIHZhbGlkYXRpb25zIHRvIHRoZSBBbmd1bGFyIGNvbXBvbmVudCdzIGlucHV0cyAoZmxhdHRlbmVkKVxuICAgICAgaWYgKHRoaXMuX2N1c3RvbUFuZ3VsYXJFbGVtZW50KSB7XG4gICAgICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBoYXZlIHdvcmtpbmcgaW5wdXQgaW4gSUUuLi5cbiAgICAgICAgLy8gSUUgZG9lc24ndCByZW5kZXIgaXQgcHJvcGVybHkgaWYgaXQncyBub3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXG4gICAgICAgIC8vIGR1ZSB0byB0aGUgd2hvbGUgc3RydWN0dXJlIGFwcGxpZWQgdmlhIGlubmVySFRNTCB0byB0aGUgcGFyZW50XG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gdXNlIGFwcGVuZENoaWxkXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQuZ2V0QXR0cmlidXRlKCduZy12ZXJzaW9uJykpIHtcbiAgICAgICAgICB0aGlzLl9jdXN0b21Bbmd1bGFyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlZicpO1xuXG4gICAgICAgICAgY29uc3QgbmV3Q3VzdG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5zZWxlY3RvcikgYXMgRm9ybWlvQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICAgIG5ld0N1c3RvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWYnLCAnaW5wdXQnKTtcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0SW5mby5hdHRyKS5mb3JFYWNoKChhdHRyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIG5ld0N1c3RvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMuaW5wdXRJbmZvLmF0dHJbYXR0cl0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3Q3VzdG9tRWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQgPSBuZXdDdXN0b21FbGVtZW50O1xuXG4gICAgICAgICAgc3VwZXJBdHRhY2ggPSBzdXBlci5hdHRhY2goZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIGN1c3RvbU9wdGlvbnNcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb21wb25lbnQuY3VzdG9tT3B0aW9ucykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5jdXN0b21PcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1c3RvbUFuZ3VsYXJFbGVtZW50W2tleV0gPSB0aGlzLmNvbXBvbmVudC5jdXN0b21PcHRpb25zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgdmFsaWRhdGUgb3B0aW9uc1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbXBvbmVudC52YWxpZGF0ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC52YWxpZGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXN0b21Bbmd1bGFyRWxlbWVudFtrZXldID0gdGhpcy5jb21wb25lbnQudmFsaWRhdGVba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmluZCBvcHRpb25zIGV4cGxpY2l0bHkgc2V0XG4gICAgICAgIGNvbnN0IGZpZWxkT3B0aW9ucyA9IGN1c3RvbUNvbXBvbmVudE9wdGlvbnMuZmllbGRPcHRpb25zO1xuICAgICAgICBpZiAoaXNBcnJheShmaWVsZE9wdGlvbnMpICYmIGZpZWxkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZmllbGRPcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnRbZmllbGRPcHRpb25zW2tleV1dID0gdGhpcy5jb21wb25lbnRbZmllbGRPcHRpb25zW2tleV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lciBmb3IgZW1pdCBldmVudFxuICAgICAgICB0aGlzLl9jdXN0b21Bbmd1bGFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb3JtaW9FdmVudCcsIChldmVudDogQ3VzdG9tRXZlbnQ8Rm9ybWlvRXZlbnQ+KSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LmRldGFpbC5ldmVudE5hbWUsIHtcbiAgICAgICAgICAgIC4uLmV2ZW50LmRldGFpbC5kYXRhLFxuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFbnN1cmUgd2UgYmluZCB0aGUgdmFsdWUgKGlmIGl0IGlzbid0IGEgbXVsdGlwbGUtdmFsdWUgY29tcG9uZW50IHdpdGggbm8gd3JhcHBlcilcbiAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21Bbmd1bGFyRWxlbWVudC52YWx1ZSAmJiAhdGhpcy5jb21wb25lbnQuZGlzYWJsZU11bHRpVmFsdWVXcmFwcGVyKSB7XG4gICAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICByZXR1cm4gc3VwZXJBdHRhY2g7XG4gICAgfVxuXG4gICAgLy8gQWRkIGV4dHJhIG9wdGlvbiB0byBzdXBwb3J0IG11bHRpcGxlIHZhbHVlIChlLmcuIGRhdGFncmlkKSB3aXRoIHNpbmdsZSBhbmd1bGFyIGNvbXBvbmVudCAoZGlzYWJsZU11bHRpVmFsdWVXcmFwcGVyKVxuICAgIHVzZVdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5jb21wb25lbnQubXVsdGlwbGUgJiYgIXRoaXMuY29tcG9uZW50LmRpc2FibGVNdWx0aVZhbHVlV3JhcHBlcjtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZW1wdHlWYWx1ZTtcblxuICAgICAgLy8gaGFuZGxlIGZhbHN5IGRlZmF1bHQgdmFsdWVcbiAgICAgIGlmICghaXNOaWwodGhpcy5jb21wb25lbnQuZGVmYXVsdFZhbHVlKSkge1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmNvbXBvbmVudC5kZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5jdXN0b21EZWZhdWx0VmFsdWUgJiYgIXRoaXMub3B0aW9ucy5wcmV2aWV3KSB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGUoXG4gICAgICAgICAgdGhpcy5jb21wb25lbnQuY3VzdG9tRGVmYXVsdFZhbHVlLFxuICAgICAgICAgIHsgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgJ3ZhbHVlJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xvbmUoZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gIH07XG59XG4iXX0=