import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q01BindingComponent } from './q01-binding/q01-binding.component';
import { Q02CounterComponent } from './q02-counter/q02-counter.component';
import { Q03ToggleComponent } from './q03-toggle/q03-toggle.component';
import { Q04ImageComponent } from './q04-image/q04-image.component';
import { Q05BindingRefactorComponent } from './q05-binding-refactor/q05-binding-refactor.component';
import { Q06LifecycleComponent } from './q06-lifecycle/q06-lifecycle.component';
import { Q07ParentComponent } from './q07-parent/q07-parent.component';
import { Q07ChildComponent } from './q07-parent/q07-child/q07-child.component';
import { Q08ChildComponent } from './q08-child/q08-child.component';
import { Q08OutputEventComponent } from './q08-output-event/q08-output-event.component';
import { Q09DisableSubmitComponent } from './q09-disable-submit/q09-disable-submit.component';
import { Q10PrecomputedValueComponent } from './q10-precomputed-value/q10-precomputed-value.component';
import { Q11DynamicClassComponent } from './q11-dynamic-class/q11-dynamic-class.component';
import { Q12ClickEventsComponent } from './q12-click-events/q12-click-events.component';
import { Q13UserLoopComponent } from './q13-user-loop/q13-user-loop.component';
import { Q14TrackByComponent } from './q14-track-by/q14-track-by.component';
import { Q15NgIfElseComponent } from './q15-ngif-else/q15-ngif-else.component';
import { Q16LoadingMessageComponent } from './q16-loading-message/q16-loading-message.component';
import { Q17EmptyTableComponent } from './q17-empty-table/q17-empty-table.component';
import { Q18DropdownFieldsComponent } from './q18-dropdown-fields/q18-dropdown-fields.component';
import { Q19NestedListsComponent } from './q19-nested-lists/q19-nested-lists.component';
import { Q20StructuralDirectivesComponent } from './q20-structural-directives/q20-structural-directives.component';
import { Q21FirstFiveComponent } from './q21-first-five/q21-first-five.component';
import { Q22HighlightSelectedComponent } from './q22-highlight-selected/q22-highlight-selected.component';
import { Q23TemplateFormComponent } from './q23-template-form/q23-template-form.component';
import { Q24TemplateValidationComponent } from './q24-template-validation/q24-template-validation.component';
import { Q25TouchedErrorsComponent } from './q25-touched-errors/q25-touched-errors.component';
import { Q26EmailValidationComponent } from './q26-email-validation/q26-email-validation.component';
import { Q27FormBuilderComponent } from './q27-form-builder/q27-form-builder.component';
import { Q28PasswordLengthComponent } from './q28-password-length/q28-password-length.component';
import { Q29ResetFormComponent } from './q29-reset-form/q29-reset-form.component';
import { Q30CaptureAllInputsComponent } from './q30-capture-all-inputs/q30-capture-all-inputs.component';
import { Q31ConditionalRequiredComponent } from './q31-conditional-required/q31-conditional-required.component';
import { Q32LinkedDropdownComponent } from './q32-linked-dropdown/q32-linked-dropdown.component';
import { Q33DynamicFieldsComponent } from './q33-dynamic-fields/q33-dynamic-fields.component';
import { Q34ConsistentFormComponent } from './q34-consistent-form/q34-consistent-form.component';
import { Q35ErrorsAfterInteractionComponent } from './q35-errors-after-interaction/q35-errors-after-interaction.component';
import { Q36DisableUntilValidComponent } from './q36-disable-until-valid/q36-disable-until-valid.component';
import { Q37ApiServiceComponent } from './q37-api-service/q37-api-service.component';
import { Q38HttpGetComponent } from './q38-http-get/q38-http-get.component';
import { Q39DisplayApiDataComponent } from './q39-display-api-data/q39-display-api-data.component';
import { Q40HttpPostComponent } from './q40-http-post/q40-http-post.component';
import { Q41DeleteRefreshComponent } from './q41-delete-refresh/q41-delete-refresh.component';
import { Q42SharedStateComponent } from './q42-shared-state/q42-shared-state.component';
import { Q43FetchOnInitComponent } from './q43-fetch-on-init/q43-fetch-on-init.component';
import { Q44ErrorHandlingComponent } from './q44-error-handling/q44-error-handling.component';
import { Q45UpdateDataComponent } from './q45-update-data/q45-update-data.component';
import { Q46CentralizedApiComponent } from './q46-centralized-api/q46-centralized-api.component';
import { Q47LoadingStateComponent } from './q47-loading-state/q47-loading-state.component';
import { Q48NoRepeatedFetchComponent } from './q48-no-repeated-fetch/q48-no-repeated-fetch.component';
import { Q49RoutingComponent } from './q49-routing/q49-routing.component';
import { Q50RouterLinksComponent } from './q50-router-links/q50-router-links.component';
import { Q51RouteParamComponent } from './q51-route-param/q51-route-param.component';
import { Q52ProgrammaticNavigationComponent } from './q52-programmatic-navigation/q52-programmatic-navigation.component';
import { Q53WildcardRouteComponent } from './q53-wildcard-route/q53-wildcard-route.component';
import { Q54NestedRoutesComponent } from './q54-nested-routes/q54-nested-routes.component';
import { Q54NestedChildComponent } from './q54-nested-child/q54-nested-child.component';
import { Q55QueryParamsComponent } from './q55-query-params/q55-query-params.component';
import { Q56DatePipeComponent } from './q56-date-pipe/q56-date-pipe.component';
import { Q57UppercasePipeComponent } from './q57-uppercase-pipe/q57-uppercase-pipe.component';
import { Q58TruncateTextComponent } from './q58-truncate-text/q58-truncate-text.component';
import { Q59CurrencyPipeComponent } from './q59-currency-pipe/q59-currency-pipe.component';
import { Q60MiniAppComponent } from './q60-mini-app/q60-mini-app.component';
import { ServicePracticeComponentComponent } from './service-practice-component/service-practice-component.component';
import { MockComponent } from './mock/mock.component';

