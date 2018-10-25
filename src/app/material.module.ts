import{NgModule} from '@angular/core';
import{MatTableModule} from '@angular/material/table';
//import{MatHeaderCell} from '@angular/material/MatHeaderCell';
import {MatGridListModule} from '@angular/material/grid-list';
//import {MatGridTileModule} from '@angular/material/grid-tile';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';





@NgModule({   
    imports: [MatTableModule,
        MatGridListModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        //MatGridTileModule
    ],
    exports: [MatTableModule,
        MatExpansionModule,
        MatFormFieldModule,
       // MatGridTileModule,
        MatGridListModule,
        MatInputModule
    ]
}) 
 
export class MaterialModule {}