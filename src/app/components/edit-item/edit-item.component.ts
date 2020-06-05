import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { EditItemDialogData } from 'src/app/models/todo-item.model';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditItemDialogData
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.data.name, Validators.required],
      description: [this.data.description, Validators.required]
    });
  }

  save() {
    const {value, valid} = this.form;
    const res = {
      ...this.data,
      name: value.name,
      description: value.description
    }

    if(valid) {
      this.dialogRef.close(res);
    }      
  }

  cancel() {
    this.dialogRef.close();
  }
}