@NgModule({
  declarations: [
    AppComponent,
    Q01BindingComponent,
    Q02CounterComponent,
    Q03ToggleComponent,
    Q04ImageComponent,
    Q05BindingRefactorComponent,
    Q06LifecycleComponent,
    Q07ParentComponent,
    Q07ChildComponent,
    Q08ChildComponent,
    Q08OutputEventComponent,
    Q09DisableSubmitComponent,
    Q10PrecomputedValueComponent,
    Q11DynamicClassComponent,
    Q12ClickEventsComponent,
    Q13UserLoopComponent,
    Q14TrackByComponent,
    Q15NgIfElseComponent,
    Q16LoadingMessageComponent,
    Q17EmptyTableComponent,
    Q18DropdownFieldsComponent,
    Q19NestedListsComponent,
    Q20StructuralDirectivesComponent,
    Q21FirstFiveComponent,
    Q22HighlightSelectedComponent,
    Q23TemplateFormComponent,
    Q24TemplateValidationComponent,
    Q25TouchedErrorsComponent,
    Q26EmailValidationComponent,
    Q27FormBuilderComponent,
    Q28PasswordLengthComponent,
    Q29ResetFormComponent,
    Q30CaptureAllInputsComponent,
    Q31ConditionalRequiredComponent,
    Q32LinkedDropdownComponent,
    Q33DynamicFieldsComponent,
    Q34ConsistentFormComponent,
    Q35ErrorsAfterInteractionComponent,
    Q36DisableUntilValidComponent,

    ServicePracticeComponentComponent,
    Q37ApiServiceComponent,
    Q38HttpGetComponent,
    Q39DisplayApiDataComponent,
    Q40HttpPostComponent,
    Q41DeleteRefreshComponent,
    Q42SharedStateComponent,
    Q43FetchOnInitComponent,
    Q44ErrorHandlingComponent,
    Q45UpdateDataComponent,
    Q46CentralizedApiComponent,
    Q47LoadingStateComponent,
    Q48NoRepeatedFetchComponent,
    Q49RoutingComponent,
    Q50RouterLinksComponent,
    Q51RouteParamComponent,
    Q52ProgrammaticNavigationComponent,
    Q53WildcardRouteComponent,
    Q54NestedRoutesComponent,
    Q54NestedChildComponent,
    Q55QueryParamsComponent,
    Q56DatePipeComponent,
    Q57UppercasePipeComponent,
    Q58TruncateTextComponent,
    Q59CurrencyPipeComponent,
    Q60MiniAppComponent,
    ServicePracticeComponentComponent,
    MockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
