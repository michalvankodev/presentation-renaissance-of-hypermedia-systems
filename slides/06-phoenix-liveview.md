## Phoenix LiveView

<small>Enables rich, real-time user experiences with server-rendered HTML.</small>

<small>LiveView powered applications are stateful on the server with bidirectional communication via WebSockets, offering a vastly simplified programming model compared to JavaScript alternatives. </small>

```elixir
def render(assigns) do
  ~L"""
  <div class="">
    <div>
      <div>
        <button phx-click="github_deploy">Deploy to GitHub</button>
      </div>
      Status: <%= @deploy_step %>
    </div>
  </div>
  """
end
```


Note:

## Pheonix liveview 

 Phoenix LiveView is an exciting new library which enables rich, real-time user experiences with server-rendered HTML. LiveView powered applications are stateful on the server with bidirectional communication via WebSockets, offering a vastly simplified programming model compared to JavaScript alternatives. 
