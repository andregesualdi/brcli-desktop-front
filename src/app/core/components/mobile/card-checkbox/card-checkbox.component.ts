import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meta } from '../../../shared/models/meta.model';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-checkbox',
  templateUrl: './card-checkbox.component.html',
  styleUrls: ['./card-checkbox.component.scss']
})
export class CardCheckboxComponent implements OnInit {
  @Input()
  public meta: Meta = new Meta();

  @Output()
  public statusMetas: EventEmitter<any> = new EventEmitter();

  public form: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      metas: new FormArray([])
    });
  }

  public selecionarCheckbox(event: any, meta: any): void {
    const formArray: FormArray = this.form?.get('metas') as FormArray;
    formArray.push(new FormControl(
      { descricao: meta.descricao, atingida: meta.atingida }
    ));

    if (event.target.checked) {
      this.meta.atingida = true;
      formArray.value[0].atingida = true;
    } else {
      this.meta.atingida = false;
      formArray.value[0].atingida = false;
    }

    this.statusMetas.emit(formArray.value[0]);
  }
}
