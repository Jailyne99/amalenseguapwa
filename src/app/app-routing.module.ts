import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { PricingPageComponent } from './components/inner-pages/pricing-page/pricing-page.component';
import { ReviewPageComponent } from './components/inner-pages/review-page/review-page.component';
import { FaqPageComponent } from './components/inner-pages/faq-page/faq-page.component';
import { LoginComponent } from './components/inner-pages/accounts/login/login.component';
import { SignupComponent } from './components/inner-pages/accounts/signup/signup.component';
import { DownloadPageComponent } from './components/inner-pages/download-page/download-page.component';
import { ThankYouComponent } from './components/inner-pages/thank-you/thank-you.component';
import { ForgotComponent } from './components/inner-pages/accounts/forgot/forgot.component';
import { NewsletterComponent } from './components/inner-pages/newsletter/newsletter.component';
import { ErrorOneComponent } from './components/inner-pages/error-page/error-one/error-one.component';
import { ErrorTwoComponent } from './components/inner-pages/error-page/error-two/error-two.component';
import { ContactPageComponent } from './components/inner-pages/contact-page/contact-page.component';
import { MaintenanceComponent } from './components/inner-pages/maintenance/maintenance.component';
import { ComingSoonComponent } from './components/inner-pages/coming-soon/coming-soon.component';
import { BlogTwoColumnComponent } from './components/inner-pages/blog-page/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/inner-pages/blog-page/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/inner-pages/blog-page/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './components/inner-pages/blog-page/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './components/inner-pages/blog-page/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './components/inner-pages/blog-page/blog-details-right-sidebar/blog-details-right-sidebar.component';


const routes: Routes = [
  {path: '', component: ThemeOneComponent},
  {path: 'theme-two', component: ThemeTwoComponent},
  {path: 'theme-three', component: ThemeThreeComponent},
  {path: 'theme-four', component: ThemeFourComponent},
  {path: 'theme-five', component: ThemeFiveComponent},
  {path: 'theme-six', component: ThemeSixComponent},
  {path: 'pricing', component: PricingPageComponent},
  {path: 'reviews', component: ReviewPageComponent},
  {path: 'faq', component: FaqPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'download', component: DownloadPageComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'error-one', component: ErrorOneComponent},
  {path: 'error-two', component: ErrorTwoComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: 'blog-two-column', component: BlogTwoColumnComponent},
  {path: 'blog-three-column', component: BlogThreeColumnComponent},
  {path: 'blog-left-sidebar', component: BlogLeftSidebarComponent},
  {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
  {path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebarComponent},
  {path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }