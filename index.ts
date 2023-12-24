import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

// of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
//   .pipe(distinct())
//   .subscribe((val) => console.log(val));

// distinct aynı değerler varsa yeni observable da onları basmaz.

const obj1 = { id: 3, name: 'name 1' };
const obj2 = { id: 4, name: 'name 2' };
const obj3 = { id: 3, name: 'name 3' };
const vals = [obj1, obj2, obj3];

from(vals)
  .pipe(distinct((e) => e.id))
  .subscribe((val) => console.log(val));
