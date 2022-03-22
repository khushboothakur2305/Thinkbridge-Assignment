import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BooksAddEditComponent } from './components/books-add-edit/books-add-edit.component';
import { BooksDeleteConfirmationComponent } from './components/books-delete-confirmation/books-delete-confirmation.component';
import { BooksListComponent } from './components/books-list/books-list.component';
@NgModule({
  declarations: [
    AdminComponent,
    BooksAddEditComponent,
    BooksDeleteConfirmationComponent,
    BooksListComponent,
  ],
  imports: [AdminRoutingModule],
})
export class AdminModule {}
