import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';
// Root Components
import { AppComponent } from './app.component';
import { ComponentsModule } from './ui/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ComponentsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
