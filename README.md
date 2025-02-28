# CSF Day 35 L
_For routing_

## Steps
### Option 1
Generate a new module without `--routing=false`.

### Option 2
1. Add router as a module using `ng add @angular/router`
2. Generate a new module with `ng g m app-routing --flat --module=app`
3. In the router module, add the following
    - const routes : Routes = []
    - imports: [RouterModule.forRoot(routes)]
    - exports: [RouterModule]
4. In the main app module, add the `app-routing` module.

## Notes

To read Json files, need to add `"resolveJsonModule": true` in the `tsconfig.json` file. 

Also import it as jsonData from the relative file path. See [here](src/app/components/test/test.component.ts)