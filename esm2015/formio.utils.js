import { RouterModule } from '@angular/router';
import { each } from 'lodash';
export function extendRouter(Class, config, ClassRoutes) {
    each(Class.decorators, decorator => {
        each(decorator.args, arg => {
            if (arg.declarations) {
                each(config, component => arg.declarations.push(component));
            }
            if (arg.imports) {
                each(arg.imports, (_import, index) => {
                    if ((_import.ngModule && (_import.ngModule.name === 'RouterModule')) ||
                        (_import.name === 'RouterModule')) {
                        arg.imports[index] = RouterModule.forChild(ClassRoutes(config));
                    }
                });
            }
        });
    });
    return Class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLnV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJmb3JtaW8udXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBYyxJQUFJLEVBQWdCLE1BQU0sUUFBUSxDQUFDO0FBRXhELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxXQUFnQjtJQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNuQyxJQUNFLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDO3dCQUNoRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLEVBQ2pDO3dCQUNBLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztxQkFDakU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmluZCwgdHJpbSwgZWFjaCwgaW50ZXJzZWN0aW9uIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZFJvdXRlcihDbGFzczogYW55LCBjb25maWc6IGFueSwgQ2xhc3NSb3V0ZXM6IGFueSkge1xuICBlYWNoKENsYXNzLmRlY29yYXRvcnMsIGRlY29yYXRvciA9PiB7XG4gICAgZWFjaChkZWNvcmF0b3IuYXJncywgYXJnID0+IHtcbiAgICAgIGlmIChhcmcuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgIGVhY2goY29uZmlnLCBjb21wb25lbnQgPT4gYXJnLmRlY2xhcmF0aW9ucy5wdXNoKGNvbXBvbmVudCkpO1xuICAgICAgfVxuICAgICAgaWYgKGFyZy5pbXBvcnRzKSB7XG4gICAgICAgIGVhY2goYXJnLmltcG9ydHMsIChfaW1wb3J0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChfaW1wb3J0Lm5nTW9kdWxlICYmIChfaW1wb3J0Lm5nTW9kdWxlLm5hbWUgPT09ICdSb3V0ZXJNb2R1bGUnKSkgfHxcbiAgICAgICAgICAgIChfaW1wb3J0Lm5hbWUgPT09ICdSb3V0ZXJNb2R1bGUnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYXJnLmltcG9ydHNbaW5kZXhdID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKENsYXNzUm91dGVzKGNvbmZpZykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gQ2xhc3M7XG59XG4iXX0=