import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounce, debounceTime, from, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-debounce',
  standalone: false,
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.css'
})
export class DebounceComponent implements OnDestroy{
  fb: FormBuilder = inject(FormBuilder);

  form: FormGroup;

  subscription: Subscription; // Subscription is the Observer. When it observes something, it will perform some function

  arr = from([1, 2, 3, 4, 5, 6, 7, 8])
  num!: number;

  constructor() {
    this.form = this.fb.group({
      name: this.fb.control<string>('')
    })

    this.subscription = this.form.valueChanges
      .pipe(
        debounceTime(3000),
        tap((v) => this.num = parseInt(v.name) + 1),
        map((v) => v.name + 1),  // map mutates the data
        // tap(v => console.log(JSON.stringify(v.name)))

      )
      .subscribe(val => console.log(this.num))
  }

  processForm() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // To release resources
  }
}
