from pathlib import Path
from html import escape


OUTPUT = Path("docs/angular-q07-q60-concepts-notes.html")


GROUPS = [
    (
        "Component Communication and Binding",
        [
            ("Q7", "Parent to child input binding", "@Input()", "The child component declares an input property using @Input(). The parent sends data using property binding. This is used when a child must display or use a value owned by the parent.", "[message]=\"parentMessage\""),
            ("Q8", "Child to parent event binding", "@Output() and EventEmitter", "The child emits an event using EventEmitter. The parent listens to that event and receives the value through $event. This is used for button clicks, selected values, and child actions.", "(messageSent)=\"onChildMessage($event)\""),
            ("Q9", "Disable button when input is empty", "Property binding", "The disabled property of a button should be controlled by a boolean condition. trim() is useful because it treats spaces as empty input.", "[disabled]=\"!name.trim()\""),
            ("Q10", "Avoid repeated function calls in template", "Precomputed property", "Angular runs template expressions many times during change detection. Calling methods in templates can reduce performance. Calculate the value once in TypeScript and bind to a property.", "{{ total }}"),
            ("Q11", "Apply class dynamically", "ngClass", "ngClass applies CSS classes based on conditions. It is useful when styles depend on values such as marks, status, or selected state.", "[ngClass]=\"{ pass: marks >= 50, fail: marks < 50 }\""),
            ("Q12", "Fix multiple click events", "Event binding", "Each button should call only the method related to its action. Separate handlers make the template clear and avoid accidental conflicts.", "(click)=\"add()\""),
        ],
    ),
    (
        "Structural Directives",
        [
            ("Q13", "Render users using a loop", "*ngFor", "*ngFor repeats an element for every item in an array. If nothing displays, check that the array exists and the directive syntax is correct.", "*ngFor=\"let user of users\""),
            ("Q14", "Improve list rendering", "trackBy", "trackBy tells Angular how to uniquely identify list items. It improves performance because Angular can reuse DOM elements instead of recreating them.", "*ngFor=\"let user of users; trackBy: trackById\""),
            ("Q15", "Display only one section", "*ngIf else", "Use *ngIf with an else template to make sure only one block is rendered at a time.", "*ngIf=\"isLoggedIn; else guest\""),
            ("Q16", "Show loading until data arrives", "Conditional rendering", "A loading variable controls the UI. Show the loading message while data is not ready, then show the real content.", "*ngIf=\"loading; else dataBlock\""),
            ("Q17", "Fallback for empty table", "*ngIf and ng-template", "Before rendering rows, check whether the data array has items. If the array is empty, show a friendly fallback message.", "*ngIf=\"rows.length; else emptyTable\""),
            ("Q18", "Show fields based on dropdown", "*ngIf with ngModel", "The selected dropdown value is stored in a property. Extra fields appear only when the selected value matches the condition.", "*ngIf=\"type === 'student'\""),
            ("Q19", "Render nested lists", "Nested *ngFor", "Use one loop for parent data and another loop inside it for child arrays. Each loop should have its own variable.", "*ngFor=\"let employee of department.employees\""),
            ("Q20", "Avoid multiple structural directives on one element", "ng-container", "Angular allows only one structural directive on a single element. Use ng-container as a wrapper when *ngFor and *ngIf are both needed.", "<ng-container *ngFor=\"let user of users\">"),
            ("Q21", "Display first five items", "slice pipe", "The slice pipe shows part of an array without changing the original array in TypeScript.", "items | slice:0:5"),
            ("Q22", "Highlight selected items", "Conditional styling", "Store whether an item is selected, then apply a CSS class only when selected is true.", "[ngClass]=\"{ selected: item.selected }\""),
        ],
    ),
    (
        "Template Driven Forms",
        [
            ("Q23", "Capture user input", "FormsModule and ngModel", "Template-driven forms use [(ngModel)] for two-way binding. Every input must have a name attribute so Angular can track it.", "name=\"email\" [(ngModel)]=\"user.email\""),
            ("Q24", "Prevent invalid form submit", "required and form.invalid", "Required fields make the form invalid until filled. The submit button can be disabled using the form invalid state.", "[disabled]=\"userForm.invalid\""),
            ("Q25", "Show errors only after touch", "touched state", "Validation messages should not appear immediately on page load. Use touched so errors show only after the user interacts with the field.", "*ngIf=\"nameCtrl.invalid && nameCtrl.touched\""),
            ("Q26", "Validate email format", "email validator", "The email validator checks whether the typed value has a valid email format. Combine it with required when the field must not be empty.", "required email #emailCtrl=\"ngModel\""),
        ],
    ),
    (
        "Reactive Forms",
        [
            ("Q27", "Initialize form controls", "FormBuilder", "Reactive forms are created in TypeScript. FormBuilder makes it easier to create FormGroup objects and validators.", "this.fb.group({ name: ['', Validators.required] })"),
            ("Q28", "Validate password length", "Validators.minLength", "Use minLength for passwords or fields that need a minimum number of characters. The template can check hasError('minlength').", "Validators.minLength(6)"),
            ("Q29", "Reset after submit", "form.reset()", "After successful submission, call reset() to clear all fields and restore the form state.", "this.form.reset()"),
            ("Q30", "Capture all field values", "FormGroup value", "Every field must be part of the FormGroup and connected with formControlName. Then form.value contains all entered values.", "this.form.value"),
            ("Q31", "Conditionally required field", "Dynamic validators", "A field can become required based on another field's value. Add or clear validators and call updateValueAndValidity().", "control.setValidators([Validators.required])"),
            ("Q32", "Dropdown updates another field", "valueChanges", "valueChanges listens to control changes. When the dropdown changes, patchValue can update another control automatically.", "this.form.patchValue({ city: 'Pune' })"),
            ("Q33", "Add repeated fields", "FormArray", "FormArray is used for dynamic controls such as skills, phone numbers, or addresses. push() adds a new control.", "this.skills.push(this.fb.control(''))"),
            ("Q34", "Use one form approach", "Consistent form style", "Do not mix ngModel and reactive forms in the same form. Choose template-driven or reactive forms for one form.", "[formGroup]=\"form\""),
            ("Q35", "Hide validation on load", "touched with reactive forms", "Reactive validation messages should also check touched or dirty so they appear only after interaction.", "control.invalid && control.touched"),
            ("Q36", "Disable submit until valid", "form.invalid", "The full form validity can control the submit button. This prevents sending incomplete or invalid data.", "[disabled]=\"form.invalid\""),
        ],
    ),
    (
        "Services, HTTP and State",
        [
            ("Q37", "Move API logic to service", "Angular service", "Components should handle UI. Services should handle reusable data and API logic. This keeps code clean and testable.", "constructor(private dataService: PracticeDataService) {}"),
            ("Q38", "Fetch data from API", "HttpClient.get", "HttpClient.get() sends a GET request and returns an Observable. HttpClientModule must be imported in AppModule.", "this.http.get<User[]>(url)"),
            ("Q39", "Render API response", "subscribe and *ngFor", "After subscribing to API data, store the response in an array property. The template displays it using *ngFor.", "users = response"),
            ("Q40", "Send POST payload", "HttpClient.post", "POST requests need a URL and payload object. The payload contains the data sent to the server.", "this.http.post(url, userData)"),
            ("Q41", "Update UI after delete", "Refresh local data", "After deleting, remove the item from the displayed array or re-fetch the data. The UI changes only when component data changes.", "users.filter(user => user.id !== id)"),
            ("Q42", "Share data across components", "BehaviorSubject", "BehaviorSubject stores the latest value and emits it to all subscribers. It is useful for shared state.", "users$ = subject.asObservable()"),
            ("Q43", "Fetch on initialization", "ngOnInit", "ngOnInit is the correct place to load data when a component starts. Constructor should mainly be used for dependency injection.", "ngOnInit(): void { this.loadData(); }"),
            ("Q44", "Handle API errors", "catchError", "catchError prevents the app from crashing. It lets you display a message and return fallback data.", "catchError(() => of([]))"),
            ("Q45", "Avoid stale data after update", "Update or re-fetch", "After updating data, update the local list or load the data again so the screen shows the latest value.", "this.loadUsers()"),
            ("Q46", "Remove duplicate API code", "Central service method", "If many components use the same API logic, move it to one service method and call that method from components.", "dataService.getUsers()"),
            ("Q47", "Show loading during API call", "loading flag and finalize", "Set loading true before the API call. Use finalize() to set loading false after success or failure.", "finalize(() => this.loading = false)"),
            ("Q48", "Avoid repeated API calls", "Do not call APIs in template", "Methods used in templates can run many times. API calls should be done in ngOnInit or event handlers, not directly in interpolation.", "Load once in ngOnInit"),
        ],
    ),
    (
        "Routing",
        [
            ("Q49", "Configure routing", "RouterModule", "Routes map URL paths to components. RouterModule.forRoot(routes) enables routing in the application.", "{ path: 'question/:id', component: Q51RouteParamComponent }"),
            ("Q50", "Avoid page reload", "routerLink", "Use routerLink instead of href for Angular navigation. routerLink changes route without refreshing the whole page.", "routerLink=\"/question/50\""),
            ("Q51", "Read route parameter", "ActivatedRoute", "ActivatedRoute gives access to route parameters. paramMap reads values from URLs like /question/51.", "params.get('id')"),
            ("Q52", "Navigate from TypeScript", "Router.navigate", "Programmatic navigation is used after actions such as successful form submission.", "this.router.navigate(['/submitted'])"),
            ("Q53", "Handle unknown URLs", "Wildcard route", "The wildcard path catches all unknown routes and redirects to a safe page.", "{ path: '**', redirectTo: '' }"),
            ("Q54", "Render child route", "Nested router-outlet", "Child routes need a router-outlet inside the parent component template. The child component appears inside that outlet.", "<router-outlet></router-outlet>"),
            ("Q55", "Pass query parameters", "queryParams", "Query parameters are optional URL values like ?filter=active. They are useful for filters, search text, and page numbers.", "{ queryParams: { filter: 'active' } }"),
        ],
    ),
    (
        "Pipes and Mini App",
        [
            ("Q56", "Format date", "date pipe", "The date pipe changes a raw date into a readable format without modifying the original value.", "today | date:'mediumDate'"),
            ("Q57", "Display uppercase names", "uppercase pipe", "The uppercase pipe changes text display only. The original data remains unchanged.", "name | uppercase"),
            ("Q58", "Truncate long text", "slice pipe", "The slice pipe can shorten long strings in the UI. Add three dots after it for an ellipsis effect.", "text | slice:0:45"),
            ("Q59", "Format currency", "currency pipe", "The currency pipe displays numbers as money with the selected currency symbol.", "price | currency:'INR':'symbol'"),
            ("Q60", "Fix mini app", "Combined Angular concepts", "The mini app combines list rendering, form validation, service data, and routing. Each feature must be correctly connected for the app to work.", "form + *ngFor + service + routerLink"),
        ],
    ),
]


