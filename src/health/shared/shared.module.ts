import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// third-party modules
import { AngularFireDatabase } from 'angularfire2/database'

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabase],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    }
  }
}
