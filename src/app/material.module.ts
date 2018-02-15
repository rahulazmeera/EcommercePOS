import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule,MatGridListModule } from '@angular/material';




@NgModule({
   
    imports: [MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule],
    exports:[MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule],

 

})


export class MaterialModule{



}