import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatButtonModule, MatIconModule, MatTable } from '@angular/material';

import { CheckoutListComponent } from './checkout-list.component';
import { Item } from 'src/app/shared/models/item.model';


describe('CheckoutListComponent', () => {
  let component: CheckoutListComponent;
  let fixture: ComponentFixture<CheckoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutListComponent],
      imports: [MatTableModule, MatButtonModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#hasItems deve retornar true se houver itens no carrinho', ()=>{
    expect(component.hasItems()).toBeFalsy;
    component.items.push(new Item());
    expect(component.hasItems()).toBeTruthy;
  });

  it('#removeItem deve remover o item passado por parâmetro e renderizar a tabela', () => {
    let itemToRemove = new Item();
    const table:MatTable<any> = fixture.componentInstance.table;
    const spyTable = jest.spyOn(table, 'renderRows');
    component.items.push();
    expect(component.hasItems()).toBeFalsy;
    component.removeItem(itemToRemove);
    expect(spyTable).toHaveBeenCalledTimes(1);
    expect(component.hasItems()).toBeTruthy;
  });
});
