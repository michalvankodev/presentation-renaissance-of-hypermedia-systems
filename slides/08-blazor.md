## Blazor

```csharp
<h1>Counter</h1>
<p role="status">Current count: @currentCount</p>
<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}
```


Note:

## Blazor

Blazor je .Net frontend-ovy framework od Microsoftu. Umoznuje viacero moznosti ako renderovat componenty. Ci uz cisto server side rendered, client side rendering cez WebAssembly alebo takzvany Interactivny server side rendering ktory sa podoba hypermedia pristupu a predosle zmieninim frameworkom.
