import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotYourPasswordComponent } from './pages/forgot-your-password/forgot-your-password.component';
import { CreatAccountComponent } from './pages/creat-account/creat-account.component';
import { TermsComponent } from './pages/terms/terms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RoleComponent } from './pages/Security/role/role.component';
import { UserComponent } from './pages/Security/user/user.component';
import { ModuleComponent } from './pages/Security/module/module.component';
import { ViewComponent } from './pages/Security/view/view.component';
import { PersonComponent } from './pages/Security/person/person.component';
import { UserperfileComponent } from './pages/userperfile/userperfile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InstructorComponent } from './pages/Parameter/instructor/instructor.component';
import { NivelComponent } from './pages/Parameter/nivel/nivel.component';
import { ProgramaComponent } from './pages/Parameter/programa/programa.component';
import { CompetenciaComponent } from './pages/Parameter/competencia/competencia.component';
import { AmbienteComponent } from './pages/Parameter/ambiente/ambiente.component';
import { ActividadComponent } from './pages/operational/actividad/actividad.component';
import { ProyectoComponent } from './pages/operational/proyecto/proyecto.component';
import { FichaComponent } from './pages/operational/ficha/ficha.component';
import { HorarioComponent } from './pages/operational/horario/horario.component';
import { InstructorHorarioComponent } from './pages/operational/instructor-horario/instructor-horario.component';
import { ConsolidadoHorarioComponent } from './pages/operational/consolidado-horario/consolidado-horario.component';
import { ConsolidadoAmbienteComponent } from './pages/operational/consolidado-ambiente/consolidado-ambiente.component';
import { PeriodoComponent } from './pages/Parameter/periodo/periodo.component';
import { RapComponent } from './pages/operational/rap/rap.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'forgot-your-password',
        component: ForgotYourPasswordComponent,
    },
    {
        path: 'creat-account',
        component: CreatAccountComponent,
    },
    {
        path: 'terms',
        component: TermsComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent, },
            { path: 'menu', component: MenuComponent, },
            { path: 'role', component: RoleComponent, },
            { path: 'user', component: UserComponent, },
            { path: 'module', component: ModuleComponent, },
            { path: 'view', component: ViewComponent, },
            { path: 'person', component: PersonComponent, },
            { path: 'userprofile', component: UserperfileComponent, },
            { path: 'instructor', component: InstructorComponent, },
            { path: 'nivel', component: NivelComponent, },
            { path: 'programa', component: ProgramaComponent, },
            { path: 'competencia', component: CompetenciaComponent, },
            { path: 'ambiente', component: AmbienteComponent, },
            { path: 'actividad', component: ActividadComponent, },
            { path: 'proyecto', component: ProyectoComponent, },
            { path: 'ficha', component: FichaComponent, },
            { path: 'horario', component: HorarioComponent, },
            { path: 'instructorHorario', component: InstructorHorarioComponent, },
            { path: 'consolidadoHorario', component: ConsolidadoHorarioComponent, },
            { path: 'consolidadoAmbiente', component: ConsolidadoAmbienteComponent, },
            { path: 'periodo', component: PeriodoComponent, },
            { path: 'rap', component: RapComponent, }
        ]
    },
    {
        path: '**',
        canActivate: [AuthGuard],
        component: NotFoundComponent // Mostrar 404 solo si está autenticado
      }

];
