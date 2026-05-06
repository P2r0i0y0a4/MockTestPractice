from pathlib import Path
import textwrap


OUTPUT = Path("docs/angular-q07-q60-concepts.pdf")


SECTIONS = [
    ("Q7 - @Input Parent to Child Binding", "Concept: @Input passes data from a parent component to a child component. The child declares a property with @Input(), and the parent binds to it using property binding like [message]=\"parentMessage\". This fixes cases where the child should display parent data but receives nothing."),
    ("Q8 - @Output Child to Parent Event", "Concept: @Output with EventEmitter sends data from a child component back to its parent. The child emits a value, and the parent listens with event binding like (messageSent)=\"onChildMessage($event)\"."),
    ("Q9 - Disable Button With Property Binding", "Concept: [disabled] binds the disabled property of a button to a condition. Using !name.trim() disables submit when the input is empty or only spaces."),
    ("Q10 - Avoid Method Calls in Template", "Concept: Angular runs template expressions many times during change detection. Instead of calling a calculation method in the template repeatedly, compute the value once in TypeScript and display the stored property."),
    ("Q11 - Dynamic Class Binding", "Concept: ngClass applies CSS classes based on conditions. Example: [ngClass]=\"{ pass: marks >= 50, fail: marks < 50 }\" changes styling based on a numeric value."),
    ("Q12 - Separate Click Events", "Concept: Each button should have its own click handler. This prevents multiple actions from running accidentally and keeps button behavior clear."),
    ("Q13 - Render List With *ngFor", "Concept: *ngFor repeats an HTML element for every item in an array. Syntax: *ngFor=\"let user of users\"."),
    ("Q14 - trackBy With *ngFor", "Concept: trackBy helps Angular identify list items by a stable id. It improves performance because Angular does not recreate unchanged DOM elements unnecessarily."),
    ("Q15 - *ngIf With else", "Concept: *ngIf conditionally renders one block. The else template displays the alternative block, so both sections do not appear at the same time."),
    ("Q16 - Loading State With *ngIf", "Concept: A loading flag controls what appears. Show a loading message while data is unavailable, then show the data when loading becomes false."),
    ("Q17 - Empty Table Fallback", "Concept: Check array length before rendering a table. If the array is empty, use ng-template to show a fallback message such as No data available."),
    ("Q18 - Dropdown Conditional Fields", "Concept: Bind the selected dropdown value with ngModel, then use *ngIf to show extra fields based on the selected option."),
    ("Q19 - Nested *ngFor", "Concept: Use one *ngFor for the outer list and another *ngFor inside it for nested arrays. Each loop needs its own variable name."),
    ("Q20 - One Structural Directive Per Element", "Concept: Angular allows only one structural directive, such as *ngFor or *ngIf, on the same element. Use ng-container to separate them."),
    ("Q21 - Show First Five Items", "Concept: The slice pipe can display part of an array without changing the original array. Example: items | slice:0:5."),
    ("Q22 - Conditional Styling for Selected Items", "Concept: ngClass can highlight selected items. Store selected state in TypeScript and apply a CSS class when the item is selected."),
    ("Q23 - Template Driven Form Binding", "Concept: Template-driven forms use FormsModule and [(ngModel)]. Each input needs a name attribute so Angular can track the field."),
    ("Q24 - Required Field Validation", "Concept: Add required to inputs and disable submit with [disabled]=\"form.invalid\". This prevents invalid form submission."),
    ("Q25 - Show Errors After Touch", "Concept: Use control.invalid && control.touched so validation messages appear only after the user interacts with the field."),
    ("Q26 - Email Validation", "Concept: The email validator checks email format in template-driven forms. Use required email with ngModel."),
    ("Q27 - Reactive Form Initialization", "Concept: Reactive forms are created in TypeScript using FormBuilder. The template connects with [formGroup] and formControlName."),
    ("Q28 - Password Length Validator", "Concept: Validators.minLength checks minimum password length. The template can show an error using hasError('minlength')."),
    ("Q29 - Reset Form After Submit", "Concept: Call form.reset() after successful submit to clear all form controls."),
    ("Q30 - Capture All Form Inputs", "Concept: Every input must be included in the FormGroup and must use the correct formControlName. Then form.value contains all fields."),
    ("Q31 - Conditionally Required Field", "Concept: Subscribe to one control value and add or remove Validators.required on another control. Always call updateValueAndValidity() after changing validators."),
    ("Q32 - Dropdown Updates Another Field", "Concept: valueChanges can react to a dropdown selection and patch another form control automatically."),
    ("Q33 - Dynamic Form Fields", "Concept: FormArray stores repeated form controls, such as skills. Use push() to add a new control dynamically."),
    ("Q34 - Consistent Form Approach", "Concept: Do not mix template-driven and reactive form APIs in the same form. Use either ngModel or reactive forms consistently."),
    ("Q35 - Reactive Errors After Interaction", "Concept: Reactive forms also use invalid and touched checks to avoid showing validation errors immediately on page load."),
    ("Q36 - Disable Submit Until Valid", "Concept: Bind the submit button disabled state to form.invalid so users can submit only when the whole form is valid."),
    ("Q37 - Move HTTP Logic to Service", "Concept: Components should focus on UI. API calls belong in services so the code is reusable and easier to test."),
    ("Q38 - HTTP GET in Service", "Concept: HttpClient.get() fetches data from an API. Import HttpClientModule and inject HttpClient into the service."),
    ("Q39 - Display API Response", "Concept: Subscribe to the service observable, store the response in a component property, and render it with *ngFor."),
    ("Q40 - HTTP POST Payload", "Concept: HttpClient.post(url, payload) sends data to the server. The payload should be an object containing the form or item data."),
    ("Q41 - Refresh UI After Delete", "Concept: After deleting an item, update the displayed array or re-fetch data. The UI changes only when the component data changes."),
    ("Q42 - Shared State Service", "Concept: BehaviorSubject stores shared state. Components subscribe to the observable so changes are reflected everywhere."),
    ("Q43 - Fetch Data in ngOnInit", "Concept: ngOnInit is the correct lifecycle hook for initialization work such as loading data. Constructors should mainly inject dependencies."),
    ("Q44 - API Error Handling", "Concept: catchError prevents the app from crashing when an API fails. Store a friendly error message and return a fallback observable."),
    ("Q45 - Avoid Stale Data After Update", "Concept: After updating, either update the local array or re-fetch from the service so the UI shows fresh data."),
    ("Q46 - Centralized API Logic", "Concept: Duplicate API code in many components should be moved into one service method. Components call the service instead of repeating logic."),
    ("Q47 - Loading Indicator During API Call", "Concept: Set loading true before the call and false when it finishes. finalize() is useful because it runs for both success and error."),
    ("Q48 - Avoid Repeated API Calls", "Concept: Do not call API methods directly from templates. Load data in ngOnInit or from a button/event to avoid repeated calls during change detection."),
    ("Q49 - Routing Configuration", "Concept: Routes connect URL paths to components. RouterModule.forRoot(routes) enables Angular navigation."),
    ("Q50 - routerLink Navigation", "Concept: Use routerLink instead of href for Angular navigation. routerLink changes routes without reloading the whole page."),
    ("Q51 - Route Parameters", "Concept: ActivatedRoute reads route parameters such as /question/51. Use paramMap to get the parameter value."),
    ("Q52 - Programmatic Navigation", "Concept: Router.navigate() changes routes from TypeScript, commonly after a successful form submission."),
    ("Q53 - Wildcard Route", "Concept: A wildcard route path '**' catches unknown URLs and redirects users to a safe fallback page."),
    ("Q54 - Nested Routes", "Concept: Child routes render inside a router-outlet placed in the parent component template."),
    ("Q55 - Query Parameters", "Concept: queryParams sends optional URL values such as ?filter=active. ActivatedRoute.queryParamMap reads them."),
    ("Q56 - Date Pipe", "Concept: The date pipe formats raw date values into readable strings, such as mediumDate."),
    ("Q57 - Uppercase Pipe", "Concept: The uppercase pipe changes displayed text to uppercase without modifying the original data."),
    ("Q58 - Truncate Text", "Concept: The slice pipe can shorten long text in the UI. Add ellipsis manually after the sliced text."),
    ("Q59 - Currency Pipe", "Concept: The currency pipe formats numbers as currency, such as INR or USD."),
    ("Q60 - Mini App Debugging", "Concept: A working Angular mini app combines list rendering, forms, validation, service data, and routing. Fixing it means ensuring data binds, forms submit, and navigation uses Angular Router."),
]


