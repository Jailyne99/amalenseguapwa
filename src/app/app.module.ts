import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroOneComponent } from './components/hero/hero-one/hero-one.component';
import { HeroTwoComponent } from './components/hero/hero-two/hero-two.component';
import { HeroThreeComponent } from './components/hero/hero-three/hero-three.component';
import { HeroFourComponent } from './components/hero/hero-four/hero-four.component';
import { HeroFiveComponent } from './components/hero/hero-five/hero-five.component';
import { HeroSixComponent } from './components/hero/hero-six/hero-six.component';
import { PromoOneComponent } from './components/promo/promo-one/promo-one.component';
import { PromoTwoComponent } from './components/promo/promo-two/promo-two.component';
import { PromoThreeComponent } from './components/promo/promo-three/promo-three.component';
import { PromoFourComponent } from './components/promo/promo-four/promo-four.component';
import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { FeatureOneComponent } from './components/features/feature-one/feature-one.component';
import { FeatureTwoComponent } from './components/features/feature-two/feature-two.component';
import { FeatureThreeComponent } from './components/features/feature-three/feature-three.component';
import { ScreenshotOneComponent } from './components/screenshots/screenshot-one/screenshot-one.component';
import { ScreenshotTwoComponent } from './components/screenshots/screenshot-two/screenshot-two.component';
import { ContentOneComponent } from './components/content/content-one/content-one.component';
import { ContentTwoComponent } from './components/content/content-two/content-two.component';
import { ContentThreeComponent } from './components/content/content-three/content-three.component';
import { ContentFourComponent } from './components/content/content-four/content-four.component';
import { ContentFiveComponent } from './components/content/content-five/content-five.component';
import { ContentSixComponent } from './components/content/content-six/content-six.component';
import { ContentSevenComponent } from './components/content/content-seven/content-seven.component';
import { ContentEightComponent } from './components/content/content-eight/content-eight.component';
import { ContentNineComponent } from './components/content/content-nine/content-nine.component';
import { PricingOneComponent } from './components/pricing/pricing-one/pricing-one.component';
import { PricingTwoComponent } from './components/pricing/pricing-two/pricing-two.component';
import { PricingThreeComponent } from './components/pricing/pricing-three/pricing-three.component';
import { ReviewComponent } from './components/review/review.component';
import { TeamOneComponent } from './components/team/team-one/team-one.component';
import { TeamTwoComponent } from './components/team/team-two/team-two.component';
import { CtaOneComponent } from './components/cta/cta-one/cta-one.component';
import { CtaTwoComponent } from './components/cta/cta-two/cta-two.component';
import { DownloadOneComponent } from './components/download/download-one/download-one.component';
import { DownloadTwoComponent } from './components/download/download-two/download-two.component';
import { FaqOneComponent } from './components/faq/faq-one/faq-one.component';
import { FaqTwoComponent } from './components/faq/faq-two/faq-two.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterOneComponent } from './components/footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/footer/footer-two/footer-two.component';
import { FooterThreeComponent } from './components/footer/footer-three/footer-three.component';
import { FooterFourComponent } from './components/footer/footer-four/footer-four.component';
import { FooterFiveComponent } from './components/footer/footer-five/footer-five.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { HeaderOneComponent } from './components/header/header-one/header-one.component';
import { HeaderTwoComponent } from './components/header/header-two/header-two.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { VideoComponent } from './components/video/video.component';
import { AboutOneComponent } from './components/about/about-one/about-one.component';
import { AboutTwoComponent } from './components/about/about-two/about-two.component';
import { CounterOneComponent } from './components/counter/counter-one/counter-one.component';
import { CounterTwoComponent } from './components/counter/counter-two/counter-two.component';
import { BrandingComponent } from './components/branding/branding.component';
import { BreadcrumbOneComponent } from './components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { BreadcrumbTwoComponent } from './components/breadcrumb/breadcrumb-two/breadcrumb-two.component';
import { BreadcrumbThreeComponent } from './components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { BreadcrumbFourComponent } from './components/breadcrumb/breadcrumb-four/breadcrumb-four.component';
import { BreadcrumbFiveComponent } from './components/breadcrumb/breadcrumb-five/breadcrumb-five.component';
import { BreadcrumbSixComponent } from './components/breadcrumb/breadcrumb-six/breadcrumb-six.component';
import { BreadcrumbSevenComponent } from './components/breadcrumb/breadcrumb-seven/breadcrumb-seven.component';
import { BreadcrumbEightComponent } from './components/breadcrumb/breadcrumb-eight/breadcrumb-eight.component';
import { BreadcrumbNineComponent } from './components/breadcrumb/breadcrumb-nine/breadcrumb-nine.component';
import { BreadcrumbTenComponent } from './components/breadcrumb/breadcrumb-ten/breadcrumb-ten.component';
import { FooterSixComponent } from './components/footer/footer-six/footer-six.component';
import { MapComponent } from './components/map/map.component';
import { BlogOneComponent } from './components/blog/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/blog/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/blog/blog-three/blog-three.component';
import { BlogFourComponent } from './components/blog/blog-four/blog-four.component';
import { BlogFiveComponent } from './components/blog/blog-five/blog-five.component';
import { BlogSixComponent } from './components/blog/blog-six/blog-six.component';
import { PricingPageComponent } from './components/inner-pages/pricing-page/pricing-page.component';
import { ReviewPageComponent } from './components/inner-pages/review-page/review-page.component';
import { FaqPageComponent } from './components/inner-pages/faq-page/faq-page.component';
import { DownloadPageComponent } from './components/inner-pages/download-page/download-page.component';
import { ThankYouComponent } from './components/inner-pages/thank-you/thank-you.component';
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
import { LoginComponent } from './components/inner-pages/accounts/login/login.component';
import { SignupComponent } from './components/inner-pages/accounts/signup/signup.component';
import { ForgotComponent } from './components/inner-pages/accounts/forgot/forgot.component';
import { FaqThreeComponent } from './components/faq/faq-three/faq-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroOneComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeroFourComponent,
    HeroFiveComponent,
    HeroSixComponent,
    PromoOneComponent,
    PromoTwoComponent,
    PromoThreeComponent,
    PromoFourComponent,
    ThemeOneComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    ScreenshotOneComponent,
    ScreenshotTwoComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent,
    ContentFourComponent,
    ContentFiveComponent,
    ContentSixComponent,
    ContentSevenComponent,
    ContentEightComponent,
    ContentNineComponent,
    PricingOneComponent,
    PricingTwoComponent,
    PricingThreeComponent,
    ReviewComponent,
    TeamOneComponent,
    TeamTwoComponent,
    CtaOneComponent,
    CtaTwoComponent,
    DownloadOneComponent,
    DownloadTwoComponent,
    FaqOneComponent,
    FaqTwoComponent,
    ContactComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterFourComponent,
    FooterFiveComponent,
    ScrollupComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    ThemeTwoComponent,
    ThemeThreeComponent,
    ThemeFourComponent,
    ThemeFiveComponent,
    ThemeSixComponent,
    VideoComponent,
    AboutOneComponent,
    AboutTwoComponent,
    CounterOneComponent,
    CounterTwoComponent,
    BrandingComponent,
    BreadcrumbOneComponent,
    BreadcrumbTwoComponent,
    BreadcrumbThreeComponent,
    BreadcrumbFourComponent,
    BreadcrumbFiveComponent,
    BreadcrumbSixComponent,
    BreadcrumbSevenComponent,
    BreadcrumbEightComponent,
    BreadcrumbNineComponent,
    BreadcrumbTenComponent,
    FooterSixComponent,
    MapComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogFourComponent,
    BlogFiveComponent,
    BlogSixComponent,
    PricingPageComponent,
    ReviewPageComponent,
    FaqPageComponent,
    DownloadPageComponent,
    ThankYouComponent,
    NewsletterComponent,
    ErrorOneComponent,
    ErrorTwoComponent,
    ContactPageComponent,
    MaintenanceComponent,
    ComingSoonComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    FaqThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
