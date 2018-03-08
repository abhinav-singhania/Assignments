import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  imports: [MatToolbarModule,MatCardModule,MatButtonModule,MatInputModule,MatDialogModule
  ],
  exports: [MatToolbarModule,MatCardModule,MatButtonModule,MatInputModule,MatDialogModule]

})
export class MaterialmoduleModule { }
