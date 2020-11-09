import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ParseHtmlContentPipe {
    /*
      Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
      And then render in template.
    */
    transform(content) {
        const parsedContent = new DOMParser().parseFromString(content, 'text/html').body.childNodes[0];
        return parsedContent.textContent;
    }
}
ParseHtmlContentPipe.ɵfac = function ParseHtmlContentPipe_Factory(t) { return new (t || ParseHtmlContentPipe)(); };
ParseHtmlContentPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "parseHtmlContent", type: ParseHtmlContentPipe, pure: false });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ParseHtmlContentPipe, [{
        type: Pipe,
        args: [{ name: 'parseHtmlContent', pure: false }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtaHRtbC1jb250ZW50LnBpcGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxlcnRzL3BhcnNlLWh0bWwtY29udGVudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9COzs7TUFHRTtJQUNGLFNBQVMsQ0FBQyxPQUFPO1FBQ2YsTUFBTSxhQUFhLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0YsT0FBTyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ25DLENBQUM7O3dGQVZVLG9CQUFvQjsrRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FEaEMsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3BhcnNlSHRtbENvbnRlbnQnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFBhcnNlSHRtbENvbnRlbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgLypcbiAgICBTb21lIG1lc3NhZ2VzIHRoYXQgYXJlIGNvbWUgZnJvbSBmb3JtaW9qcyBoYXZlIGhleCBjb2Rlcy4gU28gdGhlIG1haW4gYWltIG9mIHRoaXMgcGlwZSBpcyB0cmFuc2Zvcm0gdGhpcyBtZXNzYWdlcyB0byBodG1sLlxuICAgIEFuZCB0aGVuIHJlbmRlciBpbiB0ZW1wbGF0ZS5cbiAgKi9cbiAgdHJhbnNmb3JtKGNvbnRlbnQpIHtcbiAgICBjb25zdCBwYXJzZWRDb250ZW50ID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAndGV4dC9odG1sJykuYm9keS5jaGlsZE5vZGVzWzBdO1xuXG4gICAgcmV0dXJuIHBhcnNlZENvbnRlbnQudGV4dENvbnRlbnQ7XG4gIH1cbn1cbiJdfQ==