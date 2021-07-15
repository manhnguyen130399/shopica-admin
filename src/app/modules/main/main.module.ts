import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MessageComponent } from './../../layout/message/message.component';
import { DashboardComponent } from './../dashboard/page/dashboard/dashboard.component';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { icons } from './app-icon';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    NzDropDownModule,
    NzPopconfirmModule,
    NzBadgeModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
    NzUploadModule,
    NzToolTipModule,
    NzSpinModule,
    FormsModule,
    NzMessageModule,
    NzInputModule,
    NzImageModule,
    RouterModule.forChild(mainRoutes),
    NzIconModule.forChild(icons),
  ],
})
export class MainModule { }