def escape_pdf_text(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def make_lines():
    lines = [
        ("Angular Q7-Q60 Concepts Explanation", 18),
        ("Short notes for the separated Angular components.", 11),
        ("", 11),
    ]
    for title, body in SECTIONS:
        lines.append((title, 13))
        for wrapped in textwrap.wrap(body, width=92):
            lines.append((wrapped, 10))
        lines.append(("", 10))
    return lines


def paginate(lines):
    pages = []
    page = []
    y = 790
    for text, size in lines:
        line_height = size + 5
        if y - line_height < 45:
            pages.append(page)
            page = []
            y = 790
        page.append((text, size, y))
        y -= line_height
    if page:
        pages.append(page)
    return pages


def build_pdf(pages):
    objects = []

    def add_object(content: str) -> int:
        objects.append(content)
        return len(objects)

    font_obj = add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    page_refs = []

    for page in pages:
        stream_lines = ["BT", "72 0 0 72 0 0 cm"]
        for text, size, y in page:
            escaped = escape_pdf_text(text)
            stream_lines.append(f"/F1 {size} Tf")
            stream_lines.append(f"1 0 0 1 0 {y / 72:.3f} Tm")
            stream_lines.append(f"({escaped}) Tj")
        stream_lines.append("ET")
        stream = "\n".join(stream_lines)
        content_obj = add_object(f"<< /Length {len(stream.encode('latin-1'))} >>\nstream\n{stream}\nendstream")
        page_obj = add_object(
            f"<< /Type /Page /Parent 0 0 R /MediaBox [0 0 595 842] "
            f"/Resources << /Font << /F1 {font_obj} 0 R >> >> /Contents {content_obj} 0 R >>"
        )
        page_refs.append(page_obj)

    pages_obj = add_object("placeholder")
    catalog_obj = add_object(f"<< /Type /Catalog /Pages {pages_obj} 0 R >>")

    kids = " ".join(f"{ref} 0 R" for ref in page_refs)
    objects[pages_obj - 1] = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_refs)} >>"
    for ref in page_refs:
        objects[ref - 1] = objects[ref - 1].replace("/Parent 0 0 R", f"/Parent {pages_obj} 0 R")

    output = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, content in enumerate(objects, start=1):
        offsets.append(len(output))
        output.extend(f"{index} 0 obj\n{content}\nendobj\n".encode("latin-1"))

    xref_start = len(output)
    output.extend(f"xref\n0 {len(objects) + 1}\n".encode("latin-1"))
    output.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        output.extend(f"{offset:010d} 00000 n \n".encode("latin-1"))
    output.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root {catalog_obj} 0 R >>\n"
        f"startxref\n{xref_start}\n%%EOF\n".encode("latin-1")
    )
    return output


def main():
    OUTPUT.parent.mkdir(exist_ok=True)
    pdf = build_pdf(paginate(make_lines()))
    OUTPUT.write_bytes(pdf)
    print(f"Created {OUTPUT}")


if __name__ == "__main__":
    main()
