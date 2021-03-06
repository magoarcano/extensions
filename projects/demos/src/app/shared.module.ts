import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';
import { MtxGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxSplitModule } from '@ng-matero/extensions/split-pane';
import { MtxText3dModule } from '@ng-matero/extensions/text3d';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    MtxGridModule,
    MtxColorPickerModule,
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
    MtxText3dModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    MtxGridModule,
    MtxColorPickerModule,
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
    MtxText3dModule
  ],
})
export class SharedModule { }
