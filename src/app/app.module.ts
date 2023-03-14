// @Angular Imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

// PrimeNg Imports
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';

// AngularMaterial Imports
import { DragDropModule } from '@angular/cdk/drag-drop';

// Imports de Libs
import { NgxSpinnerModule } from "ngx-spinner";

// Imports da Aplicação
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { CaixaDeEntradaComponent } from "./pages/caixa-de-entrada/caixa-de-entrada.component";
import { VisualizarDialogComponent } from './pages/servicos/visualizar-dialog/visualizar-dialog.component';
import { IncluirEditarDialogComponent } from './pages/servicos/incluir-editar-dialog/incluir-editar-dialog.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { ServicosComponent } from "./pages/servicos/servicos.component";
import { HttpErrorInterceptorProvider } from "./shared/utils/interceptors/http-error.interceptor";
import { ServicosService } from "./services/servicos.service";
import { HttpLoaderInterceptorProvider } from "./shared/utils/interceptors/http-loader.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    ServicosComponent,
    VisualizarDialogComponent,
    IncluirEditarDialogComponent,
    MensagemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    NgbModule,
    TableModule,
    TooltipModule,
    DynamicDialogModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    InputTextareaModule,
    DragDropModule,
    NgxSpinnerModule.forRoot({ type: 'timer' })
  ],
  providers: [
    DialogService,
    HttpErrorInterceptorProvider,
    HttpLoaderInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