def render_card(question, title, concept, explanation, syntax):
    return f"""
      <article class="card">
        <div class="qnum">{escape(question)}</div>
        <div class="content">
          <h3>{escape(title)}</h3>
          <p><strong>Concept used:</strong> {escape(concept)}</p>
          <p><strong>Explanation:</strong> {escape(explanation)}</p>
          <p><strong>Important syntax:</strong></p>
          <pre>{escape(syntax)}</pre>
        </div>
      </article>
    """


def main():
    sections = []
    for group_title, cards in GROUPS:
        body = "\n".join(render_card(*card) for card in cards)
        sections.append(f"""
          <section>
            <h2>{escape(group_title)}</h2>
            {body}
          </section>
        """)

    html = f"""<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Angular Q7-Q60 Concepts Notes</title>
  <style>
    @page {{ size: A4; margin: 18mm 16mm; }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      color: #172033;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.45;
      background: white;
    }}
    .cover {{
      min-height: 92vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 5px solid #2563eb;
      page-break-after: always;
    }}
    .cover h1 {{
      margin: 0 0 14px;
      color: #1d4ed8;
      font-size: 42px;
      letter-spacing: 0;
    }}
    .cover p {{
      max-width: 680px;
      font-size: 17px;
    }}
    .badge {{
      display: inline-block;
      width: fit-content;
      margin-bottom: 18px;
      padding: 7px 12px;
      border-radius: 6px;
      background: #dbeafe;
      color: #1d4ed8;
      font-weight: 700;
    }}
    h2 {{
      margin: 0 0 12px;
      padding: 10px 12px;
      border-left: 5px solid #2563eb;
      background: #f1f5f9;
      color: #111827;
      font-size: 22px;
      page-break-after: avoid;
    }}
    section {{
      page-break-before: always;
    }}
    section:first-of-type {{
      page-break-before: auto;
    }}
    .card {{
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 12px;
      margin: 11px 0;
      padding: 12px;
      border: 1px solid #d6dde8;
      border-radius: 8px;
      page-break-inside: avoid;
      background: #ffffff;
    }}
    .qnum {{
      align-self: start;
      padding: 9px 0;
      border-radius: 6px;
      background: #2563eb;
      color: white;
      text-align: center;
      font-weight: 700;
    }}
    h3 {{
      margin: 0 0 6px;
      color: #0f172a;
      font-size: 16px;
    }}
    p {{
      margin: 4px 0;
      font-size: 12.5px;
    }}
    pre {{
      margin: 5px 0 0;
      padding: 8px;
      border-radius: 6px;
      overflow-wrap: anywhere;
      white-space: pre-wrap;
      background: #0f172a;
      color: #e5e7eb;
      font-family: Consolas, 'Courier New', monospace;
      font-size: 11px;
    }}
    .footer {{
      margin-top: 24px;
      padding-top: 10px;
      border-top: 1px solid #d6dde8;
      color: #64748b;
      font-size: 11px;
    }}
  </style>
</head>
<body>
  <div class="cover">
    <div class="badge">Angular 14 Practice Notes</div>
    <h1>Q7-Q60 Concepts Explanation</h1>
    <p>This PDF explains every concept used in your separated Angular components. Each question includes the concept, why it is used, and the important syntax to remember for viva, practicals, and revision.</p>
    <p><strong>Project:</strong> angular-14-crud-example</p>
  </div>
  {''.join(sections)}
  <div class="footer">Generated for Angular Q7-Q60 component practice.</div>
</body>
</html>
"""

    OUTPUT.parent.mkdir(exist_ok=True)
    OUTPUT.write_text(html, encoding="utf-8")
    print(f"Created {OUTPUT}")


if __name__ == "__main__":
    main()
