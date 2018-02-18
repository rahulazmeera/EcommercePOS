import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule,MatGridListModule, MatMenuModule, MatTableModule } from '@angular/material';




@NgModule({
   
    imports: [MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatTableModule],
    exports:[MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatTableModule],

 

})


export class MaterialModule{



}